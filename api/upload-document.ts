import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { 
  isSupportedFileType, 
  validateFileSize, 
  getFileTypeCategory,
  createErrorResponse,
  logStep
} from './lib/rag-utils';
import { MAX_FILE_SIZE } from './lib/rag-types';

/**
 * Upload Document Endpoint
 * Accepts plain text files only (.txt, .md, .json, .yaml, code files, etc.)
 * NO PDF SUPPORT - Plain text formats only
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // GLOBAL ERROR HANDLER - Catches ALL errors before they bubble to Vercel
  try {
    // Set JSON content type to ensure response is always JSON
    res.setHeader('Content-Type', 'application/json');
    
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      logStep('Upload document request received');
      
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

      const { fileName, fileType, fileSize, botId } = req.body;

      logStep('Upload validation', { fileName, fileSize, botId });

      // Validate required fields
      if (!fileName || !botId) {
        return res.status(400).json(
          createErrorResponse(
            'Missing required fields',
            'fileName and botId are required'
          )
        );
      }

      // Validate file size (1 MB limit for Vercel)
      const sizeValidation = validateFileSize(fileSize || 0);
      if (!sizeValidation.valid) {
        return res.status(400).json(
          createErrorResponse('File too large', sizeValidation.error)
        );
      }

      // Validate file type (plain text only)
      if (!isSupportedFileType(fileName, fileType)) {
        return res.status(400).json(
          createErrorResponse(
            'Unsupported file type',
            `Only plain text files are supported. Maximum size: ${MAX_FILE_SIZE / 1024 / 1024} MB. Supported: .txt, .md, .json, .yaml, .js, .ts, .py, .cs, .html, .css`
          )
        );
      }

      // Get file type category
      const documentType = getFileTypeCategory(fileName);
      const documentSize = fileSize || 0;

      logStep('Creating document record', { type: documentType, size: documentSize });

      // Insert document record
      const { data: document, error: dbError } = await supabase
        .from('knowledge_documents')
        .insert({
          bot_id: botId,
          user_id: user.id,
          name: fileName,
          type: documentType,
          size: documentSize,
          status: 'processing',
          chunk_count: 0
        })
        .select()
        .single();

      if (dbError) {
        console.error('Database error:', dbError);
        return res.status(500).json(
          createErrorResponse(
            'Failed to create document record',
            dbError.message
          )
        );
      }

      logStep('Document uploaded successfully', { documentId: document.id });

      // Return document ID for further processing
      return res.status(200).json({ 
        success: true, 
        documentId: document.id,
        message: 'Document uploaded successfully. Ready for processing.' 
      });

    } catch (error: any) {
      console.error('Upload error:', error);
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
    console.error('CRITICAL: Uncaught error in upload handler:', globalError);
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
