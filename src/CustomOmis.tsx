"use client";

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useAuth } from '@/context/auth-context';
import * as ragService from './ragService';

interface CustomOmisProps {
  onClose?: () => void;
}

interface CustomOmi {
  id: string;
  name: string;
  description: string;
  status: 'training' | 'ready' | 'idle';
  documentsCount?: number;
  embeddingsCount?: number;
  accuracy: number;
}

interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: string;
  status: 'processing' | 'indexed' | 'failed';
  chunkCount: number;
}

const DOCUMENT_ACCEPT_STRING = '.txt,.md,.markdown,.json,.yaml,.yml,.csv,.js,.jsx,.ts,.tsx,.py,.cs,.html,.htm,.css';
const DOCUMENT_TYPE_BADGES = ['TXT', 'MD', 'JSON', 'YAML', 'CSV', 'JS/TS', 'PY/CS', 'HTML/CSS'];

const CustomOmis: React.FC<CustomOmisProps> = ({ onClose }) => {
  const { session } = useAuth();
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model', parts: { text: string }[] }[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<'bots' | 'documents' | 'training'>('bots');
  const [selectedBot, setSelectedBot] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [newBotName, setNewBotName] = useState('');
  const [newBotDescription, setNewBotDescription] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isCreatingBot, setIsCreatingBot] = useState(false);
  const [createBotError, setCreateBotError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [customOmis, setCustomOmis] = useState<CustomOmi[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);

  // Load bots on mount
  useEffect(() => {
    if (session?.user?.id) {
      loadBots();
    }
  }, [session?.user?.id]);

  // Load documents when a bot is selected or tab changes
  useEffect(() => {
    if (session?.user?.id && activeTab === 'documents') {
      loadDocuments();
    }
  }, [session?.user?.id, activeTab, selectedBot]);

  const loadBots = async () => {
    if (!session?.user?.id) return;
    setIsLoading(true);
    try {
      const bots = await ragService.loadCustomOmis(session.user.id);
      setCustomOmis(bots);
    } catch (error) {
      console.error('Failed to load bots:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadDocuments = async () => {
    if (!session?.user?.id) return;
    setIsLoading(true);
    try {
      const docs = await ragService.loadDocuments(selectedBot || undefined);
      setDocuments(docs.map(doc => ({
        id: doc.id,
        name: doc.name,
        type: doc.type,
        size: doc.size,
        uploadedAt: doc.uploaded_at,
        status: doc.status,
        chunkCount: doc.chunk_count
      })));
    } catch (error) {
      console.error('Failed to load documents:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  const handleCreateBot = async () => {
    if (!newBotName.trim()) {
      setCreateBotError('Please enter a bot name.');
      return;
    }

    if (!session?.user?.id) {
      setCreateBotError('You must be signed in to create a bot.');
      return;
    }

    setIsCreatingBot(true);
    setCreateBotError(null);
    try {
      const newBot = await ragService.createCustomOmi(session.user.id, newBotName, newBotDescription);
      setNewBotName('');
      setNewBotDescription('');
      setShowCreateModal(false);
      await loadBots();
      setSelectedBot(newBot.id);
      setActiveTab('documents');
    } catch (error: any) {
      console.error('Failed to create bot:', error);
      setCreateBotError(error.message || 'Failed to create bot.');
    } finally {
      setIsCreatingBot(false);
    }
  };

  const handleDeleteBot = async (botId: string, botName: string) => {
    if (!confirm(`Are you sure you want to delete "${botName}"?`)) return;

    try {
      await ragService.deleteBot(botId);
      alert('Bot deleted successfully');
      if (selectedBot === botId) {
        setSelectedBot(null);
      }
      await loadBots();
    } catch (error: any) {
      console.error('Failed to delete bot:', error);
      alert(`Failed to delete bot: ${error.message}`);
    }
  };

  const handleDeleteDocument = async (docId: string, docName: string) => {
    if (!confirm(`Are you sure you want to delete "${docName}"?`)) return;
    try {
      await ragService.deleteDocument(docId);
      await loadDocuments();
    } catch (error: any) {
      console.error('Failed to delete document:', error);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return '#4ade80';
      case 'training': return '#fbbf24';
      case 'processing': return '#60a5fa';
      case 'indexed': return '#4ade80';
      case 'failed': return '#f87171';
      default: return '#94a3b8';
    }
  };

  const handleTestBot = (bot: CustomOmi) => {
    setSelectedBot(bot.id);
    setChatHistory([]);
    setShowChatModal(true);
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim() || isChatLoading) return;

    const userMsg = chatInput;
    setChatInput('');
    setChatHistory(prev => [...prev, { role: 'user', parts: [{ text: userMsg }] }]);
    setIsChatLoading(true);

    try {
      // Create a temporary placeholder for the model response
      setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: '' }] }]);

      await ragService.chatWithVertexRAG(
        userMsg,
        chatHistory, // Pass previous history
        (chunk) => {
          setChatHistory(prev => {
            const newHistory = [...prev];
            const lastMsg = newHistory[newHistory.length - 1];
            if (lastMsg.role === 'model') {
              lastMsg.parts[0].text += chunk;
            }
            return newHistory;
          });
          // Scroll to bottom
          chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      );
    } catch (error) {
      console.error('Chat error:', error);
      setChatHistory(prev => [...prev, { role: 'model', parts: [{ text: 'Error: Failed to get response from Vertex AI.' }] }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // ... existing handlers ...

  return (
    <div className="custom-omis-container" ref={containerRef}>
      {/* ... existing header ... */}
      <header className="custom-omis-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">🤖</span>
            <span className="logo-text">Custom Omi Training (Vertex AI)</span>
          </div>
          <nav className="header-tabs">
            <button
              className={'header-tab' + (activeTab === 'bots' ? ' active' : '')}
              onClick={() => setActiveTab('bots')}
            >
              <span className="tab-icon">🤖</span>
              My Bots
            </button>
            <button
              className={'header-tab' + (activeTab === 'documents' ? ' active' : '')}
              onClick={() => setActiveTab('documents')}
            >
              <span className="tab-icon">📄</span>
              Knowledge Base
            </button>
          </nav>
        </div>
        <div className="header-right">
          {onClose && (
            <button className="close-btn" onClick={onClose}>✕</button>
          )}
        </div>
      </header>

      <div className="custom-omis-main">
        {activeTab === 'bots' && (
          <div className="bots-tab">
            <div className="tab-header">
              <div>
                <h2 className="tab-title">Your Custom Omi Bots</h2>
                <p className="tab-subtitle">Manage AI assistants powered by Google Vertex AI Grounding</p>
              </div>
              <button className="create-bot-btn" onClick={() => setShowCreateModal(true)}>
                <span className="btn-icon">+</span>
                Create New Bot
              </button>
            </div>
            <div className="bots-grid">
              {customOmis.length === 0 ? (
                <div style={{
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '60px 40px',
                  background: 'rgba(16,16,16,0.6)',
                  borderRadius: '16px',
                  border: '1px solid rgba(192,192,192,0.15)'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤖</div>
                  <h3 style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '12px', fontSize: '20px', fontWeight: '400' }}>
                    Create Your First Custom Omi Bot
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
                    Custom Omi bots use Google Vertex AI to answer questions based on your uploaded documents.
                  </p>
                  <button
                    className="create-bot-btn"
                    onClick={() => setShowCreateModal(true)}
                    style={{ fontSize: '16px', padding: '14px 28px' }}
                  >
                    <span className="btn-icon">+</span>
                    Create Your First Bot
                  </button>
                </div>
              ) : (
                customOmis.map((bot) => (
                  <div key={bot.id} className={'bot-card' + (selectedBot === bot.id ? ' selected' : '')} onClick={() => setSelectedBot(bot.id)}>
                    <div className="bot-card-header">
                      <div className="bot-icon">🤖</div>
                      <div className="bot-status-badge" style={{ backgroundColor: getStatusColor(bot.status) }}>{bot.status}</div>
                    </div>
                    <h3 className="bot-name">{bot.name}</h3>
                    <p className="bot-description">{bot.description}</p>
                    <div className="bot-stats">
                      <div className="bot-stat"><span className="stat-label">Documents</span><span className="stat-value">{bot.documentsCount || 0}</span></div>
                      <div className="bot-stat"><span className="stat-label">Source</span><span className="stat-value">Vertex AI</span></div>
                    </div>
                    <div className="bot-card-actions">
                      <button
                        className="bot-action-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedBot(bot.id);
                          setActiveTab('documents');
                        }}
                      >
                        <span>📄</span> Manage Docs
                      </button>
                      <button
                        className="bot-action-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTestBot(bot);
                        }}
                      >
                        <span>💬</span> Test Bot
                      </button>
                      <button
                        className="bot-action-btn delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteBot(bot.id, bot.name);
                        }}
                        title="Delete bot"
                      >
                        <span>🗑️</span> Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="documents-tab">
            <div className="tab-header">
              <div>
                <h2 className="tab-title">Knowledge Base Documents</h2>
                <p className="tab-subtitle">Upload documents to your Vertex AI Data Store</p>
                {selectedBot && customOmis.length > 0 && (
                  <div style={{ marginTop: '8px', padding: '8px 12px', background: 'rgba(192,192,192,0.1)', borderRadius: '8px', display: 'inline-block' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Selected Bot: </span>
                    <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: '500' }}>
                      {customOmis.find(b => b.id === selectedBot)?.name || 'Unknown'}
                    </span>
                  </div>
                )}
              </div>
              <div className="header-actions">
                <button
                  className="upload-btn"
                  onClick={() => {
                    alert('To upload documents to Vertex AI, please use the Google Cloud Console for now, or configure the GCS upload bucket in settings.');
                  }}
                >
                  <span className="btn-icon">☁️</span>
                  Manage in Cloud Console
                </button>
              </div>
            </div>

            <div className="documents-table-container">
              <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
                <p>Documents are managed via your Google Cloud Vertex AI Data Store.</p>
                <p style={{ marginTop: '10px', fontSize: '12px' }}>Data Store ID: {process.env.NEXT_PUBLIC_VERTEX_DATA_STORE_ID || 'Not Configured'}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Bot Modal */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Create New Custom Omi</h2>
            <div className="modal-form">
              <div className="form-group">
                <label>Bot Name</label>
                <input
                  type="text"
                  placeholder="e.g., Customer Support Assistant"
                  value={newBotName}
                  onChange={(e) => setNewBotName(e.target.value)}
                  disabled={isCreatingBot}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Describe the purpose and specialty of this bot..."
                  value={newBotDescription}
                  onChange={(e) => setNewBotDescription(e.target.value)}
                  rows={4}
                  disabled={isCreatingBot}
                />
              </div>
              {createBotError && (
                <div style={{ color: '#f87171', marginBottom: 12, fontSize: 14 }}>{createBotError}</div>
              )}
              <div className="modal-actions">
                <button
                  className="modal-btn cancel"
                  onClick={() => setShowCreateModal(false)}
                  disabled={isCreatingBot}
                >
                  Cancel
                </button>
                <button
                  className="modal-btn create"
                  onClick={handleCreateBot}
                  disabled={!newBotName.trim() || isCreatingBot}
                >
                  {isCreatingBot ? 'Creating...' : 'Create Bot'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat / Test Modal */}
      {showChatModal && (
        <div className="modal-overlay" onClick={() => setShowChatModal(false)}>
          <div className="modal-content chat-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', height: '80vh', display: 'flex', flexDirection: 'column' }}>
            <div className="modal-header" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>Test Bot: {customOmis.find(b => b.id === selectedBot)?.name}</h2>
              <button onClick={() => setShowChatModal(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>✕</button>
            </div>

            <div className="chat-history" style={{ flex: 1, overflowY: 'auto', marginBottom: '16px', paddingRight: '8px' }}>
              {chatHistory.length === 0 && (
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', marginTop: '40px' }}>
                  Start a conversation to test your RAG bot.
                </div>
              )}
              {chatHistory.map((msg, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backgroundColor: msg.role === 'user' ? '#3b82f6' : 'rgba(255,255,255,0.1)',
                    color: 'white'
                  }}>
                    {msg.parts[0].text}
                  </div>
                </div>
              ))}
              {isChatLoading && chatHistory[chatHistory.length - 1]?.role === 'user' && (
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ padding: '12px 16px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="chat-input-area" style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a question about your documents..."
                style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(0,0,0,0.3)', color: 'white' }}
                disabled={isChatLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!chatInput.trim() || isChatLoading}
                style={{ padding: '0 20px', borderRadius: '8px', backgroundColor: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer', opacity: (!chatInput.trim() || isChatLoading) ? 0.5 : 1 }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomOmis;
