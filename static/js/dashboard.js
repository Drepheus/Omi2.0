document.addEventListener('DOMContentLoaded', function() {
    const queryForm = document.getElementById('queryForm');
    const queryInput = document.getElementById('queryInput');
    const responseArea = document.getElementById('responseArea');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    if (queryForm) {
        queryForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const query = queryInput.value.trim();
            if (!query) return;
            
            try {
                loadingSpinner.classList.remove('d-none');
                responseArea.innerHTML = '';
                
                const response = await fetch('/api/query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ query })
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    displayResponse(data);
                    updateQueryHistory(query, data.ai_response);
                } else {
                    throw new Error(data.error || 'Failed to process query');
                }
            } catch (error) {
                displayError(error.message);
            } finally {
                loadingSpinner.classList.add('d-none');
            }
        });
    }
    
    function displayResponse(data) {
        const responseHtml = `
            <div class="card dashboard-card mb-3">
                <div class="card-body">
                    <h5 class="card-title">AI Response</h5>
                    <p class="card-text">${data.ai_response}</p>
                    
                    <h5 class="card-title mt-4">Related SAM.gov Data</h5>
                    ${formatSamData(data.sam_data)}
                </div>
            </div>
        `;
        responseArea.innerHTML = responseHtml;
    }
    
    function formatSamData(samData) {
        if (!samData || samData.error) {
            return '<p class="text-muted">No relevant SAM.gov data found</p>';
        }
        
        return samData.map(entity => `
            <div class="border-top pt-3 mt-3">
                <p><strong>Entity:</strong> ${entity.entity_name || 'N/A'}</p>
                <p><strong>DUNS:</strong> ${entity.duns || 'N/A'}</p>
                <p><strong>Status:</strong> ${entity.status || 'N/A'}</p>
            </div>
        `).join('');
    }
    
    function displayError(message) {
        responseArea.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${message}
            </div>
        `;
    }
    
    function updateQueryHistory(query, response) {
        const historyContainer = document.getElementById('queryHistory');
        if (!historyContainer) return;
        
        const historyItem = document.createElement('div');
        historyItem.className = 'card dashboard-card mb-3';
        historyItem.innerHTML = `
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">Query:</h6>
                <p>${query}</p>
                <h6 class="card-subtitle mb-2 text-muted">Response:</h6>
                <p>${response}</p>
            </div>
        `;
        
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }
});
