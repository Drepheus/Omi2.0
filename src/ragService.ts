import { supabase } from './supabaseClient';
import { chatWithVertexRAG } from './vertexService';

export { chatWithVertexRAG };

export interface CustomOmi {
  id: string;
  name: string;
  description: string;
  status: 'idle' | 'training' | 'ready';
  accuracy: number;
  documentsCount?: number;
  embeddingsCount?: number;
}

export interface KnowledgeDocument {
  id: string;
  bot_id: string;
  name: string;
  type: string;
  size: number;
  status: 'processing' | 'indexed' | 'failed';
  chunk_count: number;
  uploaded_at: string;
}

// Load all custom bots for the current user
export async function loadCustomOmis(userId: string): Promise<CustomOmi[]> {
  const { data: bots, error } = await supabase
    .from('custom_omis')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error loading bots:', error);
    return [];
  }

  // Get document counts for each bot
  const botsWithCounts = await Promise.all(
    (bots || []).map(async (bot: any) => {
      const { count: docCount } = await supabase
        .from('knowledge_documents')
        .select('*', { count: 'exact', head: true })
        .eq('bot_id', bot.id);

      return {
        id: bot.id,
        name: bot.name,
        description: bot.description || '',
        status: bot.status as 'idle' | 'training' | 'ready',
        accuracy: bot.accuracy || 0,
        documentsCount: docCount || 0,
        embeddingsCount: 0 // Vertex manages embeddings
      };
    })
  );

  return botsWithCounts;
}

// Load all documents for a specific bot
export async function loadDocuments(botId?: string): Promise<KnowledgeDocument[]> {
  let query = supabase
    .from('knowledge_documents')
    .select('*')
    .order('uploaded_at', { ascending: false });

  if (botId) {
    query = query.eq('bot_id', botId);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error loading documents:', error);
    return [];
  }

  return data || [];
}

// Create a new custom bot
export async function createCustomOmi(userId: string, name: string, description: string) {
  const { data, error } = await supabase
    .from('custom_omis')
    .insert({
      user_id: userId,
      name,
      description,
      status: 'idle',
      accuracy: 0
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating bot:', error);
    throw error;
  }

  return data;
}

// Read file content as text or base64
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB for Vertex
const TEXT_EXTENSIONS = [
  '.txt', '.md', '.markdown', '.json', '.yaml', '.yml', '.csv',
  '.js', '.jsx', '.ts', '.tsx', '.py', '.cs', '.html', '.htm', '.css',
  '.pdf', '.docx' // Vertex supports these
];

const getFileExtension = (fileName: string) => {
  const dotIndex = fileName.lastIndexOf('.');
  return dotIndex === -1 ? '' : fileName.slice(dotIndex).toLowerCase();
};

const getDocumentTypeLabel = (fileName: string) => {
  const ext = getFileExtension(fileName);
  return ext ? ext.replace('.', '').toUpperCase() : 'FILE';
};

export async function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      const base64 = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

// Upload document metadata (Actual upload should be to GCS)
export async function uploadDocument(
  file: File,
  botId: string,
  onProgress?: (status: string) => void
): Promise<void> {
  try {
    onProgress?.('Reading file...');
    const fileData = await readFileAsBase64(file);

    onProgress?.('Registering document...');
    const session = await supabase.auth.getSession();
    const token = session.data.session?.access_token;

    if (!token) {
      throw new Error('Not authenticated');
    }

    // We still use the old upload endpoint for now to register the doc in Supabase
    // But we skip the "process-document" step which did the embeddings
    const uploadPayload = {
      fileName: file.name,
      fileType: file.type || getDocumentTypeLabel(file.name),
      fileSize: file.size,
      botId,
      fileData // We send data so it's stored in Supabase Storage (optional backup)
    };

    const uploadResponse = await fetch('/api/upload-document', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(uploadPayload)
    });

    if (!uploadResponse.ok) {
      throw new Error('Upload failed');
    }

    // We do NOT call process-document anymore.
    // Vertex AI handles indexing asynchronously if linked to GCS.
    // Since we can't upload to GCS directly from here without a signed URL,
    // we assume the user will manage the Data Store sync separately or we'll add that later.

    onProgress?.('Document registered. Please ensure it is synced to your Vertex Data Store.');
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

// Delete a document
export async function deleteDocument(documentId: string) {
  const { error } = await supabase
    .from('knowledge_documents')
    .delete()
    .eq('id', documentId);

  if (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
}

// Delete a bot
export async function deleteBot(botId: string) {
  const { error } = await supabase
    .from('custom_omis')
    .delete()
    .eq('id', botId);

  if (error) {
    console.error('Error deleting bot:', error);
    throw error;
  }
}
