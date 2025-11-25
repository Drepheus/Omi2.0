import { VertexAI } from '@google-cloud/vertexai';

const project = process.env.GOOGLE_CLOUD_PROJECT_ID;
const location = process.env.GOOGLE_CLOUD_LOCATION || 'us-central1';

// Initialize Vertex AI
// Note: This requires Google Cloud credentials to be available in the environment
// (e.g., via GOOGLE_APPLICATION_CREDENTIALS or Cloud Run default identity)
const vertexAI = project ? new VertexAI({ project, location }) : null;

export const getGenerativeModel = (modelName: string = 'gemini-1.5-flash-001') => {
    if (!vertexAI) {
        throw new Error('Vertex AI not initialized. Check GOOGLE_CLOUD_PROJECT_ID.');
    }
    return vertexAI.getGenerativeModel({ model: modelName });
};
