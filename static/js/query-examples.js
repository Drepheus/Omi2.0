
// Example queries to show in the animation
const exampleQueries = [
    "What is machine learning and how does it work?",
    "Can you help me write a professional email template?",
    "Explain quantum computing in simple terms",
    "How do I create an effective marketing strategy?",
    "What are the best practices for web development?"
];

// Government contracting examples (for the main dashboard)
const govConExampleQueries = [
    "Search for cybersecurity contracts in SAM.gov",
    "Analyze and summarize this IT RFP requirements",
    "How do I register as a government contractor?",
    "What certifications do I need for federal contracts?",
    "Guide me through creating a winning proposal"
];

document.addEventListener('DOMContentLoaded', function() {
    const queryInput = document.getElementById('query-input');
    const isSimpleDashboard = document.querySelector('.simple-dashboard') !== null || 
                            window.location.pathname.includes('simple-dashboard');
    
    if (!queryInput) return; // Exit if query input doesn't exist on this page
    
    // Choose which set of examples to use based on dashboard type
    const queriesForThisPage = isSimpleDashboard ? exampleQueries : govConExampleQueries;
    
    let currentExampleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingTimeout = null;
    
    // Make sure the input field is empty at the start
    if (queryInput.placeholder) {
        queryInput.placeholder = '';
    }
    
    function typeNextCharacter() {
        const currentExample = queriesForThisPage[currentExampleIndex];
        
        if (isDeleting) {
            // Deleting characters
            if (currentCharIndex > 0) {
                currentCharIndex--;
                queryInput.placeholder = currentExample.substring(0, currentCharIndex);
                typingTimeout = setTimeout(typeNextCharacter, 30);
            } else {
                // Move to next example
                isDeleting = false;
                currentExampleIndex = (currentExampleIndex + 1) % queriesForThisPage.length;
                typingTimeout = setTimeout(typeNextCharacter, 700);
            }
        } else {
            // Typing characters
            if (currentCharIndex < currentExample.length) {
                currentCharIndex++;
                queryInput.placeholder = currentExample.substring(0, currentCharIndex);
                typingTimeout = setTimeout(typeNextCharacter, 70);
            } else {
                // Pause at the end before deleting
                isDeleting = true;
                typingTimeout = setTimeout(typeNextCharacter, 2000);
            }
        }
    }
    
    // Start the typing animation
    typeNextCharacter();
    
    // Clear animation when user focuses on the input
    queryInput.addEventListener('focus', function() {
        clearTimeout(typingTimeout);
        queryInput.placeholder = '';
    });
    
    // Restart animation when user blurs the input if it's empty
    queryInput.addEventListener('blur', function() {
        if (queryInput.value === '') {
            currentCharIndex = 0;
            isDeleting = false;
            typeNextCharacter();
        }
    });
});
