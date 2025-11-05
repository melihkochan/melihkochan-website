module.exports = {

"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/app/components/HyperText.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HyperText": (()=>HyperText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HyperText({ text, className, href, onClick }) {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const letters = text.split("");
    const containerVariants = {
        hidden: {
            opacity: 1
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };
    const letterVariants = {
        hidden: {
            y: 0,
            opacity: 1,
            rotateX: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };
    const hoverVariants = {
        scale: 1.1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 17
        }
    };
    const isGradient = className?.includes("bg-gradient") || className?.includes("bg-clip-text");
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-block cursor-pointer relative", isGradient && className, isGradient && "bg-clip-text text-transparent"),
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        whileHover: hoverVariants,
        onHoverStart: ()=>setIsHovered(true),
        onHoverEnd: ()=>setIsHovered(false),
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: letters.map((letter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-block relative", isGradient && "bg-clip-text text-transparent"),
                        variants: letterVariants,
                        whileHover: !isGradient ? {
                            y: -10,
                            color: "#3b82f6",
                            textShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
                            transition: {
                                type: "spring",
                                stiffness: 500,
                                damping: 15
                            }
                        } : {
                            y: -10,
                            textShadow: "0 0 20px rgba(251, 191, 36, 0.8)",
                            transition: {
                                type: "spring",
                                stiffness: 500,
                                damping: 15
                            }
                        },
                        style: {
                            perspective: "1000px",
                            transformStyle: "preserve-3d",
                            ...isGradient ? {
                                backgroundImage: className?.includes("from-orange-300") ? "linear-gradient(to right, rgb(253 186 116), rgb(251 191 36), rgb(252 211 77))" : className?.includes("from-yellow-300") ? "linear-gradient(to right, rgb(253 224 71), rgb(251 146 60), rgb(248 113 113))" : undefined,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                            } : {}
                        },
                        children: letter === " " ? "\u00A0" : letter
                    }, index, false, {
                        fileName: "[project]/app/components/HyperText.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/HyperText.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
                initial: {
                    scaleX: 0
                },
                animate: {
                    scaleX: 1
                },
                exit: {
                    scaleX: 0
                },
                transition: {
                    duration: 0.3
                }
            }, void 0, false, {
                fileName: "[project]/app/components/HyperText.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HyperText.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: "no-underline",
            children: content
        }, void 0, false, {
            fileName: "[project]/app/components/HyperText.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    return content;
}
}}),
"[project]/app/components/ui/animated-shader-hero.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HyperText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/HyperText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Reusable Shader Background Hook
const useShaderBackground = ()=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
            gl.uniform2f(program.move, ...this.mouseMove);
            gl.uniform2f(program.touch, ...this.mouseCoords);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            return ()=>{
                window.removeEventListener('resize', resize);
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
                if (rendererRef.current) {
                    rendererRef.current.reset();
                }
            };
        } catch (error) {
            console.error('WebGL initialization error:', error);
        }
    }, []);
    return canvasRef;
};
// Reusable Hero Component
const Hero = ({ trustBadge, headline, subtitle, description, socialLinks, buttons, className = "" })=>{
    const canvasRef = useShaderBackground();
    // Default social links if not provided
    const defaultSocialLinks = socialLinks || [
        {
            name: 'LinkedIn',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 363,
                columnNumber: 41
            }, this)
        },
        {
            name: 'GitHub',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 364,
                columnNumber: 39
            }, this)
        },
        {
            name: 'Twitter',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTwitter"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 365,
                columnNumber: 40
            }, this)
        },
        {
            name: 'Instagram',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 366,
                columnNumber: 42
            }, this)
        },
        {
            name: 'YouTube',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaYoutube"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 367,
                columnNumber: 40
            }, this)
        },
        {
            name: 'Twitch',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTwitch"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 368,
                columnNumber: 39
            }, this)
        },
        {
            name: 'TikTok',
            url: '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTiktok"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 369,
                columnNumber: 39
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e288e6f2da864bc2" + " " + `relative w-full h-screen overflow-hidden bg-black ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e288e6f2da864bc2",
                children: "@keyframes fade-in-down{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-up{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in-down.jsx-e288e6f2da864bc2{animation:.8s ease-out forwards fade-in-down}.animate-fade-in-up.jsx-e288e6f2da864bc2{opacity:0;animation:.8s ease-out forwards fade-in-up}.animation-delay-200.jsx-e288e6f2da864bc2{animation-delay:.2s}.animation-delay-400.jsx-e288e6f2da864bc2{animation-delay:.4s}.animation-delay-600.jsx-e288e6f2da864bc2{animation-delay:.6s}.animation-delay-800.jsx-e288e6f2da864bc2{animation-delay:.8s}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    background: 'black'
                },
                className: "jsx-e288e6f2da864bc2" + " " + "absolute inset-0 w-full h-full object-contain touch-none"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e288e6f2da864bc2" + " " + "absolute inset-0 z-10 flex flex-col items-center justify-center text-white",
                children: [
                    trustBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e288e6f2da864bc2" + " " + "mb-8 animate-fade-in-down",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e288e6f2da864bc2" + " " + "flex items-center gap-2 px-6 py-3 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full text-sm",
                            children: [
                                trustBadge.icons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e288e6f2da864bc2" + " " + "flex",
                                    children: trustBadge.icons.map((icon, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-e288e6f2da864bc2" + " " + `text-${index === 0 ? 'yellow' : index === 1 ? 'orange' : 'amber'}-300`,
                                            children: icon
                                        }, index, false, {
                                            fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                            lineNumber: 438,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                    lineNumber: 436,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-e288e6f2da864bc2" + " " + "text-orange-100",
                                    children: trustBadge.text
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                            lineNumber: 434,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e288e6f2da864bc2" + " " + "text-center space-y-6 max-w-5xl mx-auto px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e288e6f2da864bc2" + " " + "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e288e6f2da864bc2" + " " + "text-5xl md:text-7xl lg:text-8xl font-bold text-white animate-fade-in-up animation-delay-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e288e6f2da864bc2" + " " + "text-white",
                                                children: "Hi I'm "
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                                lineNumber: 453,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HyperText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HyperText"], {
                                                text: headline.line1,
                                                className: "bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 452,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e288e6f2da864bc2" + " " + "text-xl md:text-2xl lg:text-3xl font-normal text-white animate-fade-in-up animation-delay-400",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 459,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e288e6f2da864bc2" + " " + "max-w-3xl mx-auto animate-fade-in-up animation-delay-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-e288e6f2da864bc2" + " " + "text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e288e6f2da864bc2" + " " + "flex justify-center items-center gap-6 mt-12 animate-fade-in-up animation-delay-800",
                                children: defaultSocialLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": link.name,
                                        className: "jsx-e288e6f2da864bc2" + " " + "text-white text-2xl hover:text-orange-300 transition-colors duration-300 hover:scale-110",
                                        children: link.icon
                                    }, index, false, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this),
                            buttons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e288e6f2da864bc2" + " " + "flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up animation-delay-800",
                                children: [
                                    buttons.primary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: buttons.primary.onClick,
                                        className: "jsx-e288e6f2da864bc2" + " " + "px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25",
                                        children: buttons.primary.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 493,
                                        columnNumber: 17
                                    }, this),
                                    buttons.secondary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: buttons.secondary.onClick,
                                        className: "jsx-e288e6f2da864bc2" + " " + "px-8 py-4 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-300/30 hover:border-orange-300/50 text-orange-100 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm",
                                        children: buttons.secondary.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                        lineNumber: 501,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                                lineNumber: 491,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/animated-shader-hero.tsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
};
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
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$animated$2d$shader$2d$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ui/animated-shader-hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$animated$2d$shader$2d$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        headline: {
            line1: "Melih Koçhan",
            line2: ""
        },
        subtitle: "I'm frontend developer",
        description: "This is a simple welcome page for now. Feel free to explore the links and discover more!",
        socialLinks: [
            {
                name: 'LinkedIn',
                url: '#',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 45
                }, void 0)
            },
            {
                name: 'GitHub',
                url: '#',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 26,
                    columnNumber: 43
                }, void 0)
            },
            {
                name: 'Twitter',
                url: '#',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTwitter"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 27,
                    columnNumber: 44
                }, void 0)
            },
            {
                name: 'Instagram',
                url: '#',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 28,
                    columnNumber: 46
                }, void 0)
            },
            {
                name: 'YouTube',
                url: '#',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaYoutube"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 44
                }, void 0)
            },
            {
                name: 'Twitch',
                url: '#',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTwitch"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 30,
                    columnNumber: 43
                }, void 0)
            },
            {
                name: 'TikTok',
                url: '#',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTiktok"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 43
                }, void 0)
            }
        ],
        className: ""
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_8b1836._.js.map