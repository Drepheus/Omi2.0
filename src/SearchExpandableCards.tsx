"use client";

import React from "react";
import { ExpandableCards, ExpandableCardItem } from "@/components/ui/expandable-cards";
import { AnimatedSectionTitle } from "@/components/ui/animated-section-title";

const searchCards: ExpandableCardItem[] = [
    {
        description: "Real-time Information",
        title: "Live Web Access",
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=3270&auto=format&fit=crop",
        ctaText: "Search Web",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Access the internet in real-time to answer questions about current events,
                    stock prices, weather, and more. Unlike static models with knowledge cutoffs,
                    our AI search connects directly to live web data. <br /> <br />
                    Get up-to-the-minute news summaries, live sports scores, and the latest
                    product reviews instantly.
                </p>
            );
        },
    },
    {
        description: "Verified Sources",
        title: "Citations & References",
        src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=3387&auto=format&fit=crop",
        ctaText: "View Sources",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Trust but verify. Every claim made by our AI search engine is backed by
                    citations from reputable sources. Click through to read the original articles
                    and verify the information yourself. <br /> <br />
                    Perfect for academic research, fact-checking, and ensuring accuracy in
                    professional reports.
                </p>
            );
        },
    },
    {
        description: "Deep Research Mode",
        title: "Comprehensive Synthesis",
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3270&auto=format&fit=crop",
        ctaText: "Deep Search",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Need to understand a complex topic? Deep Research Mode aggregates information
                    from dozens of sources to provide a comprehensive overview. <br /> <br />
                    It analyzes conflicting viewpoints, synthesizes data, and presents a
                    balanced, detailed report on any subject, saving you hours of manual browsing
                    and reading.
                </p>
            );
        },
    },
    {
        description: "Visual Discovery",
        title: "Image & Video Search",
        src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=3328&auto=format&fit=crop",
        ctaText: "Find Images",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Search isn't just about text. Find exact images, diagrams, and videos to
                    visually support your queries. <br /> <br />
                    Whether you're looking for design inspiration, technical schematics, or
                    news footage, our visual search capabilities verify context and relevance
                    to match your exact needs.
                </p>
            );
        },
    },
];

export function SearchExpandableCards() {
    return (
        <div className="w-full py-12">
            <AnimatedSectionTitle title="Search Features" icon="🔎" />
            <ExpandableCards cards={searchCards} />
        </div>
    );
}

export default SearchExpandableCards;
