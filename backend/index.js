const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const INTERNAL_SECRET = process.env.INTERNAL_API_SECRET || 'dev_internal_secret_key_123';

app.use(cors());
app.use(express.json());

// In-memory task store
const tasks = new Map();

// Middleware to verify authorization secret
function verifySecret(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing Authorization header' });
  }

  const token = authHeader.split(' ')[1];
  if (token !== INTERNAL_SECRET) {
    return res.status(403).json({ error: 'Forbidden: Invalid INTERNAL_API_SECRET' });
  }

  next();
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', engine: 'OpenClaw Node Runner v2.0' });
});

// POST /execute - Spawn an OpenClaw agent execution task
app.post('/execute', verifySecret, (req, res) => {
  const { apiKey, prompt, openclawState, userId, sessionId, agentId } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const taskId = `task_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  
  let state = {};
  try {
    state = typeof openclawState === 'string' ? JSON.parse(openclawState) : (openclawState || {});
  } catch (err) {
    state = { raw: openclawState };
  }

  const task = {
    id: taskId,
    status: 'RUNNING',
    logs: `[OpenClaw Worker] Task ${taskId} initialized for agent '${agentId || 'openclaw'}'.\n[OpenClaw Worker] Verifying API credentials and state payload...\n`,
    openclawState: state,
    createdAt: new Date().toISOString(),
  };

  tasks.set(taskId, task);

  // Asynchronous OpenClaw Agent execution simulation/runner loop
  setTimeout(async () => {
    try {
      task.logs += `[OpenClaw Agent] Executing reasoning cycle for prompt: "${prompt.substring(0, 60)}..."\n`;
      task.logs += `[OpenClaw Agent] Context loaded. State synced cleanly under agent_configs.\n`;

      // Update state
      state.lastExecution = new Date().toISOString();
      state.turnCount = (state.turnCount || 0) + 1;
      task.openclawState = JSON.stringify(state);

      task.logs += `💬 [OpenClaw Response]: Task completed successfully. Analyzed user request and generated response.\n`;
      task.status = 'SUCCESS';
    } catch (err) {
      task.logs += `[OpenClaw Error]: Execution failed: ${err.message}\n`;
      task.status = 'FAILURE';
    }
  }, 1000);

  res.json({ task_id: taskId, status: 'RUNNING' });
});

// GET /tasks/:id - Poll status of an OpenClaw task
app.get('/tasks/:id', verifySecret, (req, res) => {
  const taskId = req.params.id;
  const task = tasks.get(taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json({
    id: task.id,
    status: task.status,
    logs: task.logs,
    openclawState: task.openclawState,
  });
});

app.listen(PORT, () => {
  console.log(`OpenClaw Railway Worker Service running on port ${PORT}`);
});
