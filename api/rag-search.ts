import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import {
  validateEmbedding,
  createErrorResponse,
  logStep
} from './lib/rag-utils';
import {
  EMBEDDING_MODEL,
  type SearchResult
} from './lib/rag-types';

/**
 * RAG Search Endpoint
 * Performs semantic search using Supabase pgvector
 * Returns top K most relevant chunks for LLM context
 * Optimized for Vercel serverless environment
 */

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // GLOBAL ERROR HANDLER - Catches ALL errors before they bubble to Vercel
  try {
    // Set JSON content type to ensure response is always JSON
    res.setHeader('Content-Type', 'application/json');
    
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      logStep('RAG search request received');
      
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header' });
      }

      const token = authHeader.replace('Bearer ', '');
      
      // Create Supabase client with user's token for RLS
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          global: {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        }
      );

      const { data: { user }, error: authError } = await supabase.auth.getUser(token);

      if (authError || !user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { 
        query, 
        matchThreshold = 0.7, 
        matchCount = 5,
        botId // Optional: filter by specific bot
      } = req.body;

      if (!query) {
        return res.status(400).json({ error: 'Query is required' });
      }

      logStep('Generating query embedding', { query: query.substring(0, 100) });

      // Generate embedding for the query
      const embeddingResponse = await openai.embeddings.create({
        model: EMBEDDING_MODEL,
        input: query,
      });

      const queryEmbedding = embeddingResponse.data[0].embedding;

      // Validate embedding
      if (!validateEmbedding(queryEmbedding)) {
        return res.status(500).json(
          createErrorResponse('Failed to generate valid query embedding')
        );
      }

      logStep('Performing vector similarity search', {
        threshold: matchThreshold,
        count: matchCount,
        botId: botId || 'all'
      });

      // Perform vector similarity search using the Postgres function
      const { data: matches, error: searchError } = await supabase.rpc('match_documents', {
        query_embedding: queryEmbedding,
        match_threshold: matchThreshold,
        match_count: matchCount,
        filter_user_id: user.id
      });

      if (searchError) {
        console.error('Search error:', searchError);
        return res.status(500).json(
          createErrorResponse(
            'Failed to search documents',
            searchError.message
          )
        );
      }

      // Format results
      const results: SearchResult[] = (matches || []).map((match: any) => ({
        id: match.id,
        documentId: match.document_id,
        content: match.content,
        metadata: match.metadata,
        similarity: match.similarity
      }));

      // Optional: Filter by botId if provided
      let filteredResults = results;
      if (botId) {
        // Get document IDs for this bot
        const { data: botDocs } = await supabase
          .from('knowledge_documents')
          .select('id')
          .eq('bot_id', botId)
          .eq('user_id', user.id);

        if (botDocs) {
          const botDocIds = new Set(botDocs.map(doc => doc.id));
          filteredResults = results.filter(r => botDocIds.has(r.documentId));
        }
      }

      logStep('Search completed', { 
        totalResults: filteredResults.length,
        topSimilarity: filteredResults[0]?.similarity || 0
      });

      // Build context string for LLM
      const context = filteredResults
        .map((r, i) => `[${i + 1}] ${r.content}`)
        .join('\n\n');

      // Build LLM prompt
      const prompt = buildRAGPrompt(query, context);

      return res.status(200).json({ 
        success: true,
        results: filteredResults,
        context,
        prompt,
        query,
        matchCount: filteredResults.length
      });

    } catch (error: any) {
      console.error('RAG search error:', error);
      console.error('Error stack:', error.stack);
      
      return res.status(500).json(
        createErrorResponse(
          error.message || 'Internal server error',
          error.stack ? error.stack.split('\n')[0] : undefined
        )
      );
    }
    
  } catch (globalError: any) {
    // GLOBAL CATCH - Last line of defense before Vercel
    console.error('CRITICAL: Uncaught error in search handler:', globalError);
    console.error('CRITICAL: Error stack:', globalError.stack);
    
    // Attempt to set header if not already sent
    try {
      if (!res.headersSent) {
        res.setHeader('Content-Type', 'application/json');
      }
    } catch (headerError) {
      console.error('Could not set header:', headerError);
    }
    
    // Always return JSON for any uncaught error
    return res.status(500).json(
      createErrorResponse(
        'Critical server error',
        globalError.message || 'An unexpected error occurred'
      )
    );
  }
}

/**
 * Build RAG prompt for LLM
 * Combines user query with retrieved context
 */
function buildRAGPrompt(query: string, context: string): string {
  if (!context || context.trim().length === 0) {
    return `User Query: ${query}\n\nNo relevant context found in the knowledge base. Please answer based on your general knowledge.`;
  }

  return `You are a helpful AI assistant. Use the following context from the user's knowledge base to answer their question. If the context doesn't contain relevant information, say so.

Context from Knowledge Base:
${context}

User Query: ${query}

Please provide a helpful, accurate answer based on the context above. If the context doesn't fully answer the question, acknowledge what information is missing.`;
}
