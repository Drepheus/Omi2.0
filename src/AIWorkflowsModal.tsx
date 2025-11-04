import React, { useEffect } from 'react';
import FlowingMenu from './FlowingMenu';
import './AIWorkflowsModal.css';

interface AIWorkflowsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIWorkflowsModal: React.FC<AIWorkflowsModalProps> = ({ isOpen, onClose }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const workflowCategories = [
    {
      link: '#',
      text: 'Content Creation',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop'
    },
    {
      link: '#',
      text: 'Data Analysis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      link: '#',
      text: 'Research & Writing',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop'
    },
    {
      link: '#',
      text: 'Automation & Tasks',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop'
    },
    {
      link: '#',
      text: 'Code Generation',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
    },
    {
      link: '#',
      text: 'Business Intelligence',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="ai-workflows-modal-overlay">
      <button className="ai-workflows-modal-close" onClick={onClose}>
        ✕
      </button>
      
      <FlowingMenu items={workflowCategories} />
    </div>
  );
};

export default AIWorkflowsModal;
