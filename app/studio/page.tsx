"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { useGuestMode } from "@/context/guest-mode-context";
import {
  LayoutGrid,
  Lightbulb,
  Pencil,
  HelpCircle,
  User,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Share2,
  Sparkles,
  MessageSquareQuote,
  MoreHorizontal,
  Image as ImageIcon,
  Plus,
  Video,
  Infinity,
  Send,
  RefreshCw,
  Menu,
  X,
  Home,
  FolderKanban,
  Compass,
  Library,
  PanelLeftClose,
  PanelLeft,
  Lock
} from "lucide-react";
import { Inter, Space_Grotesk } from "next/font/google";
import Aurora from "@/components/omi/Aurora";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

type CreationMode = "IMAGE" | "VIDEO";
type TabMode = "KEYFRAME" | "REFERENCE" | "MODIFY";

export default function OmiAIStudioApp() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { isGuestMode } = useGuestMode();
  const [creationMode, setCreationMode] = useState<CreationMode>("VIDEO");
  const [activeTab, setActiveTab] = useState<TabMode>("KEYFRAME");
  const [prompt, setPrompt] = useState("");
  const [isDraft, setIsDraft] = useState(true);
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [model, setModel] = useState("VEO3");
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModeModal, setShowModeModal] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // Template/inspiration modes
  const templateModes = [
    {
      id: 1,
      title: "Make visuals for",
      description: "a closeup photo of California poppies in pastel lighting",
      icon: "image"
    },
    {
      id: 2,
      title: "Make a video of",
      description: "a bunny in 3d cartoon style playing guitar in front of a waterfall",
      icon: "video"
    },
    {
      id: 3,
      title: "Use this @style",
      description: "to make a Greek stone sculpture",
      icon: "style"
    },
    {
      id: 4,
      title: "Generate cinematic",
      description: "drone shot of a futuristic cyberpunk city at night",
      icon: "film"
    },
    {
      id: 5,
      title: "Create a timelapse of",
      description: "clouds moving over mountain peaks at golden hour",
      icon: "clock"
    }
  ];

  // Sample generation result
  const [generatedContent, setGeneratedContent] = useState<{
    prompt: string;
    description: string;
    keywords: string[];
  } | null>(null);

  // Redirect to login if not authenticated and not in guest mode
  useEffect(() => {
    if (!loading && !user && !isGuestMode) {
      router.push('/login?redirect=/studio');
    }
  }, [user, loading, router, isGuestMode]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    // Simulate AI response with highlighted keywords
    const keywords = prompt.match(/\b\w{4,}\b/g)?.slice(0, 5) || [];
    setGeneratedContent({
      prompt: prompt,
      description: `I've created four distinct ${creationMode.toLowerCase()}s based on your prompt "${prompt}", each with unique artistic interpretation and cinematic quality.`,
      keywords: keywords
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (!user && !isGuestMode) {
    return null;
  }

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-white flex ${inter.className}`}>
      {/* Mobile Menu Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar - Expandable/Collapsible */}
      <aside className={`
        fixed md:relative z-50 md:z-auto
        ${sidebarExpanded ? 'w-56' : 'w-16'} 
        bg-black border-r border-white/5 
        flex flex-col py-4
        h-full md:h-auto
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Close button - mobile only, only visible when sidebar is open */}
        {sidebarOpen && (
          <button
            className="absolute top-4 right-[-40px] md:hidden p-2 bg-black/50 rounded-r-lg"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        )}

        {/* Logo & Toggle Row */}
        <div className={`flex items-center ${sidebarExpanded ? 'justify-between px-4' : 'justify-center'} mb-4`}>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white flex-shrink-0">
              <path d="M25 20 L85 50 L25 80 V20 Z" fill="currentColor" />
            </svg>
            {sidebarExpanded && <span className={`font-bold text-sm uppercase tracking-wide ${spaceGrotesk.className}`}>OMI AI.AI</span>}
          </div>
          {/* Collapse/Expand button - visible on desktop */}
          <button
            className="hidden md:flex p-1.5 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            title={sidebarExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarExpanded ? <PanelLeftClose size={18} className="text-gray-400" /> : <PanelLeft size={18} className="text-gray-400" />}
          </button>
        </div>

        {/* Create New Button */}
        <div className={`${sidebarExpanded ? 'px-3' : 'px-2'} mb-4`}>
          <button
            onClick={() => setShowModeModal(true)}
            className={`w-full flex items-center gap-2 ${sidebarExpanded ? 'px-3 justify-start' : 'justify-center'} py-2.5 rounded-lg bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-white font-medium text-sm`}
          >
            <Plus size={18} />
            {sidebarExpanded && <span>Create New</span>}
          </button>
        </div>

        {/* Nav Items */}
        <nav className={`flex-1 flex flex-col gap-1 ${sidebarExpanded ? 'px-3' : 'px-2'}`}>
          <NavItem icon={<Home size={20} />} label="Dashboard" expanded={sidebarExpanded} />
          <NavItem icon={<FolderKanban size={20} />} label="Projects" active expanded={sidebarExpanded} />
          <NavItem icon={<Compass size={20} />} label="Explore" expanded={sidebarExpanded} />
          <NavItem icon={<Library size={20} />} label="My Library" expanded={sidebarExpanded} />
        </nav>

        {/* Bottom Section - User Profile */}
        <div className={`${sidebarExpanded ? 'px-3' : 'px-2'} pt-4 border-t border-white/5 mt-4`}>
          <button className={`w-full flex items-center gap-3 ${sidebarExpanded ? 'px-2' : 'justify-center'} py-2 rounded-lg hover:bg-white/5 transition-colors`}>
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              A
            </div>
            {sidebarExpanded && (
              <div className="flex-1 text-left min-w-0">
                <div className="text-sm font-medium text-white truncate">Guest User</div>
              </div>
            )}
            {sidebarExpanded && <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Top Header */}
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-3 md:px-6">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors mr-2"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>

          <div className="relative flex-1 md:flex-none">
            <button
              onClick={() => setShowModeDropdown(!showModeDropdown)}
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium hover:text-gray-300 transition-colors"
            >
              <span className="text-gray-400 hidden sm:inline">CREATE AND MODIFY</span>
              <span className={`font-bold ${spaceGrotesk.className}`}>{creationMode}</span>
              <ChevronDown size={16} />
            </button>

            {showModeDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden z-50">
                <button
                  onClick={() => { setCreationMode("IMAGE"); setShowModeDropdown(false); }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors"
                >
                  IMAGE
                </button>
                <button
                  onClick={() => { setCreationMode("VIDEO"); setShowModeDropdown(false); }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors"
                >
                  VIDEO
                </button>
              </div>
            )}
          </div>

          <button className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
            <Share2 size={16} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </header>

        {/* Main Canvas Area */}
        <main className="flex-1 relative overflow-hidden overflow-y-auto">
          {/* Aurora Background */}
          <div className="absolute inset-0 bg-black">
            <Aurora
              colorStops={["#1a5a3a", "#3a1a5e", "#1a3a5a"]}
              blend={0.6}
              amplitude={0.8}
              speed={0.5}
            />
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 py-6">
            {generatedContent ? (
              <div className="max-w-3xl w-full">
                {/* Describe Section */}
                <div className="mb-8">
                  <h3 className="text-xs font-medium text-gray-500 mb-3 tracking-wider">DESCRIBE</h3>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {generatedContent.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 rounded-full border border-white/30 text-xs md:text-sm bg-white/5"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                    {generatedContent.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <button className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors text-xs md:text-sm border border-white/10">
                      <RefreshCw size={14} />
                      <span className="hidden sm:inline">Show More</span>
                      <span className="sm:hidden">More</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors text-xs md:text-sm border border-white/10">
                      <Sparkles size={14} />
                      Brainstorm
                    </button>
                    <button className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors text-xs md:text-sm border border-white/10">
                      <MessageSquareQuote size={14} />
                      Reply
                    </button>
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-5xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight ${spaceGrotesk.className}`}>
                    {creationMode === "IMAGE" ? "Let's start with some image storming" : "Generate your videos"}
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base font-medium">
                    Try using one of the presets
                  </p>
                </div>

                {/* Preset Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {creationMode === "IMAGE" ? (
                    <>
                      <PresetCard image="/images/samples/image (45).jpg" title="Fashion in winter" />
                      <PresetCard image="/images/samples/image (59).jpg" title="Portrait lighting" />
                      <PresetCard image="/images/samples/image (63).jpg" title="Action scene" />
                    </>
                  ) : (
                    <>
                      <PresetCard image="/videos/ani.mp4" isVideo title="Cinematic animation" />
                      <PresetCard image="/videos/nature.mp4" isVideo title="Nature aerial" />
                      <PresetCard image="/videos/fantasy.mp4" isVideo title="Fantasy world" />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Bottom Input Area */}
        <div className="border-t border-white/5 bg-black/30 backdrop-blur-xl p-3 md:p-4">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-3 md:mb-4 overflow-x-auto">
              {(["KEYFRAME", "REFERENCE", "MODIFY"] as TabMode[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium transition-colors whitespace-nowrap ${activeTab === tab
                    ? "bg-white/15 text-white border border-white/20"
                    : "text-gray-500 hover:text-gray-300"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Input Container */}
            {/* Input Container Wrapper */}
            <div className="flex bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Left Side Mode Switcher Column */}
              <div className="flex flex-col border-r border-white/5 bg-black/20 w-32 shrink-0">
                <button
                  onClick={() => setCreationMode("IMAGE")}
                  className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-4 transition-all ${creationMode === "IMAGE" ? "bg-white/5 border-l-2 border-white text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  <ImageIcon size={20} />
                  <span className="text-[10px] font-bold tracking-widest uppercase">IMAGE</span>
                </button>
                <div className="h-px bg-white/5 mx-2" />
                <button
                  onClick={() => setCreationMode("VIDEO")}
                  className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-4 transition-all ${creationMode === "VIDEO" ? "bg-white/5 border-l-2 border-white text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  <Video size={20} />
                  <span className="text-[10px] font-bold tracking-widest uppercase">VIDEO</span>
                </button>
              </div>

              {/* Main Input Area */}
              <div className="flex-1 flex flex-col p-4 min-w-0">
                <div className="flex items-start gap-3">
                  {/* Plus/Upload area */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer shrink-0 mt-1">
                    <Plus size={20} />
                  </div>

                  {/* Text Input */}
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={creationMode === "IMAGE" ? "Replace the moose with a sheep" : "The character speaks while moving through the scene"}
                    className="w-full bg-transparent text-white placeholder-gray-600 text-lg resize-none focus:outline-none min-h-[60px]"
                    rows={2}
                  />

                  {/* Magic wand/Send area on the right */}
                  <div className="flex flex-col gap-2 shrink-0">
                    <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors">
                      <Sparkles size={18} />
                    </button>
                  </div>
                </div>

                {/* Bottom Controls Row */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                    {creationMode === "IMAGE" ? (
                      <>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-gray-300 border border-white/5">
                          <Infinity size={14} className="text-gray-500" />
                          <span>FLUX</span>
                        </div>
                        <button className="p-1.5 text-gray-500 hover:text-white"><LayoutGrid size={16} /></button>
                        <button className="p-1.5 text-gray-500 hover:text-white"><Pencil size={16} /></button>
                        <button className="p-1.5 text-gray-500 hover:text-white"><Library size={16} /></button>
                        <button className="p-1.5 text-gray-500 hover:text-white"><Compass size={16} /></button>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-gray-300 border border-white/5">
                          <RefreshCw size={14} className="text-gray-500" />
                          <span>Standard</span>
                          <ChevronDown size={14} />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-gray-300 border border-white/5">
                          <Lock size={14} className="text-gray-500" />
                          <span>LTX-2 Pro</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-gray-300 border border-white/5 relative">
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-[8px] px-1 rounded uppercase">PREVIEW</span>
                          <span>Audio On</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-gray-300 border border-white/5">
                          <span>8 Sec</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-gray-300 border border-white/5">
                          <span>1080p</span>
                        </div>
                      </>
                    )}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-gray-300 border border-white/5">
                      <span>16:9</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-gray-300 border border-white/5">
                      <LayoutGrid size={14} className="text-gray-500" />
                      <span>{creationMode === "IMAGE" ? "6" : "1"}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={!prompt.trim()}
                    className={`p-2.5 rounded-xl transition-all ${prompt.trim()
                      ? 'bg-white text-black hover:scale-105'
                      : 'bg-white/10 text-gray-500 cursor-not-allowed'
                      }`}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Selection Modal */}
      {showModeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl">
            {/* Floating gradient orbs - smaller on mobile */}
            <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
          </div>

          {/* Click to close backdrop */}
          <div
            className="absolute inset-0"
            onClick={() => setShowModeModal(false)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden">
            {/* Glowing border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-[20px] sm:rounded-[32px] blur-sm opacity-60" />

            {/* Main container */}
            <div className="relative bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-[20px] sm:rounded-[32px] border border-white/10 overflow-hidden">
              {/* Top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setShowModeModal(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all hover:rotate-90 duration-300 z-20 group"
              >
                <X size={16} className="sm:w-[18px] sm:h-[18px] text-gray-400 group-hover:text-white transition-colors" />
              </button>

              {/* Header */}
              <div className="text-center pt-8 sm:pt-10 pb-4 sm:pb-6 px-4 sm:px-8">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
                  <Sparkles size={12} className="sm:w-[14px] sm:h-[14px] text-purple-400" />
                  <span className="text-[10px] sm:text-xs font-medium text-gray-300 tracking-wider uppercase">Creative Studio</span>
                </div>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent ${spaceGrotesk.className}`}>
                  Choose Your Mode
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-md mx-auto px-2">
                  Select a creative template to jumpstart your vision
                </p>
              </div>

              {/* Template Cards */}
              <div className="px-3 sm:px-6 pb-6 sm:pb-8 space-y-2 sm:space-y-3 max-h-[55vh] sm:max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {templateModes.map((mode, index) => (
                  <button
                    key={mode.id}
                    onClick={() => {
                      setPrompt(mode.description);
                      setShowModeModal(false);
                    }}
                    className="w-full flex items-center gap-3 sm:gap-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.04] border border-white/[0.06] hover:border-white/20 transition-all duration-300 group text-left relative overflow-hidden active:scale-[0.98]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" style={{ transition: 'transform 0.8s ease-out, opacity 0.3s' }} />

                    {/* Minimal Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-white/20 group-hover:bg-white/[0.06] flex items-center justify-center transition-all duration-300">
                        {mode.icon === 'image' && <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />}
                        {mode.icon === 'video' && <Video className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />}
                        {mode.icon === 'style' && <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />}
                        {mode.icon === 'film' && <Video className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />}
                        {mode.icon === 'clock' && <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0 relative z-10">
                      <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 group-hover:text-white transition-colors">
                        {mode.title}
                      </h3>
                      <p className="text-gray-500 group-hover:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-300 line-clamp-2">
                        {mode.description}
                      </p>
                    </div>

                    {/* Arrow indicator - hidden on mobile */}
                    <div className="hidden sm:flex flex-shrink-0 w-8 h-8 rounded-full bg-white/5 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Preset Card Component
function PresetCard({ image, title, isVideo = false }: { image: string; title: string; isVideo?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideo && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, isVideo]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group cursor-pointer hover:border-white/30 transition-all shadow-xl"
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={image}
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
        <p className="text-sm font-semibold tracking-wide text-white">{title}</p>
      </div>
      {/* Play/Image icon overlay */}
      <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/70 group-hover:text-white transition-colors">
        {isVideo ? <Video size={14} /> : <ImageIcon size={14} />}
      </div>
    </div>
  );
}

// Navigation Item Component
function NavItem({ icon, label, active = false, expanded = false }: { icon: React.ReactNode; label: string; active?: boolean; expanded?: boolean }) {
  return (
    <button
      className={`w-full flex items-center ${expanded ? 'gap-3 px-3' : 'justify-center'} py-2.5 rounded-lg transition-all duration-200 ${active
        ? 'bg-white/10 text-white'
        : 'text-gray-400 hover:text-white hover:bg-white/5'
        }`}
      title={label}
    >
      <span className="flex-shrink-0">{icon}</span>
      {expanded && <span className="text-sm font-medium">{label}</span>}
    </button>
  );
}
