
import requests
import os
from datetime import datetime

def get_relevant_data(query):
    try:
        headers = {
            'X-Api-Key': os.environ.get('SAM_API_KEY'),
            'Accept': 'application/json'
        }
        
        params = {
            'page': 0,
            'size': 3,  # Get last 3 entries
            'api_key': os.environ.get('SAM_API_KEY'),
            'postedFrom': datetime.now().strftime("%Y-%m-%d"),
            'limit': 3
        }
        
        response = requests.get(
            'https://api.sam.gov/opportunities/v2/search',
            headers=headers,
            params=params
        )
        
        if response.status_code == 200:
            data = response.json()
            return format_sam_data(data)
        else:
            print(f"SAM.gov API error: {response.status_code} - {response.text}")
            return {"error": f"SAM.gov API error: {response.status_code}"}
            
    except Exception as e:
        print(f"Error fetching SAM.gov data: {str(e)}")
        return {"error": f"Error fetching SAM.gov data: {str(e)}"}

def format_sam_data(data):
    formatted_data = []
    opportunities = data.get('opportunitiesData', [])
    
    if not opportunities and not isinstance(opportunities, list):
        return []
        
    for opp in opportunities:
        formatted_data.append({
            'entity_name': opp.get('title', 'N/A'),
            'duns': opp.get('solicitationNumber', 'N/A'),
            'status': opp.get('status', 'N/A'),
            'expiration_date': opp.get('responseDeadLine', 'N/A')
        })
    return formatted_data
