-- Create generated_media table for storing user's generated images and videos
CREATE TABLE IF NOT EXISTS public.generated_media (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('image', 'video')),
    url TEXT NOT NULL,
    prompt TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries by user_id
CREATE INDEX IF NOT EXISTS idx_generated_media_user_id ON public.generated_media(user_id);
CREATE INDEX IF NOT EXISTS idx_generated_media_created_at ON public.generated_media(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_generated_media_type ON public.generated_media(type);

-- Enable Row Level Security
ALTER TABLE public.generated_media ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own generated media" ON public.generated_media;
DROP POLICY IF EXISTS "Users can insert their own generated media" ON public.generated_media;
DROP POLICY IF EXISTS "Users can delete their own generated media" ON public.generated_media;

-- Create RLS policies
-- Policy: Users can only view their own generated media
CREATE POLICY "Users can view their own generated media"
ON public.generated_media
FOR SELECT
USING (auth.uid() = user_id);

-- Policy: Users can only insert their own generated media
CREATE POLICY "Users can insert their own generated media"
ON public.generated_media
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Policy: Users can only delete their own generated media
CREATE POLICY "Users can delete their own generated media"
ON public.generated_media
FOR DELETE
USING (auth.uid() = user_id);

-- Grant permissions
GRANT SELECT, INSERT, DELETE ON public.generated_media TO authenticated;

-- Add comment to table
COMMENT ON TABLE public.generated_media IS 'Stores all AI-generated images and videos for user accounts';
