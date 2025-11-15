import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import {
  convertToText,
  chunkText,
  sanitizeText,
  validateEmbedding,
  createErrorResponse,
  logStep
} from './lib/rag-utils';
import {
  EMBEDDING_MODEL,
  DEFAULT_CHUNK_SIZE,
  DEFAULT_OVERLAP,
  type DocumentChunk
} from './lib/rag-types';

/**
 * Process Document Endpoint
 * Converts plain text files to chunks and generates embeddings
 * NO PDF SUPPORT - Plain text formats only
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
      logStep('Process document request received');
      
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
        documentId, 
        fileData, 
        chunkSize = DEFAULT_CHUNK_SIZE, 
        overlap = DEFAULT_OVERLAP 
      } = req.body;

      if (!documentId) {
        return res.status(400).json({ error: 'Missing documentId' });
      }

      if (!fileData) {
        return res.status(400).json({ error: 'Missing fileData' });
      }

      logStep('Fetching document record', { documentId });

      // Verify document belongs to user
      const { data: document, error: docError } = await supabase
        .from('knowledge_documents')
        .select('*')
        .eq('id', documentId)
        .eq('user_id', user.id)
        .single();

      if (docError || !document) {
        return res.status(404).json({ error: 'Document not found' });
      }

      logStep('Converting file to text', { 
        fileName: document.name, 
        type: document.type 
      });

      // Convert file data to UTF-8 text
      let extractedText: string;
      try {
        extractedText = convertToText(fileData, document.name);
      } catch (conversionError: any) {
        console.error('Text conversion error:', conversionError);
        
        await supabase
          .from('knowledge_documents')
          .update({ status: 'failed' })
          .eq('id', documentId);
        
        return res.status(400).json(
          createErrorResponse(
            'Failed to convert file to text',
            conversionError.message
          )
        );
      }

      logStep('Text extracted', { 
        length: extractedText.length,
        preview: extractedText.substring(0, 100)
      });

      // Validate we have content to process
      if (!extractedText || extractedText.trim().length === 0) {
        await supabase
          .from('knowledge_documents')
          .update({ status: 'failed' })
          .eq('id', documentId);
          
        return res.status(400).json(
          createErrorResponse('No text content in document')
        );
      }

      // Sanitize text
      const cleanText = sanitizeText(extractedText);

      // Chunk the text
      const chunks = chunkText(cleanText, chunkSize, overlap);
      logStep('Text chunked', { totalChunks: chunks.length });

      if (chunks.length === 0) {
        await supabase
          .from('knowledge_documents')
          .update({ status: 'failed' })
          .eq('id', documentId);
          
        return res.status(400).json(
          createErrorResponse('Failed to create chunks from document')
        );
      }

      // Generate embeddings for each chunk
      const embeddings: DocumentChunk[] = [];
      
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        
        try {
          logStep(`Generating embedding ${i + 1}/${chunks.length}`);
          
          const embeddingResponse = await openai.embeddings.create({
            model: EMBEDDING_MODEL,
            input: chunk,
          });

          const embedding = embeddingResponse.data[0].embedding;

          // Validate embedding format
          if (!validateEmbedding(embedding)) {
            throw new Error('Invalid embedding format received from OpenAI');
          }

          embeddings.push({
            document_id: documentId,
            user_id: user.id,
            content: chunk,
            embedding: embedding, // Raw number array for pgvector
            metadata: {
              chunk_index: i,
              chunk_total: chunks.length,
              document_name: document.name,
              file_type: document.type
            }
          });

        } catch (embeddingError: any) {
          console.error(`Error generating embedding for chunk ${i}:`, embeddingError);
          // Continue with other chunks even if one fails
          logStep(`Warning: Failed to generate embedding for chunk ${i}`, {
            error: embeddingError.message
          });
        }
      }

      if (embeddings.length === 0) {
        await supabase
          .from('knowledge_documents')
          .update({ status: 'failed' })
          .eq('id', documentId);
          
        return res.status(500).json(
          createErrorResponse('Failed to generate any embeddings')
        );
      }

      logStep('Storing embeddings in database', { count: embeddings.length });

      // Insert embeddings into database
      const { error: insertError } = await supabase
        .from('document_embeddings')
        .insert(embeddings);

      if (insertError) {
        console.error('Supabase insertion error:', insertError);
        
        await supabase
          .from('knowledge_documents')
          .update({ status: 'failed' })
          .eq('id', documentId);

        return res.status(500).json(
          createErrorResponse(
            'Failed to store embeddings',
            insertError.message
          )
        );
      }

      // Update document status to indexed
      await supabase
        .from('knowledge_documents')
        .update({ 
          status: 'indexed',
          chunk_count: embeddings.length
        })
        .eq('id', documentId);

      logStep('Document processed successfully', { 
        documentId,
        chunks: embeddings.length 
      });

      return res.status(200).json({ 
        success: true,
        chunksProcessed: embeddings.length,
        documentId: documentId,
        message: 'Document processed and indexed successfully'
      });

    } catch (error: any) {
      console.error('Processing error:', error);
      console.error('Error stack:', error.stack);
      
      // Ensure we always return JSON, even for unexpected errors
      return res.status(500).json(
        createErrorResponse(
          error.message || 'Internal server error',
          error.stack ? error.stack.split('\n')[0] : undefined
        )
      );
    }
    
  } catch (globalError: any) {
    // GLOBAL CATCH - Last line of defense before Vercel
    console.error('CRITICAL: Uncaught error in handler:', globalError);
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
