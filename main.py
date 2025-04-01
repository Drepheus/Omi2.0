import logging
from app import app

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

if __name__ == "__main__":
    try:
        logger.info("Starting Flask server...")
        # Use production configuration
        debug_mode = os.environ.get('FLASK_ENV') == 'development'
        port = int(os.environ.get('PORT', 8080))
        app.run(host="0.0.0.0", port=port, debug=debug_mode)
    except Exception as e:
        logger.error(f"Failed to start server: {e}")
        exit(1)