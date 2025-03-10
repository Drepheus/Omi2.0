
// Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log("Dashboard script loaded");
    
    // Determine which dashboard is active
    const isGovConDashboard = document.querySelector('.gov-dashboard') !== null;
    const isSimpleDashboard = document.querySelector('.simple-dashboard') !== null;
    
    if (isSimpleDashboard) {
        initializeSimpleDashboard();
    }
    
    if (isGovConDashboard) {
        initializeGovConDashboard();
    }
});

// ========================
// SIMPLE DASHBOARD FUNCTIONS
// ========================
function initializeSimpleDashboard() {
    console.log("Initializing Simple Dashboard");
    
    const queryForm = document.getElementById('query-form');
    const queryInput = document.getElementById('query-input');
    const messagesContainer = document.getElementById('messages-container');
    const typingIndicator = document.getElementById('typing-indicator');
    const recentConversations = document.getElementById('recent-conversations');
    const voiceModeButton = document.getElementById('voice-mode-button');
    const imageCreationButton = document.getElementById('image-creation-button');
    
    // Initialize functionality
    if (queryForm) {
        queryForm.addEventListener('submit', handleSimpleQuery);
    }
    
    if (voiceModeButton) {
        voiceModeButton.addEventListener('click', () => {
            alert('Voice mode coming soon!');
        });
    }
    
    if (imageCreationButton) {
        imageCreationButton.addEventListener('click', () => {
            alert('Image creation coming soon!');
        });
    }
    
    // Load recent conversations
    loadRecentConversations();
    
    // Handle query submission for Simple Dashboard
    async function handleSimpleQuery(e) {
        e.preventDefault();
        
        const query = queryInput.value.trim();
        if (!query) return;
        
        // Add user message to the UI
        addMessageToUI('user', query);
        
        // Clear input
        queryInput.value = '';
        
        // Show typing indicator
        typingIndicator.style.display = 'block';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        try {
            // Send query to API
            const response = await fetch('/api/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query })
            });
            
            const data = await response.json();
            
            // Hide typing indicator
            typingIndicator.style.display = 'none';
            
            if (response.ok) {
                // Add AI response to the UI
                addMessageToUI('ai', data.response);
                
                // Update recent conversations
                loadRecentConversations();
            } else {
                console.error('API Error:', data.error);
                addMessageToUI('ai', 'Sorry, I encountered an error processing your request. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            typingIndicator.style.display = 'none';
            addMessageToUI('ai', 'Sorry, I encountered an error. Please try again.');
        }
    }
    
    // Add a message to the UI
    function addMessageToUI(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message-bubble', type);
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        
        if (type === 'ai') {
            const header = document.createElement('div');
            header.classList.add('ai-response-header');
            header.textContent = 'Omi';
            messageContent.appendChild(header);
            
            // Process markdown-like formatting
            const formattedContent = formatAIResponse(content);
            messageContent.innerHTML += formattedContent;
        } else {
            messageContent.textContent = content;
        }
        
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Format AI response with basic markdown-like formatting
    function formatAIResponse(text) {
        if (!text) return '';
        
        // Convert markdown headings
        text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        
        // Convert bold and italic text
        text = text.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
        text = text.replace(/\*(.*?)\*/gim, '<em>$1</em>');
        
        // Convert bullet points
        text = text.replace(/^\s*- (.*$)/gim, '<ul><li>$1</li></ul>');
        
        // Convert line breaks
        text = text.replace(/\n/gim, '<br>');
        
        // Clean up duplicated tags
        text = text.replace(/<\/ul><ul>/gim, '');
        
        return text;
    }
    
    // Load recent conversations
    async function loadRecentConversations() {
        if (!recentConversations) return;
        
        try {
            const response = await fetch('/api/recent-conversations');
            const data = await response.json();
            
            if (response.ok && data.conversations && data.conversations.length > 0) {
                recentConversations.innerHTML = '';
                
                data.conversations.forEach(conversation => {
                    const item = document.createElement('div');
                    item.classList.add('conversation-item');
                    
                    const queryPreview = document.createElement('div');
                    queryPreview.classList.add('query-preview');
                    queryPreview.textContent = conversation.query_text.substring(0, 50) + 
                        (conversation.query_text.length > 50 ? '...' : '');
                    
                    const timestamp = document.createElement('div');
                    timestamp.classList.add('timestamp');
                    const date = new Date(conversation.created_at);
                    timestamp.textContent = date.toLocaleString();
                    
                    item.appendChild(queryPreview);
                    item.appendChild(timestamp);
                    
                    item.addEventListener('click', () => {
                        queryInput.value = conversation.query_text;
                        queryInput.focus();
                    });
                    
                    recentConversations.appendChild(item);
                });
            } else {
                recentConversations.innerHTML = `
                    <div class="text-center py-3 text-muted">
                        <small>No recent conversations</small>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error loading recent conversations:', error);
            recentConversations.innerHTML = `
                <div class="text-center py-3 text-muted">
                    <small>Error loading conversations</small>
                </div>
            `;
        }
    }
}

// ========================
// GOVCON DASHBOARD FUNCTIONS
// ========================
function initializeGovConDashboard() {
    console.log("Initializing GovCon Dashboard");
    
    // GovCon specific elements
    const samSearchForm = document.getElementById('samSearchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const queryForm = document.getElementById('queryForm');
    const queryInput = document.getElementById('queryInput');
    const responseArea = document.getElementById('responseArea');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const samStatusCard = document.getElementById('samStatusCard');
    const documentUploadForm = document.getElementById('documentUploadForm');
    
    // Initialize functionality
    if (samSearchForm) {
        samSearchForm.addEventListener('submit', handleSamSearch);
    }
    
    if (queryForm) {
        queryForm.addEventListener('submit', handleGovConQuery);
    }
    
    if (documentUploadForm) {
        documentUploadForm.addEventListener('submit', handleDocumentUpload);
    }
    
    // Initialize SAM.gov status display
    initializeSamStatus();
    
    // Handle SAM.gov search
    async function handleSamSearch(e) {
        e.preventDefault();
        
        const query = searchInput.value.trim();
        if (!query) return;
        
        // Show loading indicator
        searchResults.innerHTML = `
            <div class="text-center py-3">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-2 text-muted">Searching SAM.gov...</p>
            </div>
        `;
        
        try {
            const response = await fetch('/api/sam/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                displaySamResults(data.results);
            } else {
                searchResults.innerHTML = `
                    <div class="alert alert-danger">
                        <i class="fas fa-exclamation-circle me-2"></i>
                        ${data.error || 'An error occurred during the search.'}
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error:', error);
            searchResults.innerHTML = `
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    An error occurred during the search. Please try again.
                </div>
            `;
        }
    }
    
    // Display SAM.gov search results
    function displaySamResults(results) {
        if (!results || results.length === 0) {
            searchResults.innerHTML = `
                <div class="alert alert-info">
                    <i class="fas fa-info-circle me-2"></i>
                    No results found. Try different keywords.
                </div>
            `;
            return;
        }
        
        let resultsHTML = `<h5 class="mt-3 mb-3">Search Results</h5>`;
        
        results.forEach(result => {
            resultsHTML += `
                <div class="card mb-3 sam-data-card">
                    <div class="card-body">
                        <h5 class="card-title">${result.title}</h5>
                        <p class="card-text">${result.description.substring(0, 150)}${result.description.length > 150 ? '...' : ''}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-primary">${result.type}</span>
                            <span class="text-muted small">${result.date}</span>
                        </div>
                        <a href="${result.url}" target="_blank" class="btn btn-sm btn-outline-primary mt-2">
                            <i class="fas fa-external-link-alt me-1"></i>View on SAM.gov
                        </a>
                    </div>
                </div>
            `;
        });
        
        searchResults.innerHTML = resultsHTML;
    }
    
    // Initialize SAM.gov status display
    function initializeSamStatus() {
        if (!samStatusCard) return;
        
        const samStatusLoading = document.getElementById('samStatusLoading');
        const samStatusContent = document.getElementById('samStatusContent');
        const samDataContent = document.getElementById('samDataContent');
        
        // Simulate loading SAM.gov status (replace with actual API call)
        setTimeout(() => {
            if (samStatusLoading) samStatusLoading.classList.add('d-none');
            if (samStatusContent) samStatusContent.classList.remove('d-none');
            
            if (samDataContent) {
                samDataContent.innerHTML = `
                    <div class="sam-api-status">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-check-circle text-success me-2"></i>
                            <span>API Connected and Operational</span>
                        </div>
                    </div>
                `;
            }
        }, 1500);
    }
    
    // Handle GovCon query submission
    async function handleGovConQuery(e) {
        e.preventDefault();
        
        const query = queryInput.value.trim();
        if (!query) return;
        
        // Show loading spinner
        loadingSpinner.classList.remove('d-none');
        
        try {
            const response = await fetch('/api/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query })
            });
            
            const data = await response.json();
            
            // Hide loading spinner
            loadingSpinner.classList.add('d-none');
            
            if (response.ok) {
                displayGovConResponse(data.response);
            } else {
                console.error('API Error:', data.error);
                displayGovConResponse('Sorry, I encountered an error processing your request. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            loadingSpinner.classList.add('d-none');
            displayGovConResponse('Sorry, I encountered an error. Please try again.');
        }
    }
    
    // Display GovCon response
    function displayGovConResponse(content) {
        const responseCard = document.createElement('div');
        responseCard.classList.add('card', 'dashboard-card', 'response-card', 'mb-4');
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        const title = document.createElement('h3');
        title.classList.add('card-title', 'mb-4');
        title.innerHTML = '<i class="fas fa-robot me-2"></i>BidBot Response';
        
        const responseContent = document.createElement('div');
        responseContent.classList.add('response-content');
        
        // Format content with basic markdown-like formatting
        const formattedContent = formatGovConResponse(content);
        responseContent.innerHTML = formattedContent;
        
        cardBody.appendChild(title);
        cardBody.appendChild(responseContent);
        responseCard.appendChild(cardBody);
        
        // Add to response area (prepend to show newest first)
        responseArea.insertBefore(responseCard, responseArea.firstChild);
    }
    
    // Format GovCon response with basic markdown-like formatting
    function formatGovConResponse(text) {
        if (!text) return '';
        
        // Convert markdown headings
        text = text.replace(/^### (.*$)/gim, '<h4>$1</h4>');
        text = text.replace(/^## (.*$)/gim, '<h3>$1</h3>');
        text = text.replace(/^# (.*$)/gim, '<h2>$1</h2>');
        
        // Convert bold and italic text
        text = text.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
        text = text.replace(/\*(.*?)\*/gim, '<em>$1</em>');
        
        // Convert bullet points
        text = text.replace(/^\s*- (.*$)/gim, '<ul><li>$1</li></ul>');
        
        // Convert line breaks
        text = text.replace(/\n/gim, '<br>');
        
        // Clean up duplicated tags
        text = text.replace(/<\/ul><ul>/gim, '');
        
        return text;
    }
    
    // Handle document upload
    async function handleDocumentUpload(e) {
        e.preventDefault();
        
        const fileInput = document.getElementById('documentFile');
        const documentQuery = document.getElementById('documentQuery');
        
        if (!fileInput.files.length) {
            alert('Please select at least one file to upload.');
            return;
        }
        
        // Show loading spinner
        loadingSpinner.classList.remove('d-none');
        
        const formData = new FormData();
        
        // Add all files to form data
        for (let i = 0; i < fileInput.files.length; i++) {
            formData.append('documents', fileInput.files[i]);
        }
        
        // Add query if provided
        if (documentQuery.value.trim()) {
            formData.append('query', documentQuery.value.trim());
        }
        
        try {
            const response = await fetch('/api/documents/analyze', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            // Hide loading spinner
            loadingSpinner.classList.add('d-none');
            
            if (response.ok) {
                displayGovConResponse(data.response);
                
                // Clear form
                fileInput.value = '';
                documentQuery.value = '';
            } else {
                console.error('API Error:', data.error);
                displayGovConResponse('Sorry, I encountered an error analyzing the documents. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            loadingSpinner.classList.add('d-none');
            displayGovConResponse('Sorry, I encountered an error. Please try again.');
        }
    }
}

// Load query examples if script is available
try {
    console.log("Query examples feature has been disabled for stability reasons.");
} catch (e) {
    console.error("Error loading query examples:", e);
}
