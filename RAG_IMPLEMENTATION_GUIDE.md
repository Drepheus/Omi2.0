# RAG Implementation Guide

## Overview

This is a simplified, production-ready RAG (Retrieval-Augmented Generation) pipeline optimized for Vercel's serverless environment using Supabase pgvector for vector storage.

**Key Features:**
- ✅ Plain text files only (NO PDF support)
- ✅ 1 MB file size limit for Vercel compatibility
- ✅ Efficient text chunking (1000 chars with 200 overlap)
- ✅ OpenAI `text-embedding-3-small` for embeddings
- ✅ Supabase pgvector for fast similarity search
- ✅ Global error handling (always returns JSON)
- ✅ No heavy dependencies or dynamic imports
- ✅ Optimized for short execution time

---

## Supported File Types

### ✅ Supported (Plain Text Only)
- `.txt` - Plain text files
- `.md` / `.markdown` - Markdown files
- `.json` - JSON files
- `.yaml` / `.yml` - YAML files
- `.js` / `.jsx` - JavaScript files
- `.ts` / `.tsx` - TypeScript files
- `.py` - Python files
- `.cs` - C# files
- `.html` / `.htm` - HTML files
- `.css` - CSS files
- `.xml` - XML files
- `.csv` - CSV files

### ❌ NOT Supported
- `.pdf` - PDF files (removed for Vercel compatibility)
- `.docx` - Word documents
- `.xlsx` - Excel files
- Images, videos, or other binary formats

---

## Project Structure

```
api/
├── lib/
│   ├── rag-types.ts          # Type definitions for RAG pipeline
│   └── rag-utils.ts           # Utility functions (chunking, validation, etc.)
├── upload-document.ts         # Endpoint: Upload and validate documents
├── process-document.ts        # Endpoint: Convert to text, chunk, embed
└── rag-search.ts              # Endpoint: Semantic search with pgvector

supabase-rag-schema.sql        # Database schema with pgvector
```

---

## API Endpoints

### 1. Upload Document (`/api/upload-document`)

**Purpose:** Accept file upload, validate file type/size, create document record.

**Request:**
```typescript
POST /api/upload-document
Authorization: Bearer <token>

{
  "fileName": "example.txt",
  "fileType": "text/plain",  // optional
  "fileSize": 50000,         // bytes
  "botId": "uuid"
}
```

**Response:**
```json
{
  "success": true,
  "documentId": "uuid",
  "message": "Document uploaded successfully. Ready for processing."
}
```

**Validation:**
- File size ≤ 1 MB
- File type must be supported (plain text only)
- User must be authenticated

---

### 2. Process Document (`/api/process-document`)

**Purpose:** Convert file to text, chunk it, generate embeddings, store in Supabase.

**Request:**
```typescript
POST /api/process-document
Authorization: Bearer <token>

{
  "documentId": "uuid",
  "fileData": "base64-encoded-file-content",
  "chunkSize": 1000,    // optional, default 1000
  "overlap": 200        // optional, default 200
}
```

**Response:**
```json
{
  "success": true,
  "chunksProcessed": 15,
  "documentId": "uuid",
  "message": "Document processed and indexed successfully"
}
```

**Processing Steps:**
1. Verify document exists and belongs to user
2. Convert base64 file data to UTF-8 text
3. Sanitize text (remove control chars, normalize whitespace)
4. Chunk text into overlapping segments
5. Generate embeddings using OpenAI `text-embedding-3-small`
6. Store chunks + embeddings in `document_embeddings` table
7. Update document status to `indexed`

---

### 3. RAG Search (`/api/rag-search`)

**Purpose:** Perform semantic search and return relevant chunks for LLM context.

**Request:**
```typescript
POST /api/rag-search
Authorization: Bearer <token>

{
  "query": "What is the main purpose of this document?",
  "matchThreshold": 0.7,  // optional, default 0.7 (70% similarity)
  "matchCount": 5,        // optional, default 5 (top K results)
  "botId": "uuid"         // optional, filter by specific bot
}
```

