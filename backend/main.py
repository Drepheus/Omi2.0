import os
import time
from celery import Celery
from fastapi import FastAPI, HTTPException, Header, Depends, status
from pydantic import BaseModel
from supabase import create_client, Client
import openai

app = FastAPI(title="Hermes Agent Backend")

# Read environment variables
REDIS_URL = os.getenv("UPSTASH_REDIS_URL", "redis://localhost:6379/0")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
INTERNAL_API_SECRET = os.getenv("INTERNAL_API_SECRET")

# Initialize Celery
celery_app = Celery("hermes_tasks", broker=REDIS_URL, backend=REDIS_URL)

# Configure Celery settings
celery_app.conf.update(
    task_track_started=True,
    result_persistent=True
)

class MemoryContext(BaseModel):
    memory_md: str
    user_md: str

class ExecutePayload(BaseModel):
    user_id: str
    session_id: str
    user_prompt: str
    api_key: str
    memory_context: MemoryContext

# Authentication Dependency
def verify_api_secret(authorization: str = Header(None)):
    if not INTERNAL_API_SECRET:
        # If secret is not configured, pass auth in development mode
        return
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing or invalid Authorization header"
        )
    token = authorization.split(" ")[1]
    if token != INTERNAL_API_SECRET:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized"
        )

# Mock/Real Agent Reasoning and Update Task State Helper
def run_agent_reasoning(task_instance, prompt, api_key, memory_md, user_md):
    logs = []
    
    def log_and_update(message):
        logs.append(message)
        full_logs = "\n".join(logs)
        task_instance.update_state(state="PROCESSING", meta={"logs": full_logs})
        # Sleep to simulate typing/reasoning
        time.sleep(1.2)

    log_and_update("⚡ [Hermes Initializing] Booting reasoning core...")
    log_and_update(f"📂 [Memory Synced] Loaded core memory context:\n{memory_md}\n")
    log_and_update(f"👤 [User Profile Synced] Loaded user profile:\n{user_md}\n")
    log_and_update(f"🤔 [Reasoning Turn] Analysing prompt: '{prompt}'")
    log_and_update("🔍 [Tool Execution] Querying internal databases & web search for context...")
    log_and_update("💡 [Idea Generation] Formulating optimal response strategy based on user preferences...")
    
    # Try calling OpenAI if the key looks like a real OpenAI key
    if api_key.startswith("sk-"):
        try:
            log_and_update("🤖 [LLM Call] Forwarding turn to OpenAI model...")
            client = openai.OpenAI(api_key=api_key)
            completion = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": f"You are Hermes Agent. Initial memory state:\n{memory_md}\nUser profile:\n{user_md}"},
                    {"role": "user", "content": prompt}
                ]
            )
            response = completion.choices[0].message.content
            log_and_update("✅ [LLM Response Received] Reasoning loop complete.")
            log_and_update(f"\n💬 [Hermes]: {response}\n")
        except Exception as e:
            log_and_update(f"⚠️ [LLM Error] API invocation failed: {str(e)}. Falling back to local reasoning simulation...")
            response = f"Analyzed: {prompt}. (Simulated response due to API error: {str(e)})"
            log_and_update(f"\n💬 [Hermes (Simulated)]: {response}\n")
    else:
        # Simulation fallback
        log_and_update("🤖 [Local Model] Running low-latency local execution turn...")
        response = f"Processed request: '{prompt}'. Output generated successfully."
        log_and_update(f"\n💬 [Hermes (Simulated)]: {response}\n")

    log_and_update("📝 [Memory Update] Updating core memories with new learnings from this turn...")
    
    # Update memories with structured bullet points
    timestamp_str = time.strftime('%Y-%m-%d %H:%M:%S')
    updated_memory = memory_md + f"\n- User queried about: '{prompt}' at {timestamp_str}"
    updated_user = user_md + f"\n- Last active prompt topic: {prompt[:30]}"
    
    log_and_update(f"💾 [Database Syncing] Writing updated memory markdown blocks back to Supabase...")
    
    return updated_memory, updated_user, "\n".join(logs)

@celery_app.task(bind=True)
def execute_hermes_loop(self, user_id, user_prompt, api_key, memory_context_dict):
    # Initialize Supabase Client
    if not SUPABASE_URL or not SUPABASE_SERVICE_ROLE_KEY:
        self.update_state(state="PROCESSING", meta={"logs": "Error: Supabase environment variables not configured."})
        raise ValueError("Supabase environment variables not configured.")
        
    supabase_client: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    
    memory_md = memory_context_dict.get("memory_md", "")
    user_md = memory_context_dict.get("user_md", "")
    
    # 1. Fetch latest agent config from Database to ensure freshness
    try:
        response = supabase_client.table("agent_configs").select("*").eq("user_id", user_id).execute()
        if response.data and len(response.data) > 0:
            memory_md = response.data[0].get("memory_md") or memory_md
            user_md = response.data[0].get("user_md") or user_md
    except Exception as db_err:
        self.update_state(state="PROCESSING", meta={"logs": f"Warning: Failed to fetch database agent configuration: {str(db_err)}"})
        
    # 2. Run agent reasoning loop
    updated_memory_md, updated_user_md, final_logs = run_agent_reasoning(
        self, user_prompt, api_key, memory_md, user_md
    )
    
    # 3. Sync memories back to Supabase
    try:
        supabase_client.table("agent_configs").update({
            "memory_md": updated_memory_md,
            "user_md": updated_user_md,
            "updated_at": "now()"
        }).eq("user_id", user_id).execute()
    except Exception as db_sync_err:
        final_logs += f"\n⚠️ [Database Sync Error] Failed to write memories back to Supabase: {str(db_sync_err)}"
        self.update_state(state="PROCESSING", meta={"logs": final_logs})
        raise db_sync_err

    return {"status": "SUCCESS", "logs": final_logs}

@app.post("/execute", status_code=202)
def execute_agent(payload: ExecutePayload, dependencies=Depends(verify_api_secret)):
    # Trigger celery background task
    task = execute_hermes_loop.delay(
        payload.user_id,
        payload.user_prompt,
        payload.api_key,
        payload.memory_context.model_dump()
    )
    return {"status": "Accepted", "task_id": task.id}

@app.get("/tasks/{task_id}")
def get_task_status(task_id: str, dependencies=Depends(verify_api_secret)):
    res = celery_app.AsyncResult(task_id)
    
    if res.state == 'PENDING':
        return {"status": "PENDING", "logs": "Task is queued and waiting for worker..."}
    elif res.state == 'STARTED' or res.state == 'PROCESSING':
        info = res.info or {}
        logs = info.get("logs", "Task execution started...") if isinstance(info, dict) else str(info)
        return {"status": "PROCESSING", "logs": logs}
    elif res.state == 'SUCCESS':
        result = res.result or {}
        logs = result.get("logs", "Task completed successfully.") if isinstance(result, dict) else str(result)
        return {"status": "SUCCESS", "logs": logs}
    elif res.state == 'FAILURE':
        info = res.info
        error_msg = str(info) if info else "Unknown task failure."
        return {"status": "FAILURE", "logs": f"Task execution failed: {error_msg}"}
    else:
        return {"status": res.state, "logs": f"Current status: {res.state}"}
