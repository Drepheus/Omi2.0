# Overview

This is a Flask-based AI assistant web application called "Omi AI" that serves as an intelligent partner for general inquiries and government contracting. The system provides multiple interfaces including a simple chat dashboard for general AI interactions and a specialized government contracting dashboard with SAM.gov integration. The application features user authentication, subscription management, document processing capabilities, and administrative tools.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend uses a server-side rendered approach with Jinja2 templates and Bootstrap for styling. Key components include:
- **Landing Page**: Video background with navigation to different dashboard types
- **Simple Dashboard**: Clean chat interface for general AI interactions
- **Government Contracting Dashboard**: Specialized interface with SAM.gov search and document upload
- **Tool Hub**: Curated collection of AI tools across categories
- **Admin Dashboard**: User management and analytics interface

## Backend Architecture
The application follows a modular Flask architecture with clear separation of concerns:
- **Application Factory Pattern**: Uses `create_app()` function for flexible configuration
- **Blueprint-style Routing**: Routes defined in separate `routes.py` file
- **Service Layer**: Dedicated services for AI, document processing, payments, and external APIs
- **Database Layer**: SQLAlchemy ORM with model definitions in `models.py`

## Authentication & Authorization
- **Flask-Login**: Handles user sessions and authentication state
- **Role-based Access**: Admin users have additional privileges
- **Rate Limiting**: Free tier users have query limits with reset intervals
- **Subscription Tiers**: Free, Pro, and Premium plans with different feature access

## Database Design
Uses SQLAlchemy with support for both SQLite (development) and PostgreSQL (production):
- **User Model**: Comprehensive user data including subscription status, query tracking, and activity monitoring
- **Query Model**: Stores user queries for analytics and history
- **Document Model**: Manages uploaded files and their metadata
- **AITool Model**: Curated list of AI tools organized by category

## External Integrations

### OpenAI Integration
- Primary AI service using OpenAI's API for conversational responses
- Contextual system prompts tailored for different use cases
- Error handling and fallback mechanisms

### SAM.gov API Integration
- Real-time government contracting data retrieval
- Cached responses to improve performance and reduce API calls
- Rate limiting and retry logic with exponential backoff

### Stripe Payment Processing
- Subscription management for Pro and Premium tiers
- Webhook handling for payment confirmations
- Secure payment intent creation and processing

### Document Processing
- Multi-format support (PDF, DOCX, TXT)
- Text extraction using PyPDF2 and python-docx
- Secure file upload handling with validation

## Performance & Scalability
- **Caching Strategy**: LRU cache for SAM.gov API responses
- **Database Optimization**: Connection pooling and pre-ping configuration
- **Error Handling**: Comprehensive logging and graceful error recovery
- **Rate Limiting**: Built-in query throttling for free tier users

# External Dependencies

## Core Framework
- **Flask**: Web application framework with SQLAlchemy for database operations
- **Flask-Login**: User session management and authentication

## AI & Content Processing
- **OpenAI**: Primary AI service for generating responses
- **PyPDF2**: PDF text extraction
- **python-docx**: Microsoft Word document processing
- **trafilatura**: Web content extraction
- **BeautifulSoup4**: HTML parsing and web scraping

## External APIs
- **SAM.gov API**: Government contracting data and opportunities
- **Stripe API**: Payment processing and subscription management

## Frontend Libraries
- **Bootstrap**: CSS framework for responsive design
- **FontAwesome**: Icon library
- **Marked.js**: Markdown parsing for AI responses

## Database
- **SQLite**: Development database (fallback)
- **PostgreSQL**: Production database (configurable via DATABASE_URL)

## Deployment & Infrastructure
- **Replit**: Primary deployment platform (configured for port 8080)
- **Environment Variables**: Configuration management for API keys and database connections