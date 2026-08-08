"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Orb } from "@/components/visuals/orb";
import { ShinyText } from "@/components/typography/shiny-text";
import { useAuth } from "@/context/auth-context";
import { Terminal, Bot, Sparkles, X, ArrowRight } from "lucide-react";
import "@/components/onboarding/onboarding-wizard.css";

export function LandingPage() {
  const router = useRouter();
  const { session } = useAuth();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);

  useEffect(() => {
    if (session) {
      router.replace("/agents");
    }
  }, [session, router]);

  const handleStartClick = () => {
    setShowWorkspaceModal(true);
  };

  return (
    <div className={`landing-container ${isTransitioning ? "fade-out" : ""}`}>
      <div className="orb-background">
        <Orb hue={220} hoverIntensity={0.3} rotateOnHover forceHoverState={false} />
      </div>
      <div className="content">
        <h1>Omi AI</h1>
        <p>Modern AI, without the complexity. Chat, create, and generate — simply.</p>
        <div className="button-container">
          <button
            className="start-button"
            onClick={handleStartClick}
            disabled={isTransitioning}
          >
            <ShinyText text="Start" speed={3} className="start-button-text" />
          </button>
        </div>
      </div>

      {/* Onboarding Workspace Choice Modal (Exact Omi Onboarding Card Design System) */}
      {showWorkspaceModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-3xl p-6 sm:p-10 rounded-3xl bg-[#0a0a0d] border border-white/15 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="brand-badge">
                <Sparkles size={20} className="sparkle-icon" />
                <span className="brand-text">OMI WORKSPACE</span>
              </div>
              <button
                className="p-2 rounded-xl bg-white/5 hover:bg-white/12 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/10"
                onClick={() => setShowWorkspaceModal(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Title & Subtitle in Omi Onboarding Typography */}
            <div className="text-center mb-8">
              <h2 className="omi-step-heading text-2xl sm:text-3xl font-light">Choose Your Omi Workspace</h2>
              <p className="omi-step-subheading text-sm sm:text-base text-gray-400 font-light mt-1">
                Select how you'd like to experience Omi's autonomous intelligence engine.
              </p>
            </div>

            {/* Onboarding Consumer Cards Grid */}
            <div className="consumer-cards-grid">
              {/* Option 1: Omi Playground (Command Hub) */}
              <div
                className="consumer-card group cursor-pointer"
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => router.push("/command-hub"), 300);
                }}
              >
                <div>
                  <div className="card-top">
                    <div className="card-icon-wrapper">
                      <Terminal size={24} />
                    </div>
                    <span className="consumer-badge">LIVE TERMINAL</span>
                  </div>

                  <h3 className="card-title">Omi Playground</h3>
                  <p className="card-subtitle">
                    Interactive Command Hub with live execution logs, terminal streams, multi-model routing, & developer telemetry controls.
                  </p>
                </div>

                <div className="card-select-footer flex items-center justify-between">
                  <span className="select-tag flex items-center gap-1 font-medium text-white/70 group-hover:text-white transition-colors">
                    Enter Command Hub <ArrowRight size={13} />
                  </span>
                </div>
              </div>

              {/* Option 2: Agent Playground (Agent Setup) */}
              <div
                className="consumer-card group cursor-pointer"
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => router.push("/onboarding"), 300);
                }}
              >
                <div>
                  <div className="card-top">
                    <div className="card-icon-wrapper">
                      <Bot size={24} />
                    </div>
                    <span className="consumer-badge">RECOMMENDED</span>
                  </div>

                  <h3 className="card-title">Agent Playground</h3>
                  <p className="card-subtitle">
                    Deploy autonomous agents, attach Hermes skills, and launch custom autopilot task workflows for your business.
                  </p>
                </div>

                <div className="card-select-footer flex items-center justify-between">
                  <span className="select-tag flex items-center gap-1 font-medium text-white/70 group-hover:text-white transition-colors">
                    Start Agent Onboarding <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
