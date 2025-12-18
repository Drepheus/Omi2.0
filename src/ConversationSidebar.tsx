"use client";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DbConversation } from './databaseService'

interface ConversationSidebarProps {
  conversations: DbConversation[]
  currentConversationId: string | null
  onSelectConversation: (conversationId: string) => void
  onNewConversation: () => void
  onDeleteConversation: (conversationId: string) => void
  isOpen: boolean
  onClose: () => void
}

export default function ConversationSidebar({
  conversations,
  currentConversationId,
  onSelectConversation,
  onNewConversation,
  onDeleteConversation,
  isOpen,
  onClose
}: ConversationSidebarProps) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // Close sidebar with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleDelete = async (e: React.MouseEvent, conversationId: string) => {
    e.stopPropagation()
    if (window.confirm('Delete this conversation? This cannot be undone.')) {
      setDeletingId(conversationId)
      await onDeleteConversation(conversationId)
      setDeletingId(null)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`conversation-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Conversations</h2>
          <button 
            className="sidebar-close-btn"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <button 
          className="new-conversation-btn"
          onClick={() => {
            onNewConversation()
            onClose()
          }}
        >
          <span className="new-conversation-icon">+</span>
          New Conversation
        </button>

        <button 
          className="gallery-sidebar-btn"
          onClick={() => {
            router.push('/media-studio')
            onClose()
          }}
        >
          <span className="gallery-icon">🖼️</span>
          Media Gallery
        </button>

        <div className="conversations-list">
          {conversations.length === 0 ? (
            <div className="empty-state">
              <p>No conversations yet</p>
              <p className="empty-state-hint">Start chatting to create one!</p>
            </div>
          ) : (
            conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`conversation-item ${
                  conversation.id === currentConversationId ? 'active' : ''
                } ${deletingId === conversation.id ? 'deleting' : ''}`}
                onClick={() => {
                  onSelectConversation(conversation.id)
                  onClose()
                }}
              >
                <div className="conversation-info">
                  <div className="conversation-title">
                    {conversation.title}
                  </div>
                  <div className="conversation-meta">
                    <span className="conversation-model">{conversation.model}</span>
                    <span className="conversation-date">
                      {formatDate(conversation.updated_at)}
                    </span>
                  </div>
                </div>
                <button
                  className="delete-conversation-btn"
                  onClick={(e) => handleDelete(e, conversation.id)}
                  aria-label="Delete conversation"
                  disabled={deletingId === conversation.id}
                >
                  {deletingId === conversation.id ? '...' : '🗑️'}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
