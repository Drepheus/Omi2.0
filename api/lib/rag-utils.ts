/**
 * Utility functions for RAG pipeline
 * Lightweight, Vercel-optimized helpers
 */

import { SUPPORTED_FILE_TYPES, MAX_FILE_SIZE, DEFAULT_CHUNK_SIZE, DEFAULT_OVERLAP } from './rag-types';

/**
 * Check if file type is supported (plain text only)
 */
export function isSupportedFileType(fileName: string, mimeType?: string): boolean {
  const ext = fileName.toLowerCase().split('.').pop() || '';
  const fileExtension = `.${ext}`;
  
  // Check against all supported types
  for (const [_, patterns] of Object.entries(SUPPORTED_FILE_TYPES)) {
    if (patterns.some(pattern => {
      if (pattern.startsWith('.')) {
        return fileExtension === pattern;
      }
      return mimeType === pattern;
    })) {
      return true;
    }
  }
  
  return false;
}

/**
 * Get file type category from filename
 */
export function getFileTypeCategory(fileName: string): string {
  const ext = fileName.toLowerCase().split('.').pop() || '';
  const fileExtension = `.${ext}`;
  
  for (const [category, patterns] of Object.entries(SUPPORTED_FILE_TYPES)) {
    if (patterns.some(pattern => pattern.startsWith('.') && pattern === fileExtension)) {
      return category;
    }
  }
  
  return 'UNKNOWN';
}

/**
 * Validate file size
 */
export function validateFileSize(sizeInBytes: number): { valid: boolean; error?: string } {
  if (sizeInBytes > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds maximum limit of ${MAX_FILE_SIZE / 1024 / 1024} MB`
    };
  }
  return { valid: true };
}

/**
 * Convert base64 file data to UTF-8 text
 * Handles all supported plain text formats
 */
export function convertToText(fileData: string, fileName: string): string {
  try {
    // Decode base64 to Buffer
    const buffer = Buffer.from(fileData, 'base64');
    
    // Convert to UTF-8 string
    const text = buffer.toString('utf-8');
    
    // Validate we got actual text content
    if (!text || text.trim().length === 0) {
      throw new Error('File appears to be empty or binary');
    }
    
    return text;
  } catch (error: any) {
    throw new Error(`Failed to convert file to text: ${error.message}`);
  }
}

/**
 * Chunk text into overlapping segments
 * Optimized for semantic coherence
 */
export function chunkText(
  text: string, 
  chunkSize: number = DEFAULT_CHUNK_SIZE, 
  overlap: number = DEFAULT_OVERLAP
): string[] {
  const chunks: string[] = [];
  
  // Clean and normalize text
  const cleanText = text.trim();
  
  if (cleanText.length === 0) {
    return [];
  }
  
  // If text is smaller than chunk size, return as single chunk
  if (cleanText.length <= chunkSize) {
    return [cleanText];
  }
  
  let start = 0;
  
  while (start < cleanText.length) {
    const end = Math.min(start + chunkSize, cleanText.length);
    const chunk = cleanText.slice(start, end);
    
    // Only add non-empty chunks
    if (chunk.trim().length > 0) {
      chunks.push(chunk.trim());
    }
    
    // Move start position, accounting for overlap
    // But don't go backwards if we're at the end
    if (end === cleanText.length) {
      break;
    }
    
    start = end - overlap;
    
    // Prevent infinite loop
    if (start < 0) start = 0;
  }
  
  return chunks;
}

/**
 * Sanitize text for embedding
 * Remove excessive whitespace, control characters, etc.
 */
export function sanitizeText(text: string): string {
  return text
    // Remove control characters except newlines and tabs
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    // Trim
    .trim();
}

/**
 * Validate embedding array
 * Ensures it's a proper number array for pgvector
 */
export function validateEmbedding(embedding: any): boolean {
  if (!Array.isArray(embedding)) {
    return false;
  }
  
  if (embedding.length === 0) {
    return false;
  }
  
  // Check all values are valid numbers
  return embedding.every(val => typeof val === 'number' && !isNaN(val) && isFinite(val));
}

/**
 * Create error response object
 */
export function createErrorResponse(error: string, details?: string): { error: string; details?: string } {
  const response: { error: string; details?: string } = { error };
  if (details) {
    response.details = details;
  }
  return response;
}

/**
 * Log processing step (for debugging in Vercel)
 */
export function logStep(step: string, data?: any): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${step}`, data || '');
}
