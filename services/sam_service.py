import requests
import os
from datetime import datetime

SAM_API_KEY = os.environ.get('SAM_API_KEY')
SAM_API_BASE_URL = 'https://api.sam.gov/entity-information/v3/entities'

def get_relevant_data(query):
    try:
        headers = {
            'X-Api-Key': SAM_API_KEY,
            'Accept': 'application/json'
        }
        
        params = {
            'q': query,
            'page': 0,
            'size': 10
        }
        
        response = requests.get(
            SAM_API_BASE_URL,
            headers=headers,
            params=params
        )
        
        if response.status_code == 200:
            data = response.json()
            return format_sam_data(data)
        else:
            return {"error": f"SAM.gov API error: {response.status_code}"}
            
    except Exception as e:
        return {"error": f"Error fetching SAM.gov data: {str(e)}"}

def format_sam_data(data):
    formatted_data = []
    for entity in data.get('entities', []):
        formatted_data.append({
            'entity_name': entity.get('entityRegistration', {}).get('legalBusinessName'),
            'duns': entity.get('entityRegistration', {}).get('ueiDUNS'),
            'status': entity.get('entityRegistration', {}).get('status'),
            'expiration_date': entity.get('entityRegistration', {}).get('expirationDate')
        })
    return formatted_data
