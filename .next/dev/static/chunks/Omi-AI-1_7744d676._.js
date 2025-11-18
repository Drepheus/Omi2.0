(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Omi-AI-1/src/DotGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const throttle = (func, limit)=>{
    let lastCall = 0;
    return function(...args) {
        const now = performance.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
};
function hexToRgb(hex) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return {
        r: 0,
        g: 0,
        b: 0
    };
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
}
const DotGrid = ({ dotSize = 16, gap = 32, baseColor = '#5227FF', activeColor = '#5227FF', proximity = 150, speedTrigger = 100, shockRadius = 250, shockStrength = 5, maxSpeed = 5000, resistance = 750, returnDuration = 1.5, className = '', style })=>{
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        speed: 0,
        lastTime: 0,
        lastX: 0,
        lastY: 0
    });
    const baseRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DotGrid.useMemo[baseRgb]": ()=>hexToRgb(baseColor)
    }["DotGrid.useMemo[baseRgb]"], [
        baseColor
    ]);
    const activeRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DotGrid.useMemo[activeRgb]": ()=>hexToRgb(activeColor)
    }["DotGrid.useMemo[activeRgb]"], [
        activeColor
    ]);
    const circlePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DotGrid.useMemo[circlePath]": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.Path2D) return null;
            const p = new Path2D();
            p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
            return p;
        }
    }["DotGrid.useMemo[circlePath]"], [
        dotSize
    ]);
    const buildGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DotGrid.useCallback[buildGrid]": ()=>{
            const wrap = wrapperRef.current;
            const canvas = canvasRef.current;
            if (!wrap || !canvas) return;
            const { width, height } = wrap.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.scale(dpr, dpr);
            const cols = Math.floor((width + gap) / (dotSize + gap));
            const rows = Math.floor((height + gap) / (dotSize + gap));
            const cell = dotSize + gap;
            const gridW = cell * cols - gap;
            const gridH = cell * rows - gap;
            const extraX = width - gridW;
            const extraY = height - gridH;
            const startX = extraX / 2 + dotSize / 2;
            const startY = extraY / 2 + dotSize / 2;
            const dots = [];
            for(let y = 0; y < rows; y++){
                for(let x = 0; x < cols; x++){
                    const cx = startX + x * cell;
                    const cy = startY + y * cell;
                    dots.push({
                        cx,
                        cy,
                        xOffset: 0,
                        yOffset: 0,
                        _inertiaApplied: false
                    });
                }
            }
            dotsRef.current = dots;
        }
    }["DotGrid.useCallback[buildGrid]"], [
        dotSize,
        gap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotGrid.useEffect": ()=>{
            if (!circlePath) return;
            let rafId;
            const proxSq = proximity * proximity;
            const draw = {
                "DotGrid.useEffect.draw": ()=>{
                    const canvas = canvasRef.current;
                    if (!canvas) return;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    const { x: px, y: py } = pointerRef.current;
                    for (const dot of dotsRef.current){
                        const ox = dot.cx + dot.xOffset;
                        const oy = dot.cy + dot.yOffset;
                        const dx = dot.cx - px;
                        const dy = dot.cy - py;
                        const dsq = dx * dx + dy * dy;
                        let style = baseColor;
                        if (dsq <= proxSq) {
                            const dist = Math.sqrt(dsq);
                            const t = 1 - dist / proximity;
                            const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
                            const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
                            const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
                            style = `rgb(${r},${g},${b})`;
                        }
                        ctx.save();
                        ctx.translate(ox, oy);
                        ctx.fillStyle = style;
                        ctx.fill(circlePath);
                        ctx.restore();
                    }
                    rafId = requestAnimationFrame(draw);
                }
            }["DotGrid.useEffect.draw"];
            draw();
            return ({
                "DotGrid.useEffect": ()=>cancelAnimationFrame(rafId)
            })["DotGrid.useEffect"];
        }
    }["DotGrid.useEffect"], [
        proximity,
        baseColor,
        activeRgb,
        baseRgb,
        circlePath
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotGrid.useEffect": ()=>{
            buildGrid();
            let ro = null;
            if ('ResizeObserver' in window) {
                ro = new ResizeObserver(buildGrid);
                wrapperRef.current && ro.observe(wrapperRef.current);
            } else {
                window.addEventListener('resize', buildGrid);
            }
            return ({
                "DotGrid.useEffect": ()=>{
                    if (ro) ro.disconnect();
                    else window.removeEventListener('resize', buildGrid);
                }
            })["DotGrid.useEffect"];
        }
    }["DotGrid.useEffect"], [
        buildGrid
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotGrid.useEffect": ()=>{
            const onMove = {
                "DotGrid.useEffect.onMove": (e)=>{
                    const now = performance.now();
                    const pr = pointerRef.current;
                    const dt = pr.lastTime ? now - pr.lastTime : 16;
                    const dx = e.clientX - pr.lastX;
                    const dy = e.clientY - pr.lastY;
                    let vx = dx / dt * 1000;
                    let vy = dy / dt * 1000;
                    let speed = Math.hypot(vx, vy);
                    if (speed > maxSpeed) {
                        const scale = maxSpeed / speed;
                        vx *= scale;
                        vy *= scale;
                        speed = maxSpeed;
                    }
                    pr.lastTime = now;
                    pr.lastX = e.clientX;
                    pr.lastY = e.clientY;
                    pr.vx = vx;
                    pr.vy = vy;
                    pr.speed = speed;
                    const rect = canvasRef.current.getBoundingClientRect();
                    pr.x = e.clientX - rect.left;
                    pr.y = e.clientY - rect.top;
                    for (const dot of dotsRef.current){
                        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
                        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
                            dot._inertiaApplied = true;
                            __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(dot);
                            const pushX = dot.cx - pr.x + vx * 0.005;
                            const pushY = dot.cy - pr.y + vy * 0.005;
                            // Simulate inertia without InertiaPlugin
                            const duration = 1.5;
                            __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                xOffset: pushX,
                                yOffset: pushY,
                                duration: duration,
                                ease: 'power2.out',
                                onComplete: {
                                    "DotGrid.useEffect.onMove": ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                            xOffset: 0,
                                            yOffset: 0,
                                            duration: returnDuration,
                                            ease: 'elastic.out(1,0.75)'
                                        });
                                        dot._inertiaApplied = false;
                                    }
                                }["DotGrid.useEffect.onMove"]
                            });
                        }
                    }
                }
            }["DotGrid.useEffect.onMove"];
            const onClick = {
                "DotGrid.useEffect.onClick": (e)=>{
                    const rect = canvasRef.current.getBoundingClientRect();
                    const cx = e.clientX - rect.left;
                    const cy = e.clientY - rect.top;
                    for (const dot of dotsRef.current){
                        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
                        if (dist < shockRadius && !dot._inertiaApplied) {
                            dot._inertiaApplied = true;
                            __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(dot);
                            const falloff = Math.max(0, 1 - dist / shockRadius);
                            const pushX = (dot.cx - cx) * shockStrength * falloff;
                            const pushY = (dot.cy - cy) * shockStrength * falloff;
                            // Simulate inertia without InertiaPlugin
                            const duration = 1.5;
                            __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                xOffset: pushX,
                                yOffset: pushY,
                                duration: duration,
                                ease: 'power2.out',
                                onComplete: {
                                    "DotGrid.useEffect.onClick": ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$13$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                            xOffset: 0,
                                            yOffset: 0,
                                            duration: returnDuration,
                                            ease: 'elastic.out(1,0.75)'
                                        });
                                        dot._inertiaApplied = false;
                                    }
                                }["DotGrid.useEffect.onClick"]
                            });
                        }
                    }
                }
            }["DotGrid.useEffect.onClick"];
            const throttledMove = throttle(onMove, 50);
            window.addEventListener('mousemove', throttledMove, {
                passive: true
            });
            window.addEventListener('click', onClick);
            return ({
                "DotGrid.useEffect": ()=>{
                    window.removeEventListener('mousemove', throttledMove);
                    window.removeEventListener('click', onClick);
                }
            })["DotGrid.useEffect"];
        }
    }["DotGrid.useEffect"], [
        maxSpeed,
        speedTrigger,
        proximity,
        resistance,
        returnDuration,
        shockRadius,
        shockStrength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `dot-grid ${className}`,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: wrapperRef,
            className: "dot-grid__wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "dot-grid__canvas"
            }, void 0, false, {
                fileName: "[project]/Omi-AI-1/src/DotGrid.tsx",
                lineNumber: 293,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Omi-AI-1/src/DotGrid.tsx",
            lineNumber: 292,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Omi-AI-1/src/DotGrid.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DotGrid, "mFjE+zUQAMVe1ll5A3lc0VjRvtk=");
