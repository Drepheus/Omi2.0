module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Omi-AI-1/src/DomeGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DomeGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$use$2d$gesture$2b$react$40$10$2e$3$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f40$use$2d$gesture$2f$react$2f$dist$2f$use$2d$gesture$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@use-gesture+react@10.3.1_react@19.2.0/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const DEFAULT_IMAGES = [
    {
        src: 'https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Abstract art'
    },
    {
        src: 'https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Modern sculpture'
    },
    {
        src: 'https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Digital artwork'
    },
    {
        src: 'https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Contemporary art'
    },
    {
        src: 'https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Geometric pattern'
    },
    {
        src: 'https://images.unsplash.com/photo-1752588975228-21f44630bb3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Textured surface'
    },
    {
        src: 'https://pbs.twimg.com/media/Gyla7NnXMAAXSo_?format=jpg&name=large',
        alt: 'Social media image'
    }
];
const DEFAULTS = {
    maxVerticalRotationDeg: 5,
    dragSensitivity: 20,
    enlargeTransitionMs: 300,
    segments: 35
};
const clamp = (v, min, max)=>Math.min(Math.max(v, min), max);
const normalizeAngle = (d)=>(d % 360 + 360) % 360;
const wrapAngleSigned = (deg)=>{
    const a = ((deg + 180) % 360 + 360) % 360;
    return a - 180;
};
const getDataNumber = (el, name, fallback)=>{
    const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
    const n = attr == null ? NaN : parseFloat(attr);
    return Number.isFinite(n) ? n : fallback;
};
function buildItems(pool, seg) {
    const xCols = Array.from({
        length: seg
    }, (_, i)=>-37 + i * 2);
    const evenYs = [
        -4,
        -2,
        0,
        2,
        4
    ];
    const oddYs = [
        -3,
        -1,
        1,
        3,
        5
    ];
    const coords = xCols.flatMap((x, c)=>{
        const ys = c % 2 === 0 ? evenYs : oddYs;
        return ys.map((y)=>({
                x,
                y,
                sizeX: 2,
                sizeY: 2
            }));
    });
    const totalSlots = coords.length;
    if (pool.length === 0) {
        return coords.map((c)=>({
                ...c,
                src: '',
                alt: ''
            }));
    }
    if (pool.length > totalSlots) {
        console.warn(`[DomeGallery] Provided image count (${pool.length}) exceeds available tiles (${totalSlots}). Some images will not be shown.`);
    }
    const normalizedImages = pool.map((image)=>{
        if (typeof image === 'string') {
            return {
                src: image,
                alt: ''
            };
        }
        return {
            src: image.src || '',
            alt: image.alt || ''
        };
    });
    const usedImages = Array.from({
        length: totalSlots
    }, (_, i)=>normalizedImages[i % normalizedImages.length]);
    for(let i = 1; i < usedImages.length; i++){
        if (usedImages[i].src === usedImages[i - 1].src) {
            for(let j = i + 1; j < usedImages.length; j++){
                if (usedImages[j].src !== usedImages[i].src) {
                    const tmp = usedImages[i];
                    usedImages[i] = usedImages[j];
                    usedImages[j] = tmp;
                    break;
                }
            }
        }
    }
    return coords.map((c, i)=>({
            ...c,
            src: usedImages[i].src,
            alt: usedImages[i].alt
        }));
}
function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
    const unit = 360 / segments / 2;
    const rotateY = unit * (offsetX + (sizeX - 1) / 2);
    const rotateX = unit * (offsetY - (sizeY - 1) / 2);
    return {
        rotateX,
        rotateY
    };
}
function DomeGallery({ images = DEFAULT_IMAGES, fit = 0.5, fitBasis = 'auto', minRadius = 600, maxRadius = Infinity, padFactor = 0.25, overlayBlurColor = '#060010', maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg, dragSensitivity = DEFAULTS.dragSensitivity, enlargeTransitionMs = DEFAULTS.enlargeTransitionMs, segments = DEFAULTS.segments, dragDampening = 2, openedImageWidth = '400px', openedImageHeight = '400px', imageBorderRadius = '30px', openedImageBorderRadius = '30px', grayscale = true }) {
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sphereRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const focusedElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalTilePositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rotationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const startRotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const startPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const draggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const movedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const inertiaRAF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const openStartedAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastDragEndAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollLockedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (scrollLockedRef.current) return;
        scrollLockedRef.current = true;
        document.body.classList.add('dg-scroll-lock');
    }, []);
    const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!scrollLockedRef.current) return;
        if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
        scrollLockedRef.current = false;
        document.body.classList.remove('dg-scroll-lock');
    }, []);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildItems(images, segments), [
        images,
        segments
    ]);
    const applyTransform = (xDeg, yDeg)=>{
        const el = sphereRef.current;
        if (el) {
            el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
        }
    };
    const lockedRadiusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        const ro = new ResizeObserver((entries)=>{
            const cr = entries[0].contentRect;
            const w = Math.max(1, cr.width), h = Math.max(1, cr.height);
            const minDim = Math.min(w, h), maxDim = Math.max(w, h), aspect = w / h;
            let basis;
            switch(fitBasis){
                case 'min':
                    basis = minDim;
                    break;
                case 'max':
                    basis = maxDim;
                    break;
                case 'width':
                    basis = w;
                    break;
                case 'height':
                    basis = h;
                    break;
                default:
                    basis = aspect >= 1.3 ? w : minDim;
            }
            let radius = basis * fit;
            const heightGuard = h * 1.35;
            radius = Math.min(radius, heightGuard);
            radius = clamp(radius, minRadius, maxRadius);
            lockedRadiusRef.current = Math.round(radius);
            const viewerPad = Math.max(8, Math.round(minDim * padFactor));
            root.style.setProperty('--radius', `${lockedRadiusRef.current}px`);
            root.style.setProperty('--viewer-pad', `${viewerPad}px`);
            root.style.setProperty('--overlay-blur-color', overlayBlurColor);
            root.style.setProperty('--tile-radius', imageBorderRadius);
            root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
            root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
            applyTransform(rotationRef.current.x, rotationRef.current.y);
            const enlargedOverlay = viewerRef.current?.querySelector('.enlarge');
            if (enlargedOverlay && frameRef.current && mainRef.current) {
                const frameR = frameRef.current.getBoundingClientRect();
                const mainR = mainRef.current.getBoundingClientRect();
                const hasCustomSize = openedImageWidth && openedImageHeight;
                if (hasCustomSize) {
                    const tempDiv = document.createElement('div');
                    tempDiv.style.cssText = `position: absolute; width: ${openedImageWidth}; height: ${openedImageHeight}; visibility: hidden;`;
                    document.body.appendChild(tempDiv);
                    const tempRect = tempDiv.getBoundingClientRect();
                    document.body.removeChild(tempDiv);
                    const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
                    const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;
                    enlargedOverlay.style.left = `${centeredLeft}px`;
                    enlargedOverlay.style.top = `${centeredTop}px`;
                } else {
                    enlargedOverlay.style.left = `${frameR.left - mainR.left}px`;
                    enlargedOverlay.style.top = `${frameR.top - mainR.top}px`;
                    enlargedOverlay.style.width = `${frameR.width}px`;
                    enlargedOverlay.style.height = `${frameR.height}px`;
                }
            }
        });
        ro.observe(root);
        return ()=>ro.disconnect();
    }, [
        fit,
        fitBasis,
        minRadius,
        maxRadius,
        padFactor,
        overlayBlurColor,
        grayscale,
        imageBorderRadius,
        openedImageBorderRadius,
        openedImageWidth,
        openedImageHeight
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        applyTransform(rotationRef.current.x, rotationRef.current.y);
    }, []);
    const stopInertia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (inertiaRAF.current) {
            cancelAnimationFrame(inertiaRAF.current);
            inertiaRAF.current = null;
        }
    }, []);
    const startInertia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((vx, vy)=>{
        const MAX_V = 1.4;
        let vX = clamp(vx, -MAX_V, MAX_V) * 80;
        let vY = clamp(vy, -MAX_V, MAX_V) * 80;
        let frames = 0;
        const d = clamp(dragDampening ?? 0.6, 0, 1);
        const frictionMul = 0.94 + 0.055 * d;
        const stopThreshold = 0.015 - 0.01 * d;
        const maxFrames = Math.round(90 + 270 * d);
        const step = ()=>{
            vX *= frictionMul;
            vY *= frictionMul;
            if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
                inertiaRAF.current = null;
                return;
            }
            if (++frames > maxFrames) {
                inertiaRAF.current = null;
                return;
            }
            const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
            const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
            rotationRef.current = {
                x: nextX,
                y: nextY
            };
            applyTransform(nextX, nextY);
            inertiaRAF.current = requestAnimationFrame(step);
        };
        stopInertia();
        inertiaRAF.current = requestAnimationFrame(step);
    }, [
        dragDampening,
        maxVerticalRotationDeg,
        stopInertia
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$use$2d$gesture$2b$react$40$10$2e$3$2e$1_react$40$19$2e$2$2e$0$2f$node_modules$2f40$use$2d$gesture$2f$react$2f$dist$2f$use$2d$gesture$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGesture"])({
        onDragStart: ({ event })=>{
            if (focusedElRef.current) return;
            stopInertia();
            const evt = event;
            draggingRef.current = true;
            movedRef.current = false;
            startRotRef.current = {
                ...rotationRef.current
            };
            startPosRef.current = {
                x: evt.clientX,
                y: evt.clientY
            };
        },
        onDrag: ({ event, last, velocity = [
            0,
            0
        ], direction = [
            0,
            0
        ], movement })=>{
            if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;
            const evt = event;
            const dxTotal = evt.clientX - startPosRef.current.x;
            const dyTotal = evt.clientY - startPosRef.current.y;
            if (!movedRef.current) {
                const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
                if (dist2 > 16) movedRef.current = true;
            }
            const nextX = clamp(startRotRef.current.x - dyTotal / dragSensitivity, -maxVerticalRotationDeg, maxVerticalRotationDeg);
            const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);
            if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
                rotationRef.current = {
                    x: nextX,
                    y: nextY
                };
                applyTransform(nextX, nextY);
            }
            if (last) {
                draggingRef.current = false;
                let [vMagX, vMagY] = velocity;
                const [dirX, dirY] = direction;
                let vx = vMagX * dirX;
                let vy = vMagY * dirY;
                if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
                    const [mx, my] = movement;
                    vx = clamp(mx / dragSensitivity * 0.02, -1.2, 1.2);
                    vy = clamp(my / dragSensitivity * 0.02, -1.2, 1.2);
                }
                if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) {
                    startInertia(vx, vy);
                }
                if (movedRef.current) lastDragEndAt.current = performance.now();
                movedRef.current = false;
            }
        }
    }, {
        target: mainRef,
        eventOptions: {
            passive: true
        }
    });
    const openItemFromElement = (el)=>{
        if (openingRef.current) return;
        openingRef.current = true;
        openStartedAtRef.current = performance.now();
        lockScroll();
        const parent = el.parentElement;
        focusedElRef.current = el;
        el.setAttribute('data-focused', 'true');
        const offsetX = getDataNumber(parent, 'offsetX', 0);
        const offsetY = getDataNumber(parent, 'offsetY', 0);
        const sizeX = getDataNumber(parent, 'sizeX', 2);
        const sizeY = getDataNumber(parent, 'sizeY', 2);
        const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
        const parentY = normalizeAngle(parentRot.rotateY);
        const globalY = normalizeAngle(rotationRef.current.y);
        let rotY = -(parentY + globalY) % 360;
        if (rotY < -180) rotY += 360;
        const rotX = -parentRot.rotateX - rotationRef.current.x;
        parent.style.setProperty('--rot-y-delta', `${rotY}deg`);
        parent.style.setProperty('--rot-x-delta', `${rotX}deg`);
        const refDiv = document.createElement('div');
        refDiv.className = 'item__image item__image--reference';
        refDiv.style.opacity = '0';
        refDiv.style.transform = `rotateX(${-parentRot.rotateX}deg) rotateY(${-parentRot.rotateY}deg)`;
        parent.appendChild(refDiv);
        void refDiv.offsetHeight;
        const tileR = refDiv.getBoundingClientRect();
        const mainR = mainRef.current?.getBoundingClientRect();
        const frameR = frameRef.current?.getBoundingClientRect();
        if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) {
            openingRef.current = false;
            focusedElRef.current = null;
            parent.removeChild(refDiv);
            unlockScroll();
            return;
        }
        originalTilePositionRef.current = {
            left: tileR.left,
            top: tileR.top,
            width: tileR.width,
            height: tileR.height
        };
        el.style.visibility = 'hidden';
        el.style.zIndex = 0;
        const overlay = document.createElement('div');
        overlay.className = 'enlarge';
        overlay.style.position = 'absolute';
        overlay.style.left = frameR.left - mainR.left + 'px';
        overlay.style.top = frameR.top - mainR.top + 'px';
        overlay.style.width = frameR.width + 'px';
        overlay.style.height = frameR.height + 'px';
        overlay.style.opacity = '0';
        overlay.style.zIndex = '30';
        overlay.style.willChange = 'transform, opacity';
        overlay.style.transformOrigin = 'top left';
        overlay.style.transition = `transform ${enlargeTransitionMs}ms ease, opacity ${enlargeTransitionMs}ms ease`;
        const rawSrc = parent.dataset.src || el.querySelector('img')?.src || '';
        const img = document.createElement('img');
        img.src = rawSrc;
        overlay.appendChild(img);
        viewerRef.current.appendChild(overlay);
        const tx0 = tileR.left - frameR.left;
        const ty0 = tileR.top - frameR.top;
        const sx0 = tileR.width / frameR.width;
        const sy0 = tileR.height / frameR.height;
        const validSx0 = isFinite(sx0) && sx0 > 0 ? sx0 : 1;
        const validSy0 = isFinite(sy0) && sy0 > 0 ? sy0 : 1;
        overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${validSx0}, ${validSy0})`;
        setTimeout(()=>{
            if (!overlay.parentElement) return;
            overlay.style.opacity = '1';
            overlay.style.transform = 'translate(0px, 0px) scale(1, 1)';
            rootRef.current?.setAttribute('data-enlarging', 'true');
        }, 16);
        const wantsResize = openedImageWidth || openedImageHeight;
        if (wantsResize) {
            const onFirstEnd = (ev)=>{
                if (ev.propertyName !== 'transform') return;
                overlay.removeEventListener('transitionend', onFirstEnd);
                const prevTransition = overlay.style.transition;
                overlay.style.transition = 'none';
                const tempWidth = openedImageWidth || `${frameR.width}px`;
                const tempHeight = openedImageHeight || `${frameR.height}px`;
                overlay.style.width = tempWidth;
                overlay.style.height = tempHeight;
                const newRect = overlay.getBoundingClientRect();
                overlay.style.width = frameR.width + 'px';
                overlay.style.height = frameR.height + 'px';
                void overlay.offsetWidth;
                overlay.style.transition = `left ${enlargeTransitionMs}ms ease, top ${enlargeTransitionMs}ms ease, width ${enlargeTransitionMs}ms ease, height ${enlargeTransitionMs}ms ease`;
                const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
                const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
                requestAnimationFrame(()=>{
                    overlay.style.left = `${centeredLeft}px`;
                    overlay.style.top = `${centeredTop}px`;
                    overlay.style.width = tempWidth;
                    overlay.style.height = tempHeight;
                });
                const cleanupSecond = ()=>{
                    overlay.removeEventListener('transitionend', cleanupSecond);
                    overlay.style.transition = prevTransition;
                };
                overlay.addEventListener('transitionend', cleanupSecond, {
                    once: true
                });
            };
            overlay.addEventListener('transitionend', onFirstEnd);
        }
    };
    const onTileClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (draggingRef.current) return;
        if (movedRef.current) return;
        if (performance.now() - lastDragEndAt.current < 80) return;
        if (openingRef.current) return;
        openItemFromElement(e.currentTarget);
    }, [
        openItemFromElement
    ]);
    const onTilePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.pointerType !== 'touch') return;
        if (draggingRef.current) return;
        if (movedRef.current) return;
        if (performance.now() - lastDragEndAt.current < 80) return;
        if (openingRef.current) return;
        openItemFromElement(e.currentTarget);
    }, [
        openItemFromElement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const scrim = scrimRef.current;
        if (!scrim) return;
        const close = ()=>{
            if (performance.now() - openStartedAtRef.current < 250) return;
            const el = focusedElRef.current;
            if (!el) return;
            const parent = el.parentElement;
            const overlay = viewerRef.current?.querySelector('.enlarge');
            if (!overlay) return;
            const refDiv = parent.querySelector('.item__image--reference');
            const originalPos = originalTilePositionRef.current;
            if (!originalPos) {
                overlay.remove();
                if (refDiv) refDiv.remove();
                parent.style.setProperty('--rot-y-delta', `0deg`);
                parent.style.setProperty('--rot-x-delta', `0deg`);
                el.style.visibility = '';
                el.style.zIndex = 0;
                focusedElRef.current = null;
                rootRef.current?.removeAttribute('data-enlarging');
                openingRef.current = false;
                unlockScroll();
                return;
            }
            const currentRect = overlay.getBoundingClientRect();
            const rootRect = rootRef.current.getBoundingClientRect();
            const originalPosRelativeToRoot = {
                left: originalPos.left - rootRect.left,
                top: originalPos.top - rootRect.top,
                width: originalPos.width,
                height: originalPos.height
            };
            const overlayRelativeToRoot = {
                left: currentRect.left - rootRect.left,
                top: currentRect.top - rootRect.top,
                width: currentRect.width,
                height: currentRect.height
            };
            const animatingOverlay = document.createElement('div');
            animatingOverlay.className = 'enlarge-closing';
            animatingOverlay.style.cssText = `
        position: absolute;
        left: ${overlayRelativeToRoot.left}px;
        top: ${overlayRelativeToRoot.top}px;
        width: ${overlayRelativeToRoot.width}px;
        height: ${overlayRelativeToRoot.height}px;
        z-index: 9999;
        border-radius: var(--enlarge-radius, 32px);
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,.35);
        transition: all ${enlargeTransitionMs}ms ease-out;
        pointer-events: none;
        margin: 0;
        transform: none;
      `;
            const originalImg = overlay.querySelector('img');
            if (originalImg) {
                const img = originalImg.cloneNode();
                img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
                animatingOverlay.appendChild(img);
            }
            overlay.remove();
            rootRef.current.appendChild(animatingOverlay);
            void animatingOverlay.getBoundingClientRect();
            requestAnimationFrame(()=>{
                animatingOverlay.style.left = originalPosRelativeToRoot.left + 'px';
                animatingOverlay.style.top = originalPosRelativeToRoot.top + 'px';
                animatingOverlay.style.width = originalPosRelativeToRoot.width + 'px';
                animatingOverlay.style.height = originalPosRelativeToRoot.height + 'px';
                animatingOverlay.style.opacity = '0';
            });
            const cleanup = ()=>{
                animatingOverlay.remove();
                originalTilePositionRef.current = null;
                if (refDiv) refDiv.remove();
                parent.style.transition = 'none';
                el.style.transition = 'none';
                parent.style.setProperty('--rot-y-delta', `0deg`);
                parent.style.setProperty('--rot-x-delta', `0deg`);
                requestAnimationFrame(()=>{
                    el.style.visibility = '';
                    el.style.opacity = '0';
                    el.style.zIndex = 0;
                    focusedElRef.current = null;
                    rootRef.current?.removeAttribute('data-enlarging');
                    requestAnimationFrame(()=>{
                        parent.style.transition = '';
                        el.style.transition = 'opacity 300ms ease-out';
                        requestAnimationFrame(()=>{
                            el.style.opacity = '1';
                            setTimeout(()=>{
                                el.style.transition = '';
                                el.style.opacity = '';
                                openingRef.current = false;
                                if (!draggingRef.current && rootRef.current?.getAttribute('data-enlarging') !== 'true') {
                                    document.body.classList.remove('dg-scroll-lock');
                                }
                            }, 300);
                        });
                    });
                });
            };
            animatingOverlay.addEventListener('transitionend', cleanup, {
                once: true
            });
        };
        scrim.addEventListener('click', close);
        const onKey = (e)=>{
            if (e.key === 'Escape') close();
        };
        window.addEventListener('keydown', onKey);
        return ()=>{
            scrim.removeEventListener('click', close);
            window.removeEventListener('keydown', onKey);
        };
    }, [
        enlargeTransitionMs,
        unlockScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            document.body.classList.remove('dg-scroll-lock');
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "sphere-root",
        style: {
            ['--segments-x']: segments,
            ['--segments-y']: segments,
            ['--overlay-blur-color']: overlayBlurColor,
            ['--tile-radius']: imageBorderRadius,
            ['--enlarge-radius']: openedImageBorderRadius,
            ['--image-filter']: grayscale ? 'grayscale(1)' : 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            ref: mainRef,
            className: "sphere-main",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stage",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: sphereRef,
                        className: "sphere",
                        children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "item",
                                "data-src": it.src,
                                "data-offset-x": it.x,
                                "data-offset-y": it.y,
                                "data-size-x": it.sizeX,
                                "data-size-y": it.sizeY,
                                style: {
                                    ['--offset-x']: it.x,
                                    ['--offset-y']: it.y,
                                    ['--item-size-x']: it.sizeX,
                                    ['--item-size-y']: it.sizeY
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "item__image",
                                    role: "button",
                                    tabIndex: 0,
                                    "aria-label": it.alt || 'Open image',
                                    onClick: onTileClick,
                                    onPointerUp: onTilePointerUp,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: it.src,
                                        draggable: false,
                                        alt: it.alt
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                                        lineNumber: 741,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                                    lineNumber: 733,
                                    columnNumber: 17
                                }, this)
                            }, `${it.x},${it.y},${i}`, false, {
                                fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                                lineNumber: 716,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                        lineNumber: 714,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                    lineNumber: 713,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overlay"
                }, void 0, false, {
                    fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                    lineNumber: 748,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overlay overlay--blur"
                }, void 0, false, {
                    fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                    lineNumber: 749,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "edge-fade edge-fade--top"
                }, void 0, false, {
                    fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                    lineNumber: 750,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "edge-fade edge-fade--bottom"
                }, void 0, false, {
                    fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                    lineNumber: 751,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "viewer",
                    ref: viewerRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrimRef,
                            className: "scrim"
                        }, void 0, false, {
                            fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                            lineNumber: 754,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: frameRef,
                            className: "frame"
                        }, void 0, false, {
                            fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                            lineNumber: 755,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
                    lineNumber: 753,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
            lineNumber: 712,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Omi-AI-1/src/DomeGallery.tsx",
        lineNumber: 698,
        columnNumber: 5
    }, this);
}
}),
"[project]/Omi-AI-1/src/LogoLoop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoLoop",
    ()=>LogoLoop,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ANIMATION_CONFIG = {
    SMOOTH_TAU: 0.25,
    MIN_COPIES: 2,
    COPY_HEADROOM: 2
};
const toCssLength = (value)=>typeof value === 'number' ? `${value}px` : value ?? undefined;
const useResizeObserver = (callback, elements, dependencies)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!window.ResizeObserver) {
            const handleResize = ()=>callback();
            window.addEventListener('resize', handleResize);
            callback();
            return ()=>window.removeEventListener('resize', handleResize);
        }
        const observers = elements.map((ref)=>{
            if (!ref.current) return null;
            const observer = new ResizeObserver(callback);
            observer.observe(ref.current);
            return observer;
        });
        callback();
        return ()=>{
            observers.forEach((observer)=>observer?.disconnect());
        };
    }, dependencies);
};
const useImageLoader = (seqRef, onLoad, dependencies)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const images = seqRef.current?.querySelectorAll('img') ?? [];
        if (images.length === 0) {
            onLoad();
            return;
        }
        let remainingImages = images.length;
        const handleImageLoad = ()=>{
            remainingImages -= 1;
            if (remainingImages === 0) {
                onLoad();
            }
        };
        images.forEach((img)=>{
            const htmlImg = img;
            if (htmlImg.complete) {
                handleImageLoad();
            } else {
                htmlImg.addEventListener('load', handleImageLoad, {
                    once: true
                });
                htmlImg.addEventListener('error', handleImageLoad, {
                    once: true
                });
            }
        });
        return ()=>{
            images.forEach((img)=>{
                img.removeEventListener('load', handleImageLoad);
                img.removeEventListener('error', handleImageLoad);
            });
        };
    }, dependencies);
};
const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical)=>{
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const velocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const track = trackRef.current;
        if (!track) return;
        const seqSize = isVertical ? seqHeight : seqWidth;
        if (seqSize > 0) {
            offsetRef.current = (offsetRef.current % seqSize + seqSize) % seqSize;
            const transformValue = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
            track.style.transform = transformValue;
        }
        const animate = (timestamp)=>{
            if (lastTimestampRef.current === null) {
                lastTimestampRef.current = timestamp;
            }
            const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
            lastTimestampRef.current = timestamp;
            const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
            const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
            velocityRef.current += (target - velocityRef.current) * easingFactor;
            if (seqSize > 0) {
                let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
                nextOffset = (nextOffset % seqSize + seqSize) % seqSize;
                offsetRef.current = nextOffset;
                const transformValue = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
                track.style.transform = transformValue;
            }
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
            lastTimestampRef.current = null;
        };
    }, [
        targetVelocity,
        seqWidth,
        seqHeight,
        isHovered,
        hoverSpeed,
        isVertical
    ]);
};
const LogoLoop = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ logos, speed = 120, direction = 'left', width = '100%', logoHeight = 28, gap = 32, pauseOnHover, hoverSpeed, fadeOut = false, fadeOutColor, scaleOnHover = false, renderItem, ariaLabel = 'Partner logos', className, style })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const seqRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [seqWidth, setSeqWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [seqHeight, setSeqHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copyCount, setCopyCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const effectiveHoverSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (hoverSpeed !== undefined) return hoverSpeed;
        if (pauseOnHover === true) return 0;
        if (pauseOnHover === false) return undefined;
        return 0;
    }, [
        hoverSpeed,
        pauseOnHover
    ]);
    const isVertical = direction === 'up' || direction === 'down';
    const targetVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const magnitude = Math.abs(speed);
        let directionMultiplier;
        if (isVertical) {
            directionMultiplier = direction === 'up' ? 1 : -1;
        } else {
            directionMultiplier = direction === 'left' ? 1 : -1;
        }
        const speedMultiplier = speed < 0 ? -1 : 1;
        return magnitude * directionMultiplier * speedMultiplier;
    }, [
        speed,
        direction,
        isVertical
    ]);
    const updateDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const containerWidth = containerRef.current?.clientWidth ?? 0;
        const sequenceRect = seqRef.current?.getBoundingClientRect?.();
        const sequenceWidth = sequenceRect?.width ?? 0;
        const sequenceHeight = sequenceRect?.height ?? 0;
        if (isVertical) {
            const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
            if (containerRef.current && parentHeight > 0) {
                const targetHeight = Math.ceil(parentHeight);
                if (containerRef.current.style.height !== `${targetHeight}px`) containerRef.current.style.height = `${targetHeight}px`;
            }
            if (sequenceHeight > 0) {
                setSeqHeight(Math.ceil(sequenceHeight));
                const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
                const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
                setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
            }
        } else if (sequenceWidth > 0) {
            setSeqWidth(Math.ceil(sequenceWidth));
            const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
            setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
    }, [
        isVertical
    ]);
    useResizeObserver(updateDimensions, [
        containerRef,
        seqRef
    ], [
        logos,
        gap,
        logoHeight,
        isVertical
    ]);
    useImageLoader(seqRef, updateDimensions, [
        logos,
        gap,
        logoHeight,
        isVertical
    ]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);
    const cssVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            '--logoloop-gap': `${gap}px`,
            '--logoloop-logoHeight': `${logoHeight}px`,
            ...fadeOutColor && {
                '--logoloop-fadeColor': fadeOutColor
            }
        }), [
        gap,
        logoHeight,
        fadeOutColor
    ]);
    const rootClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            'logoloop',
            isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
            fadeOut && 'logoloop--fade',
            scaleOnHover && 'logoloop--scale-hover',
            className
        ].filter(Boolean).join(' '), [
        isVertical,
        fadeOut,
        scaleOnHover,
        className
    ]);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [
        effectiveHoverSpeed
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [
        effectiveHoverSpeed
    ]);
    const renderLogoItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item, key)=>{
        if (renderItem) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "logoloop__item",
                role: "listitem",
                children: renderItem(item, key)
            }, key, false, {
                fileName: "[project]/Omi-AI-1/src/LogoLoop.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
        }
        const isNodeItem = 'node' in item;
        const content = isNodeItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "logoloop__node",
            "aria-hidden": !!item.href && !item.ariaLabel,
            children: item.node
        }, void 0, false, {
            fileName: "[project]/Omi-AI-1/src/LogoLoop.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: item.src,
            srcSet: item.srcSet,
            sizes: item.sizes,
            width: item.width,
            height: item.height,
            alt: item.alt ?? '',
            title: item.title,
            loading: "lazy",
            decoding: "async",
            draggable: false
        }, void 0, false, {
            fileName: "[project]/Omi-AI-1/src/LogoLoop.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        const itemAriaLabel = isNodeItem ? item.ariaLabel ?? item.title : item.alt ?? item.title;
        const itemContent = item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            className: "logoloop__link",
            href: item.href,
            "aria-label": itemAriaLabel || 'logo link',
            target: "_blank",
            rel: "noreferrer noopener",
            children: content
        }, void 0, false, {
            fileName: "[project]/Omi-AI-1/src/LogoLoop.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)) : content;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "logoloop__item",
            role: "listitem",
            children: itemContent
        }, key, false, {
            fileName: "[project]/Omi-AI-1/src/LogoLoop.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
    }, [
        renderItem
    ]);
    const logoLists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: copyCount
        }, (_, copyIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "logoloop__list",
                role: "list",
                "aria-hidden": copyIndex > 0,
                ref: copyIndex === 0 ? seqRef : undefined,
                children: logos.map((item, itemIndex)=>renderLogoItem(item, `${copyIndex}-${itemIndex}`))
            }, `copy-${copyIndex}`, false, {
                fileName: "[project]/Omi-AI-1/src/LogoLoop.tsx",
                lineNumber: 351,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))), [
        copyCount,
        logos,
        renderLogoItem
    ]);
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            width: isVertical ? toCssLength(width) === '100%' ? undefined : toCssLength(width) : toCssLength(width) ?? '100%',
            ...cssVariables,
            ...style
        }), [
        width,
        cssVariables,
        style,
        isVertical
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: rootClassName,
        style: containerStyle,
        role: "region",
        "aria-label": ariaLabel,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "logoloop__track",
            ref: trackRef,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: logoLists
        }, void 0, false, {
            fileName: "[project]/Omi-AI-1/src/LogoLoop.tsx",
            lineNumber: 379,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Omi-AI-1/src/LogoLoop.tsx",
        lineNumber: 378,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
LogoLoop.displayName = 'LogoLoop';
const __TURBOPACK__default__export__ = LogoLoop;
}),
"[project]/Omi-AI-1/components/typography/shiny-text.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShinyText",
    ()=>ShinyText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function ShinyText({ text, disabled = false, speed = 5, className = "" }) {
    const animationDuration = `${speed}s`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `shiny-text ${disabled ? "disabled" : ""} ${className}`,
        style: {
            animationDuration
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/Omi-AI-1/components/typography/shiny-text.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Omi-AI-1/src/MediaStudio.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_f10c133739128b9444d932a552777ca7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/framer-motion@12.23.24_reac_f10c133739128b9444d932a552777ca7/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$DomeGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/src/DomeGallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$LogoLoop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/src/LogoLoop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$components$2f$typography$2f$shiny$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/components/typography/shiny-text.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const sidebarTools = [
    {
        name: 'Home',
        icon: '🏠',
        section: 'main'
    },
    {
        name: 'Library',
        icon: '📚',
        section: 'main'
    },
    {
        name: 'Image',
        icon: '🎨',
        section: 'AI Tools'
    },
    {
        name: 'Video',
        icon: '🎬',
        section: 'AI Tools'
    },
    {
        name: 'Blueprints',
        icon: '📋',
        section: 'AI Tools',
        badge: 'Beta'
    },
    {
        name: 'Flow State',
        icon: '∞',
        section: 'AI Tools'
    },
    {
        name: 'Realtime Canvas',
        icon: '⚡',
        section: 'AI Tools'
    },
    {
        name: 'Realtime Generation',
        icon: '✨',
        section: 'AI Tools'
    },
    {
        name: 'Canvas Editor',
        icon: '🖼️',
        section: 'AI Tools'
    },
    {
        name: 'Universal Upscaler',
        icon: '🔍',
        section: 'AI Tools'
    },
    {
        name: 'Models & Training',
        icon: '🧠',
        section: 'Advanced'
    },
    {
        name: 'Texture Generation',
        icon: '🎭',
        section: 'Advanced',
        badge: 'Alpha'
    }
];
const categoryTabs = [
    {
        name: 'Blueprints',
        icon: '📋'
    },
    {
        name: 'Flow State',
        icon: '∞'
    },
    {
        name: 'Video',
        icon: '🎬'
    },
    {
        name: 'Image',
        icon: '🎨'
    },
    {
        name: 'Upscaler',
        icon: '🔍'
    },
    {
        name: 'Canvas Editor',
        icon: '🖼️'
    },
    {
        name: 'More',
        icon: '⋯'
    }
];
const featuredBlueprints = [
    {
        title: 'Amber Haze Portrait',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        title: 'Dreamy Polaroid Portrait',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        title: 'Tuscan Cinematic Video Portrait',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
        title: 'Blue Room Video Portrait',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        title: 'Halloween Party',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        title: 'Indie Garden Polaroid',
        image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&h=600&fit=crop',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
        title: 'Bold Fisheye Portrait',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop',
        gradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
    }
];
const communityFilters = [
    {
        name: 'Trending',
        icon: '🔥'
    },
    {
        name: 'All',
        icon: '🌐'
    },
    {
        name: 'Video',
        icon: '🎬'
    },
    {
        name: 'Photography',
        icon: '📷'
    },
    {
        name: 'Animals',
        icon: '🦁'
    },
    {
        name: 'Anime',
        icon: '🎌'
    },
    {
        name: 'Architecture',
        icon: '🏛️'
    },
    {
        name: 'Character',
        icon: '👤'
    },
    {
        name: 'Food',
        icon: '🍕'
    },
    {
        name: 'Sci-Fi',
        icon: '🚀'
    }
];
function MediaStudio({ onClose }) {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Blueprints');
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Trending');
    const [activeTool, setActiveTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Blueprints');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_f10c133739128b9444d932a552777ca7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "media-studio-page",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "media-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-logo",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "logo-avatar",
                                        children: "👤"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "logo-user",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "user-name",
                                                children: "Omi.AI"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "user-dropdown",
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-credits",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "credits-icon",
                                        children: "⚡"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "credits-value",
                                        children: "150"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "upgrade-btn",
                                        children: "Upgrade"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "sidebar-nav",
                        children: sidebarTools.map((tool, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_f10c133739128b9444d932a552777ca7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: index * 0.05,
                                    duration: 0.3
                                },
                                children: [
                                    tool.section && index > 0 && sidebarTools[index - 1].section !== tool.section && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nav-section-title",
                                        children: tool.section
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `sidebar-item ${activeTool === tool.name ? 'active' : ''}`,
                                        onClick: ()=>setActiveTool(tool.name),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sidebar-icon",
                                                children: tool.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sidebar-label",
                                                children: tool.name
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            tool.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tool-badge",
                                                children: tool.badge
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                lineNumber: 137,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 122,
                                columnNumber: 5
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-footer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "sidebar-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sidebar-icon",
                                    children: "🆕"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sidebar-label",
                                    children: "What's New"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_f10c133739128b9444d932a552777ca7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "media-main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_f10c133739128b9444d932a552777ca7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        className: "close-btn",
                        onClick: onClose,
                        whileHover: {
                            scale: 1.1,
                            rotate: 90
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: 0.2
                        },
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_f10c133739128b9444d932a552777ca7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "hero-banner",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            ease: "easeOut"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "banner-logoloop",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$LogoLoop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    logos: [
                                        {
                                            node: '✨',
                                            title: 'Sparkle'
                                        },
                                        {
                                            node: '🎨',
                                            title: 'Art'
                                        },
                                        {
                                            node: '🎬',
                                            title: 'Video'
                                        },
                                        {
                                            node: '🖼️',
                                            title: 'Image'
                                        },
                                        {
                                            node: '📋',
                                            title: 'Blueprint'
                                        },
                                        {
                                            node: '⭐',
                                            title: 'Star'
                                        },
                                        {
                                            node: '🎭',
                                            title: 'Creative'
                                        },
                                        {
                                            node: '🚀',
                                            title: 'Launch'
                                        }
                                    ],
                                    speed: 30,
                                    direction: "left",
                                    logoHeight: 60,
                                    gap: 80,
                                    fadeOut: true,
                                    fadeOutColor: "#1a0f2e",
                                    className: "banner-logo-animation"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "banner-overlay"
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "banner-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "banner-title",
                                        children: [
                                            "Create with Omi ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "highlight-text",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$components$2f$typography$2f$shiny$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShinyText"], {
                                                    text: "Blueprints",
                                                    speed: 8
                                                }, void 0, false, {
                                                    fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 64
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                lineNumber: 195,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "banner-subtitle",
                                        children: "Discover 50+ ready-made workflows for effortless AI creation. All Blueprints 75% off for a limited time!"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "category-tabs",
                        children: categoryTabs.map((tab, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_f10c133739128b9444d932a552777ca7$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                className: `category-tab ${activeCategory === tab.name ? 'active' : ''}`,
                                onClick: ()=>setActiveCategory(tab.name),
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.3 + index * 0.05,
                                    duration: 0.3
                                },
                                whileHover: {
                                    scale: 1.05,
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tab-icon",
                                        children: tab.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tab-label",
                                        children: tab.name
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, tab.name, true, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "featured-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "section-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "title-highlight",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$components$2f$typography$2f$shiny$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShinyText"], {
                                                    text: "Featured",
                                                    speed: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            " Blueprints"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "view-more-btn",
                                        children: [
                                            "View More ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "arrow",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                                lineNumber: 233,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dome-gallery-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$DomeGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    images: featuredBlueprints.map((bp)=>({
                                            src: bp.image,
                                            alt: bp.title
                                        })),
                                    fit: 0.5,
                                    minRadius: 500,
                                    maxRadius: 800,
                                    segments: 30,
                                    dragDampening: 5,
                                    overlayBlurColor: "#0a0a0a",
                                    imageBorderRadius: "30px",
                                    openedImageBorderRadius: "30px",
                                    grayscale: false
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "community-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "title-highlight",
                                        children: "Community"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    " Creations"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "community-filters",
                                children: communityFilters.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `filter-btn ${activeFilter === filter.name ? 'active' : ''}`,
                                        onClick: ()=>setActiveFilter(filter.name),
                                        children: [
                                            filter.icon,
                                            " ",
                                            filter.name
                                        ]
                                    }, filter.name, true, {
                                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "community-grid",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "coming-soon",
                                    children: "Community creations coming soon..."
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Omi-AI-1/src/MediaStudio.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}),
"[project]/Omi-AI-1/app/media-studio/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaStudioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$MediaStudio$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/src/MediaStudio.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function MediaStudioPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-transition fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$MediaStudio$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onClose: ()=>router.back()
        }, void 0, false, {
            fileName: "[project]/Omi-AI-1/app/media-studio/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Omi-AI-1/app/media-studio/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ca22ec4a._.js.map