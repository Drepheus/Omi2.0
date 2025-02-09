import os

class Config:
    SECRET_KEY = os.environ.get('FLASK_SECRET_KEY', 'dev_key_change_in_production')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///govcon.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
    STRIPE_PUBLIC_KEY = os.environ.get('STRIPE_PUBLIC_KEY')
    STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY')
    SAM_API_KEY = os.environ.get('SAM_API_KEY')
