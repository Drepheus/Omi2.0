import logging
from datetime import datetime
from flask import render_template, redirect, url_for, flash, request, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.utils import secure_filename
from app import db

logger = logging.getLogger(__name__)

def register_routes(app):
    from models import User, Query, Document

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/login', methods=['GET', 'POST'])
    def login():
        if request.method == 'POST':
            user = User.query.filter_by(email=request.form['email']).first()
            if user and user.check_password(request.form['password']):
                login_user(user)
                return redirect(url_for('dashboard'))
            flash('Invalid email or password')
        return render_template('login.html')

    @app.route('/register', methods=['GET', 'POST'])
    def register():
        if request.method == 'POST':
            user = User(
                username=request.form['username'],
                email=request.form['email']
            )
            user.set_password(request.form['password'])
            db.session.add(user)
            db.session.commit()
            login_user(user)
            return redirect(url_for('dashboard'))
        return render_template('register.html')

    @app.route('/logout')
    @login_required
    def logout():
        logout_user()
        return redirect(url_for('index'))

    @app.route('/dashboard')
    @login_required
    def dashboard():
        queries = Query.query.filter_by(user_id=current_user.id).order_by(Query.created_at.desc()).limit(5)
        sam_last_update = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        return render_template('dashboard.html', queries=queries, sam_last_update=sam_last_update)

    @app.route('/payment')
    @login_required
    def payment():
        return render_template('payment.html')

    @app.route('/api/query', methods=['POST'])
    @login_required
    def process_query():
        try:
            if not request.is_json:
                return jsonify(error="Invalid request format. Expected JSON."), 400

            data = request.get_json()
            if not data or 'query' not in data:
                return jsonify(error="Missing query parameter"), 400

            query_text = data['query']

            if not current_user.is_premium and Query.query.filter_by(user_id=current_user.id).count() >= 10:
                return jsonify(error='Free tier limit reached. Please upgrade to premium.'), 403

            from services import ai_service
            ai_response = ai_service.get_ai_response(query_text)
            if not ai_response:
                return jsonify(error="Failed to get AI response"), 500

            query = Query(
                user_id=current_user.id,
                query_text=query_text,
                response=ai_response
            )
            db.session.add(query)
            db.session.commit()

            return jsonify({'ai_response': ai_response})

        except Exception as e:
            logger.error(f"Error processing query: {str(e)}")
            return jsonify(error=str(e)), 500

    # Error handler for API routes
    @app.errorhandler(Exception)
    def handle_error(error):
        logger.error(f"Unhandled error: {str(error)}")
        if request.path.startswith('/api/'):
            return jsonify(error=str(error)), getattr(error, 'code', 500)
        return render_template('error.html', error=error), 500

    return app
