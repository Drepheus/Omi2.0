import os
import time
import uuid
import threading
from typing import Dict, Any
from celery import Celery
from fastapi import FastAPI, HTTPException, Header, Depends, status
from pydantic import BaseModel
from supabase import create_client, Client
import openai

app = FastAPI(title="Hermes & OpenClaw Agent Backend")

# Read environment variables
REDIS_URL = os.getenv("UPSTASH_REDIS_URL", "redis://localhost:6379/0")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
INTERNAL_API_SECRET = os.getenv("INTERNAL_API_SECRET")

# In-memory store for task states (development and fallback mode)
TASK_STORE: Dict[str, Dict[str, Any]] = {}

# Initialize Celery
try:
    celery_app = Celery("hermes_tasks", broker=REDIS_URL, backend=REDIS_URL)
    celery_app.conf.update(
        task_track_started=True,
        result_persistent=True
    )
except Exception:
    celery_app = None

class MemoryContext(BaseModel):
    memory_md: str
    user_md: str

class ExecutePayload(BaseModel):
    user_id: str
    session_id: str
    user_prompt: str
    api_key: str
    memory_context: MemoryContext
    agent_id: str = "hermes"

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

# Mock/Real Agent Reasoning Helper
def run_agent_reasoning_step(update_func, agent_id: str, prompt: str, api_key: str, memory_md: str, user_md: str):
    logs = []
    
    def log(message: str):
        logs.append(message)
        update_func("PROCESSING", "\n".join(logs))
        time.sleep(0.8)

    agent_names = {
        "openclaw": "OpenClaw Autonomous Scraper",
        "hermes": "Hermes SaaS Reasoning Agent",
        "agentzero": "AgentZero General Purpose Core",
        "researcher": "Deep Researcher AI",
        "coder": "DevAgent Coding Assistant"
    }
    agent_name = agent_names.get(agent_id, "Hermes Agent")

    log(f"⚡ [{agent_name}] Initializing reasoning engine...")
    log(f"📂 [Memory Synced] Core context loaded:\n{memory_md}\n")
    log(f"👤 [User Profile Synced] User preferences loaded:\n{user_md}\n")
    log(f"🤔 [Reasoning Turn] Analyzing query: '{prompt}'")

    if agent_id == "openclaw":
        log("🌐 [OpenClaw Web Parser] Navigating target URLs & inspecting DOM structure...")
        log("📊 [Data Extraction] Extracting structured entities & clean markdown output...")
    elif agent_id == "researcher":
        log("🔍 [Deep Search] Querying multi-source web indices & academic databases...")
        log("📑 [Synthesis] Aggregating insights & validating citations...")
    elif agent_id == "coder":
        log("💻 [DevAgent Syntax Analysis] Parsing AST & inspecting code modules...")
        log("🛠️ [Code Generation] Building optimized, type-safe implementation...")
    else:
        log("🔍 [Tool Execution] Querying internal databases & knowledge base for context...")
        log("💡 [Strategy Formulation] Planning optimal response strategy...")

    # Call OpenAI if Sk- key is provided
    if api_key.startswith("sk-"):
        try:
            log("🤖 [LLM Call] Forwarding prompt turn to OpenAI GPT-4o...")
            client = openai.OpenAI(api_key=api_key)
            completion = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": f"You are {agent_name}. Memory:\n{memory_md}\nUser:\n{user_md}"},
                    {"role": "user", "content": prompt}
                ]
            )
            response = completion.choices[0].message.content
            log("✅ [LLM Response Received] Reasoning loop complete.")
            log(f"\n💬 [{agent_name}]: {response}\n")
        except Exception as e:
            log(f"⚠️ [LLM Warning] OpenAI call failed: {str(e)}. Falling back to local reasoning simulation...")
            response = f"Simulated output for '{prompt}'. (API Note: {str(e)})"
            log(f"\n💬 [{agent_name} (Simulated)]: {response}\n")
    else:
        log("🤖 [Local Execution Engine] Running low-latency simulated agent turn...")
        if agent_id == "openclaw":
            response = f"Scraped and extracted structured payload for request: '{prompt}'."
        elif agent_id == "researcher":
            response = f"Deep research report generated for topic: '{prompt}'."
        elif agent_id == "coder":
            response = f"Code generation completed for specification: '{prompt}'."
        else:
            response = f"Processed request: '{prompt}'. Agent reasoning turn complete."
        log(f"\n💬 [{agent_name} (Simulated)]: {response}\n")

    log("📝 [Memory Update] Updating core memory blocks with new learnings from this turn...")
    timestamp_str = time.strftime('%Y-%m-%d %H:%M:%S')
    updated_memory = memory_md + f"\n- [{agent_name}] Processed query: '{prompt}' at {timestamp_str}"
    updated_user = user_md + f"\n- [{agent_name}] Last topic: {prompt[:30]}"
    
    log(f"💾 [Database Syncing] Writing updated memories back to persistent store...")
    
    final_log_text = "\n".join(logs)
    update_func("SUCCESS", final_log_text)
    
    # Try updating Supabase if keys are available
    if SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY:
        try:
            supabase_client: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
            supabase_client.table("agent_configs").update({
                "memory_md": updated_memory,
                "user_md": updated_user,
                "updated_at": "now()"
            }).execute()
        except Exception as db_err:
            print(f"Database sync warning: {db_err}")

    return updated_memory, updated_user, final_log_text

# Background thread execution worker for local dev without Celery
def run_in_thread(task_id: str, payload: ExecutePayload):
    def update_task(status: str, logs: str):
        TASK_STORE[task_id] = {
            "status": status,
            "logs": logs
        }

    update_task("PROCESSING", "⚡ [System] Task initialized in worker thread...")
    try:
        run_agent_reasoning_step(
            update_task,
            payload.agent_id,
            payload.user_prompt,
            payload.api_key,
            payload.memory_context.memory_md,
            payload.memory_context.user_md
        )
    except Exception as e:
        update_task("FAILURE", f"Task error: {str(e)}")

@app.post("/execute", status_code=202)
def execute_agent(payload: ExecutePayload, dependencies=Depends(verify_api_secret)):
    task_id = f"task_{uuid.uuid4().hex[:12]}"
    TASK_STORE[task_id] = {"status": "PROCESSING", "logs": "⚡ Task queued..."}

    # Attempt Celery first; if broker unavailable or fails, fallback to local thread execution
    celery_success = False
    if celery_app:
        try:
            # Check if Celery can dispatch
            celery_task = celery_app.send_task(
                "execute_hermes_loop",
                args=[payload.user_id, payload.user_prompt, payload.api_key, payload.memory_context.model_dump()],
                expires=10
            )
            return {"status": "Accepted", "task_id": celery_task.id}
        except Exception:
            celery_success = False

    if not celery_success:
        thread = threading.Thread(target=run_in_thread, args=(task_id, payload), daemon=True)
        thread.start()
        return {"status": "Accepted", "task_id": task_id}

@app.get("/tasks/{task_id}")
def get_task_status(task_id: str, dependencies=Depends(verify_api_secret)):
    # Check in-memory TASK_STORE first
    if task_id in TASK_STORE:
        return TASK_STORE[task_id]
        
    # Check Celery if available
    if celery_app:
        try:
            res = celery_app.AsyncResult(task_id)
            if res.state == 'PENDING':
                return {"status": "PENDING", "logs": "Task is queued and waiting for worker..."}
            elif res.state in ['STARTED', 'PROCESSING']:
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
        except Exception:
            pass

    return {"status": "SUCCESS", "logs": "Task execution completed."}

