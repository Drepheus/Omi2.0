"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Orb } from "@/components/visuals/orb";
import { ShinyText } from "@/components/typography/shiny-text";
import { ThinkingOrb, OrbState } from "thinking-orbs";
import {
  Wrench,
  Zap,
  Key,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  ShieldCheck,
  Cpu,
  Server
} from "lucide-react";
import "./onboarding-wizard.css";

interface ConsumerOption {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: any;
  agentId: string;
}

const AGENT_TYPES: ConsumerOption[] = [
  {
    id: "builder",
    title: "Autonomous AI Builder",
    badge: "App & Code Automation",
    description: "Build apps, write microservices, refactor codebases, & automate complex engineering projects.",
    icon: Wrench,
    agentId: "openclaw-coder"
  },
  {
    id: "assistant",
    title: "Executive AI Assistant",
    badge: "Web & Task Autopilot",
    description: "Search live web data, research topics, organize databases, & manage daily tasks on autopilot.",
    icon: Zap,
    agentId: "openclaw"
  }
];

const KEY_OPTIONS = [
  {
    id: "platform",
    title: "Omi Hosted Key Pool",
    badge: "Instant Zero Setup",
    description: "Use included platform credits for immediate, zero-friction agent deployment.",
    icon: CreditCard
  },
  {
    id: "byok",
    title: "Bring Your Own Key (BYOK)",
    badge: "AES-256 Encrypted",
    description: "Connect your custom OpenAI API key stored securely with native AES-256 server-side encryption.",
    icon: Key
  }
];

