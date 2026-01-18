"use client";

import React from "react";
import { ExpandableCards, ExpandableCardItem } from "@/components/ui/expandable-cards";
import { AnimatedSectionTitle } from "@/components/ui/animated-section-title";

const codeCards: ExpandableCardItem[] = [
    {
        description: "AI Native IDE",
        title: "Cursor",
        src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=3400&auto=format&fit=crop",
        ctaText: "Get Cursor",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    The IDE of the future. Cursor integrates AI directly into your editor,
                    allowing for codebase-wide questions, instant refactors, and tab-complete on steroids. <br /> <br />
                    Built on VS Code, it supports all your favorite extensions but adds a layer of intelligence that understands your entire project context.
                </p>
            );
        },
    },
    {
        description: "Web generation",
        title: "Bolt.new",
        src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=3348&auto=format&fit=crop",
        ctaText: "Try Bolt",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Full-stack web development in the browser. Bolt.new allows you to prompt full applications,
                    run them instantly in a sandbox, and deploy with a click. <br /> <br />
                    Perfect for prototyping, internal tools, and rapid MVP development without setting up local environments.
                </p>
            );
        },
    },
    {
        description: "Autonomous Agent",
        title: "Replit Agent",
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3270&auto=format&fit=crop",
        ctaText: "Start Building",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    An autonomous coding agent that builds software for you. Replit Agent can plan, write, debug, and deploy full applications. <br /> <br />
                    It handles the complexity of dependency management and environment configuration, letting you focus on the idea.
                </p>
            );
        },
    },
    {
        description: "No-Code UI",
        title: "Lovable",
        src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2960&auto=format&fit=crop",
        ctaText: "Design UI",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Generate professional-grade user interfaces with simple text prompts. Lovable turns ideas into React/Tailwind code ready for production. <br /> <br />
                    Bridge the gap between design and development.
                </p>
            );
        },
    },
];

export function CodeExpandableCards() {
    return (
        <div className="w-full py-12">
            <AnimatedSectionTitle title="Vibecoding Platforms" icon="✨" />
            <ExpandableCards cards={codeCards} />
        </div>
    );
}

export default CodeExpandableCards;
