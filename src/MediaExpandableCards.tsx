"use client";

import React from "react";
import { ExpandableCards, ExpandableCardItem } from "@/components/ui/expandable-cards";
import { AnimatedSectionTitle } from "@/components/ui/animated-section-title";

const mediaCards: ExpandableCardItem[] = [
    {
        description: "Ultra-HD Generation",
        title: "4K Video Synthesis",
        src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=3400&auto=format&fit=crop",
        ctaText: "Create Video",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Generate cinematic quality videos in stunning 4K resolution. Control camera
                    angles, lighting, and movement with simple text prompts. <br /> <br />
                    From sweeping drone shots to intimate close-ups, bring your directorial
                    vision to life without picking up a camera. Perfect for content creators,
                    marketing materials, and storyboarding.
                </p>
            );
        },
    },
    {
        description: "Hyper-Realism",
        title: "Photorealistic Imagery",
        src: "https://images.unsplash.com/photo-1542202229-2d4e68e48937?q=80&w=3348&auto=format&fit=crop",
        ctaText: "Generate Images",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Create indistinguishable-from-reality images for photography, product
                    design, and architectural visualization. <br /> <br />
                    Manipulate lighting, texture, and composition with precision. Our models
                    understand physics and material properties to render reflections, shadows,
                    and refractivity accurately.
                </p>
            );
        },
    },
    {
        description: "Audio Engineering",
        title: "Voice Cloning & Music",
        src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=3270&auto=format&fit=crop",
        ctaText: "Generate Audio",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Generate full musical compositions or realistic voiceovers. Clone voices
                    with just a few seconds of audio samples for personalized narration. <br /> <br />
                    Create background scores, sound effects, and dialogue tracks for your
                    projects. Supports multi-instrumental tracks and varying emotional tones
                    in speech.
                </p>
            );
        },
    },
    {
        description: "Digital Identity",
        title: "Custom AI Avatars",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop",
        ctaText: "Design Avatar",
        ctaLink: "#",
        content: () => {
            return (
                <p>
                    Design persistent AI characters with consistent facial features and style
                    across multiple generations. <br /> <br />
                    Ideal for virtual influencers, brand mascots, and gaming assets. Train
                    custom LoRAs on specific faces or styles to maintain brand identity
                    across all your media assets.
                </p>
            );
        },
    },
];

export function MediaExpandableCards() {
    return (
        <div className="w-full py-12">
            <AnimatedSectionTitle title="Creative Studio" icon="🎨" />
            <ExpandableCards cards={mediaCards} />
        </div>
    );
}

export default MediaExpandableCards;
