import requests
import os
import logging
from datetime import datetime, timedelta
from time import sleep
from functools import lru_cache
from urllib.parse import quote

logger = logging.getLogger(__name__)

@lru_cache(maxsize=128)
def _cached_sam_request(endpoint, query_params_str):
    """Make a cached request to SAM.gov API"""
    base_url = 'https://api.sam.gov/opportunities/v2'
    api_key = os.environ.get('SAM_API_KEY')

    if not api_key:
        logger.error("SAM_API_KEY environment variable is not set")
        return None

    headers = {
        'X-Api-Key': api_key,
        'Accept': 'application/json'
    }

    # Convert query_params_str back to dict
    params = json.loads(query_params_str)
    logger.debug(f"Making SAM.gov API request to {endpoint} with params: {params}")

    # Implement exponential backoff
    max_retries = 3
    for attempt in range(max_retries):
        try:
            response = requests.get(
                f'{base_url}/{endpoint}',
                headers=headers,
                params=params,
                timeout=30  # Increased timeout
            )

            if response.status_code == 200:
                return response.json()
            elif response.status_code == 429:  # Rate limit hit
                wait_time = min(30, (2 ** attempt))  # Exponential backoff, max 30 seconds
                logger.warning(f"Rate limit hit, waiting {wait_time} seconds before retry {attempt + 1}/{max_retries}")
                sleep(wait_time)
                continue
            else:
                logger.error(f"SAM.gov API error: {response.status_code} - {response.text}")
                return None

        except requests.exceptions.RequestException as e:
            logger.error(f"Error making SAM.gov request: {str(e)}")
            if attempt < max_retries - 1:  # Don't sleep on the last attempt
                sleep(min(30, (2 ** attempt)))
            continue

    logger.error("Max retries exceeded for SAM.gov API request")
    return None

def get_sam_solicitations(query=None):
    """Get recent solicitations from SAM.gov API"""
    try:
        # Make sure we have the API key
        api_key = os.environ.get('SAM_API_KEY')
        if not api_key:
            logger.error("SAM_API_KEY environment variable is not set")
            return []

        today = datetime.now()
        future = today + timedelta(days=30)

        # Format dates in MM/dd/yyyy as required by SAM API
        formatted_today = today.strftime("%m/%d/%Y")
        formatted_future = future.strftime("%m/%d/%Y")

        params = {
            'api_key': api_key,
            'postedFrom': formatted_today,
            'postedTo': formatted_future,
            'limit': 5,  # Increased limit
            'isActive': 'true'
        }

        # Clean and format the query for the search
        if query:
            # Extract only the relevant search terms
            search_terms = query.lower()
            for term in ['fetch', 'get', 'find', 'search for', 'solicitation for', 'contract for']:
                search_terms = search_terms.replace(term, '')
            search_terms = search_terms.strip()
            if search_terms:
                params['keywords'] = quote(search_terms)

        # Convert params to string for caching
        params_str = json.dumps(params, sort_keys=True)

        data = _cached_sam_request('search', params_str)
        if data and 'opportunitiesData' in data:
            opportunities = data.get('opportunitiesData', [])

            solicitations = []
            for opp in opportunities:
                notice_id = opp.get('noticeId', '')
                if not notice_id:
                    continue

                solicitation = {
                    'title': opp.get('title', 'N/A'),
                    'agency': opp.get('organizationName', 'N/A'),
                    'solicitation_number': opp.get('solicitationNumber', 'N/A'),
                    'posted_date': opp.get('postedDate', 'N/A'),
                    'response_deadline': opp.get('responseDeadLine', 'N/A'),
                    'description': opp.get('description', 'N/A')[:500] + '...' if opp.get('description') else 'N/A',
                    'url': f"https://sam.gov/opp/{notice_id}/view"
                }
                solicitations.append(solicitation)

            return solicitations
        else:
            logger.warning("No data returned from SAM.gov API")
            return []

    except Exception as e:
        logger.error(f"Error fetching SAM.gov solicitations: {str(e)}")
        return []