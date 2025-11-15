/**
 * Example Usage of RAG Pipeline
 * This file demonstrates how to use the RAG endpoints
 * 
 * NOTE: This is for reference only - not meant to be run directly
 */

// Example 1: Upload a document
async function uploadDocument(file: File, botId: string, authToken: string) {
  const response = await fetch('/api/upload-document', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      botId: botId,
    }),
  });

  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.error || 'Upload failed');
  }

  console.log('Document uploaded:', result.documentId);
  return result.documentId;
}

// Example 2: Process a document
async function processDocument(
  documentId: string, 
  file: File, 
  authToken: string
) {
  // Convert file to base64
  const fileData = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const response = await fetch('/api/process-document', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      documentId,
      fileData,
      chunkSize: 1000, // optional
      overlap: 200,    // optional
    }),
  });

  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.error || 'Processing failed');
  }

  console.log(`Processed ${result.chunksProcessed} chunks`);
  return result;
}

// Example 3: Search with RAG
async function searchDocuments(
  query: string, 
  authToken: string,
  botId?: string
) {
  const response = await fetch('/api/rag-search', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      matchThreshold: 0.7,  // optional
      matchCount: 5,        // optional
      botId,                // optional
    }),
  });

  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.error || 'Search failed');
  }

  console.log(`Found ${result.matchCount} matches`);
  console.log('Context:', result.context);
  console.log('Prompt:', result.prompt);
  
  return result;
}

// Example 4: Complete workflow
async function completeRAGWorkflow(
  file: File,
  botId: string,
  userQuery: string,
  authToken: string
) {
  try {
    // Step 1: Upload
    console.log('Step 1: Uploading document...');
    const documentId = await uploadDocument(file, botId, authToken);
    
    // Step 2: Process
    console.log('Step 2: Processing document...');
    const processResult = await processDocument(documentId, file, authToken);
    
    // Step 3: Wait a moment for embeddings to be indexed
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Step 4: Search
    console.log('Step 3: Searching...');
    const searchResult = await searchDocuments(userQuery, authToken, botId);
    
    // Step 5: Use the prompt with your LLM
    console.log('Step 4: Ready for LLM');
    console.log('Use this prompt:', searchResult.prompt);
    
    return {
      documentId,
      chunks: processResult.chunksProcessed,
      results: searchResult.results,
      prompt: searchResult.prompt,
    };
  } catch (error) {
    console.error('Workflow error:', error);
    throw error;
  }
}

// Example 5: React component integration
interface RAGComponentProps {
  botId: string;
  authToken: string;
  onComplete: (prompt: string) => void;
}

function RAGUploadComponent({ botId, authToken, onComplete }: RAGComponentProps) {
  const [processing, setProcessing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size
    if (file.size > 1024 * 1024) {
      setError('File size must be less than 1 MB');
      return;
    }

    // Validate file type
    const validExtensions = ['.txt', '.md', '.json', '.yaml', '.js', '.ts', '.py', '.cs', '.html', '.css'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!validExtensions.includes(fileExtension)) {
      setError('Unsupported file type. Please upload a plain text file.');
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // Upload and process
      const documentId = await uploadDocument(file, botId, authToken);
      const result = await processDocument(documentId, file, authToken);
      
      console.log('Document processed successfully:', result);
      setProcessing(false);
      
      // Now user can search
      // onComplete('Document ready for search');
      
    } catch (err: any) {
      setError(err.message);
      setProcessing(false);
    }
  };

  return React.createElement('div', null,
    React.createElement('input', {
      type: 'file',
      accept: '.txt,.md,.json,.yaml,.js,.ts,.py,.cs,.html,.css',
      onChange: handleFileUpload,
      disabled: processing
    }),
    processing && React.createElement('p', null, 'Processing...'),
    error && React.createElement('p', { style: { color: 'red' } }, error)
  );
}

// Export for reference
export {
  uploadDocument,
  processDocument,
  searchDocuments,
  completeRAGWorkflow,
  RAGUploadComponent,
};
