"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Bot,
  Server,
  Key,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Globe,
  Code2,
  BarChart3,
  ShieldCheck,
  Zap,
  Terminal
} from "lucide-react";
import "./onboarding-wizard.css";

interface AgentObjective {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: any;
  agentId: string;
}

const OBJECTIVES: AgentObjective[] = [
  {
    id: "scraper",
    title: "Web Scraper & Intelligence Researcher",
    badge: "Autonomous Crawling",
    description: "Crawl web pages, extract structured JSON data, and run multi-step analytical research synthesis.",
    icon: Globe,
    agentId: "openclaw-scraper"
  },
  {
    id: "coder",
    title: "Full-Stack Code Generation Engine",
    badge: "Repository Ops",
    description: "Write TypeScript/Python microservices, fix build bugs, and generate complete project structures.",
    icon: Code2,
    agentId: "openclaw-coder"
  },
  {
    id: "analyst",
    title: "SQL & Data Intelligence Agent",
    badge: "Database Querying",
    description: "Connect to Supabase / PostgreSQL databases, generate SQL queries, and summarize data trends.",
    icon: BarChart3,
    agentId: "openclaw-data"
  },
  {
    id: "custom",
    title: "General OpenClaw Task Automator",
    badge: "Universal Loop",
    description: "Execute arbitrary multi-step AI reasoning loops with custom system prompts & tools.",
    icon: Terminal,
    agentId: "openclaw"
  }
];

const INFRASTRUCTURES = [
  {
    id: "hetzner",
    title: "Hetzner Dedicated Worker VM",
    subtitle: "Recommended for Low Latency",
    description: "Docker Compose isolated node (dre@openclaw) running Node 20 LTS with maximum step safeguards.",
    recommended: true
  },
  {
    id: "gcr",
    title: "Google Cloud Run Container",
    subtitle: "Scale-to-Zero",
    description: "Stateless microservice deployment scaled on demand for high concurrency workloads.",
    recommended: false
  },
  {
    id: "local",
    title: "Local / Private BYOK Worker",
    subtitle: "Self-Hosted",
    description: "Direct connection to your private container instance via internal secret bearer auth.",
    recommended: false
  }
];

