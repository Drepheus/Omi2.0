/**
 * Type definitions for RAG pipeline
 * Simple, clean types for Vercel serverless environment
 */

export interface DocumentUploadRequest {
  fileName: string;
  fileType?: string;
  fileSize: number;
  botId: string;
  fileData: string; // Base64 encoded file content
}

export interface DocumentProcessRequest {
  documentId: string;
  fileData: string; // Base64 encoded file content
  chunkSize?: number;
  overlap?: number;
}

export interface RAGSearchRequest {
  query: string;
  matchThreshold?: number;
  matchCount?: number;
  botId?: string; // Optional: filter by specific bot
}

export interface DocumentChunk {
  document_id: string;
  user_id: string;
  content: string;
  embedding: number[]; // Raw number array for pgvector
  metadata: ChunkMetadata;
}

export interface ChunkMetadata {
  chunk_index: number;
  chunk_total: number;
  document_name: string;
  file_type: string;
}

export interface SearchResult {
  id: string;
  documentId: string;
  content: string;
  metadata: ChunkMetadata;
  similarity: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  details?: string;
}

// Supported file types (plain text only)
export const SUPPORTED_FILE_TYPES = {
  TXT: ['.txt', 'text/plain'],
  MD: ['.md', '.markdown', 'text/markdown'],
  JSON: ['.json', 'application/json'],
  YAML: ['.yaml', '.yml', 'application/x-yaml', 'text/yaml'],
  JAVASCRIPT: ['.js', '.jsx', 'application/javascript', 'text/javascript'],
  TYPESCRIPT: ['.ts', '.tsx', 'application/typescript', 'text/typescript'],
  PYTHON: ['.py', 'text/x-python'],
  CSHARP: ['.cs', 'text/x-csharp'],
  HTML: ['.html', '.htm', 'text/html'],
  CSS: ['.css', 'text/css'],
  XML: ['.xml', 'application/xml', 'text/xml'],
  CSV: ['.csv', 'text/csv'],
} as const;

// File size limit (1 MB)
export const MAX_FILE_SIZE = 1024 * 1024; // 1 MB in bytes

// Chunking defaults
export const DEFAULT_CHUNK_SIZE = 1000;
export const DEFAULT_OVERLAP = 200;

// Embedding model
export const EMBEDDING_MODEL = 'text-embedding-3-small';
export const EMBEDDING_DIMENSIONS = 1536;
