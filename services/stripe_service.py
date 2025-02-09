import stripe
import os
from flask import current_app

stripe.api_key = os.environ.get('STRIPE_SECRET_KEY')

def create_payment_intent():
    try:
        intent = stripe.PaymentIntent.create(
            amount=2999,  # $29.99
            currency='usd',
            payment_method_types=['card'],
            metadata={'product': 'premium_subscription'}
        )
        return intent
    except stripe.error.StripeError as e:
        raise Exception(f"Stripe error: {str(e)}")

def handle_webhook(payload, sig_header):
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, os.environ.get('STRIPE_WEBHOOK_SECRET')
        )
        
        if event['type'] == 'payment_intent.succeeded':
            payment_intent = event['data']['object']
            handle_successful_payment(payment_intent)
            
    except Exception as e:
        raise Exception(f"Webhook error: {str(e)}")

def handle_successful_payment(payment_intent):
    from models import User, Payment
    from app import db
    
    user_id = payment_intent.metadata.get('user_id')
    if user_id:
        user = User.query.get(user_id)
        if user:
            user.is_premium = True
            payment = Payment(
                user_id=user_id,
                stripe_payment_id=payment_intent.id,
                amount=payment_intent.amount,
                status='succeeded'
            )
            db.session.add(payment)
            db.session.commit()