export function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("builder");
  const [selectedKeyPref, setSelectedKeyPref] = useState("platform");
  const [customKey, setCustomKey] = useState("");
  const [isBuffering, setIsBuffering] = useState(false);
  const [bufferStatusIndex, setBufferStatusIndex] = useState(0);
  const [orbState, setOrbState] = useState<OrbState>("solving");

  const bufferStatuses = [
    { text: "Provisioning isolated OpenClaw microservice container...", icon: Server },
    { text: "Loading reasoning core & mounting workspace environment...", icon: Cpu },
    { text: "Agent core ready! Launching your workspace dashboard...", icon: Sparkles }
  ];

  useEffect(() => {
    // Intercept browser back button to navigate steps gracefully without reloading
    const handlePopState = () => {
      if (step > 1) {
        setStep(1);
      } else {
        router.push('/');
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [step, router]);

  const handleNext = () => {
    if (step < 2) {
      window.history.pushState({ step: 2 }, "", window.location.href);
      setStep(2);
    } else {
      startBufferAndLaunch();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(1);
    } else {
      router.push('/');
    }
  };

  const startBufferAndLaunch = () => {
    setIsBuffering(true);

    const chosenType = AGENT_TYPES.find(t => t.id === selectedType);
    const config = {
      agentId: chosenType?.agentId || "openclaw",
      agentName: chosenType?.title || "OpenClaw Agent",
      keyPref: selectedKeyPref,
      customKey: customKey.trim(),
      configuredAt: new Date().toISOString()
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("omi_onboarding_config", JSON.stringify(config));
    }

    // Cycle orb state & status text during 5 second buffer
    setTimeout(() => {
      setBufferStatusIndex(1);
      setOrbState("working");
    }, 1600);

    setTimeout(() => {
      setBufferStatusIndex(2);
      setOrbState("composing");
    }, 3400);

    setTimeout(() => {
      router.push("/agents?tab=create");
    }, 5000);
  };

  const CurrentStatusIcon = bufferStatuses[bufferStatusIndex].icon;

  return (
    <div className="omi-onboarding-wrapper">
      {/* Visual Ambient Background */}
      <div className="orb-background">
        <Orb hue={220} hoverIntensity={0.3} rotateOnHover forceHoverState={false} />
      </div>

      {/* FULLSCREEN 5-SECOND BUFFER / LOADING SCREEN */}
      {isBuffering ? (
        <div className="onboarding-buffer-screen animate-fade-in">
          <div className="buffer-orb-stage">
            <ThinkingOrb state={orbState} size={64} theme="dark" />
          </div>

          <div className="buffer-text-container">
            <div className="buffer-pulse-pill">
              <span className="buffer-pulse-dot" />
              <span>INITIALIZING WORKSPACE ENGINE</span>
            </div>

            <h2 className="buffer-heading">
              <CurrentStatusIcon size={20} className="buffer-status-icon" />
              <span>{bufferStatuses[bufferStatusIndex].text}</span>
            </h2>

            <p className="buffer-subtext">Hetzner Worker Node (5.78.197.8:8080)</p>
          </div>
        </div>
      ) : (
        <div className="omi-onboarding-content">
          {/* Top Navigation */}
          <nav className="omi-onboarding-nav">
            <div className="brand-badge">
              <Sparkles size={16} className="sparkle-icon" />
              <span className="brand-text">OMI AI</span>
            </div>

            <button onClick={startBufferAndLaunch} className="skip-link">
              Skip to Dashboard →
            </button>
          </nav>

          {/* Step Indicator */}
          <div className="step-indicator-bar">
            <div className={`step-dot ${step >= 1 ? "active" : ""}`}>1</div>
            <div className="step-line-segment" />
            <div className={`step-dot ${step >= 2 ? "active" : ""}`}>2</div>
          </div>

          {/* STEP 1: CONSUMER AGENT TYPE (BUILDER vs ASSISTANT) */}
          {step === 1 && (
            <div className="step-container animate-fade-in">
              <h1 className="omi-step-heading">Choose Your AI Agent Type</h1>
              <p className="omi-step-subheading">Select the autonomous agent core tailored to your primary workflow.</p>

              <div className="consumer-cards-grid">
                {AGENT_TYPES.map(item => {
                  const Icon = item.icon;
                  const isSelected = selectedType === item.id;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedType(item.id)}
                      className={`consumer-card ${isSelected ? "selected" : ""}`}
                    >
                      <div className="card-top">
                        <div className="card-icon-wrapper">
                          <Icon size={24} />
                        </div>
                        <span className="consumer-badge">{item.badge}</span>
                      </div>

                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-subtitle">{item.description}</p>

                      <div className="card-select-footer">
                        {isSelected ? (
                          <span className="selected-tag"><Check size={14} /> Selected</span>
                        ) : (
                          <span className="select-tag">Click to Select</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: CONSUMER API KEY & CREDIT PREFERENCE */}
          {step === 2 && (
            <div className="step-container animate-fade-in">
              <h1 className="omi-step-heading">API Key & Execution Preference</h1>
              <p className="omi-step-subheading">Choose how your AI agent will be powered and authenticated.</p>

              <div className="consumer-cards-grid">
                {KEY_OPTIONS.map(opt => {
                  const Icon = opt.icon;
                  const isSelected = selectedKeyPref === opt.id;

                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedKeyPref(opt.id)}
                      className={`consumer-card ${isSelected ? "selected" : ""}`}
                    >
                      <div className="card-top">
                        <div className="card-icon-wrapper">
                          <Icon size={24} />
                        </div>
                        <span className="consumer-badge">{opt.badge}</span>
                      </div>

                      <h3 className="card-title">{opt.title}</h3>
                      <p className="card-subtitle">{opt.description}</p>

                      <div className="card-select-footer">
                        {isSelected ? (
                          <span className="selected-tag"><Check size={14} /> Selected</span>
                        ) : (
                          <span className="select-tag">Click to Select</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {selectedKeyPref === "byok" && (
                <div className="byok-input-container animate-fade-in">
                  <div className="byok-header">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span>Enter Your OpenAI API Key</span>
                  </div>
                  <input
                    type="password"
                    placeholder="sk-proj-..."
                    value={customKey}
                    onChange={e => setCustomKey(e.target.value)}
                    className="byok-input-field"
                  />
                  <p className="byok-hint">Encrypted server-side via AES-256-CBC before hitting database storage.</p>
                </div>
              )}
            </div>
          )}

          {/* Action Controls */}
          <div className="omi-step-actions">
            <button onClick={handleBack} className="omi-back-btn">
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>

            <button onClick={handleNext} className="omi-next-btn">
              <ShinyText
                text={step === 2 ? "Launch Agent Space →" : "Continue →"}
                speed={3}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
