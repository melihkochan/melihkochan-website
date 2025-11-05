(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_64381c._.js", {

"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/hyper-text.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HyperText": (()=>HyperText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const getRandomInt = (max)=>Math.floor(Math.random() * max);
function HyperText({ text, duration = 800, framerProps = {
    initial: {
        opacity: 0,
        y: -10
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 3
    }
}, className, animateOnLoad = true }) {
    _s();
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text.split(""));
    const [trigger, setTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const interations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isFirstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const triggerAnimation = ()=>{
        interations.current = 0;
        setTrigger(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HyperText.useEffect": ()=>{
            const interval = setInterval({
                "HyperText.useEffect.interval": ()=>{
                    if (!animateOnLoad && isFirstRender.current) {
                        clearInterval(interval);
                        isFirstRender.current = false;
                        return;
                    }
                    if (interations.current < text.length) {
                        setDisplayText({
                            "HyperText.useEffect.interval": (t)=>t.map({
                                    "HyperText.useEffect.interval": (l, i)=>l === " " ? l : i <= interations.current ? text[i] : alphabets[getRandomInt(26)]
                                }["HyperText.useEffect.interval"])
                        }["HyperText.useEffect.interval"]);
                        interations.current = interations.current + 0.1;
                    } else {
                        setTrigger(false);
                        clearInterval(interval);
                    }
                }
            }["HyperText.useEffect.interval"], duration / (text.length * 10));
            // Clean up interval on unmount
            return ({
                "HyperText.useEffect": ()=>clearInterval(interval)
            })["HyperText.useEffect"];
        }
    }["HyperText.useEffect"], [
        text,
        duration,
        trigger,
        animateOnLoad
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex scale-100 cursor-default overflow-hidden py-2",
        onMouseEnter: triggerAnimation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: displayText.map((letter, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-mono", letter === " " ? "w-3" : "", className),
                    ...framerProps,
                    children: letter.toUpperCase()
                }, i, false, {
                    fileName: "[project]/components/ui/hyper-text.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/ui/hyper-text.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/hyper-text.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(HyperText, "FfMoa7d4Y1dBELAZUXnGPKPHQjo=");
_c = HyperText;
var _c;
__turbopack_refresh__.register(_c, "HyperText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ui/animated-shader-hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$hyper$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/hyper-text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
// Reusable Shader Background Hook
const useShaderBackground = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // WebGL Renderer class
    class WebGLRenderer {
        canvas;
        gl;
        program = null;
        vs = null;
        fs = null;
        buffer = null;
        scale;
        shaderSource;
        mouseMove = [
            0,
            0
        ];
        mouseCoords = [
            0,
            0
        ];
        pointerCoords = [
            0,
            0
        ];
        nbrOfPointers = 0;
        vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;
        vertices = [
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            -1
        ];
        constructor(canvas, scale){
            this.canvas = canvas;
            this.scale = scale;
            const gl = canvas.getContext('webgl2');
            if (!gl) throw new Error('WebGL2 not supported');
            this.gl = gl;
            this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
            this.shaderSource = defaultShaderSource;
        }
        updateShader(source) {
            this.reset();
            this.shaderSource = source;
            this.setup();
            this.init();
        }
        updateMove(deltas) {
            this.mouseMove = deltas;
        }
        updateMouse(coords) {
            this.mouseCoords = coords;
        }
        updatePointerCoords(coords) {
            this.pointerCoords = coords;
        }
        updatePointerCount(nbr) {
            this.nbrOfPointers = nbr;
        }
        updateScale(scale) {
            this.scale = scale;
            this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
        }
        compile(shader, source) {
            const gl = this.gl;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                const error = gl.getShaderInfoLog(shader);
                console.error('Shader compilation error:', error);
            }
        }
        test(source) {
            let result = null;
            const gl = this.gl;
            const shader = gl.createShader(gl.FRAGMENT_SHADER);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                result = gl.getShaderInfoLog(shader);
            }
            gl.deleteShader(shader);
            return result;
        }
        reset() {
            const gl = this.gl;
            if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
                if (this.vs) {
                    gl.detachShader(this.program, this.vs);
                    gl.deleteShader(this.vs);
                }
                if (this.fs) {
                    gl.detachShader(this.program, this.fs);
                    gl.deleteShader(this.fs);
                }
                gl.deleteProgram(this.program);
            }
        }
        setup() {
            const gl = this.gl;
            this.vs = gl.createShader(gl.VERTEX_SHADER);
            this.fs = gl.createShader(gl.FRAGMENT_SHADER);
            if (!this.vs || !this.fs) return;
            this.compile(this.vs, this.vertexSrc);
            this.compile(this.fs, this.shaderSource);
            this.program = gl.createProgram();
            if (!this.program) return;
            gl.attachShader(this.program, this.vs);
            gl.attachShader(this.program, this.fs);
            gl.linkProgram(this.program);
            if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
                console.error(gl.getProgramInfoLog(this.program));
            }
        }
        init() {
            const gl = this.gl;
            const program = this.program;
            this.buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
            const position = gl.getAttribLocation(program, 'position');
            gl.enableVertexAttribArray(position);
            gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
            program.resolution = gl.getUniformLocation(program, 'resolution');
            program.time = gl.getUniformLocation(program, 'time');
            program.move = gl.getUniformLocation(program, 'move');
            program.touch = gl.getUniformLocation(program, 'touch');
            program.pointerCount = gl.getUniformLocation(program, 'pointerCount');
            program.pointers = gl.getUniformLocation(program, 'pointers');
        }
        render(now = 0) {
            const gl = this.gl;
            const program = this.program;
            if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(program);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
            gl.uniform2f(program.resolution, this.canvas.width, this.canvas.height);
            gl.uniform1f(program.time, now * 1e-3);
            gl.uniform2f(program.move, this.mouseMove[0], this.mouseMove[1]);
            gl.uniform2f(program.touch, this.mouseCoords[0], this.mouseCoords[1]);
            gl.uniform1i(program.pointerCount, this.nbrOfPointers);
            gl.uniform2fv(program.pointers, this.pointerCoords);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
    }
    // Pointer Handler class
    class PointerHandler {
        scale;
        active = false;
        pointers = new Map();
        lastCoords = [
            0,
            0
        ];
        moves = [
            0,
            0
        ];
        constructor(element, scale){
            this.scale = scale;
            const map = (element, scale, x, y)=>[
                    x * scale,
                    element.height - y * scale
                ];
            element.addEventListener('pointerdown', (e)=>{
                this.active = true;
                this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
            });
            element.addEventListener('pointerup', (e)=>{
                if (this.count === 1) {
                    this.lastCoords = this.first;
                }
                this.pointers.delete(e.pointerId);
                this.active = this.pointers.size > 0;
            });
            element.addEventListener('pointerleave', (e)=>{
                if (this.count === 1) {
                    this.lastCoords = this.first;
                }
                this.pointers.delete(e.pointerId);
                this.active = this.pointers.size > 0;
            });
            element.addEventListener('pointermove', (e)=>{
                if (!this.active) return;
                this.lastCoords = [
                    e.clientX,
                    e.clientY
                ];
                this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
                this.moves = [
                    this.moves[0] + e.movementX,
                    this.moves[1] + e.movementY
                ];
            });
        }
        getScale() {
            return this.scale;
        }
        updateScale(scale) {
            this.scale = scale;
        }
        get count() {
            return this.pointers.size;
        }
        get move() {
            return this.moves;
        }
        get coords() {
            return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [
                0,
                0
            ];
        }
        get first() {
            return this.pointers.values().next().value || this.lastCoords;
        }
    }
    const resize = ()=>{
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        if (rendererRef.current) {
            rendererRef.current.updateScale(dpr);
        }
    };
    const loop = (now)=>{
        if (!rendererRef.current || !pointersRef.current) return;
        rendererRef.current.updateMouse(pointersRef.current.first);
        rendererRef.current.updatePointerCount(pointersRef.current.count);
        rendererRef.current.updatePointerCoords(pointersRef.current.coords);
        rendererRef.current.updateMove(pointersRef.current.move);
        rendererRef.current.render(now);
        animationFrameRef.current = requestAnimationFrame(loop);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useShaderBackground.useEffect": ()=>{
            if (!canvasRef.current) return;
            const canvas = canvasRef.current;
            const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
            try {
                rendererRef.current = new WebGLRenderer(canvas, dpr);
                pointersRef.current = new PointerHandler(canvas, dpr);
                rendererRef.current.setup();
                rendererRef.current.init();
                resize();
                if (rendererRef.current.test(defaultShaderSource) === null) {
                    rendererRef.current.updateShader(defaultShaderSource);
                }
                loop(0);
                window.addEventListener('resize', resize);
                return ({
                    "useShaderBackground.useEffect": ()=>{
                        window.removeEventListener('resize', resize);
                        if (animationFrameRef.current) {
                            cancelAnimationFrame(animationFrameRef.current);
                        }
                        if (rendererRef.current) {
                            rendererRef.current.reset();
                        }
                    }
                })["useShaderBackground.useEffect"];
            } catch (error) {
                console.error('WebGL initialization error:', error);
            }
        }
    }["useShaderBackground.useEffect"], []);
    return canvasRef;
};
_s(useShaderBackground, "SXJQAfR4qAT1hecdyVzb2+gTFwk=");
// Reusable Hero Component
const Hero = ({ trustBadge, headline, subtitle, description, socialLinks, buttons, className = "" })=>{
    _s1();
    const canvasRef = useShaderBackground();
    // Default social links if not provided
    const defaultSocialLinks = socialLinks || [
        {
            name: 'LinkedIn',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 364,
                columnNumber: 41
            }, this)
        },
        {
            name: 'GitHub',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 365,
                columnNumber: 39
            }, this)
        },
        {
            name: 'Twitter',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 366,
                columnNumber: 40
            }, this)
        },
        {
            name: 'Instagram',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 367,
                columnNumber: 42
            }, this)
        },
        {
            name: 'YouTube',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 368,
                columnNumber: 40
            }, this)
        },
        {
            name: 'Twitch',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitch"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 369,
                columnNumber: 39
            }, this)
        },
        {
            name: 'TikTok',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTiktok"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 370,
                columnNumber: 39
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e288e6f2da864bc2" + " " + `relative w-full h-screen overflow-hidden bg-black ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e288e6f2da864bc2",
                children: "@keyframes fade-in-down{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-up{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in-down.jsx-e288e6f2da864bc2{animation:.8s ease-out forwards fade-in-down}.animate-fade-in-up.jsx-e288e6f2da864bc2{opacity:0;animation:.8s ease-out forwards fade-in-up}.animation-delay-200.jsx-e288e6f2da864bc2{animation-delay:.2s}.animation-delay-400.jsx-e288e6f2da864bc2{animation-delay:.4s}.animation-delay-600.jsx-e288e6f2da864bc2{animation-delay:.6s}.animation-delay-800.jsx-e288e6f2da864bc2{animation-delay:.8s}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    background: 'black'
                },
                className: "jsx-e288e6f2da864bc2" + " " + "absolute inset-0 w-full h-full object-contain touch-none"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e288e6f2da864bc2" + " " + "absolute inset-0 z-10 flex flex-col items-center justify-center text-white",
                children: [
                    trustBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e288e6f2da864bc2" + " " + "mb-8 animate-fade-in-down",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e288e6f2da864bc2" + " " + "flex items-center gap-2 px-6 py-3 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full text-sm",
                            children: [
                                trustBadge.icons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e288e6f2da864bc2" + " " + "flex",
                                    children: trustBadge.icons.map((icon, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-e288e6f2da864bc2" + " " + `text-${index === 0 ? 'yellow' : index === 1 ? 'orange' : 'amber'}-300`,
                                            children: icon
                                        }, index, false, {
                                            fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                            lineNumber: 439,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                    lineNumber: 437,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-e288e6f2da864bc2" + " " + "text-orange-100",
                                    children: trustBadge.text
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                    lineNumber: 445,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                        lineNumber: 434,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e288e6f2da864bc2" + " " + "text-center space-y-6 max-w-5xl mx-auto px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e288e6f2da864bc2" + " " + "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e288e6f2da864bc2" + " " + "text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-fade-in-up animation-delay-200 flex items-center justify-center gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e288e6f2da864bc2" + " " + "text-white",
                                                children: "Hi I'm "
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$hyper$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HyperText"], {
                                                text: headline.line1,
                                                className: "text-white",
                                                animateOnLoad: false,
                                                duration: 800
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                                lineNumber: 455,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this),
                                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e288e6f2da864bc2" + " " + "text-lg md:text-xl lg:text-2xl font-normal text-white animate-fade-in-up animation-delay-400",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e288e6f2da864bc2" + " " + "max-w-3xl mx-auto animate-fade-in-up animation-delay-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-e288e6f2da864bc2" + " " + "text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e288e6f2da864bc2" + " " + "flex justify-center items-center gap-6 mt-12 animate-fade-in-up animation-delay-800",
                                children: defaultSocialLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.url,
                                        target: link.download ? undefined : "_blank",
                                        rel: link.download ? undefined : "noopener noreferrer",
                                        download: link.download ? link.url.split('/').pop() : undefined,
                                        "aria-label": link.name,
                                        className: "jsx-e288e6f2da864bc2" + " " + "text-white text-2xl hover:text-orange-300 transition-colors duration-300 hover:scale-110",
                                        children: link.icon
                                    }, index, false, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                lineNumber: 479,
                                columnNumber: 11
                            }, this),
                            buttons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e288e6f2da864bc2" + " " + "flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up animation-delay-800",
                                children: [
                                    buttons.primary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: buttons.primary.onClick,
                                        className: "jsx-e288e6f2da864bc2" + " " + "px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25",
                                        children: buttons.primary.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 499,
                                        columnNumber: 17
                                    }, this),
                                    buttons.secondary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: buttons.secondary.onClick,
                                        className: "jsx-e288e6f2da864bc2" + " " + "px-8 py-4 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-300/30 hover:border-orange-300/50 text-orange-100 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm",
                                        children: buttons.secondary.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 507,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
};
_s1(Hero, "w8jELxzMMrerqWHj6ljEU3qE0HA=", false, function() {
    return [
        useShaderBackground
    ];
});
_c = Hero;
const defaultShaderSource = `#version 300 es
/*********
* made by Matthias Hurrle (@atzedent)
*
*	To explore strange new worlds, to seek out new life
*	and new civilizations, to boldly go where no man has
*	gone before.
*/
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
// Returns a pseudo random number for a given point (white noise)
float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
// Returns a pseudo random number for a given point (value noise)
float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
// Returns a pseudo random number for a given point (fractal noise)
float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}
float clouds(vec2 p) {
	float d=1., t=.0;
	for (float i=.0; i<3.; i++) {
		float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
		t=mix(t,d,a);
		d=a;
		p*=2./(i+1.);
	}
	return t;
}
void main(void) {
	vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
	vec3 col=vec3(0);
	float bg=clouds(vec2(st.x+T*.5,-st.y));
	uv*=1.-.3*(sin(T*.2)*.5+.5);
	for (float i=1.; i<12.; i++) {
		uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
		vec2 p=uv;
		float d=length(p);
		col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
		float b=noise(i+p+bg*1.731);
		col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
		col=mix(col,vec3(bg*.25,bg*.137,bg*.05),d);
	}
	O=vec4(col,1);
}`;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_refresh__.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$animated$2d$shader$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ui/animated-shader-hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$animated$2d$shader$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        headline: {
            line1: "Melih Koçhan",
            line2: ""
        },
        subtitle: "",
        description: "This is a simple welcome page for now. Feel free to explore the links and discover more!",
        socialLinks: [
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/melih-kochan-7961371a2/',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 26,
                    columnNumber: 95
                }, void 0)
            },
            {
                name: 'GitHub',
                url: 'https://github.com/melihkochan/melihkochan-website',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 27,
                    columnNumber: 92
                }, void 0)
            },
            {
                name: 'Twitter',
                url: 'https://x.com/melihkochan1',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 28,
                    columnNumber: 69
                }, void 0)
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/melih_kochan/',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 84
                }, void 0)
            },
            {
                name: 'YouTube',
                url: 'https://music.youtube.com/channel/UCH7mSmrradMTPpMkmDFCcIQ',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 30,
                    columnNumber: 101
                }, void 0)
            },
            {
                name: 'CV',
                url: '/melihkochancv.pdf',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilePdf"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 56
                }, void 0),
                download: true
            }
        ],
        className: ""
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_64381c._.js.map