export function OnboardingWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedObjective, setSelectedObjective] = useState<string>("custom");
  const [selectedInfra, setSelectedInfra] = useState<string>("hetzner");
  const [apiKeyPreference, setApiKeyPreference] = useState<"platform" | "byok">("platform");
  const [customApiKey, setCustomApiKey] = useState<string>("");
  const [isFinishing, setIsFinishing] = useState(false);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleCompleteOnboarding();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleCompleteOnboarding = () => {
    setIsFinishing(true);

    // Save onboarding preferences locally
    const targetObjective = OBJECTIVES.find(o => o.id === selectedObjective);
    const onboardingConfig = {
      agentId: targetObjective?.agentId || "openclaw",
      agentTitle: targetObjective?.title || "OpenClaw Agent",
      infra: selectedInfra,
      apiKeyPreference,
      hasCustomKey: Boolean(customApiKey.trim()),
      completedAt: new Date().toISOString()
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("omi_onboarding_config", JSON.stringify(onboardingConfig));
    }

    setTimeout(() => {
      router.push("/agents");
    }, 700);
  };

  return (
    <div className="onboarding-root">
      {/* Dynamic Background */}
      <div className="onboarding-bg-overlay" />
      <div className="onboarding-grid-pattern" />

      {/* Main Container */}
      <div className={`onboarding-container ${isFinishing ? "onboarding-exit" : ""}`}>
        {/* Header */}
        <header className="onboarding-header">
          <div className="onboarding-brand">
            <div className="onboarding-logo-badge">
              <Zap size={18} className="onboarding-logo-icon" />
            </div>
            <span className="onboarding-brand-title">Omi AI Engine</span>
            <span className="onboarding-brand-divider">/</span>
            <span className="onboarding-brand-sub">Worker Deployment Setup</span>
          </div>

          <button onClick={handleCompleteOnboarding} className="onboarding-skip-btn">
            Skip to /agents
          </button>
        </header>

        {/* Progress Bar */}
        <div className="onboarding-progress-wrapper">
          <div className="onboarding-progress-track">
            <div
              className="onboarding-progress-fill"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>

          <div className="onboarding-step-pills">
            <div className={`step-pill ${currentStep >= 1 ? "active" : ""}`}>
              <span className="step-num">01</span>
              <span className="step-label">Agent Objective</span>
            </div>
            <div className={`step-pill ${currentStep >= 2 ? "active" : ""}`}>
              <span className="step-num">02</span>
              <span className="step-label">Execution Engine</span>
            </div>
            <div className={`step-pill ${currentStep >= 3 ? "active" : ""}`}>
              <span className="step-num">03</span>
              <span className="step-label">Model Credentials</span>
            </div>
          </div>
        </div>

        {/* Wizard Card Body */}
        <div className="onboarding-card">
          {/* STEP 1: OBJECTIVE */}
          {currentStep === 1 && (
            <div className="onboarding-step-pane fade-in-step">
              <div className="step-meta">
                <span className="step-badge">
                  <Sparkles size={12} /> Step 1 of 3
                </span>
                <h2 className="step-title">Select Your Agent Objective</h2>
                <p className="step-desc">
                  Choose the specialized task type to pre-configure your containerized OpenClaw worker loop.
                </p>
              </div>

              <div className="objectives-grid">
                {OBJECTIVES.map(obj => {
                  const Icon = obj.icon;
                  const isSelected = selectedObjective === obj.id;

                  return (
                    <div
                      key={obj.id}
                      onClick={() => setSelectedObjective(obj.id)}
                      className={`objective-card ${isSelected ? "selected" : ""}`}
                    >
                      <div className="objective-card-header">
                        <div className="objective-icon-box">
                          <Icon size={20} />
                        </div>
                        <span className="objective-pill">{obj.badge}</span>
                      </div>

                      <h3 className="objective-title">{obj.title}</h3>
                      <p className="objective-desc">{obj.description}</p>

                      <div className="objective-select-indicator">
                        <CheckCircle2 size={16} className="check-icon" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: INFRASTRUCTURE */}
          {currentStep === 2 && (
            <div className="onboarding-step-pane fade-in-step">
              <div className="step-meta">
                <span className="step-badge">
                  <Cpu size={12} /> Step 2 of 3
                </span>
                <h2 className="step-title">Choose Microservice Infrastructure</h2>
                <p className="step-desc">
                  Select the isolated execution environment for dispatching multi-tenant agent tasks.
                </p>
              </div>

              <div className="infra-list">
                {INFRASTRUCTURES.map(infra => {
                  const isSelected = selectedInfra === infra.id;

                  return (
                    <div
                      key={infra.id}
                      onClick={() => setSelectedInfra(infra.id)}
                      className={`infra-card ${isSelected ? "selected" : ""}`}
                    >
                      <div className="infra-left">
                        <div className="infra-icon-box">
                          <Server size={20} />
                        </div>
                        <div>
                          <div className="infra-title-row">
                            <h3 className="infra-title">{infra.title}</h3>
                            {infra.recommended && (
                              <span className="infra-recommended-tag">Default VM</span>
                            )}
                          </div>
                          <p className="infra-subtitle">{infra.subtitle}</p>
                          <p className="infra-desc">{infra.description}</p>
                        </div>
                      </div>

                      <div className="infra-radio">
                        <div className={`radio-dot ${isSelected ? "active" : ""}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: CREDENTIALS */}
          {currentStep === 3 && (
            <div className="onboarding-step-pane fade-in-step">
              <div className="step-meta">
                <span className="step-badge">
                  <ShieldCheck size={12} /> Step 3 of 3
                </span>
                <h2 className="step-title">Configure API Key & Model Settings</h2>
                <p className="step-desc">
                  Select whether to execute turns using platform credits or your encrypted BYOK API key.
                </p>
              </div>

              <div className="credentials-options">
                <div
                  onClick={() => setApiKeyPreference("platform")}
                  className={`cred-option-card ${apiKeyPreference === "platform" ? "selected" : ""}`}
                >
                  <div className="cred-icon-box">
                    <Zap size={20} />
                  </div>
                  <div className="cred-details">
                    <h3>Platform Managed Key Pool</h3>
                    <p>Use pre-allocated SaaS credits for seamless agent turn execution.</p>
                  </div>
                  <div className={`radio-dot ${apiKeyPreference === "platform" ? "active" : ""}`} />
                </div>

                <div
                  onClick={() => setApiKeyPreference("byok")}
                  className={`cred-option-card ${apiKeyPreference === "byok" ? "selected" : ""}`}
                >
                  <div className="cred-icon-box">
                    <Key size={20} />
                  </div>
                  <div className="cred-details">
                    <h3>Bring Your Own Key (BYOK)</h3>
                    <p>AES-256 encrypted server-side storage for custom OpenAI or Anthropic keys.</p>
                  </div>
                  <div className={`radio-dot ${apiKeyPreference === "byok" ? "active" : ""}`} />
                </div>
              </div>

              {apiKeyPreference === "byok" && (
                <div className="custom-key-input-box fade-in-step">
                  <label>OpenAI / OpenClaw API Key</label>
                  <input
                    type="password"
                    placeholder="sk-proj-..."
                    value={customApiKey}
                    onChange={e => setCustomApiKey(e.target.value)}
                    className="key-input"
                  />
                  <p className="key-hint">Keys are encrypted using Node native AES-256-CBC before DB storage.</p>
                </div>
              )}
            </div>
          )}

          {/* Footer Controls */}
          <div className="onboarding-card-footer">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className="onboarding-btn secondary"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>

            <button onClick={handleNextStep} className="onboarding-btn primary">
              <span>{currentStep === 3 ? "Launch Agent Hub" : "Continue"}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
