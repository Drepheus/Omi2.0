"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Orb } from "@/components/visuals/orb";
import { ShinyText } from "@/components/typography/shiny-text";
import { useAuth } from "@/context/auth-context";
import { Terminal, Bot, Sparkles, X, ChevronRight } from "lucide-react";

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

      {/* Onboarding Workspace Choice Modal */}
      {showWorkspaceModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#0e0e14]/90 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Choose Your Omi Workspace</h2>
                  <p className="text-xs text-gray-400">Select how you'd like to experience Omi's autonomous intelligence engine.</p>
                </div>
              </div>
              <button
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/10"
                onClick={() => setShowWorkspaceModal(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* 2 Workspace Choice Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
              {/* Option 1: Omi Playground (Command Hub) */}
              <div
                className="group relative p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-violet-500/40 transition-all cursor-pointer flex flex-col justify-between"
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => router.push("/command-hub"), 300);
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-violet-500/15 border border-violet-500/30 text-violet-400 group-hover:scale-110 transition-transform">
                      <Terminal size={26} />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      LIVE TERMINAL
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    Omi Playground (Command Hub)
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Interactive Command Hub with live execution logs, terminal streams, multi-model routing, & developer telemetry controls.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-violet-300 font-medium">Enter Command Hub</span>
                  <ChevronRight size={16} className="text-violet-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Option 2: Agent Playground (Agent Setup) */}
              <div
                className="group relative p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-emerald-500/40 transition-all cursor-pointer flex flex-col justify-between"
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => router.push("/onboarding"), 300);
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Bot size={26} />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      RECOMMENDED
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    Agent Playground
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Deploy autonomous agents, attach Hermes skills, and launch custom autopilot task workflows for your business.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-emerald-300 font-medium">Start Agent Onboarding</span>
                  <ChevronRight size={16} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
