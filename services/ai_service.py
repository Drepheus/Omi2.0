import os
import logging
from openai import OpenAI
from datetime import datetime

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
client = None

def init_openai_client():
    global client
    if not OPENAI_API_KEY:
        logger.error("OPENAI_API_KEY environment variable is not set")
        return False
    try:
        client = OpenAI(api_key=OPENAI_API_KEY)
        logger.debug("OpenAI client initialized successfully")
        return True
    except Exception as e:
        logger.error(f"Failed to initialize OpenAI client: {e}")
        return False

def get_ai_response(query):
    if not OPENAI_API_KEY:
        logger.error("OPENAI_API_KEY is not set in environment variables")
        return "Error: OpenAI API key is not configured. Please contact support."

    if not client and not init_openai_client():
        logger.error("Failed to initialize OpenAI client")
        return "Error: Could not initialize AI service. Please try again later."

    try:
        system_message = """You are BidBot, an AI assistant specialized in government contracting but also everything else. You are suppose to walk users thru whatever process they are on and step they are starting from. Your responses should be immediate and actionable.

Key Behaviors:
1. Provide direct, concise answers
2. Focus on general guidance and best practices
3. Provide alternative resources when needed
4. Always maintain professional tone

Response Format:
- Start with direct answer to query
- Provide detailed guidance
- End with actionable next steps"""

        messages = [
            {"role": "system", "content": system_message},
            {"role": "user", "content": query}
        ]

        logger.debug(f"Sending request to OpenAI API with query: {query[:50]}...")
        logger.debug("Using model: o3-mini")

        try:
            response = client.chat.completions.create(
                model="claude-3-opus-20240229",  # Using Claude model that supports similar capabilities
                messages=messages,
                temperature=0.7,
                max_tokens=800
            )
            logger.debug("Successfully received response from OpenAI API")
            return response.choices[0].message.content
        except Exception as api_error:
            logger.error(f"OpenAI API error details: {str(api_error)}")
            # Try fallback model if first attempt fails
            try:
                response = client.chat.completions.create(
                    model="gpt-3.5-turbo",  # Fallback to a reliable model
                    messages=messages,
                    temperature=0.7,
                    max_tokens=800
                )
                logger.debug("Successfully received response from fallback model")
                return response.choices[0].message.content
            except Exception as fallback_error:
                logger.error(f"Fallback model error: {str(fallback_error)}")
                raise

    except Exception as e:
        error_msg = str(e)
        logger.error(f"OpenAI API error: {error_msg}")
        if "model not found" in error_msg.lower():
            return "I apologize, but the requested AI model is currently unavailable. The system is using an alternative model to process your request. Please try again."
        return "I apologize, but I encountered an error processing your request. Please try again in a moment."

# Initialize the client when the module is imported
init_openai_client()