**Response:**
```json
{
  "success": true,
  "results": [
    {
      "id": "uuid",
      "documentId": "uuid",
      "content": "Chunk text content...",
      "metadata": {
        "chunk_index": 0,
        "chunk_total": 15,
        "document_name": "example.txt",
        "file_type": "TXT"
      },
      "similarity": 0.92
    }
  ],
  "context": "[1] Chunk text...\n\n[2] Another chunk...",
  "prompt": "Full LLM prompt with context...",
  "query": "What is the main purpose of this document?",
  "matchCount": 5
}
```

**Search Process:**
1. Generate embedding for user query
2. Call Supabase `match_documents` function (pgvector similarity search)
3. Filter by user_id (RLS enforced)
4. Optional: Filter by botId
5. Return top K chunks above similarity threshold
6. Build context string and LLM prompt

---

## Database Schema

### Tables

**1. `custom_omis`** - User's custom AI bots
- `id` (uuid, primary key)
- `user_id` (uuid, foreign key to auth.users)
- `name` (text)
- `description` (text)
- `status` (text: idle/training/ready)
- `accuracy` (numeric)
- `created_at` / `updated_at` (timestamp)

**2. `knowledge_documents`** - Uploaded documents
- `id` (uuid, primary key)
- `bot_id` (uuid, foreign key to custom_omis)
- `user_id` (uuid, foreign key to auth.users)
- `name` (text)
- `type` (text: TXT, MD, JSON, etc.)
- `size` (integer, max 1048576 bytes = 1 MB)
- `status` (text: processing/indexed/failed)
- `chunk_count` (integer)
- `uploaded_at` (timestamp)

**3. `document_embeddings`** - Text chunks with vector embeddings
- `id` (uuid, primary key)
- `document_id` (uuid, foreign key to knowledge_documents)
- `user_id` (uuid, foreign key to auth.users)
- `content` (text, the chunk text)
- `embedding` (vector(1536), OpenAI embedding as raw number array)
- `metadata` (jsonb, chunk info)
- `created_at` (timestamp)

### Indexes

- `idx_document_embeddings_vector` - HNSW index on embedding (vector_cosine_ops)
- User ID indexes for fast filtering
- Document ID indexes for joins

### Functions

**`match_documents`** - Vector similarity search
```sql
match_documents(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5,
  filter_user_id uuid DEFAULT NULL
)
```

**`get_document_stats`** - Get user's document statistics
```sql
get_document_stats(filter_user_id uuid)
```

---

## Embedding Strategy

**Model:** `text-embedding-3-small` (OpenAI)
- **Dimensions:** 1536
- **Cost:** ~$0.02 per 1M tokens
- **Speed:** Fast, suitable for serverless
- **Quality:** High quality for semantic search

**Chunking Strategy:**
- **Chunk Size:** 1000 characters
- **Overlap:** 200 characters
- **Why?** Balances context preservation with search granularity

**Storage Format:**
- Embeddings stored as raw `number[]` (not JSON string)
- Supabase pgvector handles the vector format
- Cosine distance for similarity (`<=>` operator)

---

## Vercel Optimization

### Constraints
- ⏱️ 10-second execution limit (Hobby tier)
- 💾 512 MB memory limit
- 📦 50 MB deployment size limit
- 🚫 No filesystem writes
- 🚫 No persistent connections

### Optimizations Applied
1. **No Heavy Dependencies**
   - Removed `pdf-extraction` library
   - No `mammoth`, `xlsx`, or other parsers
   - Only lightweight text processing

2. **No Dynamic Imports**
   - All imports are static
   - Faster cold starts
   - More predictable behavior

3. **Global Error Handling**
   - Always returns JSON (never HTML error pages)
   - Catches errors at multiple levels
   - Sets `Content-Type: application/json` header

