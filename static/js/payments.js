document.addEventListener('DOMContentLoaded', function() {
    const stripe = Stripe(stripePublicKey);
    const elements = stripe.elements();
    
    const style = {
        base: {
            color: '#fff',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    };
    
    const card = elements.create('card', { style });
    card.mount('#card-element');
    
    const form = document.getElementById('payment-form');
    const errorElement = document.getElementById('card-errors');
    const submitButton = document.getElementById('submit-payment');
    
    card.addEventListener('change', function(event) {
        if (event.error) {
            errorElement.textContent = event.error.message;
        } else {
            errorElement.textContent = '';
        }
    });
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...';
        
        try {
            const response = await fetch('/api/create-payment-intent', {
                method: 'POST'
            });
            
            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error);
            }
            
            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: document.getElementById('name').value
                    }
                }
            });
            
            if (result.error) {
                throw new Error(result.error.message);
            }
            
            // Payment successful
            window.location.href = '/dashboard?payment=success';
            
        } catch (error) {
            errorElement.textContent = error.message;
            submitButton.disabled = false;
            submitButton.innerHTML = 'Pay Now';
        }
    });
});
