"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Orb } from "@/components/visuals/orb";
import { ShinyText } from "@/components/typography/shiny-text";
import {
  Globe,
  Code2,
  BarChart3,
  Terminal,
  Zap,
  Brain,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check
} from "lucide-react";
import "./onboarding-wizard.css";

interface SimpleOption {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  agentId: string;
}

const AGENT_PURPOSES: SimpleOption[] = [
  {
    id: "web",
    title: "Web Research & Scraping",
    subtitle: "Search the live web, extract data, and generate summary reports",
    icon: Globe,
    agentId: "openclaw-scraper"
  },
  {
    id: "coder",
    title: "Software & Code Engineer",
    subtitle: "Write microservices, fix code bugs, and build features",
    icon: Code2,
    agentId: "openclaw-coder"
  },
  {
    id: "data",
    title: "Data Analyst & Insights",
    subtitle: "Query databases, organize tables, and analyze metrics",
    icon: BarChart3,
    agentId: "openclaw-data"
  },
  {
    id: "general",
    title: "Custom AI Task Specialist",
    subtitle: "Run flexible multi-step autonomous AI agent loops",
    icon: Terminal,
    agentId: "openclaw"
  }
];

const INTELLIGENCE_MODES = [
  {
    id: "turbo",
    title: "Turbo Speed Mode",
    badge: "Fastest Response",
    subtitle: "Optimized for quick task turns and immediate answers",
    icon: Zap
  },
  {
    id: "reasoning",
    title: "Ultra Deep Thinking Mode",
    badge: "Maximum Accuracy",
    subtitle: "Performs multi-step reasoning & tool diagnostics before answering",
    icon: Brain
  }
];

export function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedPurpose, setSelectedPurpose] = useState("web");
  const [selectedMode, setSelectedMode] = useState("reasoning");
  const [isDeploying, setIsDeploying] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      handleLaunch();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleLaunch = () => {
    setIsDeploying(true);

    const chosenPurpose = AGENT_PURPOSES.find(p => p.id === selectedPurpose);
    const config = {
      agentId: chosenPurpose?.agentId || "openclaw",
      agentName: chosenPurpose?.title || "OpenClaw Agent",
      mode: selectedMode,
      deployedAt: new Date().toISOString()
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("omi_onboarding_config", JSON.stringify(config));
    }

    setTimeout(() => {
      router.push("/agents");
    }, 800);
  };

  const currentPurpose = AGENT_PURPOSES.find(p => p.id === selectedPurpose);
  const currentMode = INTELLIGENCE_MODES.find(m => m.id === selectedMode);

  return (
    <div className="omi-onboarding-wrapper">
      {/* Visual Ambient Background matching LandingPage */}
      <div className="orb-background">
        <Orb hue={220} hoverIntensity={0.3} rotateOnHover forceHoverState={false} />
      </div>

      <div className={`omi-onboarding-content ${isDeploying ? "fade-out" : ""}`}>
        {/* Sleek Top Navigation */}
        <nav className="omi-onboarding-nav">
          <div className="brand-badge">
            <Sparkles size={16} className="sparkle-icon" />
            <span className="brand-text">OMI AI</span>
          </div>

          <button onClick={() => router.push("/agents")} className="skip-link">
            Skip to Dashboard →
          </button>
        </nav>

        {/* Header Indicator */}
        <div className="step-indicator-bar">
          <div className={`step-dot ${step >= 1 ? "active" : ""}`}>1</div>
          <div className="step-line-segment" />
          <div className={`step-dot ${step >= 2 ? "active" : ""}`}>2</div>
          <div className="step-line-segment" />
          <div className={`step-dot ${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        {/* STEP 1: SIMPLE PURPOSE SELECTION */}
        {step === 1 && (
          <div className="step-container animate-fade-in">
            <h1 className="omi-step-heading">What should your AI Agent do?</h1>
            <p className="omi-step-subheading">Select your primary task objective to configure your OpenClaw worker.</p>

            <div className="simple-cards-grid">
              {AGENT_PURPOSES.map(item => {
                const Icon = item.icon;
                const isSelected = selectedPurpose === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPurpose(item.id)}
                    className={`simple-card ${isSelected ? "selected" : ""}`}
                  >
                    <div className="card-top">
                      <div className="card-icon-wrapper">
                        <Icon size={22} />
                      </div>
                      {isSelected && <Check size={18} className="card-check-icon" />}
                    </div>

                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: SIMPLE INTELLIGENCE MODE */}
        {step === 2 && (
          <div className="step-container animate-fade-in">
            <h1 className="omi-step-heading">Choose Agent Intelligence Mode</h1>
            <p className="omi-step-subheading">Pick how your agent balances response speed and deep reasoning capability.</p>

            <div className="modes-stack">
              {INTELLIGENCE_MODES.map(mode => {
                const Icon = mode.icon;
                const isSelected = selectedMode === mode.id;

                return (
                  <div
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`mode-card ${isSelected ? "selected" : ""}`}
                  >
                    <div className="mode-left">
                      <div className="mode-icon-box">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="mode-title-row">
                          <h3 className="mode-title">{mode.title}</h3>
                          <span className="mode-badge">{mode.badge}</span>
                        </div>
                        <p className="mode-subtitle">{mode.subtitle}</p>
                      </div>
                    </div>

                    <div className={`selection-circle ${isSelected ? "checked" : ""}`} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: READY TO LAUNCH SUMMARY */}
        {step === 3 && (
          <div className="step-container animate-fade-in">
            <h1 className="omi-step-heading">Ready to Deploy Agent</h1>
            <p className="omi-step-subheading">Your OpenClaw AI worker is pre-configured and ready for launch.</p>

            <div className="summary-glass-card">
              <div className="summary-item">
                <span className="summary-label">Selected Goal</span>
                <span className="summary-value">{currentPurpose?.title}</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-item">
                <span className="summary-label">Intelligence Engine</span>
                <span className="summary-value">{currentMode?.title}</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-item">
                <span className="summary-label">Backend Worker</span>
                <span className="summary-value text-glow">Hetzner Container Node (dre@openclaw)</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="omi-step-actions">
          {step > 1 ? (
            <button onClick={handleBack} className="omi-back-btn">
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          ) : <div />}

          <button onClick={handleNext} className="omi-next-btn" disabled={isDeploying}>
            <ShinyText
              text={step === 3 ? (isDeploying ? "Deploying..." : "Deploy Agent →") : "Continue →"}
              speed={3}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