_c = DotGrid;
const __TURBOPACK__default__export__ = DotGrid;
var _c;
__turbopack_context__.k.register(_c, "DotGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Omi-AI-1/src/AIWorkflowsPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIWorkflowsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$DotGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/src/DotGrid.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const componentCategories = [
    {
        name: 'Base',
        components: [
            {
                id: 'web-search',
                name: 'Web Search',
                icon: '🔍'
            },
            {
                id: 'web-scrape',
                name: 'Web Scrape',
                icon: '🌐'
            },
            {
                id: 'text-input',
                name: 'Text Input',
                icon: '📝'
            },
            {
                id: 'number-input',
                name: 'Number Input',
                icon: '🔢'
            }
        ]
    },
    {
        name: 'Advanced',
        components: [
            {
                id: 'llm',
                name: 'LLM',
                icon: '🤖'
            },
            {
                id: 'content-cleanup',
                name: 'Content Cleanup',
                icon: '✨'
            },
            {
                id: 'summarize',
                name: 'Comprehensive Summary',
                icon: '📄'
            },
            {
                id: 'seo-article',
                name: 'SEO Article Outline',
                icon: '📰'
            }
        ]
    },
    {
        name: 'Tools',
        components: [
            {
                id: 'json-parser',
                name: 'JSON Parser',
                icon: '{ }'
            },
            {
                id: 'text-splitter',
                name: 'Text Splitter',
                icon: '✂️'
            },
            {
                id: 'data-merge',
                name: 'Data Merge',
                icon: '🔗'
            }
        ]
    },
    {
        name: 'Logic',
        components: [
            {
                id: 'if-else',
                name: 'If/Else',
                icon: '🔀'
            },
            {
                id: 'loop',
                name: 'Loop',
                icon: '🔄'
            },
            {
                id: 'filter',
                name: 'Filter',
                icon: '🔍'
            }
        ]
    },
    {
        name: 'OpenAPI',
        components: []
    },
    {
        name: 'RAG Data',
        components: [
            {
                id: 'vector-store',
                name: 'Vector Store',
                icon: '📊'
            },
            {
                id: 'embeddings',
                name: 'Embeddings',
                icon: '🧮'
            }
        ]
    }
];
function AIWorkflowsPage({ onClose }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Base');
    const [expandedCategories, setExpandedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Base',
        'Advanced'
    ]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleClose = ()=>{
        if (onClose) {
            onClose();
        } else {
            router.push('/command-hub');
        }
    };
    const toggleCategory = (categoryName)=>{
        setExpandedCategories((prev)=>prev.includes(categoryName) ? prev.filter((c)=>c !== categoryName) : [
                ...prev,
                categoryName
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "workflow-builder",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "workflow-close-btn",
                onClick: handleClose,
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "workflow-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "workflow-sidebar-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "workflow-logo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "workflow-logo-icon",
                                    children: "⚡"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "workflow-logo-text",
                                    children: "Components"
                                }, void 0, false, {
                                    fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "workflow-search-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "workflow-search",
                                placeholder: "Search components",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "workflow-search-icon",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "workflow-categories",
                        children: componentCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "workflow-category",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `workflow-category-header ${expandedCategories.includes(category.name) ? 'expanded' : ''}`,
                                        onClick: ()=>toggleCategory(category.name),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "workflow-category-name",
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "workflow-category-arrow",
                                                children: "›"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    expandedCategories.includes(category.name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "workflow-category-items",
                                        children: category.components.length > 0 ? category.components.filter((comp)=>comp.name.toLowerCase().includes(searchQuery.toLowerCase())).map((component)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "workflow-component-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "workflow-component-icon",
                                                        children: component.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "workflow-component-name",
                                                        children: component.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, component.id, true, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 131,
                                                columnNumber: 25
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "workflow-empty-category",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "workflow-add-button",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 138,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                            lineNumber: 137,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, category.name, true, {
                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "workflow-canvas",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "workflow-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "workflow-header-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "workflow-auto-save",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "workflow-save-icon",
                                            children: "☁️"
                                        }, void 0, false, {
                                            fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        "Auto-Saved 15:32:28"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "workflow-header-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "workflow-btn workflow-btn-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "workflow-btn-icon",
                                                children: "🐛"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this),
                                            "Debug Off"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "workflow-btn workflow-btn-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "workflow-btn-icon",
                                                children: "▶️"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            "Test"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "workflow-btn workflow-btn-primary",
                                        children: "Upgrade"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "workflow-btn workflow-btn-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "workflow-btn-icon",
                                                children: "🚀"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this),
                                            "Deploy"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "workflow-btn workflow-btn-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "workflow-btn-icon",
                                                children: "↗️"
                                            }, void 0, false, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            "Share"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "workflow-canvas-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$DotGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                dotSize: 2,
                                gap: 40,
                                baseColor: "rgba(192, 192, 192, 0.1)",
                                activeColor: "#c0c0c0",
                                proximity: 120,
                                speedTrigger: 80,
                                shockRadius: 200,
                                shockStrength: 4,
                                className: "workflow-dot-grid-bg"
                            }, void 0, false, {
                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "workflow-placeholder",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "workflow-placeholder-icon",
                                        children: "⚡"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "workflow-placeholder-title",
                                        children: "Build Your Workflow"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "workflow-placeholder-text",
                                        children: "Drag and drop components from the sidebar to create powerful AI workflows"
                                    }, void 0, false, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "workflow-placeholder-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "workflow-placeholder-btn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "workflow-placeholder-btn-icon",
                                                        children: "📋"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Start from Template"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "workflow-placeholder-btn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "workflow-placeholder-btn-icon",
                                                        children: "✨"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Create from Scratch"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "workflow-footer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "workflow-footer-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "workflow-footer-btn",
                                    title: "Collapse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "workflow-footer-icon",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        "Collapse"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "workflow-footer-btn",
                                    title: "Prettify",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "workflow-footer-icon",
                                            children: "✨"
                                        }, void 0, false, {
                                            fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        "Prettify"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "workflow-footer-btn",
                                    title: "Inspect",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "workflow-footer-icon",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        "Inspect"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Omi-AI-1/src/AIWorkflowsPage.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(AIWorkflowsPage, "BtMmUQYDSkJbdiqNbTJ36o5SZ6Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AIWorkflowsPage;
var _c;
__turbopack_context__.k.register(_c, "AIWorkflowsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Omi-AI-1/app/ai-workflows/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkflowsRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$AIWorkflowsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/src/AIWorkflowsPage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WorkflowsRoute() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-transition fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$src$2f$AIWorkflowsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: ()=>router.back()
        }, void 0, false, {
            fileName: "[project]/Omi-AI-1/app/ai-workflows/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Omi-AI-1/app/ai-workflows/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(WorkflowsRoute, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = WorkflowsRoute;
var _c;
__turbopack_context__.k.register(_c, "WorkflowsRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Omi-AI-1_7744d676._.js.map