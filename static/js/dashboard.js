// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log("Dashboard script loaded");

    // Determine which dashboard is being used
    const isSimpleDashboard = document.querySelector('.simple-dashboard') !== null;
    const isGovConDashboard = document.querySelector('.gov-dashboard') !== null;

    if (isSimpleDashboard) {
        console.log("Initializing Simple Dashboard");
        initializeSimpleDashboard();
    } else if (isGovConDashboard) {
        console.log("Initializing GovCon Dashboard");
        initializeGovConDashboard();
    }

    // Disable query examples for stability
    if (document.getElementById('queryExamples')) {
        console.log("Query examples feature has been disabled for stability reasons.");
    }
});

// Initialize the Simple Dashboard
function initializeSimpleDashboard() {
    const chatForm = document.getElementById('chatForm');
    const queryInput = document.getElementById('queryInput');
    const messagesContainer = document.getElementById('messages');
    const typingIndicator = document.getElementById('typingIndicator');
    const conversationsContainer = document.getElementById('recentConversations');

    // Load recent conversations when page loads
    loadRecentConversations();

    // Handle form submission
    if (chatForm) {
        chatForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const query = queryInput.value.trim();

            if (!query) return;

            // Add user message to the UI
            addMessageToUI('user', query);

            // Clear input field
            queryInput.value = '';

            // Show typing indicator
            if (typingIndicator) {
                typingIndicator.style.display = 'block';
            }

            if (messagesContainer) {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }

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
                if (typingIndicator) {
                    typingIndicator.style.display = 'none';
                }

                if (response.ok) {
                    // Add AI response to the UI
                    if (data.ai_response) {
                        addMessageToUI('ai', data.ai_response);
                    } else if (data.error) {
                        addMessageToUI('ai', `Error: ${data.error || 'Unknown error occurred'}`);
                    } else {
                        addMessageToUI('ai', 'Sorry, I couldn\'t process your request at this time.');
                    }

                    // Update recent conversations
                    loadRecentConversations();
                } else {
                    console.error('API Error:', data.error);
                    addMessageToUI('ai', `Sorry, I encountered an error processing your request. ${data.error || ''}`);
                }
            } catch (error) {
                console.error('Error:', error);
                if (typingIndicator) {
                    typingIndicator.style.display = 'none';
                }
                addMessageToUI('ai', 'Sorry, I encountered an error. Please try again.');
            }
        });
    }

    // Add a message to the UI
    function addMessageToUI(type, content) {
        if (!messagesContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message-bubble', type);

        // For AI responses, parse the markdown and format
        if (type === 'ai') {
            // Format code blocks and other markdown elements
            const formattedContent = formatMarkdown(content);
            messageDiv.innerHTML = formattedContent;
        } else {
            messageDiv.textContent = content;
        }

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Format markdown in AI responses
    function formatMarkdown(text) {
        // If text is empty or undefined, return a placeholder
        if (!text || text.trim() === '') {
            return '<p>I\'m processing your request...</p>';
        }

        // Convert markdown-like syntax to HTML
        // Code blocks
        text = text.replace(/```([a-z]*)\n([\s\S]*?)\n```/g, '<pre><code class="$1">$2</code></pre>');

        // Bold text
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Italic text
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Convert line breaks to <br>
        text = text.replace(/\n/g, '<br>');

        // Lists
        text = text.replace(/^\s*•\s*(.*)/gm, '<li>$1</li>');
        text = text.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

        // Headers
        text = text.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
        text = text.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
        text = text.replace(/^### (.*?)$/gm, '<h3>$1</h3>');

        return text;
    }

    // Function to load recent conversations
    async function loadRecentConversations() {
        if (!conversationsContainer) return;

        try {
            const response = await fetch('/api/recent_conversations');
            const data = await response.json();

            if (response.ok && data.conversations) {
                conversationsContainer.innerHTML = '';

                if (data.conversations.length === 0) {
                    conversationsContainer.innerHTML = '<p class="text-muted">No recent conversations</p>';
                    return;
                }

                data.conversations.forEach(conversation => {
                    const convoDiv = document.createElement('div');
                    convoDiv.classList.add('conversation-item');

                    const queryElement = document.createElement('p');
                    queryElement.classList.add('query-text');
                    queryElement.textContent = conversation.query_text;

                    const dateElement = document.createElement('small');
                    dateElement.classList.add('text-muted');
                    const date = new Date(conversation.created_at);
                    dateElement.textContent = date.toLocaleString();

                    convoDiv.appendChild(queryElement);
                    convoDiv.appendChild(dateElement);

                    // Add click event to populate query field
                    convoDiv.addEventListener('click', function() {
                        if (queryInput) {
                            queryInput.value = conversation.query_text;
                            queryInput.focus();
                        }
                    });

                    conversationsContainer.appendChild(convoDiv);
                });
            } else {
                console.error('Failed to load conversations:', data.error);
                conversationsContainer.innerHTML = '<p class="text-muted">Could not load recent conversations</p>';
            }
        } catch (error) {
            console.error('Error loading conversations:', error);
            conversationsContainer.innerHTML = '<p class="text-muted">Could not load recent conversations</p>';
        }
    }
}

// Initialize the Government Contracting Dashboard
function initializeGovConDashboard() {
    const samSearchForm = document.getElementById('samSearchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const responseArea = document.getElementById('responseArea');
    const govConChatForm = document.getElementById('govConChatForm');
    const govConQueryInput = document.getElementById('govConQueryInput');

    // SAM.gov search functionality
    if (samSearchForm) {
        samSearchForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();

            if (!query) return;

            searchResults.innerHTML = '<div class="d-flex justify-content-center"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>';

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
                    renderSearchResults(data);
                } else {
                    searchResults.innerHTML = `<div class="alert alert-danger">${data.error || 'Failed to fetch results'}</div>`;
                }
            } catch (error) {
                console.error('Error:', error);
                searchResults.innerHTML = '<div class="alert alert-danger">Failed to connect to the server. Please try again.</div>';
            }
        });
    }

    // GovCon AI Chat functionality
    if (govConChatForm) {
        govConChatForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const query = govConQueryInput.value.trim();

            if (!query) return;

            // Show a loading indicator
            responseArea.innerHTML = '<div class="typing-indicator">Processing your request<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></div>';

            try {
                const response = await fetch('/api/query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ query: query })
                });

                const data = await response.json();

                if (response.ok) {
                    // Format and display AI response
                    displayGovConResponse(data.ai_response, query);
                    govConQueryInput.value = '';
                } else {
                    responseArea.innerHTML = `<div class="alert alert-danger">${data.error || 'Failed to process request'}</div>`;
                }
            } catch (error) {
                console.error('Error:', error);
                responseArea.innerHTML = '<div class="alert alert-danger">Failed to connect to the server. Please try again.</div>';
            }
        });
    }

    // Display formatted response in the GovCon dashboard
    function displayGovConResponse(response, query) {
        if (!responseArea) return;

        const responseContent = document.createElement('div');
        responseContent.classList.add('ai-response');

        const responseHeader = document.createElement('div');
        responseHeader.classList.add('ai-response-header');
        responseHeader.innerHTML = '<i class="fas fa-robot"></i><h5>Omi Response</h5>';

        const queryElement = document.createElement('div');
        queryElement.classList.add('user-query');
        queryElement.innerHTML = `<strong>You asked:</strong> ${query}`;

        const formattedResponse = formatGovConResponse(response);

        responseContent.appendChild(responseHeader);
        responseContent.appendChild(queryElement);
        responseContent.appendChild(formattedResponse);

        responseArea.innerHTML = '';
        responseArea.appendChild(responseContent);
    }

    // Format the response for GovCon dashboard
    function formatGovConResponse(text) {
        if (!text || text.trim() === '') {
            const placeholder = document.createElement('p');
            placeholder.textContent = "No response received. Please try again.";
            return placeholder;
        }

        const formattedDiv = document.createElement('div');

        // Convert markdown-like syntax to HTML elements
        // Code blocks
        text = text.replace(/```([a-z]*)\n([\s\S]*?)\n```/g, '<pre><code class="$1">$2</code></pre>');

        // Bold text
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Italic text
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Lists
        text = text.replace(/^\s*•\s*(.*)/gm, '<li>$1</li>');
        text = text.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

        // Headers
        text = text.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
        text = text.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
        text = text.replace(/^### (.*?)$/gm, '<h3>$1</h3>');

        // Convert line breaks to <br>
        text = text.replace(/\n/g, '<br>');

        formattedDiv.innerHTML = text;
        return formattedDiv;
    }

    // Render SAM.gov search results
    function renderSearchResults(data) {
        if (!searchResults) return;

        if (data.status === 'success' && data.results && data.results.length > 0) {
            let html = `<h5 class="mt-3 mb-3">Found ${data.count} results:</h5>`;
            html += '<div class="list-group">';

            data.results.forEach(result => {
                html += `
                <a href="${result.url}" target="_blank" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${result.title}</h5>
                        <small>${result.due_date || 'N/A'}</small>
                    </div>
                    <p class="mb-1">Agency: ${result.agency}</p>
                    <small>Solicitation #: ${result.solicitation_number}</small>
                </a>`;
            });

            html += '</div>';
            searchResults.innerHTML = html;
        } else if (data.status === 'warning') {
            searchResults.innerHTML = `<div class="alert alert-warning">${data.message}</div>`;
        } else {
            searchResults.innerHTML = '<div class="alert alert-info">No results found. Try a different search term.</div>';
        }
    }

    // Initialize SAM.gov status panel (entity registrations)
    loadSAMStatus();

    // Initialize contract awards panel
    loadContractAwards();

    // Function to load SAM.gov status
    async function loadSAMStatus() {
        const samStatusContainer = document.getElementById('samStatusContainer');
        if (!samStatusContainer) return;

        try {
            const response = await fetch('/api/sam/status');
            const data = await response.json();

            if (response.ok) {
                let html = '';
                data.entities.forEach(entity => {
                    html += `
                    <div class="card mb-3 sam-data-card">
                        <div class="card-body">
                            <h5 class="card-title">${entity.entity_name}</h5>
                            <p class="card-text">DUNS: ${entity.duns}</p>
                            <p class="card-text">Status: <span class="badge bg-success">${entity.status}</span></p>
                            <p class="card-text">Expires: ${entity.expiration_date}</p>
                            <a href="${entity.url}" target="_blank" class="btn btn-sm btn-outline-primary">View Details</a>
                        </div>
                    </div>`;
                });
                samStatusContainer.innerHTML = html;
            } else {
                samStatusContainer.innerHTML = `<div class="alert alert-danger">${data.error || 'Failed to load SAM.gov status'}</div>`;
            }
        } catch (error) {
            console.error('Error:', error);
            samStatusContainer.innerHTML = '<div class="alert alert-danger">Could not connect to the server. Please try again later.</div>';
        }
    }

    // Function to load contract awards
    async function loadContractAwards() {
        const awardsContainer = document.getElementById('awardsContainer');
        if (!awardsContainer) return;

        try {
            const response = await fetch('/api/sam/awards');
            const data = await response.json();

            if (response.ok) {
                let html = '';
                data.awards.forEach(award => {
                    html += `
                    <div class="card mb-3 award-card">
                        <div class="card-body">
                            <h5 class="card-title">${award.title}</h5>
                            <p class="card-text">Solicitation #: ${award.solicitation_number}</p>
                            <p class="card-text">Award: $${parseInt(award.award_amount).toLocaleString()}</p>
                            <p class="card-text">Awardee: ${award.awardee}</p>
                            <p class="card-text"><small class="text-muted">Award Date: ${award.award_date}</small></p>
                            <a href="${award.url}" target="_blank" class="btn btn-sm btn-outline-success">View Details</a>
                        </div>
                    </div>`;
                });
                awardsContainer.innerHTML = html;
            } else {
                awardsContainer.innerHTML = `<div class="alert alert-danger">${data.error || 'Failed to load contract awards'}</div>`;
            }
        } catch (error) {
            console.error('Error:', error);
            awardsContainer.innerHTML = '<div class="alert alert-danger">Could not connect to the server. Please try again later.</div>';
        }
    }
}