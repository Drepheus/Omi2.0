import logging
import re
import trafilatura
import requests
from urllib.parse import urlparse
from datetime import datetime, timedelta
from bs4 import BeautifulSoup

logger = logging.getLogger(__name__)

def is_valid_url(url):
    """Check if the provided string is a valid URL"""
    try:
        result = urlparse(url)
        return all([result.scheme, result.netloc])
    except Exception as e:
        logger.error(f"Error validating URL: {str(e)}")
        return False

def extract_urls(text):
    """Extract URLs from text using regex"""
    try:
        url_pattern = r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+'
        return re.findall(url_pattern, text)
    except Exception as e:
        logger.error(f"Error extracting URLs: {str(e)}")
        return []

def get_sam_solicitations():
    """Fetch recent solicitations from SAM.gov"""
    try:
        base_url = "https://sam.gov/search/opportunities/active"
        # Use today's date for the search
        today = datetime.now()
        formatted_date = today.strftime("%Y-%m-%d")

        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

        # First get the search page
        response = requests.get(base_url, headers=headers)
        if response.status_code != 200:
            logger.error(f"Failed to access SAM.gov: {response.status_code}")
            return []

        # Extract solicitation data using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')
        solicitations = []

        # Find all opportunity listings
        listings = soup.find_all('div', class_='opportunity-listing')
        for listing in listings[:3]:  # Get top 3 solicitations
            title = listing.find('h3', class_='title')
            agency = listing.find('span', class_='agency')
            posted_date = listing.find('span', class_='posted-date')

            if title and agency:
                solicitations.append({
                    'title': title.text.strip(),
                    'agency': agency.text.strip(),
                    'posted_date': posted_date.text.strip() if posted_date else 'N/A',
                    'url': f"https://sam.gov{listing.find('a')['href']}" if listing.find('a') else base_url
                })

        return solicitations
    except Exception as e:
        logger.error(f"Error fetching SAM.gov solicitations: {str(e)}")
        return []

def get_webpage_content(url):
    """Fetch and extract main content from a webpage"""
    try:
        downloaded = trafilatura.fetch_url(url)
        if downloaded is None:
            logger.error(f"Failed to download content from {url}")
            return None

        content = trafilatura.extract(downloaded, include_links=True, include_images=True)
        if content is None:
            logger.error(f"Failed to extract content from {url}")
            return None

        return content
    except Exception as e:
        logger.error(f"Error fetching webpage content: {str(e)}")
        return None

def process_web_content(query):
    """Process query for web content and return relevant information"""
    try:
        # First, check if it's a SAM.gov solicitation request
        if 'solicitation' in query.lower() or 'sam.gov' in query.lower():
            solicitations = get_sam_solicitations()
            if solicitations:
                web_contents = []
                for sol in solicitations:
                    web_contents.append({
                        'url': sol['url'],
                        'content': f"Title: {sol['title']}\nAgency: {sol['agency']}\nPosted: {sol['posted_date']}"
                    })
                return web_contents

        # Process regular URLs
        urls = extract_urls(query)
        web_contents = []

        for url in urls:
            if is_valid_url(url):
                content = get_webpage_content(url)
                if content:
                    web_contents.append({
                        'url': url,
                        'content': content
                    })

        return web_contents
    except Exception as e:
        logger.error(f"Error processing web content: {str(e)}")
        return []