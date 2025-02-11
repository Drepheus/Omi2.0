import os
import logging
from openai import OpenAI
import json
from services.web_service import process_web_content
from services.sam_service import get_relevant_data, get_awarded_contracts

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

def get_sam_context(query):
    """Get relevant SAM.gov data as context"""
    try:
        relevant_data = get_relevant_data(query)
        awarded_contracts = get_awarded_contracts()

        sam_context = "\nRecent SAM.gov Data:\n"

        if relevant_data and not isinstance(relevant_data, dict):  # Check if it's not an error response
            sam_context += "\nRelevant Opportunities:\n"
            for opp in relevant_data:
                sam_context += f"- Title: {opp.get('entity_name')}\n"
                sam_context += f"  Solicitation Number: {opp.get('duns')}\n"
                sam_context += f"  Status: {opp.get('status')}\n"
                sam_context += f"  Expiration: {opp.get('expiration_date')}\n\n"

        if awarded_contracts:
            sam_context += "\nRecent Contract Awards:\n"
            for award in awarded_contracts:
                sam_context += f"- Title: {award.get('title')}\n"
                sam_context += f"  Amount: {award.get('award_amount')}\n"
                sam_context += f"  Awardee: {award.get('awardee')}\n\n"

        return sam_context
    except Exception as e:
        logger.error(f"Error getting SAM.gov context: {e}")
        return "\nNote: SAM.gov data currently unavailable\n"

def get_ai_response(query):
    if not OPENAI_API_KEY:
        logger.error("OPENAI_API_KEY is not set in environment variables")
        return "Error: OpenAI API key is not configured. Please set up your API key in Replit Secrets."

    if not client and not init_openai_client():
        logger.error("Failed to initialize OpenAI client")
        return "Error: Could not initialize OpenAI client. Please check your API key."

    try:
        # Process web content and get SAM.gov data
        web_contents = process_web_content(query)
        sam_context = get_sam_context(query)

        messages = [
            {
                "role": "system",
                "content": """You are BidBot, an AI assistant specialized in government contracting, business strategy, and compliance. You have direct access to SAM.gov data and can browse the internet.

✅ **Key Capabilities:**
1. SAM.gov Integration: Direct access to opportunity and award data
2. Web Browsing: Can read and analyze web content when URLs are provided
3. Real-time Information: Access to current contracting information
4. Source Citation: Always cite sources when using external information

### **🚀 Enhanced Behaviors:**
1️⃣ Provide specific SAM.gov opportunities when relevant
2️⃣ Include direct references to contract opportunities
3️⃣ Analyze web content when URLs are provided
4️⃣ Maintain helpful, professional tone while providing accurate information

Keep responses engaging, well-structured, and backed by real data when available."""
            }
        ]

        # Add SAM.gov context
        if sam_context:
            messages.append({
                "role": "system",
                "content": f"Here is relevant SAM.gov data to consider in your response:{sam_context}"
            })

        # Add web content context if available
        if web_contents:
            web_context = "\n\nWeb Content References:\n"
            for content in web_contents:
                web_context += f"\nFrom {content['url']}:\n{content['content'][:1000]}...\n"

            messages.append({
                "role": "system",
                "content": f"Here is relevant web content to consider in your response:{web_context}"
            })

        messages.append({"role": "user", "content": query})

        logger.debug(f"Sending request to OpenAI API with query: {query[:50]}...")
        response = client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=messages,
            temperature=0.7,
            max_tokens=800
        )
        logger.debug("Successfully received response from OpenAI API")
        return response.choices[0].message.content
    except Exception as e:
        error_msg = str(e)
        logger.error(f"OpenAI API error: {error_msg}")
        return f"Error connecting to OpenAI API: {error_msg}"

# Initialize the client when the module is imported
init_openai_client()