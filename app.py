import os
import logging
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from sqlalchemy.orm import DeclarativeBase

# Set up logging configuration
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
login_manager = LoginManager()

def create_app():
    app = Flask(__name__, 
                template_folder=os.path.abspath('templates'),
                static_folder=os.path.abspath('static'))

    # Configure the app
    app.config['SECRET_KEY'] = os.environ.get("FLASK_SECRET_KEY") or "a secret key"
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL")
    app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        "pool_recycle": 300,
        "pool_pre_ping": True,
    }

    # Initialize extensions
    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'login'

    # Register routes
    from routes import register_routes
    register_routes(app)

    # Set up user loader
    @login_manager.user_loader
    def load_user(id):
        from models import User
        return User.query.get(int(id))

    return app

app = create_app()

# Initialize database tables within app context
with app.app_context():
    try:
        from models import User, Query, Payment, Document  # noqa: F401
        db.create_all()
        logger.info("Database tables created successfully")
    except Exception as e:
        logger.error(f"Failed to create database tables: {e}")
        db.session.rollback()
        raise

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)