"use client";

import React from "react";
import { ExpandableCards, ExpandableCardItem } from "@/components/ui/expandable-cards";
import { AnimatedSectionTitle } from "@/components/ui/animated-section-title";

const chatCards: ExpandableCardItem[] = [
    {
        description: "Anthropic",
        title: "Claude 3.5 Sonnet",
        src: "/images/logos/claude-logo.png",
        ctaText: "Try Claude",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Anthropic&apos;s most intelligent model yet. Claude 3.5 Sonnet excels at reasoning,
                    coding, and nuanced content creation. It has a massive context window, allowing it
                    to process entire books or codebases at once. <br /> <br />
                    Known for its safety and steerability, Claude is a top choice for enterprise
                    applications and complex analytical tasks.
                </p>
            );
        },
    },
    {
        description: "Meta",
        title: "Llama 3.1 405B",
        src: "https://avatars.githubusercontent.com/u/160999081?s=200&v=4", // Meta Llama logo (or Meta AI)
        ctaText: "Try Llama",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Meta&apos;s open-source powerhouse. Llama 3.1 is the most capable open-weights model
                    available, rivaling top proprietary models in performance. <br /> <br />
                    It offers exceptional multilingual support, reasoning capabilities, and is
                    highly customizable for specific domains. A favorite among developers building
                    private and locally-hosted AI solutions.
                </p>
            );
        },
    },
    {
        description: "Mistral AI",
        title: "Mistral Large 2",
        src: "https://avatars.githubusercontent.com/u/132338950?s=200&v=4", // Mistral AI logo
        ctaText: "Try Mistral",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Europe&apos;s leading AI model. Mistral Large offers top-tier reasoning and coding
                    capabilities with efficient performance. <br /> <br />
                    It is designed for high-end reasoning tasks and is natively fluent in
                    English, French, Spanish, German, and Italian. Known for its conciseness
                    and precision.
                </p>
            );
        },
    },
    {
        description: "DeepSeek",
        title: "DeepSeek V2.5",
        src: "https://avatars.githubusercontent.com/u/154460057?s=200&v=4", // DeepSeek logo
        ctaText: "Try DeepSeek",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    A powerful open-source model specializing in code generation and mathematics.
                    DeepSeek creates highly accurate and optimized code across various languages. <br /> <br />
                    Leveraging a Mixture-of-Experts (MoE) architecture, it delivers exceptional
                    performance while maintaining inference efficiency. A strong alternative for
                    technical workflows.
                </p>
            );
        },
    },
];

export function ChatExpandableCards() {
    return (
        <div className="w-full py-12">
            <AnimatedSectionTitle title="Best Alternatives" />
            <ExpandableCards cards={chatCards} />
        </div>
    );
}

export default ChatExpandableCards;
