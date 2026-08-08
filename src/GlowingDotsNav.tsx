"use client";

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './GlowingDotsNav.css';

interface DotItem {
    id: string;
    label: string;
    path: string;
    color: string;
}

const dots: DotItem[] = [
    { id: 'agents', label: 'Agents Studio', path: '/agents', color: '#00FF9D' },
    { id: 'command-hub', label: 'Omi Playground (Command Hub)', path: '/command-hub', color: '#9D00FF' },
    { id: 'chat', label: 'AI Chat', path: '/chat', color: '#00C8FF' },
    { id: 'search', label: 'AI Search', path: '/web-search', color: '#00FF9D' },
    { id: 'media', label: 'AI Media Studio', path: '/media-studio', color: '#FF00D4' },
    { id: 'workflows', label: 'AI Workflows', path: '/ai-workflows', color: '#FFE600' },
    { id: 'custom', label: 'Custom Omis', path: '/custom-omis', color: '#9D00FF' },
];

const GlowingDotsNav: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="glowing-dots-nav-container">
            {dots.map((dot) => (
                <div
                    key={dot.id}
                    className="glowing-dot"
                    style={{ '--dot-color': dot.color } as React.CSSProperties}
                    onClick={() => router.push(dot.path)}
                >
                    <div className="glowing-dot-tooltip">{dot.label}</div>
                </div>
            ))}
        </div>
    );
};

export default GlowingDotsNav;