4. **File Size Limit**
   - 1 MB maximum to avoid timeouts
   - Validated before processing

5. **Short Execution Time**
   - Text conversion is fast (UTF-8 decode only)
   - Chunking is efficient (simple slicing)
   - Embedding API calls are parallel-ready

---

## Usage Example

### Frontend Integration

```typescript
// 1. Upload document
const uploadResponse = await fetch('/api/upload-document', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fileName: file.name,
    fileSize: file.size,
    botId: selectedBotId
  })
});

const { documentId } = await uploadResponse.json();

// 2. Process document (convert file to base64 first)
const reader = new FileReader();
reader.onload = async () => {
  const base64Data = reader.result.split(',')[1];
  
  const processResponse = await fetch('/api/process-document', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      documentId,
      fileData: base64Data
    })
  });
  
  const result = await processResponse.json();
  console.log(`Processed ${result.chunksProcessed} chunks`);
};
reader.readAsDataURL(file);

// 3. Search (RAG query)
const searchResponse = await fetch('/api/rag-search', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: userQuestion,
    matchCount: 5,
    matchThreshold: 0.7,
    botId: selectedBotId
  })
});

const { results, prompt } = await searchResponse.json();

// 4. Send prompt to LLM (e.g., OpenAI)
const chatResponse = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: prompt }
  ]
});
```

---

## Environment Variables

Required in your `.env` file:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# OpenAI (for embeddings)
OPENAI_API_KEY=sk-...

# Alternative (if using Google)
GOOGLE_GENERATIVE_AI_API_KEY=...
```

---

## Deployment Checklist

### 1. Supabase Setup
- [ ] Run `supabase-rag-schema.sql` to create tables
- [ ] Enable pgvector extension
- [ ] Verify RLS policies are active
- [ ] Test `match_documents` function

### 2. Vercel Setup
- [ ] Set environment variables
- [ ] Deploy API routes
- [ ] Test endpoints with Postman/Insomnia
- [ ] Monitor function logs

### 3. Testing
- [ ] Upload a small .txt file
- [ ] Verify it processes successfully
- [ ] Test search with a query
- [ ] Verify results are relevant

---

## Troubleshooting

### Error: "File too large"
- **Cause:** File exceeds 1 MB limit
- **Solution:** Split file or compress content

### Error: "Unsupported file type"
- **Cause:** Trying to upload PDF or binary file
- **Solution:** Convert to plain text format first

### Error: "Failed to generate valid query embedding"
- **Cause:** OpenAI API issue or invalid API key
- **Solution:** Check `OPENAI_API_KEY` in environment variables

### Error: "No text content in document"
- **Cause:** File is empty or binary
- **Solution:** Ensure file contains UTF-8 text

### Search returns no results
- **Cause:** Similarity threshold too high or no relevant content
- **Solution:** Lower `matchThreshold` (e.g., 0.5) or check document content

---

## Performance Metrics

**Expected Performance (1 KB text file):**
- Upload: < 500ms
- Processing: 2-5 seconds (depends on chunk count)
- Search: < 1 second

**Scaling:**
- Can handle hundreds of documents per user
- Each document can have hundreds of chunks
- Search remains fast due to HNSW indexing

---

## Future Enhancements

1. **Batch Processing** - Process multiple files at once
2. **Streaming Responses** - Real-time processing updates
3. **Advanced Chunking** - Semantic boundary detection
4. **Metadata Filtering** - Filter by document type, date, etc.
5. **Multi-modal Support** - If Vercel limits increase, add image/PDF support

---

## License

MIT License - Use freely in your projects.

---

## Support

For issues or questions, refer to:
- Supabase docs: https://supabase.com/docs/guides/ai/vector-columns
- OpenAI embeddings: https://platform.openai.com/docs/guides/embeddings
- Vercel limits: https://vercel.com/docs/functions/serverless-functions/runtimes#limits
