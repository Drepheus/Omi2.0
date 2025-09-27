import { useState, useEffect } from 'react';
import FormattedText from './FormattedText';
import Dock from './Dock';
import InfiniteScroll from './InfiniteScroll';
import InfiniteMenu from './InfiniteMenu';
import './SplashPage.css';

// Gemini API configuration
const GEMINI_API_KEY = 'AIzaSyAPUrVUTLGnhPOY6KFypgSqqFB3hRKLEug';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

function SplashPage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showAIModels, setShowAIModels] = useState(false);
  const [viewMode, setViewMode] = useState<'chat' | 'models'>('chat');
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [secondaryModel, setSecondaryModel] = useState<string | null>(null);
  const [secondaryMessages, setSecondaryMessages] = useState<ChatMessage[]>([]);
  const [secondaryLoading, setSecondaryLoading] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);

  // Feature buttons data
  const featureButtons = [
    {
      name: 'Compare',
      icon: '⚖',
      description: 'Instantly query multiple LLMs side-by-side',
      onClick: () => {
        const isActivating = selectedFeature !== 'Compare';
        setSelectedFeature(isActivating ? 'Compare' : null);
        setIsCompareMode(isActivating);
        if (!isActivating) {
          setSecondaryMessages([]);
          setSecondaryModel(null);
        }
        console.log('Compare Minds clicked');
      }
    },
    {
      name: 'Synthesize',
      icon: '⟳',
      description: 'Merge responses into one distilled insight',
      onClick: () => {
        setSelectedFeature(selectedFeature === 'Synthesize' ? null : 'Synthesize');
        console.log('Synthesize clicked');
      }
    },
    {
      name: 'DeepSearch',
      icon: '◎',
      description: 'Explore beyond surface answers with advanced queries',
      onClick: () => {
        setSelectedFeature(selectedFeature === 'DeepSearch' ? null : 'DeepSearch');
        console.log('DeepSearch clicked');
      }
    },
    {
      name: 'Create',
      icon: '◇',
      description: 'Generate visuals, stories, or creative ideas',
      onClick: () => {
        setShowCreateMenu(true);
        console.log('Create clicked - showing infinite menu');
      }
    },
    {
      name: 'Personas',
      icon: '◐',
      description: 'Shift Omi\'s voice (teacher, critic, explorer, poet)',
      onClick: () => {
        setSelectedFeature(selectedFeature === 'Personas' ? null : 'Personas');
        console.log('Personas clicked');
      }
    },
    {
      name: 'Pulse',
      icon: '◆',
      description: 'Latest news, trends, or live data insights',
      onClick: () => {
        setSelectedFeature(selectedFeature === 'Pulse' ? null : 'Pulse');
        console.log('Pulse clicked');
      }
    }
  ];

  useEffect(() => {
    // After 3 seconds, start fading out welcome text
    const timer = setTimeout(() => {
      setShowWelcome(false);
      // After fade out completes, show chat interface
      setTimeout(() => {
        setShowChat(true);
      }, 800); // Match CSS transition duration
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle Escape key to close AI Models screen and Create menu
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showAIModels) {
        setShowAIModels(false);
      } else if (event.key === 'Escape' && showCreateMenu) {
        setShowCreateMenu(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [showAIModels, showCreateMenu]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFileAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setAttachedFiles(prev => [...prev, ...newFiles]);
    }
    // Reset the input so the same file can be selected again
    e.target.value = '';
  };

  const removeAttachedFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const callGeminiAPI = async (message: string): Promise<string> => {
    try {
      console.log('Sending message to Gemini:', message);
      
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Please respond to this message using markdown formatting when appropriate. Use **bold** for emphasis, *italic* for subtle emphasis, \`code\` for technical terms, and • for bullet points when listing items. Here's the message: ${message}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!responseText) {
        console.error('No response text found in API response:', data);
        return 'Sorry, I could not generate a response. Please try again.';
      }
      
      return responseText;
    } catch (error) {
      console.error('Detailed error calling Gemini API:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      return `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`;
    }
  };

  const callSecondaryAPI = async (message: string, model: string): Promise<string> => {
    try {
      // For now, we'll use the same Gemini API but with different prompting
      // In a real implementation, you'd route to different models based on the model parameter
      console.log(`Sending message to ${model}:`, message);
      
      const modelPrompts = {
        'Claude': `As Claude (Anthropic's AI), please respond to: ${message}`,
        'GPT-4': `As GPT-4 (OpenAI's model), please respond to: ${message}`,
        'Gemini Pro': `As Gemini Pro (Google's AI), please respond to: ${message}`,
        'Llama': `As Llama (Meta's AI), please respond to: ${message}`
      };
      
      const prompt = modelPrompts[model as keyof typeof modelPrompts] || `Please respond to: ${message}`;
      return await callGeminiAPI(prompt);
    } catch (error) {
      console.error(`Error calling ${model}:`, error);
      return `Sorry, I encountered an error with ${model}. Please try again.`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      const userMessage: ChatMessage = {
        role: 'user',
        content: inputValue.trim(),
        timestamp: new Date()
      };

      // Add user message to both chats
      setMessages(prev => [...prev, userMessage]);
      if (isCompareMode) {
        setSecondaryMessages(prev => [...prev, userMessage]);
      }
      
      setInputValue('');
      setAttachedFiles([]); // Clear attached files
      setIsLoading(true);
      
      // Start secondary loading if in compare mode
      if (isCompareMode && secondaryModel) {
        setSecondaryLoading(true);
      }

      try {
        // Get primary AI response
        const aiResponse = await callGeminiAPI(userMessage.content);
        console.log('Raw AI Response:', aiResponse);
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: aiResponse,
          timestamp: new Date()
        };

        // Add primary AI response to chat
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);

        // Get secondary AI response if in compare mode
        if (isCompareMode && secondaryModel) {
          const secondaryResponse = await callSecondaryAPI(userMessage.content, secondaryModel);
          console.log('Raw Secondary AI Response:', secondaryResponse);
          const secondaryAssistantMessage: ChatMessage = {
            role: 'assistant',
            content: secondaryResponse,
            timestamp: new Date()
          };

          // Add secondary AI response to secondary chat
          setSecondaryMessages(prev => [...prev, secondaryAssistantMessage]);
          setSecondaryLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        setSecondaryLoading(false);
        console.error('Error in handleSubmit:', error);
      }
    }
  };

  // Dock items configuration
  const dockItems = [
    {
      icon: '⌘',
      label: 'Command',
      onClick: () => {
        setViewMode('models');
        setShowAIModels(true);
        // Smooth scroll animation to models view
        setTimeout(() => {
          const aiModelsSection = document.getElementById('ai-models-section');
          if (aiModelsSection) {
            // Smooth scroll to center the models section on screen
            aiModelsSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'center'
            });
          }
        }, 100);
      }
    },
    {
      icon: '◐',
      label: 'Theme',
      onClick: () => console.log('Theme clicked')
    },
    {
      icon: '⚡',
      label: 'Quick',
      onClick: () => console.log('Quick clicked')
    },
    {
      icon: '⚙',
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    }
  ];

  // Handle AI model selection
  const handleModelSelect = (modelName: string) => {
    setSelectedModel(modelName);
    
    // Add fade out animation to models section
    const aiModelsSection = document.getElementById('ai-models-section');
    if (aiModelsSection) {
      aiModelsSection.classList.add('fade-out');
    }

    // After fade out, scroll back to chat and hide models
    setTimeout(() => {
      setViewMode('chat');
      setShowAIModels(false);
      
      // Smooth scroll back to chat interface
      const chatInterface = document.querySelector('.chat-interface');
      if (chatInterface) {
        chatInterface.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
      
      // Remove fade out class after animation
      setTimeout(() => {
        if (aiModelsSection) {
          aiModelsSection.classList.remove('fade-out');
        }
      }, 100);
    }, 300);
  };

  // AI Models data - simple names only
  const aiModelsData = ['GPT', 'Claude', 'Gemini', 'Grok', 'DeepSeek', 'Perplexity', 'Qwen'];

  // Transform data for InfiniteScroll component
  const infiniteScrollItems = aiModelsData.map((modelName) => ({
    content: (
      <div 
        className="ai-model-card clickable" 
        onClick={() => handleModelSelect(modelName)}
      >
        {modelName}
      </div>
    )
  }));

  return (
    <>
      <div className="splash-page">
        {showWelcome && (
          <div className={`splash-content ${!showWelcome ? 'fade-out' : ''}`}>
            <h1 className="splash-title">Welcome to Omi</h1>
            <p className="splash-description">
              Begin your new conversational experience
            </p>
          </div>
        )}

        {showChat && (
        <div className="chat-interface fade-in">
          <div className="chat-header">
            <h1 className="chat-title">Omi AI</h1>
            {selectedModel && (
              <div className="selected-model">
                Model: {selectedModel}
              </div>
            )}
          </div>

          {/* Feature Buttons - Above Dialog Box */}
          <div className="feature-buttons-horizontal">
            {featureButtons.map((button, index) => {
              const isSelected = selectedFeature === button.name;
              return (
                <button
                  key={button.name}
                  className={`feature-button-horizontal ${isSelected ? 'selected' : 'unselected'}`}
                  onClick={button.onClick}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className={isSelected ? "feature-button-selected-text" : "feature-button-static-text"}>
                    {button.icon} {button.name}
                  </span>
                  <div className="feature-button-tooltip">
                    {button.description}
                  </div>
                </button>
              );
            })}
          </div>


          
          {messages.length > 0 && (
            <div className={`chat-container ${isCompareMode ? 'compare-mode' : ''}`}>
              {/* Primary Chat Panel */}
              <div className="chat-panel primary-panel">
                <div className="panel-header">
                  <h3>{selectedModel || 'Primary AI'}</h3>
                </div>
                <div className="chat-messages">
                  {messages.map((message, index) => (
                    <div key={index} className={`message ${message.role}`}>
                      <div className="message-content">
                        {message.role === 'assistant' ? (
                          <FormattedText 
                            text={message.content} 
                            delay={0.2}
                          />
                        ) : (
                          message.content
                        )}
                      </div>
                      <div className="message-time">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="message assistant loading">
                      <div className="message-content">
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Secondary Chat Panel (Compare Mode) */}
              {isCompareMode && (
                <div className="chat-panel secondary-panel">
                  <div className="panel-header">
                    <h3>
                      {secondaryModel || (
                        <select 
                          className="model-selector"
                          value={secondaryModel || ''}
                          onChange={(e) => setSecondaryModel(e.target.value)}
                        >
                          <option value="">Select Model</option>
                          <option value="Claude">Claude</option>
                          <option value="GPT-4">GPT-4</option>
                          <option value="Gemini Pro">Gemini Pro</option>
                          <option value="Llama">Llama</option>
                        </select>
                      )}
                    </h3>
                  </div>
                  <div className="chat-messages">
                    {secondaryMessages.map((message, index) => (
                      <div key={index} className={`message ${message.role}`}>
                        <div className="message-content">
                          {message.role === 'assistant' ? (
                            <FormattedText 
                              text={message.content} 
                              delay={0.2}
                            />
                          ) : (
                            message.content
                          )}
                        </div>
                        <div className="message-time">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    ))}
                    {secondaryLoading && (
                      <div className="message assistant loading">
                        <div className="message-content">
                          <div className="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          <form className="chat-form" onSubmit={handleSubmit}>
            {/* Attached files display */}
            {attachedFiles.length > 0 && (
              <div className="attached-files">
                {attachedFiles.map((file, index) => (
                  <div key={index} className="attached-file">
                    <span className="file-icon">
                      {file.type.startsWith('image/') ? '🖼️' : 
                       file.type.startsWith('video/') ? '🎥' : 
                       file.type.includes('pdf') ? '📄' : '📎'}
                    </span>
                    <span className="file-name">{file.name}</span>
                    <button
                      type="button"
                      className="remove-file"
                      onClick={() => removeAttachedFile(index)}
                      title="Remove file"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="chat-input-container">
              <input
                type="file"
                id="file-input"
                className="file-input"
                onChange={handleFileAttach}
                multiple
                accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                style={{ display: 'none' }}
              />
              <button
                type="button"
                className="attach-file-btn"
                onClick={() => document.getElementById('file-input')?.click()}
                title="Attach files"
                disabled={isLoading}
              >
                📎
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="chat-input"
                autoFocus
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="chat-submit"
                disabled={!inputValue.trim() || isLoading}
              >
                {isLoading ? (
                  <div className="loading-spinner">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                      <path d="M12 2A10 10 0 0 1 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L22 2L13 21L11 13L2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* AI Models Section */}
      {showAIModels && (
        <div className="ai-models-overlay" onClick={() => setShowAIModels(false)}>
          <div id="ai-models-section" className={`ai-models-section ${showAIModels ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
            <h2 className="ai-models-title">Popular AI Models</h2>
              <div className="ai-models-container">
                <InfiniteScroll 
                  items={infiniteScrollItems}
                  width="100%"
                  maxHeight="400px"
                  itemMinHeight={120}
                  isTilted={true}
                  tiltDirection="left"
                  autoplay={true}
                  autoplaySpeed={1}
                  autoplayDirection="up"
                  pauseOnHover={true}
                />
              </div>
          </div>
        </div>
      )}
      </div>
      
      {/* Dock - always visible - Outside scrollable container */}
      <Dock items={dockItems} />
      
      {/* Infinite Menu Overlay */}
      <InfiniteMenu 
        isVisible={showCreateMenu} 
        onClose={() => setShowCreateMenu(false)} 
      />
    </>
  );
}

export default SplashPage;