-- Enable pgvector extension for vector similarity search
CREATE EXTENSION IF NOT EXISTS vector;

-- Custom Omi Bots Table
CREATE TABLE IF NOT EXISTS custom_omis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT CHECK (status IN ('idle', 'training', 'ready')) DEFAULT 'idle',
  accuracy NUMERIC(5,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Knowledge Documents Table
-- Supports: .txt, .md, .json, .yaml, .js, .ts, .py, .cs, .html, .css (plain text only)
CREATE TABLE IF NOT EXISTS knowledge_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bot_id UUID REFERENCES custom_omis(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- TXT, MD, JSON, YAML, JAVASCRIPT, TYPESCRIPT, PYTHON, CSHARP, HTML, CSS, etc.
  size INTEGER NOT NULL CHECK (size <= 1048576), -- 1 MB limit for Vercel
  status TEXT CHECK (status IN ('processing', 'indexed', 'failed')) DEFAULT 'processing',
  chunk_count INTEGER DEFAULT 0,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Document Embeddings Table (with pgvector)
-- Stores text chunks and their vector embeddings
CREATE TABLE IF NOT EXISTS document_embeddings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID REFERENCES knowledge_documents(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  embedding vector(1536) NOT NULL, -- OpenAI text-embedding-3-small dimensions (raw number array)
  metadata JSONB, -- { chunk_index, chunk_total, document_name, file_type }
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_custom_omis_user_id ON custom_omis(user_id);
CREATE INDEX IF NOT EXISTS idx_knowledge_documents_bot_id ON knowledge_documents(bot_id);
CREATE INDEX IF NOT EXISTS idx_knowledge_documents_user_id ON knowledge_documents(user_id);
CREATE INDEX IF NOT EXISTS idx_knowledge_documents_status ON knowledge_documents(status);
CREATE INDEX IF NOT EXISTS idx_document_embeddings_document_id ON document_embeddings(document_id);
CREATE INDEX IF NOT EXISTS idx_document_embeddings_user_id ON document_embeddings(user_id);

-- Create vector similarity search index using HNSW (Hierarchical Navigable Small World)
-- This is more efficient than IVFFlat for most use cases
-- Uses cosine distance for similarity
CREATE INDEX IF NOT EXISTS idx_document_embeddings_vector 
ON document_embeddings USING hnsw (embedding vector_cosine_ops);

-- Enable Row Level Security (RLS)
ALTER TABLE custom_omis ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_embeddings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for custom_omis
CREATE POLICY "Users can view their own bots"
  ON custom_omis FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own bots"
  ON custom_omis FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bots"
  ON custom_omis FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own bots"
  ON custom_omis FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for knowledge_documents
CREATE POLICY "Users can view their own documents"
  ON knowledge_documents FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own documents"
  ON knowledge_documents FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own documents"
  ON knowledge_documents FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own documents"
  ON knowledge_documents FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for document_embeddings
CREATE POLICY "Users can view their own embeddings"
  ON document_embeddings FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own embeddings"
  ON document_embeddings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own embeddings"
  ON document_embeddings FOR DELETE
  USING (auth.uid() = user_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for custom_omis
CREATE TRIGGER update_custom_omis_updated_at
  BEFORE UPDATE ON custom_omis
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function for vector similarity search
-- Uses cosine distance (1 - cosine_distance = similarity)
-- Returns top K most similar chunks above threshold
CREATE OR REPLACE FUNCTION match_documents(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5,
  filter_user_id uuid DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  document_id uuid,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    document_embeddings.id,
    document_embeddings.document_id,
    document_embeddings.content,
    document_embeddings.metadata,
    1 - (document_embeddings.embedding <=> query_embedding) AS similarity
  FROM document_embeddings
  WHERE 
    (filter_user_id IS NULL OR document_embeddings.user_id = filter_user_id)
    AND 1 - (document_embeddings.embedding <=> query_embedding) > match_threshold
  ORDER BY document_embeddings.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Helper function to get document statistics
CREATE OR REPLACE FUNCTION get_document_stats(filter_user_id uuid)
RETURNS TABLE (
  total_documents bigint,
  total_chunks bigint,
  indexed_documents bigint,
  processing_documents bigint,
  failed_documents bigint
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    COUNT(*)::bigint AS total_documents,
    COALESCE(SUM(chunk_count), 0)::bigint AS total_chunks,
    COUNT(*) FILTER (WHERE status = 'indexed')::bigint AS indexed_documents,
    COUNT(*) FILTER (WHERE status = 'processing')::bigint AS processing_documents,
    COUNT(*) FILTER (WHERE status = 'failed')::bigint AS failed_documents
  FROM knowledge_documents
  WHERE user_id = filter_user_id;
END;
$$;
