(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Omi-AI-1/src/ReplicateStudio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReplicateStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const sampleModels = [
    {
        id: '1',
        name: 'FLUX.1 [pro]',
        author: 'black-forest-labs',
        description: 'State-of-the-art image generation with top of the line prompt following, visual quality, image detail and output diversity.',
        image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=300&fit=crop',
        runs: '58.2M',
        category: 'image'
    },
    {
        id: '2',
        name: 'Gemma 2 27B',
        author: 'google-deepmind',
        description: 'Google\'s newest and most capable model for text generation and reasoning tasks.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
        runs: '23.5M',
        category: 'text'
    },
    {
        id: '3',
        name: 'Stable Video Diffusion',
        author: 'stability-ai',
        description: 'Generate short video clips from images using latent video diffusion.',
        image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop',
        runs: '12.8M',
        category: 'video'
    },
    {
        id: '4',
        name: 'Whisper Large V3',
        author: 'openai',
        description: 'Convert audio speech to text with high accuracy in multiple languages.',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop',
        runs: '45.1M',
        category: 'audio'
    },
    {
        id: '5',
        name: 'LLaVA 34B',
        author: 'yorickvp',
        description: 'Visual instruction tuning towards large language and vision models.',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop',
        runs: '8.9M',
        category: 'multimodal'
    },
    {
        id: '6',
        name: 'RealESRGAN',
        author: 'xinntao',
        description: 'Upscale images by 4x using practical algorithms for image restoration.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
        runs: '67.3M',
        category: 'image'
    },
    {
        id: '7',
        name: 'CodeLlama 70B',
        author: 'meta',
        description: 'Large language model that can use text prompts to generate and discuss code.',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop',
        runs: '19.2M',
        category: 'text'
    },
    {
        id: '8',
        name: 'Riffusion',
        author: 'riffusion',
        description: 'Generate music from text prompts using stable diffusion.',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
        runs: '34.6M',
        category: 'audio'
    }
];
const actionCategories = [
    {
        icon: '🎨',
        title: 'Generate images',
        description: 'Create stunning visuals with AI'
    },
    {
        icon: '🎬',
        title: 'Caption videos',
        description: 'Automatically caption your videos'
    },
    {
        icon: '🗣️',
        title: 'Generate speech',
        description: 'Convert text to natural speech'
    },
    {
        icon: '✨',
        title: 'Upscale images',
        description: 'Enhance image resolution'
    },
    {
        icon: '🎵',
        title: 'Generate music',
        description: 'Create original music tracks'
    },
    {
        icon: '💬',
        title: 'Chat with AI',
        description: 'Interact with language models'
    },
    {
        icon: '🔍',
        title: 'Remove backgrounds',
        description: 'Clean image backgrounds'
    },
    {
        icon: '🎭',
        title: 'Restore photos',
        description: 'Fix old or damaged photos'
    }
];
function ReplicateStudio({ onClose }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Latest');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const tabs = [
        'Latest',
        'Blog posts',
        'Featured models',
        'Popular',
        'New releases'
    ];
    const filteredModels = sampleModels.filter((model)=>model.name.toLowerCase().includes(searchQuery.toLowerCase()) || model.author.toLowerCase().includes(searchQuery.toLowerCase()) || model.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "replicate-studio",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "replicate-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "replicate-header-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "replicate-logo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "replicate-logo-icon",
                                    children: "🔮"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "replicate-logo-text",
                                    children: "Replicate Studio"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "replicate-nav",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-nav-link",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-nav-link",
                                    children: "Explore"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-nav-link",
                                    children: "Docs"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-nav-link",
                                    children: "Pricing"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "replicate-header-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "replicate-btn-secondary",
                                    children: "Sign in"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "replicate-btn-primary",
                                    children: "Get started"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "replicate-close-btn",
                                    onClick: onClose,
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "replicate-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "replicate-hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "replicate-hero-title",
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "replicate-hero-subtitle",
                                children: "Discover thousands of AI models. From image generation to language processing."
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "replicate-tabs-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "replicate-tabs",
                                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `replicate-tab ${activeTab === tab ? 'active' : ''}`,
                                        onClick: ()=>setActiveTab(tab),
                                        children: tab
                                    }, tab, false, {
                                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "replicate-search-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "replicate-search",
                                        placeholder: "Search models...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "replicate-search-icon",
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "replicate-models-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "replicate-models-grid",
                            children: filteredModels.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "replicate-model-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "replicate-model-image",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: model.image,
                                                    alt: model.name,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "replicate-model-overlay",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "replicate-model-run-btn",
                                                        children: "Run Model"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "replicate-model-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "replicate-model-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "replicate-model-name",
                                                            children: model.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "replicate-model-runs",
                                                            children: [
                                                                model.runs,
                                                                " runs"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "replicate-model-author",
                                                    children: [
                                                        "by ",
                                                        model.author
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "replicate-model-description",
                                                    children: model.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, model.id, true, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "replicate-actions-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "replicate-section-title",
                                children: "I want to..."
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "replicate-actions-grid",
                                children: actionCategories.map((action, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "replicate-action-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "replicate-action-icon",
                                                children: action.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "replicate-action-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "replicate-action-title",
                                                        children: action.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "replicate-action-description",
                                                        children: action.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "replicate-action-arrow",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "replicate-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "replicate-footer-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "replicate-footer-links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-footer-link",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-footer-link",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-footer-link",
                                    children: "Changelog"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-footer-link",
                                    children: "Join us"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-footer-link",
                                    children: "Terms"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-footer-link",
                                    children: "Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-footer-link",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "replicate-footer-link",
                                    children: "Support"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "replicate-footer-brand",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Powered by Omi AI • Exploring AI models with intelligence"
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Omi-AI-1/src/ReplicateStudio.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(ReplicateStudio, "mbh0rI4tUAt9OsIyOkyRW5RuoWs=");
_c = ReplicateStudio;
var _c;
__turbopack_context__.k.register(_c, "ReplicateStudio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Omi-AI-1/app/replicate-studio/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReplicateStudioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$ReplicateStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/src/ReplicateStudio.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ReplicateStudioPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-transition fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$ReplicateStudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: ()=>router.back()
        }, void 0, false, {
            fileName: "[project]/Omi-AI-1/app/replicate-studio/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Omi-AI-1/app/replicate-studio/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(ReplicateStudioPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ReplicateStudioPage;
var _c;
__turbopack_context__.k.register(_c, "ReplicateStudioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Omi-AI-1_ecf7a66e._.js.map