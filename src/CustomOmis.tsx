import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useAuth } from './Auth';
import './CustomOmis.css';

interface CustomOmisProps {
  onClose?: () => void;
}

interface CustomOmi {
  id: string;
  name: string;
  description: string;
  status: 'training' | 'ready' | 'idle';
  documentsCount: number;
  embeddingsCount: number;
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

const CustomOmis: React.FC<CustomOmisProps> = ({ onClose }) => {
  const { session } = useAuth();
  const [activeTab, setActiveTab] = useState<'bots' | 'documents' | 'training'>('bots');
  const [selectedBot, setSelectedBot] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newBotName, setNewBotName] = useState('');
  const [newBotDescription, setNewBotDescription] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [customOmis, setCustomOmis] = useState<CustomOmi[]>([
    {
      id: '1',
      name: 'Customer Support Bot',
      description: 'Trained on support tickets and documentation',
      status: 'ready',
      documentsCount: 45,
      embeddingsCount: 1250,
      accuracy: 94
    },
    {
      id: '2',
      name: 'Technical Documentation Assistant',
      description: 'Specialized in codebase and API documentation',
      status: 'training',
      documentsCount: 23,
      embeddingsCount: 890,
      accuracy: 87
    }
  ]);

  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      name: 'Product Manual.pdf',
      type: 'PDF',
      size: 2400000,
      uploadedAt: '2025-11-04T10:30:00Z',
      status: 'indexed',
      chunkCount: 45
    },
    {
      id: '2',
      name: 'FAQ Database.txt',
      type: 'TXT',
      size: 150000,
      uploadedAt: '2025-11-04T09:15:00Z',
      status: 'indexed',
      chunkCount: 23
    }
  ]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    setIsUploading(true);
    Array.from(files).forEach((file) => {
      const newDoc: Document = {
        id: Date.now().toString(),
        name: file.name,
        type: file.name.split('.').pop()?.toUpperCase() || 'FILE',
        size: file.size,
        uploadedAt: new Date().toISOString(),
        status: 'processing',
        chunkCount: 0
      };
      setDocuments(prev => [...prev, newDoc]);
    });
    setTimeout(() => setIsUploading(false), 2000);
  };

  const handleCreateBot = () => {
    if (!newBotName.trim()) return;
    const newBot: CustomOmi = {
      id: Date.now().toString(),
      name: newBotName,
      description: newBotDescription,
      status: 'idle',
      documentsCount: 0,
      embeddingsCount: 0,
      accuracy: 0
    };
    setCustomOmis(prev => [...prev, newBot]);
    setNewBotName('');
    setNewBotDescription('');
    setShowCreateModal(false);
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

  return (
    <div className="custom-omis-container" ref={containerRef}>
      <header className="custom-omis-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">🤖</span>
            <span className="logo-text">Custom Omi Training</span>
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
            <button 
              className={'header-tab' + (activeTab === 'training' ? ' active' : '')}
              onClick={() => setActiveTab('training')}
            >
              <span className="tab-icon">⚡</span>
              Training Dashboard
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
                <p className="tab-subtitle">Create and manage specialized AI assistants trained on your data</p>
              </div>
              <button className="create-bot-btn" onClick={() => setShowCreateModal(true)}>
                <span className="btn-icon">+</span>
                Create New Bot
              </button>
            </div>
            <div className="bots-grid">
              {customOmis.map((bot) => (
                <div key={bot.id} className={'bot-card' + (selectedBot === bot.id ? ' selected' : '')} onClick={() => setSelectedBot(bot.id)}>
                  <div className="bot-card-header">
                    <div className="bot-icon">🤖</div>
                    <div className="bot-status-badge" style={{ backgroundColor: getStatusColor(bot.status) }}>{bot.status}</div>
                  </div>
                  <h3 className="bot-name">{bot.name}</h3>
                  <p className="bot-description">{bot.description}</p>
                  <div className="bot-stats">
                    <div className="bot-stat"><span className="stat-label">Documents</span><span className="stat-value">{bot.documentsCount}</span></div>
                    <div className="bot-stat"><span className="stat-label">Embeddings</span><span className="stat-value">{bot.embeddingsCount}</span></div>
                    <div className="bot-stat"><span className="stat-label">Accuracy</span><span className="stat-value">{bot.accuracy}%</span></div>
                  </div>
                  <div className="bot-card-actions">
                    <button className="bot-action-btn"><span>⚙️</span> Configure</button>
                    <button className="bot-action-btn"><span>💬</span> Test</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="documents-tab">
            <div className="tab-header">
              <div>
                <h2 className="tab-title">Knowledge Base Documents</h2>
                <p className="tab-subtitle">Upload and manage training documents for RAG fine-tuning</p>
              </div>
              <div className="header-actions">
                <div className="search-box">
                  <span className="search-icon">🔍</span>
                  <input 
                    type="text" 
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button 
                  className="upload-btn" 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <div className="spinner-small"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">📤</span>
                      Upload Documents
                    </>
                  )}
                </button>
                <input 
                  ref={fileInputRef}
                  type="file" 
                  multiple 
                  accept=".pdf,.txt,.md,.json,.csv"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            <div className="documents-table-container">
              <table className="documents-table">
                <thead>
                  <tr>
                    <th>Document Name</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Chunks</th>
                    <th>Status</th>
                    <th>Uploaded</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id}>
                      <td>
                        <div className="doc-name-cell">
                          <span className="doc-icon">📄</span>
                          {doc.name}
                        </div>
                      </td>
                      <td><span className="doc-type-badge">{doc.type}</span></td>
                      <td>{formatFileSize(doc.size)}</td>
                      <td>{doc.chunkCount || '-'}</td>
                      <td>
                        <span 
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(doc.status) }}
                        >
                          {doc.status}
                        </span>
                      </td>
                      <td>{formatDate(doc.uploadedAt)}</td>
                      <td>
                        <div className="table-actions">
                          <button className="action-btn" title="View">👁️</button>
                          <button className="action-btn" title="Download">⬇️</button>
                          <button className="action-btn delete" title="Delete">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="upload-instructions">
              <h4>Supported File Types:</h4>
              <div className="file-types">
                <span className="file-type">PDF</span>
                <span className="file-type">TXT</span>
                <span className="file-type">MD</span>
                <span className="file-type">JSON</span>
                <span className="file-type">CSV</span>
              </div>
              <p className="instructions-text">
                Documents are automatically chunked and embedded using OpenAI embeddings. 
                Each chunk is stored with vector representations for semantic search and RAG.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'training' && (
          <div className="training-tab">
            <div className="tab-header">
              <div>
                <h2 className="tab-title">Training Dashboard</h2>
                <p className="tab-subtitle">Monitor and configure RAG training processes</p>
              </div>
            </div>

            <div className="training-grid">
              <div className="training-card">
                <div className="card-icon">📊</div>
                <h3>Embedding Generation</h3>
                <div className="training-stats">
                  <div className="stat-row">
                    <span>Total Documents:</span>
                    <span className="stat-value">{documents.length}</span>
                  </div>
                  <div className="stat-row">
                    <span>Processed Chunks:</span>
                    <span className="stat-value">{documents.reduce((acc, doc) => acc + doc.chunkCount, 0)}</span>
                  </div>
                  <div className="stat-row">
                    <span>Pending:</span>
                    <span className="stat-value">{documents.filter(d => d.status === 'processing').length}</span>
                  </div>
                </div>
                <button className="training-action-btn">
                  <span>⚡</span> Start Batch Processing
                </button>
              </div>

              <div className="training-card">
                <div className="card-icon">🎯</div>
                <h3>Vector Database</h3>
                <div className="training-stats">
                  <div className="stat-row">
                    <span>Total Vectors:</span>
                    <span className="stat-value">2,140</span>
                  </div>
                  <div className="stat-row">
                    <span>Dimensions:</span>
                    <span className="stat-value">1536</span>
                  </div>
                  <div className="stat-row">
                    <span>Index Status:</span>
                    <span className="stat-value ready">Active</span>
                  </div>
                </div>
                <button className="training-action-btn">
                  <span>🔄</span> Rebuild Index
                </button>
              </div>

              <div className="training-card">
                <div className="card-icon">🧠</div>
                <h3>Fine-Tuning</h3>
                <div className="training-stats">
                  <div className="stat-row">
                    <span>Active Jobs:</span>
                    <span className="stat-value">1</span>
                  </div>
                  <div className="stat-row">
                    <span>Completed:</span>
                    <span className="stat-value">5</span>
                  </div>
                  <div className="stat-row">
                    <span>Avg. Accuracy:</span>
                    <span className="stat-value">91%</span>
                  </div>
                </div>
                <button className="training-action-btn">
                  <span>🚀</span> Start Fine-Tuning
                </button>
              </div>
            </div>

            <div className="rag-config-section">
              <h3>RAG Configuration</h3>
              <div className="config-grid">
                <div className="config-item">
                  <label>Chunk Size</label>
                  <input type="number" defaultValue={1000} />
                  <span className="config-hint">Tokens per chunk</span>
                </div>
                <div className="config-item">
                  <label>Chunk Overlap</label>
                  <input type="number" defaultValue={200} />
                  <span className="config-hint">Overlapping tokens</span>
                </div>
                <div className="config-item">
                  <label>Top K Results</label>
                  <input type="number" defaultValue={5} />
                  <span className="config-hint">Retrieval results</span>
                </div>
                <div className="config-item">
                  <label>Similarity Threshold</label>
                  <input type="number" step="0.01" defaultValue={0.7} />
                  <span className="config-hint">Min similarity score</span>
                </div>
              </div>
              <button className="save-config-btn">
                <span>💾</span> Save Configuration
              </button>
            </div>
          </div>
        )}
      </div>

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
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea 
                  placeholder="Describe the purpose and specialty of this bot..."
                  value={newBotDescription}
                  onChange={(e) => setNewBotDescription(e.target.value)}
                  rows={4}
                />
              </div>
              <div className="modal-actions">
                <button 
                  className="modal-btn cancel"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="modal-btn create"
                  onClick={handleCreateBot}
                  disabled={!newBotName.trim()}
                >
                  Create Bot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomOmis;
