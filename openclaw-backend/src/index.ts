import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authMiddleware } from './middleware/auth';
import { runOpenClawAgent } from './openclawRunner';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// GET /health - Unauthenticated health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  return res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'openclaw-worker'
  });
});

// POST /execute - Protected by Bearer token authentication
app.post('/execute', authMiddleware, async (req: Request, res: Response) => {
  const { userId, prompt, apiKey, systemPrompt, openclawState } = req.body;

  if (!userId || !prompt) {
    return res.status(400).json({
      success: false,
      error: 'Missing required parameters: userId and prompt are required.'
    });
  }

  try {
    const result = await runOpenClawAgent({
      userId,
      prompt,
      apiKey: apiKey || '',
      systemPrompt,
      openclawState
    });

    if (!result.success) {
      return res.status(500).json({
        success: false,
        error: result.error || 'Agent execution failed.',
        output: result.output,
        updatedState: result.updatedState,
        logs: result.logs
      });
    }

    return res.status(200).json({
      success: true,
      output: result.output,
      updatedState: result.updatedState,
      stepsExecuted: result.stepsExecuted,
      logs: result.logs
    });
  } catch (err: any) {
    console.error('[OpenClaw Worker Execute Error]:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error during agent execution.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`[OpenClaw Worker Engine] Server running on port ${PORT}`);
});
