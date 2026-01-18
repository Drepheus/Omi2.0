"use client";

import React from "react";
import { ToolsList, ToolItem } from "@/components/ui/tools-list";
import { FeatureBanner } from "@/components/ui/feature-banner";

const codeTools: ToolItem[] = [
    {
        id: "refactor",
        title: "Refactor Agent",
        description: "Clean up technical debt and optimize logic instantly.",
        badge: "Popular",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l18 0" />
                <path d="M5 21l0 -14l2 -4h10l2 4l0 14" />
                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M10 21l0 -5a2 2 0 1 1 4 0l0 5" />
            </svg>
        ),
        actionLabel: "Optimize"
    },
    {
        id: "doc-writer",
        title: "Doc Writer",
        description: "Generate comprehensive documentation from code.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 9l1 0" />
                <path d="M9 13l6 0" />
                <path d="M9 17l6 0" />
            </svg>
        )
    },
    {
        id: "unit-test",
        title: "Unit Test Gen",
        description: "Write test cases for your functions automatically.",
        badge: "Essential",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                <path d="M11 6l9 0" />
                <path d="M11 12l9 0" />
                <path d="M11 18l9 0" />
            </svg>
        )
    },
    {
        id: "sql-builder",
        title: "SQL Builder",
        description: "Translate natural language to complex SQL queries.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="6" rx="8" ry="3" />
                <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
            </svg>
        )
    },
    {
        id: "regex-gen",
        title: "RegEx Generator",
        description: "Create complex regular expressions from plain english.",
        badge: "New",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 17h11" />
                <path d="M6 20v-2a6 6 0 1 1 12 0v2" />
                <path d="M6 4v2a6 6 0 1 0 12 0v-2" />
            </svg>
        )
    },
    {
        id: "pipeline-config",
        title: "CI/CD Config",
        description: "Generate GitHub Actions or GitLab CI yaml files.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22l0 -10" />
                <path d="M12 22l4 -4" />
                <path d="M12 22l-4 -4" />
                <path d="M12 7l4 4" />
                <path d="M12 7l-4 4" />
                <path d="M12 7l0 -5" />
            </svg>
        )
    }
];

export function CodeToolsSection() {
    return (
        <div className="w-full">
            <FeatureBanner
                title="Ship Faster with AI"
                subtitle="Automate the boring stuff. Focus on architecture and solving hard problems while AI handles the boilerplate."
                ctaText="Start Building"
                imageSrc="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=500&auto=format&fit=crop" // Coding Matrix
            />

            <ToolsList
                title="Developer Utils"
                viewAllLink="#"
                tools={codeTools}
            />
        </div>
    );
}

export default CodeToolsSection;
