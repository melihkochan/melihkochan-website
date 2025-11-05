module.exports = {

"[project]/app/windows10-components/DesktopIcon.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "contextMenu": "DesktopIcon-module__NWkxIa__contextMenu",
  "contextMenuItem": "DesktopIcon-module__NWkxIa__contextMenuItem",
  "fadeIn": "DesktopIcon-module__NWkxIa__fadeIn",
  "icon": "DesktopIcon-module__NWkxIa__icon",
  "iconContainer": "DesktopIcon-module__NWkxIa__iconContainer",
  "label": "DesktopIcon-module__NWkxIa__label",
  "pulse": "DesktopIcon-module__NWkxIa__pulse",
  "refreshing": "DesktopIcon-module__NWkxIa__refreshing",
  "selected": "DesktopIcon-module__NWkxIa__selected",
  "spin": "DesktopIcon-module__NWkxIa__spin",
  "spinning": "DesktopIcon-module__NWkxIa__spinning",
});
}}),
"[project]/app/windows10-components/DesktopIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DesktopIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/DesktopIcon.module.css [app-client] (css module)");
"use client";
;
;
;
function DesktopIcon({ app, isSelected, onClick, onDoubleClick }) {
    const [isContextMenuOpen, setIsContextMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contextMenuPosition, setContextMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const iconRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle context menu closing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isContextMenuOpen) return;
        // Close context menu when clicking outside
        const handleClickOutside = (e)=>{
            if (iconRef.current && !iconRef.current.contains(e.target)) {
                setIsContextMenuOpen(false);
            }
        };
        const handleEscape = (e)=>{
            if (e.key === 'Escape') {
                setIsContextMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [
        isContextMenuOpen
    ]);
    // Removed handleContextMenu function - now directly in onContextMenu
    const handleRefresh = ()=>{
        setIsRefreshing(true);
        setIsContextMenuOpen(false);
        // Refresh animation
        setTimeout(()=>{
            setIsRefreshing(false);
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: iconRef,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconContainer} ${isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ""} ${isRefreshing ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].refreshing : ""}`,
        onClick: onClick,
        onDoubleClick: (e)=>{
            e.stopPropagation();
            onDoubleClick();
        },
        onContextMenu: (e)=>{
            console.log('Right click on icon');
            e.preventDefault();
            e.stopPropagation();
            // Set position using mouse coordinates
            setContextMenuPosition({
                x: e.clientX,
                y: e.clientY
            });
            setIsContextMenuOpen(true);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                children: isRefreshing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinning,
                    children: "🔄"
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/DesktopIcon.js",
                    lineNumber: 73,
                    columnNumber: 11
                }, this) : app.icon
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/DesktopIcon.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: app.name
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/DesktopIcon.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            isContextMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contextMenu,
                style: {
                    left: contextMenuPosition.x,
                    top: contextMenuPosition.y
                },
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contextMenuItem,
                    onClick: handleRefresh,
                    children: "Yenile"
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/DesktopIcon.js",
                    lineNumber: 89,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/DesktopIcon.js",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/DesktopIcon.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/Window.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "active": "Window-module__o6U_EW__active",
  "appIcon": "Window-module__o6U_EW__appIcon",
  "browserWindow": "Window-module__o6U_EW__browserWindow",
  "close": "Window-module__o6U_EW__close",
  "control": "Window-module__o6U_EW__control",
  "emptyContent": "Window-module__o6U_EW__emptyContent",
  "maximized": "Window-module__o6U_EW__maximized",
  "title": "Window-module__o6U_EW__title",
  "titleBar": "Window-module__o6U_EW__titleBar",
  "titleBarControls": "Window-module__o6U_EW__titleBarControls",
  "titleBarLeft": "Window-module__o6U_EW__titleBarLeft",
  "window": "Window-module__o6U_EW__window",
  "windowContent": "Window-module__o6U_EW__windowContent",
});
}}),
"[project]/app/windows10-components/ChromeBrowser.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "actionButton": "ChromeBrowser-module__sf7d7q__actionButton",
  "addressBar": "ChromeBrowser-module__sf7d7q__addressBar",
  "browser": "ChromeBrowser-module__sf7d7q__browser",
  "browserActions": "ChromeBrowser-module__sf7d7q__browserActions",
  "browserContent": "ChromeBrowser-module__sf7d7q__browserContent",
  "closeTab": "ChromeBrowser-module__sf7d7q__closeTab",
  "favicon": "ChromeBrowser-module__sf7d7q__favicon",
  "iframe": "ChromeBrowser-module__sf7d7q__iframe",
  "iframeWrapper": "ChromeBrowser-module__sf7d7q__iframeWrapper",
  "loadingBar": "ChromeBrowser-module__sf7d7q__loadingBar",
  "loadingIndicator": "ChromeBrowser-module__sf7d7q__loadingIndicator",
  "navButton": "ChromeBrowser-module__sf7d7q__navButton",
  "navigationButtons": "ChromeBrowser-module__sf7d7q__navigationButtons",
  "newTab": "ChromeBrowser-module__sf7d7q__newTab",
  "searchIcon": "ChromeBrowser-module__sf7d7q__searchIcon",
  "tab": "ChromeBrowser-module__sf7d7q__tab",
  "tabBar": "ChromeBrowser-module__sf7d7q__tabBar",
  "tabTitle": "ChromeBrowser-module__sf7d7q__tabTitle",
  "toolbar": "ChromeBrowser-module__sf7d7q__toolbar",
  "urlBar": "ChromeBrowser-module__sf7d7q__urlBar",
  "urlForm": "ChromeBrowser-module__sf7d7q__urlForm",
  "urlInput": "ChromeBrowser-module__sf7d7q__urlInput",
});
}}),
"[project]/app/windows10-components/ChromeBrowser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ChromeBrowser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/ChromeBrowser.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ChromeBrowser() {
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("https://www.google.com/webhp?igu=1");
    const [inputUrl, setInputUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("https://www.google.com/webhp?igu=1");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "https://www.google.com/webhp?igu=1"
    ]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const browserContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Update input URL when URL changes
        if (url.startsWith("https://")) {
            setInputUrl(url.replace("https://", ""));
        } else if (url.startsWith("http://")) {
            setInputUrl(url.replace("http://", ""));
        } else {
            setInputUrl(url);
        }
    }, [
        url
    ]);
    // Handle clicks outside the iframe to deactivate it
    // useEffect(() => {
    //   const handleClickOutside = (e) => {
    //     if (browserContentRef.current && !browserContentRef.current.contains(e.target)) {
    //       setIframeActive(false)
    //     }
    //   }
    //   document.addEventListener("mousedown", handleClickOutside)
    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside)
    //   }
    // }, [])
    // Prevent events from bubbling outside the browser component
    // useEffect(() => {
    //   const browser = browserRef.current
    //   if (!browser) return
    //   const stopPropagation = (e) => {
    //     // Don't stop propagation for wheel events to allow scrolling
    //     if (e.type !== "wheel") {
    //       e.stopPropagation()
    //     }
    //   }
    //   // Add event listeners to capture and stop events
    //   const events = ["click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove"]
    //   events.forEach((event) => {
    //     browser.addEventListener(event, stopPropagation, { capture: true })
    //   })
    //   return () => {
    //     events.forEach((event) => {
    //       browser.removeEventListener(event, stopPropagation, { capture: true })
    //     })
    //   }
    // }, [])
    // Add this function after the other useEffect hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleWheel = (e)=>{
            // Don't stop propagation for wheel events to allow scrolling
            e.stopPropagation();
        };
        // Get references to the elements
        const browserContent = browserContentRef.current;
        if (browserContent) {
            browserContent.addEventListener("wheel", handleWheel, {
                passive: true
            });
        }
        return ()=>{
            if (browserContent) {
                browserContent.removeEventListener("wheel", handleWheel);
            }
        };
    }, []);
    const handleUrlSubmit = (e)=>{
        e.preventDefault();
        setIsLoading(true);
        let newUrl = inputUrl;
        // Add https if missing
        if (!newUrl.startsWith("http://") && !newUrl.startsWith("https://")) {
            newUrl = "https://" + newUrl;
        }
        setUrl(newUrl);
        // Add to history if it's a new URL
        if (newUrl !== history[historyIndex]) {
            const newHistory = history.slice(0, historyIndex + 1);
            newHistory.push(newUrl);
            setHistory(newHistory);
            setHistoryIndex(newHistory.length - 1);
        }
    };
    const goBack = ()=>{
        if (historyIndex > 0) {
            setIsLoading(true);
            setHistoryIndex(historyIndex - 1);
            setUrl(history[historyIndex - 1]);
        }
    };
    const goForward = ()=>{
        if (historyIndex < history.length - 1) {
            setIsLoading(true);
            setHistoryIndex(historyIndex + 1);
            setUrl(history[historyIndex + 1]);
        }
    };
    const reload = ()=>{
        setIsLoading(true);
        // Force iframe reload by setting a key with current timestamp
        if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src;
        }
    };
    const goHome = ()=>{
        setIsLoading(true);
        const homeUrl = "https://www.google.com/webhp?igu=1";
        setUrl(homeUrl);
        // Add to history
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(homeUrl);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
    };
    // Get the current domain for the favicon and title
    const getDomain = (url)=>{
        try {
            const urlObj = new URL(url);
            return urlObj.hostname;
        } catch  {
            return url;
        }
    };
    const currentDomain = getDomain(url);
    // Handle iframe load event
    const handleIframeLoad = ()=>{
        setIsLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browser,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabBar,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favicon,
                                    children: currentDomain.includes("google") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                fill: "#4285F4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "4",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 8L20 8",
                                                stroke: "white",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 8L8 8",
                                                stroke: "#EA4335",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6.5 14.5L9 9",
                                                stroke: "#FBBC05",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M15 9L17.5 14.5",
                                                stroke: "#34A853",
                                                strokeWidth: "4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this) : currentDomain.includes("melihkochan") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "24",
                                                height: "24",
                                                rx: "4",
                                                fill: "#2563EB"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7 7H17V9H7V7Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7 11H17V13H7V11Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7 15H17V17H7V15Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        size: 16,
                                        color: "#5f6368"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabTitle,
                                    children: currentDomain
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 14,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeTab
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].newTab,
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigationButtons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                onClick: goBack,
                                disabled: historyIndex <= 0,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                onClick: goForward,
                                disabled: historyIndex >= history.length - 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                onClick: reload,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleUrlSubmit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlForm,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlBar,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 14,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: inputUrl,
                                    onChange: (e)=>setInputUrl(e.target.value),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlInput
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                onClick: goHome,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: browserContentRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserContent,
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingBar,
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: "100%"
                            },
                            transition: {
                                duration: 1.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iframeWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            ref: iframeRef,
                            src: url,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iframe,
                            onLoad: handleIframeLoad,
                            title: "Browser Content",
                            sandbox: "allow-same-origin allow-scripts allow-forms allow-popups",
                            scrolling: "yes",
                            loading: "lazy",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/ChromeBrowser.js",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/ChromeBrowser.js",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/FolderContent.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "additionalInfo": "FolderContent-module__Eo7gzG__additionalInfo",
  "certificationDate": "FolderContent-module__Eo7gzG__certificationDate",
  "certificationIssuer": "FolderContent-module__Eo7gzG__certificationIssuer",
  "certificationItem": "FolderContent-module__Eo7gzG__certificationItem",
  "certificationsList": "FolderContent-module__Eo7gzG__certificationsList",
  "contactCard": "FolderContent-module__Eo7gzG__contactCard",
  "contactDetails": "FolderContent-module__Eo7gzG__contactDetails",
  "contactIcon": "FolderContent-module__Eo7gzG__contactIcon",
  "contactItem": "FolderContent-module__Eo7gzG__contactItem",
  "contactLabel": "FolderContent-module__Eo7gzG__contactLabel",
  "contactValue": "FolderContent-module__Eo7gzG__contactValue",
  "educationHeader": "FolderContent-module__Eo7gzG__educationHeader",
  "educationInstitution": "FolderContent-module__Eo7gzG__educationInstitution",
  "educationItem": "FolderContent-module__Eo7gzG__educationItem",
  "educationYear": "FolderContent-module__Eo7gzG__educationYear",
  "folderContainer": "FolderContent-module__Eo7gzG__folderContainer",
  "folderTitle": "FolderContent-module__Eo7gzG__folderTitle",
  "infoCard": "FolderContent-module__Eo7gzG__infoCard",
  "infoLabel": "FolderContent-module__Eo7gzG__infoLabel",
  "infoRow": "FolderContent-module__Eo7gzG__infoRow",
  "infoSection": "FolderContent-module__Eo7gzG__infoSection",
  "infoValue": "FolderContent-module__Eo7gzG__infoValue",
  "interestsList": "FolderContent-module__Eo7gzG__interestsList",
  "languageList": "FolderContent-module__Eo7gzG__languageList",
  "projectItem": "FolderContent-module__Eo7gzG__projectItem",
  "projectLink": "FolderContent-module__Eo7gzG__projectLink",
  "projectLinks": "FolderContent-module__Eo7gzG__projectLinks",
  "skillCategory": "FolderContent-module__Eo7gzG__skillCategory",
  "skillList": "FolderContent-module__Eo7gzG__skillList",
  "skillsGrid": "FolderContent-module__Eo7gzG__skillsGrid",
  "workDescription": "FolderContent-module__Eo7gzG__workDescription",
  "workDuration": "FolderContent-module__Eo7gzG__workDuration",
  "workExperience": "FolderContent-module__Eo7gzG__workExperience",
  "workResponsibilities": "FolderContent-module__Eo7gzG__workResponsibilities",
});
}}),
"[project]/app/windows10-components/ProjectsFolder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ProjectsFolder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/FolderContent.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
"use client";
;
;
;
function ProjectsFolder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderTitle,
                children: "Projects"
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "PrepAI"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLinks,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://prepai.ivyproschool.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                " Live Demo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Integrated AI-powered chatbot features where users can select specific topics related to Data Science, Data Engineering, and Power BI to resolve their queries."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Developed an AI-based quiz system where users can test their knowledge, with AI-generated questions based on selected topics and subtopics."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Implemented an AI-driven review system to analyze quiz performance, highlighting strengths and weak points with personalized improvement suggestions."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Built a dynamic lesson plan feature that unlocks quizzes after completing daily lessons, ensuring progressive learning."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Developed an AI-powered resume builder with ATS score analysis and skill scoring, allowing users to optimize their resumes effectively."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Collaborated in Agile teams, managing projects via GitHub."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "PDF Splitter"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLinks,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://pdf-splitter.thefstack.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                " Live Demo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Built a web application that allows users to split PDF files into individual pages or custom ranges."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Implemented a drag-and-drop interface for easy file uploading and a preview feature to view PDF pages."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Used React.js for the frontend and Node.js with Express for the backend processing."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Integrated PDF.js for rendering previews and pdf-lib for manipulation operations."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Ensured secure file handling with temporary storage and automatic cleanup."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Real Time Chat Application"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLinks,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLink,
                            children: "Live Demo"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Developed a real-time chat app where users can sign up, log in, and communicate in a shared chat room."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Enabled instant messaging using Socket.io, ensuring smooth, real-time communication."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Integrated Strapi as a headless CMS backend for user and message management."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Built a secure authentication system for user registration and login."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Rocket Health"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLinks,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://rockethealththefstack.netlify.app/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                " Live Demo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Developed a static healthcare-themed web application with a focus on clean UI and minimal design."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Implemented a typing text animation for improved interactivity using pure CSS."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Structured entirely using HTML and CSS without any JavaScript frameworks."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Designed an informative layout to clearly present health-related content."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Emphasized performance and responsiveness for fast user experience."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Basic E-Commerce API"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLinks,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/thefstack/first-ecommerce-api",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                " GitHub Repository"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Implemented secure user authentication with OTP-based email verification."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Designed and developed CRUD operations for product management."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Secured API endpoints using JWT-based token authentication."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Integrated MongoDB for efficient data storage and retrieval."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Utilized Nodemailer for sending verification emails during user registration."
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/ProjectsFolder.js",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/ProjectsFolder.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/PersonalInfoFolder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PersonalInfoFolder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/FolderContent.module.css [app-client] (css module)");
"use client";
;
;
function PersonalInfoFolder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderTitle,
                children: "Kişisel Bilgiler"
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoLabel,
                                children: "İsim:"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoValue,
                                children: "Melih KOÇHAN"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoLabel,
                                children: "Konum:"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoValue,
                                children: "Kocaeli/Darıca"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoLabel,
                                children: "Müsaitlik:"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoValue,
                                children: "Hemen"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/PersonalInfoFolder.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/ContactFolder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ContactFolder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/FolderContent.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
"use client";
;
;
;
function ContactFolder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderTitle,
                children: "İletişim Bilgileri"
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/ContactFolder.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                size: 24,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactIcon
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ContactFolder.js",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactDetails,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLabel,
                                        children: "E-posta"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/ContactFolder.js",
                                        lineNumber: 14,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:melihkochan00@gmail.com",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactValue,
                                        children: "melihkochan00@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/ContactFolder.js",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/ContactFolder.js",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ContactFolder.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                size: 24,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactIcon
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ContactFolder.js",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactDetails,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLabel,
                                        children: "Telefon"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/ContactFolder.js",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:0540 014 4181",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactValue,
                                        children: "0540 014 4181"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/ContactFolder.js",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/ContactFolder.js",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ContactFolder.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                size: 24,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactIcon
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/ContactFolder.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactDetails,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLabel,
                                        children: "Web Sitesi"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/ContactFolder.js",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.melihkochan.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactValue,
                                        children: "www.melihkochan.com"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/ContactFolder.js",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/ContactFolder.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/ContactFolder.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/ContactFolder.js",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/ContactFolder.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/SkillsFolder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SkillsFolder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/FolderContent.module.css [app-client] (css module)");
"use client";
;
;
function SkillsFolder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderTitle,
                children: "Skills"
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillsGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillCategory,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Languages"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "JavaScript"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 13,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Java"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 14,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillCategory,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Frameworks"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "React.js"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Next.js"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Express.js"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Node.js"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillCategory,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Databases"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "MongoDB"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "MySQL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillCategory,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Tools & Platform"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Git"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Postman"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillCategory,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Other Skills"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "REST APIs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "State Management (Context API)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Agile Methodologies"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillCategory,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Soft Skills"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Problem-solving"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Team Collaboration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/SkillsFolder.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/SkillsFolder.js",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/SkillsFolder.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/EducationFolder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>EducationFolder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/FolderContent.module.css [app-client] (css module)");
"use client";
;
;
function EducationFolder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderTitle,
                children: "Eğitim"
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/EducationFolder.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].educationItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].educationHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Düzce Üniversitesi"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/EducationFolder.js",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].educationYear,
                                children: "2022"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/EducationFolder.js",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/EducationFolder.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FolderContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].educationInstitution,
                        children: "Üniversite eğitimim boyunca, modern yazılım geliştirme prensipleri ve disiplinli programlama yetkinlikleri üzerine odaklandım. Özellikle nesne yönelimli programlama mimarileri, veri tabanı yönetimi ve web teknolojileri konusunda güçlü bir teorik ve pratik temel oluşturdum. "
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/EducationFolder.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/EducationFolder.js",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/EducationFolder.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/SocialBrowser.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "actionButton": "SocialBrowser-module__RT0vVW__actionButton",
  "addressBar": "SocialBrowser-module__RT0vVW__addressBar",
  "browser": "SocialBrowser-module__RT0vVW__browser",
  "browserActions": "SocialBrowser-module__RT0vVW__browserActions",
  "browserContent": "SocialBrowser-module__RT0vVW__browserContent",
  "closeTab": "SocialBrowser-module__RT0vVW__closeTab",
  "externalLinkIcon": "SocialBrowser-module__RT0vVW__externalLinkIcon",
  "externalSiteButton": "SocialBrowser-module__RT0vVW__externalSiteButton",
  "externalSiteDescription": "SocialBrowser-module__RT0vVW__externalSiteDescription",
  "externalSiteIcon": "SocialBrowser-module__RT0vVW__externalSiteIcon",
  "externalSitePrompt": "SocialBrowser-module__RT0vVW__externalSitePrompt",
  "externalSiteTitle": "SocialBrowser-module__RT0vVW__externalSiteTitle",
  "favicon": "SocialBrowser-module__RT0vVW__favicon",
  "iframe": "SocialBrowser-module__RT0vVW__iframe",
  "iframeActive": "SocialBrowser-module__RT0vVW__iframeActive",
  "iframeOverlay": "SocialBrowser-module__RT0vVW__iframeOverlay",
  "iframeWrapper": "SocialBrowser-module__RT0vVW__iframeWrapper",
  "loadingBar": "SocialBrowser-module__RT0vVW__loadingBar",
  "loadingIndicator": "SocialBrowser-module__RT0vVW__loadingIndicator",
  "navButton": "SocialBrowser-module__RT0vVW__navButton",
  "navigationButtons": "SocialBrowser-module__RT0vVW__navigationButtons",
  "tab": "SocialBrowser-module__RT0vVW__tab",
  "tabBar": "SocialBrowser-module__RT0vVW__tabBar",
  "tabTitle": "SocialBrowser-module__RT0vVW__tabTitle",
  "toolbar": "SocialBrowser-module__RT0vVW__toolbar",
  "urlBar": "SocialBrowser-module__RT0vVW__urlBar",
  "urlIcon": "SocialBrowser-module__RT0vVW__urlIcon",
  "urlText": "SocialBrowser-module__RT0vVW__urlText",
});
}}),
"[project]/app/windows10-components/GithubBrowser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>GithubBrowser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/SocialBrowser.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function GithubBrowser() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const browserContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Simulate loading
    setTimeout(()=>{
        setIsLoading(false);
    }, 800);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browser,
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabBar,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favicon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z",
                                        fill: "black"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                        lineNumber: 23,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabTitle,
                                children: "GitHub - melihkochan"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeTab,
                                onClick: (e)=>e.stopPropagation()
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/GithubBrowser.js",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/GithubBrowser.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigationButtons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/GithubBrowser.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlIcon
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlText,
                                children: "github.com/melihkochan"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/GithubBrowser.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserActions,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/GithubBrowser.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/GithubBrowser.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: browserContentRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserContent,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingBar,
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: "100%"
                        },
                        transition: {
                            duration: 1.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/GithubBrowser.js",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/GithubBrowser.js",
                    lineNumber: 64,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSitePrompt,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                height: "68",
                                viewBox: "0 0 16 16",
                                width: "68",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
                                    fill: "#24292f"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/GithubBrowser.js",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteTitle,
                            children: "GitHub Profili"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/GithubBrowser.js",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteDescription,
                            children: "Güvenlik kısıtlamaları nedeniyle GitHub bu pencerede görüntülenemez."
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/GithubBrowser.js",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/melihkochan",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteButton,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalLinkIcon
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/GithubBrowser.js",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                "GitHub Profilini Aç"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/GithubBrowser.js",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/GithubBrowser.js",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/GithubBrowser.js",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/GithubBrowser.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/LinkedinBrowser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LinkedinBrowser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/SocialBrowser.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function LinkedinBrowser() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const browserContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Simulate loading
    setTimeout(()=>{
        setIsLoading(false);
    }, 800);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browser,
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabBar,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favicon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "24",
                                            height: "24",
                                            rx: "2",
                                            fill: "#0A66C2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 9H8V19H5V9ZM6.5 7.5C5.4 7.5 4.5 6.6 4.5 5.5C4.5 4.4 5.4 3.5 6.5 3.5C7.6 3.5 8.5 4.4 8.5 5.5C8.5 6.6 7.6 7.5 6.5 7.5ZM13 19H10V9H13V10.5C13.9 9.3 15.2 8.5 16.5 8.5C19 8.5 20 10.5 20 13V19H17V13.5C17 12.5 16.5 11.5 15.5 11.5C14.5 11.5 13 12.5 13 14V19Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabTitle,
                                children: "LinkedIn - melihkochan"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeTab,
                                onClick: (e)=>e.stopPropagation()
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigationButtons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlIcon
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlText,
                                children: "linkedin.com/in/melih-kochan-7961371a2/"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserActions,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: browserContentRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserContent,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingBar,
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: "100%"
                        },
                        transition: {
                            duration: 1.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                    lineNumber: 63,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSitePrompt,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "68",
                                height: "68",
                                viewBox: "0 0 34 34",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z",
                                        fill: "#0A66C2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteTitle,
                            children: "LinkedIn Profili"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteDescription,
                            children: "Güvenlik kısıtlamaları nedeniyle LinkedIn bu pencerede görüntülenemez."
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.linkedin.com/in/melih-kochan-7961371a2/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteButton,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalLinkIcon
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                "LinkedIn Profilini Aç"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/LinkedinBrowser.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/InstagramBrowser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>InstagramBrowser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/SocialBrowser.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function InstagramBrowser() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const browserContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Simulate loading
    setTimeout(()=>{
        setIsLoading(false);
    }, 800);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browser,
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabBar,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favicon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "instagramGradient",
                                            x1: "0%",
                                            y1: "100%",
                                            x2: "100%",
                                            y2: "0%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#FFDC80"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                    lineNumber: 24,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "25%",
                                                    stopColor: "#FCAF45"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                    lineNumber: 25,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "50%",
                                                    stopColor: "#F77737"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                    lineNumber: 26,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "75%",
                                                    stopColor: "#F56040"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                    lineNumber: 27,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#FD1D1D"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                    lineNumber: 28,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "24",
                                            height: "24",
                                            rx: "6",
                                            fill: "url(#instagramGradient)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "5",
                                            stroke: "white",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "18.5",
                                            cy: "5.5",
                                            r: "1.5",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabTitle,
                                children: "Instagram - melih_kochan"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeTab,
                                onClick: (e)=>e.stopPropagation()
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigationButtons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlIcon
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlText,
                                children: "instagram.com/melih_kochan"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserActions,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: browserContentRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserContent,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingBar,
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: "100%"
                        },
                        transition: {
                            duration: 1.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                    lineNumber: 68,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSitePrompt,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "68",
                                height: "68",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "instagramGradientLarge",
                                        x1: "0%",
                                        y1: "100%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#FFDC80"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "25%",
                                                stopColor: "#FCAF45"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#F77737"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "75%",
                                                stopColor: "#F56040"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#FD1D1D"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "24",
                                        height: "24",
                                        rx: "6",
                                        fill: "url(#instagramGradientLarge)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "5",
                                        stroke: "white",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "18.5",
                                        cy: "5.5",
                                        r: "1.5",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteTitle,
                            children: "Instagram Profili"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteDescription,
                            children: "Güvenlik kısıtlamaları nedeniyle Instagram bu pencerede görüntülenemez."
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.instagram.com/melihkochan",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteButton,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalLinkIcon
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                "Instagram Profilini Aç"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/InstagramBrowser.js",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/InstagramBrowser.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/TwitterBrowser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TwitterBrowser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/SocialBrowser.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function TwitterBrowser() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const browserContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Simulate loading
    setTimeout(()=>{
        setIsLoading(false);
    }, 800);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browser,
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabBar,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favicon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "#1DA1F2",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                        lineNumber: 23,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabTitle,
                                children: "Twitter - melihkochan"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeTab,
                                onClick: (e)=>e.stopPropagation()
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigationButtons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlIcon
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlText,
                                children: "x.com/melihkochan"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserActions,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: browserContentRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserContent,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingBar,
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: "100%"
                        },
                        transition: {
                            duration: 1.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                    lineNumber: 59,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSitePrompt,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "68",
                                height: "68",
                                viewBox: "0 0 24 24",
                                fill: "#1DA1F2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteTitle,
                            children: "Twitter Profili"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteDescription,
                            children: "Güvenlik kısıtlamaları nedeniyle Twitter bu pencerede görüntülenemez."
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://x.com/melihkochan1",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteButton,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalLinkIcon
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                "Twitter Profilini Aç"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/TwitterBrowser.js",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/TwitterBrowser.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/MailBrowser.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MailBrowser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/SocialBrowser.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MailBrowser() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const browserContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Simulate loading
    setTimeout(()=>{
        setIsLoading(false);
    }, 800);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browser,
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabBar,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favicon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    size: 16,
                                    color: "#0078d7"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/MailBrowser.js",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabTitle,
                                children: "Mail - melihkochan@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeTab,
                                onClick: (e)=>e.stopPropagation()
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/MailBrowser.js",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/MailBrowser.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/MailBrowser.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigationButtons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/MailBrowser.js",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/MailBrowser.js",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/MailBrowser.js",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/MailBrowser.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlIcon
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlText,
                                children: "mailto:melihkochan00@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/MailBrowser.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserActions,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/MailBrowser.js",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/MailBrowser.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/MailBrowser.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: browserContentRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserContent,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingBar,
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: "100%"
                        },
                        transition: {
                            duration: 1.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/MailBrowser.js",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/MailBrowser.js",
                    lineNumber: 57,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSitePrompt,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                size: 68,
                                color: "#0078d7"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/MailBrowser.js",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/MailBrowser.js",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteTitle,
                            children: "E-posta Gönder"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/MailBrowser.js",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteDescription,
                            children: "Varsayılan e-posta istemcinizi açıp melihkochan00@gmail.com adresine e-posta göndermek için aşağıdaki butona tıklayın"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/MailBrowser.js",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:melihkochan00@gmail.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalSiteButton,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SocialBrowser$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].externalLinkIcon
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/MailBrowser.js",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                "E-posta Oluştur"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/MailBrowser.js",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/MailBrowser.js",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/MailBrowser.js",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/MailBrowser.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/FileExplorer.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "breadcrumb": "FileExplorer-module__H4lcwa__breadcrumb",
  "explorerContent": "FileExplorer-module__H4lcwa__explorerContent",
  "fileExplorer": "FileExplorer-module__H4lcwa__fileExplorer",
  "fileItem": "FileExplorer-module__H4lcwa__fileItem",
  "fileList": "FileExplorer-module__H4lcwa__fileList",
  "files": "FileExplorer-module__H4lcwa__files",
  "searchContainer": "FileExplorer-module__H4lcwa__searchContainer",
  "searchInput": "FileExplorer-module__H4lcwa__searchInput",
  "sidebar": "FileExplorer-module__H4lcwa__sidebar",
  "sidebarHeader": "FileExplorer-module__H4lcwa__sidebarHeader",
  "sidebarIcon": "FileExplorer-module__H4lcwa__sidebarIcon",
  "sidebarItem": "FileExplorer-module__H4lcwa__sidebarItem",
  "sidebarSection": "FileExplorer-module__H4lcwa__sidebarSection",
  "statusBar": "FileExplorer-module__H4lcwa__statusBar",
  "statusItem": "FileExplorer-module__H4lcwa__statusItem",
  "toolbar": "FileExplorer-module__H4lcwa__toolbar",
  "toolbarButton": "FileExplorer-module__H4lcwa__toolbarButton",
  "toolbarButtons": "FileExplorer-module__H4lcwa__toolbarButtons",
});
}}),
"[project]/app/data/apps.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "allApps": (()=>allApps),
    "desktopApps": (()=>desktopApps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
;
;
;
const desktopApps = [
    {
        id: "file-explorer",
        name: "Dosya Gezgini",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
            size: 32,
            color: "#0078d7"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 19,
            columnNumber: 11
        }, this)
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
            size: 32,
            color: "#0A66C2"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 24,
            columnNumber: 11
        }, this)
    },
    {
        id: "github",
        name: "GitHub",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
            size: 32,
            color: "#333"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 29,
            columnNumber: 11
        }, this)
    },
    {
        id: "resume-pdf",
        name: "Özgeçmiş",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            size: 32,
            color: "#FF0000"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 34,
            columnNumber: 11
        }, this)
    },
    {
        id: "chrome",
        name: "Chrome",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/chrome.png",
            alt: "Chrome",
            width: "32",
            height: "32"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 39,
            columnNumber: 11
        }, this)
    },
    {
        id: "youtube",
        name: "YouTube",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M31.3307 9.12463C31.0376 8.04079 30.1938 7.19779 29.1094 6.9052C26.74 6.25 16.5016 6.25 16.5016 6.25C16.5016 6.25 6.26302 6.25 3.89364 6.9052C2.80924 7.19786 1.96528 8.04087 1.67223 9.12463C1.01703 11.4933 1.01703 16.25 1.01703 16.25C1.01703 16.25 1.01703 21.0067 1.67223 23.3754C1.96531 24.4592 2.80927 25.3022 3.89364 25.5948C6.26302 26.25 16.5016 26.25 16.5016 26.25C16.5016 26.25 26.7401 26.25 29.1095 25.5948C30.1939 25.3021 31.0377 24.4591 31.3309 23.3754C31.9861 21.0067 31.9861 16.25 31.9861 16.25C31.9861 16.25 31.9861 11.4933 31.3307 9.12463Z",
                    fill: "#FF0000"
                }, void 0, false, {
                    fileName: "[project]/app/data/apps.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.2524 20.3171L21.4196 16.25L13.2524 12.1829V20.3171Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/app/data/apps.js",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    },
    {
        id: "spotify",
        name: "Spotify",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "#1DB954",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm7.362 23.12c-.248.35-.68.468-1.053.239-2.914-1.786-6.58-2.185-10.906-1.178-.448.122-.93-.183-1.052-.556-.122-.448.183-.93.556-1.052 4.626-1.053 8.788-.603 11.996 1.365.448.183.494.681.311 1.129l-.052.053zm1.493-3.429c-.31.432-.85.619-1.303.31-3.344-2.044-8.445-2.636-12.404-1.444-.543.155-1.052-.155-1.207-.618-.155-.495.155-1.052.618-1.207 4.717-1.366 10.173-.721 13.866 1.699.465.259.56.808.301 1.273l-.881-.013zm.122-3.471c-4.26-2.517-11.26-2.75-15.32-1.52-.654.182-1.239-.183-1.44-.745-.182-.619.183-1.239.745-1.44 4.684-1.298 12.225-1.024 16.94 1.772.58.34.726 1.052.387 1.612-.361.619-1.052.765-1.612.429l-.7-.108z"
            }, void 0, false, {
                fileName: "[project]/app/data/apps.js",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    },
    {
        id: "instagram",
        name: "Instagram",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/instagram.png",
            alt: "Instagram",
            width: "32",
            height: "32"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 63,
            columnNumber: 11
        }, this)
    },
    {
        id: "twitter",
        name: "Twitter",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "#1DA1F2",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28.3125 7.0625C27.5 7.375 26.625 7.5625 25.6875 7.625C26.625 7.0625 27.375 6.1875 27.75 5.125C26.875 5.625 25.875 6 24.8125 6.25C24 5.25 22.8125 4.625 21.5 4.625C19 4.625 17 6.625 17 9.125C17 9.4375 17.0625 9.75 17.1875 10.0625C13.0625 9.875 9.375 7.875 6.75 4.875C6.375 5.5 6.1875 6.25 6.1875 7.0625C6.1875 8.625 6.9375 10 8.1875 10.75C7.5 10.75 6.8125 10.5625 6.25 10.3125V10.375C6.25 12.5 7.8125 14.3125 9.875 14.75C9.5 14.875 9.125 14.9375 8.75 14.9375C8.4375 14.9375 8.1875 14.875 7.9375 14.875C8.5 16.6875 10.125 18 12.0625 18C10.5 19.25 8.5 20 6.3125 20C6 20 5.6875 20 5.375 19.9375C7.3125 21.25 9.625 22 12.125 22C21.5 22 26.75 15.0625 26.75 9.25C26.75 9.0625 26.75 8.9375 26.75 8.75C27.625 8.125 28.3125 7.375 28.875 6.5C28.0625 6.875 27.1875 7.125 26.25 7.3125L28.3125 7.0625Z"
            }, void 0, false, {
                fileName: "[project]/app/data/apps.js",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }
];
// Portfolio-related apps for the Start Menu
const portfolioApps = [
    {
        id: "personal-info",
        name: "Kişisel Bilgiler",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            size: 24,
            color: "#0078d7"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 81,
            columnNumber: 11
        }, this)
    },
    {
        id: "contact",
        name: "İletişim",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            size: 24,
            color: "#0078d7"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 86,
            columnNumber: 11
        }, this)
    },
    {
        id: "skills",
        name: "Yetenekler",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
            size: 24,
            color: "#0078d7"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 91,
            columnNumber: 11
        }, this)
    },
    {
        id: "education",
        name: "Eğitim",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
            size: 24,
            color: "#0078d7"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 96,
            columnNumber: 11
        }, this)
    }
];
// Essential Windows apps to keep in the Start Menu
const essentialWindowsApps = [
    {
        id: "mail",
        name: "E-posta",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            size: 24,
            color: "#0078d7"
        }, void 0, false, {
            fileName: "[project]/app/data/apps.js",
            lineNumber: 105,
            columnNumber: 11
        }, this)
    }
];
const allApps = [
    ...desktopApps,
    ...portfolioApps,
    ...essentialWindowsApps
];
}}),
"[project]/app/windows10-components/FileExplorer.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>FileExplorer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/FileExplorer.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/data/apps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$computer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerIcon$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/computer.js [app-ssr] (ecmascript) <export default as ComputerIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-ssr] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
"use client";
;
;
;
;
;
function FileExplorer({ openWindow }) {
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Desktop");
    const handleItemClick = (itemType, itemName, itemId)=>{
        if (itemType === "folder") {
            if (itemName === "Projeler") {
                // Open the Projects window
                const projectsApp = {
                    id: "projects",
                    name: "Projeler",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                        size: 16,
                        color: "#0078d7"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this)
                };
                openWindow(projectsApp);
            } else {
                // Update the current path when clicking on a folder
                setCurrentPath(itemName);
            }
        } else if (itemType === "file" && itemName === "Özgeçmiş.pdf") {
            // Open the resume PDF viewer
            const resumeApp = {
                id: "resume-pdf",
                name: "Özgeçmiş.pdf",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                    size: 16,
                    color: "#0078d7"
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/FileExplorer.js",
                    lineNumber: 29,
                    columnNumber: 15
                }, this)
            };
            openWindow(resumeApp);
        } else if (itemType === "app" && itemId) {
            // Find the app in allApps and open it
            const app = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allApps"].find((app)=>app.id === itemId);
            if (app) {
                openWindow(app);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileExplorer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                children: "Dosya"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                children: "Giriş"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                children: "Paylaş"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                children: "Görünüm"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Ara",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/FileExplorer.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/FileExplorer.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].explorerContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarHeader,
                                        children: "Hızlı Erişim"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem,
                                        onClick: ()=>setCurrentPath("Desktop"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$computer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerIcon$3e$__["ComputerIcon"], {
                                                size: 16,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarIcon
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Masaüstü"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem,
                                        onClick: ()=>setCurrentPath("Downloads"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 16,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarIcon
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "İndirilenler"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarHeader,
                                        children: "Bilgisayar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem,
                                        onClick: ()=>setCurrentPath("Desktop"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$computer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerIcon$3e$__["ComputerIcon"], {
                                                size: 16,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarIcon
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Masaüstü"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem,
                                        onClick: ()=>setCurrentPath("Downloads"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 16,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarIcon
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "İndirilenler"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarItem,
                                        onClick: ()=>setCurrentPath("C:"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                                size: 16,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarIcon
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Yerel Disk (C:)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileList,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumb,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Bilgisayar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: currentPath === "Desktop" ? "Masaüstü" : currentPath === "Downloads" ? "İndirilenler" : currentPath === "Documents" ? "Belgeler" : currentPath === "C:" ? "Yerel Disk (C:)" : currentPath
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].files,
                                children: [
                                    currentPath === "Desktop" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                onClick: ()=>handleItemClick("app", "LinkedIn", "linkedin"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                        size: 40,
                                                        color: "#0A66C2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "LinkedIn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                onClick: ()=>handleItemClick("app", "GitHub", "github"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        size: 40,
                                                        color: "#333"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "GitHub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                onClick: ()=>handleItemClick("app", "Chrome", "chrome"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/chrome.png",
                                                        alt: "Chrome",
                                                        width: "40",
                                                        height: "40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Chrome"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                onClick: ()=>handleItemClick("file", "Özgeçmiş.pdf"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        size: 40,
                                                        color: "#FF0000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Özgeçmiş"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                onClick: ()=>handleItemClick("app", "Instagram", "instagram"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/instagram.png",
                                                        alt: "Instagram",
                                                        width: "40",
                                                        height: "40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Instagram"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                onClick: ()=>handleItemClick("app", "Twitter", "twitter"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "40",
                                                        height: "40",
                                                        viewBox: "0 0 32 32",
                                                        fill: "#1DA1F2",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M28.3125 7.0625C27.5 7.375 26.625 7.5625 25.6875 7.625C26.625 7.0625 27.375 6.1875 27.75 5.125C26.875 5.625 25.875 6 24.8125 6.25C24 5.25 22.8125 4.625 21.5 4.625C19 4.625 17 6.625 17 9.125C17 9.4375 17.0625 9.75 17.1875 10.0625C13.0625 9.875 9.375 7.875 6.75 4.875C6.375 5.5 6.1875 6.25 6.1875 7.0625C6.1875 8.625 6.9375 10 8.1875 10.75C7.5 10.75 6.8125 10.5625 6.25 10.3125V10.375C6.25 12.5 7.8125 14.3125 9.875 14.75C9.5 14.875 9.125 14.9375 8.75 14.9375C8.4375 14.9375 8.1875 14.875 7.9375 14.875C8.5 16.6875 10.125 18 12.0625 18C10.5 19.25 8.5 20 6.3125 20C6 20 5.6875 20 5.375 19.9375C7.3125 21.25 9.625 22 12.125 22C21.5 22 26.75 15.0625 26.75 9.25C26.75 9.0625 26.75 8.9375 26.75 8.75C27.625 8.125 28.3125 7.375 28.875 6.5C28.0625 6.875 27.1875 7.125 26.25 7.3125L28.3125 7.0625Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Twitter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                onClick: ()=>handleItemClick("app", "YouTube", "youtube"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "40",
                                                        height: "40",
                                                        viewBox: "0 0 32 32",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M31.3307 9.12463C31.0376 8.04079 30.1938 7.19779 29.1094 6.9052C26.74 6.25 16.5016 6.25 16.5016 6.25C16.5016 6.25 6.26302 6.25 3.89364 6.9052C2.80924 7.19786 1.96528 8.04087 1.67223 9.12463C1.01703 11.4933 1.01703 16.25 1.01703 16.25C1.01703 16.25 1.01703 21.0067 1.67223 23.3754C1.96531 24.4592 2.80927 25.3022 3.89364 25.5948C6.26302 26.25 16.5016 26.25 16.5016 26.25C16.5016 26.25 26.7401 26.25 29.1095 25.5948C30.1939 25.3021 31.0377 24.4591 31.3309 23.3754C31.9861 21.0067 31.9861 16.25 31.9861 16.25C31.9861 16.25 31.9861 11.4933 31.3307 9.12463Z",
                                                                fill: "#FF0000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                                lineNumber: 124,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M13.2524 20.3171L21.4196 16.25L13.2524 12.1829V20.3171Z",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                                lineNumber: 125,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "YouTube"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                onClick: ()=>handleItemClick("app", "Spotify", "spotify"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "40",
                                                        height: "40",
                                                        viewBox: "0 0 32 32",
                                                        fill: "#1DB954",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm7.362 23.12c-.248.35-.68.468-1.053.239-2.914-1.786-6.58-2.185-10.906-1.178-.448.122-.93-.183-1.052-.556-.122-.448.183-.93.556-1.052 4.626-1.053 8.788-.603 11.996 1.365.448.183.494.681.311 1.129l-.052.053zm1.493-3.429c-.31.432-.85.619-1.303.31-3.344-2.044-8.445-2.636-12.404-1.444-.543.155-1.052-.155-1.207-.618-.155-.495.155-1.052.618-1.207 4.717-1.366 10.173-.721 13.866 1.699.465.259.56.808.301 1.273l-.881-.013zm.122-3.471c-4.26-2.517-11.26-2.75-15.32-1.52-.654.182-1.239-.183-1.44-.745-.182-.619.183-1.239.745-1.44 4.684-1.298 12.225-1.024 16.94 1.772.58.34.726 1.052.387 1.612-.361.619-1.052.765-1.612.429l-.7-.108z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Spotify"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    currentPath === "Downloads" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                    size: 40,
                                                    color: "#0078d7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Bu klasör boş"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/windows10-components/FileExplorer.js",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false),
                                    currentPath === "C:" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        size: 40,
                                                        color: "#ffd700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Program Files"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        size: 40,
                                                        color: "#ffd700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Windows"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/FileExplorer.js",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/FileExplorer.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/FileExplorer.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusItem,
                    children: currentPath === "Desktop" ? "9 öğe" : currentPath === "Downloads" ? "1 öğe" : currentPath === "C:" ? "2 öğe" : "0 öğe"
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/FileExplorer.js",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/FileExplorer.js",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/FileExplorer.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/SpotifyPlayer.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "spotifyContainer": "SpotifyPlayer-module__hQOaba__spotifyContainer",
});
}}),
"[project]/app/windows10-components/SpotifyPlayer.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SpotifyPlayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SpotifyPlayer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/SpotifyPlayer.module.css [app-client] (css module)");
"use client";
;
;
function SpotifyPlayer() {
    const albumUrl = "https://open.spotify.com/embed/album/3bGxEDwqYnjyDgngVLqEol?utm_source=generator&theme=0";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SpotifyPlayer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spotifyContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: albumUrl,
            width: "100%",
            height: "100%",
            frameBorder: "0",
            allowFullScreen: "",
            allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
            loading: "lazy",
            title: "Spotify Player - Ecliptic Signals by KOCHAN"
        }, void 0, false, {
            fileName: "[project]/app/windows10-components/SpotifyPlayer.js",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/windows10-components/SpotifyPlayer.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/Notepad.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "notepadContainer": "Notepad-module__zsyYRq__notepadContainer",
  "textarea": "Notepad-module__zsyYRq__textarea",
});
}}),
"[project]/app/windows10-components/Notepad.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Notepad)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Notepad$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/Notepad.module.css [app-client] (css module)");
"use client";
;
;
;
function Notepad() {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedText = localStorage.getItem("notepadText");
        if (savedText) {
            setText(savedText);
        }
    }, []);
    // Save to localStorage on change
    const handleChange = (e)=>{
        const newText = e.target.value;
        setText(newText);
        localStorage.setItem("notepadText", newText);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Notepad$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notepadContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Notepad$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
            value: text,
            onChange: handleChange,
            placeholder: "Not defterinize bir şeyler yazın...",
            spellCheck: "false"
        }, void 0, false, {
            fileName: "[project]/app/windows10-components/Notepad.js",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/windows10-components/Notepad.js",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/Window.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Window)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/Window.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/ChromeBrowser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ProjectsFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/ProjectsFolder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$PersonalInfoFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/PersonalInfoFolder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ContactFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/ContactFolder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SkillsFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/SkillsFolder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$EducationFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/EducationFolder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$GithubBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/GithubBrowser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LinkedinBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/LinkedinBrowser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$InstagramBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/InstagramBrowser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$TwitterBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/TwitterBrowser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$MailBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/MailBrowser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/FileExplorer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SpotifyPlayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/SpotifyPlayer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Notepad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/Notepad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-ssr] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getInitialWindowPosition(appId) {
    // Get window dimensions
    const windowWidth = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 1000;
    const windowHeight = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 800;
    const isMobile = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : false;
    // Default sizes for different app types
    let width = 800;
    let height = 500;
    let left = 100;
    let top = 50;
    // Adjust for mobile screens
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        // Desktop sizing logic (existing code)
        // Adjust size for Chrome
        if (appId === "chrome" || appId === "github" || appId === "linkedin" || appId === "instagram") {
            width = Math.min(1000, windowWidth * 0.8) // 80% of screen width, max 1000px
            ;
            height = Math.min(600, windowHeight * 0.7) // 70% of screen height, max 600px
            ;
            // Center the window
            left = Math.max(0, (windowWidth - width) / 2);
            top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
            ;
        }
        // Adjust size for folder windows
        if ([
            "projects",
            "personal-info",
            "contact",
            "skills",
            "education"
        ].includes(appId)) {
            width = Math.min(900, windowWidth * 0.75) // 75% of screen width, max 900px
            ;
            height = Math.min(700, windowHeight * 0.8) // 80% of screen height, max 700px
            ;
            // Center the window
            left = Math.max(0, (windowWidth - width) / 2);
            top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
            ;
        }
        // Specific adjustment for file explorer
        if (appId === "file-explorer") {
            width = Math.min(900, windowWidth * 0.75) // 75% of screen width, max 900px
            ;
            height = Math.min(700, windowHeight * 0.8) // 80% of screen height, max 700px
            ;
            // Center the window
            left = Math.max(0, (windowWidth - width) / 2);
            top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
            ;
        }
        // Specific adjustment for mail
        if (appId === "mail") {
            width = Math.min(800, windowWidth * 0.7) // 70% of screen width, max 800px
            ;
            height = Math.min(500, windowHeight * 0.6) // 60% of screen height, max 500px
            ;
            // Center the window
            left = Math.max(0, (windowWidth - width) / 2);
            top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
            ;
        }
        // Specific adjustment for resume PDF
        if (appId === "resume-pdf") {
            width = Math.min(900, windowWidth * 0.8) // 80% of screen width, max 900px
            ;
            height = Math.min(800, windowHeight * 0.85) // 85% of screen height, max 800px
            ;
            // Center the window
            left = Math.max(0, (windowWidth - width) / 2);
            top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
            ;
        }
        // Specific adjustment for Spotify
        if (appId === "spotify") {
            width = Math.min(1200, windowWidth * 0.9) // 90% of screen width, max 1200px
            ;
            height = Math.min(800, windowHeight * 0.85) // 85% of screen height, max 800px
            ;
            // Center the window
            left = Math.max(0, (windowWidth - width) / 2);
            top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
            ;
        }
        // Specific adjustment for Notepad
        if (appId === "notepad") {
            width = Math.min(600, windowWidth * 0.6) // 60% of screen width, max 600px
            ;
            height = Math.min(500, windowHeight * 0.6) // 60% of screen height, max 500px
            ;
            // Center the window
            left = Math.max(0, (windowWidth - width) / 2);
            top = Math.max(0, (windowHeight - height - 40) / 3) // Account for taskbar
            ;
        }
    }
    // Ensure window is fully visible
    left = Math.min(left, windowWidth - width);
    top = Math.min(top, windowHeight - height - 40) // Account for taskbar
    ;
    return {
        width,
        height,
        left,
        top
    };
}
function Window({ app, onClose, isActive, onFocus, zIndex, onMinimize }) {
    const initialPosition = getInitialWindowPosition(app.id);
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: initialPosition.width,
        height: initialPosition.height
    });
    const [windowPosition, setWindowPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: initialPosition.left,
        top: initialPosition.top
    });
    // Store the pre-maximized state to restore when un-maximizing
    const [preMaximizedState, setPreMaximizedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMaximized, setIsMaximized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragControls"])();
    const windowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isActive && windowRef.current) {
            windowRef.current.focus();
        }
    }, [
        isActive
    ]);
    // Only reset minimized state when window becomes active AND was previously minimized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isActive && isMinimized) {
            setIsMinimized(false);
        }
    }, [
        isActive,
        isMinimized
    ]);
    const toggleMaximize = (e)=>{
        e.stopPropagation();
        if (!isMaximized) {
            // Save current position and size before maximizing
            setPreMaximizedState({
                position: {
                    ...windowPosition
                },
                size: {
                    ...windowSize
                }
            });
            setIsMaximized(true);
        } else {
            // Restore previous position and size
            if (preMaximizedState) {
                setWindowPosition(preMaximizedState.position);
                setWindowSize(preMaximizedState.size);
            }
            setIsMaximized(false);
        }
    };
    const handleMinimize = (e)=>{
        e.stopPropagation();
        // Set minimized state
        setIsMinimized(true);
        // Call the onMinimize prop to notify parent component
        if (onMinimize) {
            onMinimize(app.id);
        }
    };
    // Removed unused handleWindowClick function
    // Render specific content based on app ID
    const renderAppContent = ()=>{
        switch(app.id){
            case "chrome":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ChromeBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 194,
                    columnNumber: 16
                }, this);
            case "projects":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ProjectsFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 196,
                    columnNumber: 16
                }, this);
            case "personal-info":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$PersonalInfoFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 198,
                    columnNumber: 16
                }, this);
            case "contact":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$ContactFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 200,
                    columnNumber: 16
                }, this);
            case "skills":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SkillsFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 202,
                    columnNumber: 16
                }, this);
            case "education":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$EducationFolder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 204,
                    columnNumber: 16
                }, this);
            case "github":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$GithubBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 206,
                    columnNumber: 16
                }, this);
            case "linkedin":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LinkedinBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 208,
                    columnNumber: 16
                }, this);
            case "instagram":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$InstagramBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 210,
                    columnNumber: 16
                }, this);
            case "twitter":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$TwitterBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 212,
                    columnNumber: 16
                }, this);
            case "mail":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$MailBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 214,
                    columnNumber: 16
                }, this);
            case "file-explorer":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$FileExplorer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    openWindow: app.openWindow
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 216,
                    columnNumber: 16
                }, this);
            case "resume-pdf":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        height: '100%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: "/melihkochancv.pdf",
                        style: {
                            width: '100%',
                            height: '100%',
                            border: 'none'
                        },
                        title: "Özgeçmiş"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/Window.js",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 219,
                    columnNumber: 11
                }, this);
            case "spotify":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$SpotifyPlayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 228,
                    columnNumber: 16
                }, this);
            case "notepad":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Notepad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 230,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Welcome to ",
                                app.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/Window.js",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "This is a placeholder content for ",
                                app.name,
                                " application."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/Window.js",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/Window.js",
                    lineNumber: 233,
                    columnNumber: 11
                }, this);
        }
    };
    // If minimized, don't render the window
    if (isMinimized) return null;
    // Calculate window styles based on maximized state
    const windowStyles = {
        zIndex: isActive ? zIndex + 10 : zIndex,
        ...isMaximized ? {
            top: 0,
            left: 0,
            width: "100%",
            height: "calc(100% - 40px)",
            maxHeight: "calc(100dvh - 40px)",
            borderRadius: 0
        } : {
            width: `${windowSize.width}px`,
            height: `${windowSize.height}px`,
            left: windowPosition.left,
            top: windowPosition.top
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: windowRef,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].window} ${isMaximized ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].maximized : ""} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""} ${app.id === "chrome" || app.id === "github" || app.id === "linkedin" || app.id === "instagram" || app.id === "mail" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserWindow : ""}`,
        initial: {
            scale: 0.9,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        exit: {
            scale: 0.9,
            opacity: 0
        },
        drag: !isMaximized,
        dragControls: dragControls,
        dragMomentum: false,
        dragListener: false,
        dragElastic: 0,
        style: windowStyles,
        tabIndex: 0,
        onDragEnd: (event, info)=>{
            if (!isMaximized) {
                const windowWidth = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 1000;
                const windowHeight = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 800;
                // Calculate new position
                let newLeft = windowPosition.left + info.offset.x;
                let newTop = windowPosition.top + info.offset.y;
                // Ensure window stays within screen boundaries
                newLeft = Math.max(0, Math.min(newLeft, windowWidth - windowSize.width));
                newTop = Math.max(0, Math.min(newTop, windowHeight - windowSize.height - 40));
                setWindowPosition({
                    left: newLeft,
                    top: newTop
                });
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleBar,
                onPointerDown: (e)=>{
                    e.stopPropagation();
                    onFocus();
                    if (!isMaximized) {
                        dragControls.start(e);
                    }
                },
                onDoubleClick: toggleMaximize,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleBarLeft,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appIcon,
                                children: app.icon
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/Window.js",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: app.name
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/Window.js",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/Window.js",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleBarControls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].control,
                                onClick: handleMinimize,
                                whileHover: {
                                    backgroundColor: "#e5e5e5"
                                },
                                initial: false,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Window.js",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/Window.js",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].control,
                                onClick: toggleMaximize,
                                whileHover: {
                                    backgroundColor: "#e5e5e5"
                                },
                                initial: false,
                                children: isMaximized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Window.js",
                                    lineNumber: 333,
                                    columnNumber: 28
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Window.js",
                                    lineNumber: 333,
                                    columnNumber: 51
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/Window.js",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].control} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].close}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onClose();
                                },
                                whileHover: {
                                    backgroundColor: "#e81123"
                                },
                                initial: false,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Window.js",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/Window.js",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/Window.js",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/Window.js",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].windowContent,
                style: {
                    height: "calc(100% - 32px)",
                    overflow: "hidden"
                },
                children: renderAppContent()
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/Window.js",
                lineNumber: 348,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/Window.js",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/Desktop.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "desktop": "Desktop-module__yaRb_a__desktop",
  "iconGrid": "Desktop-module__yaRb_a__iconGrid",
});
}}),
"[project]/app/windows10-components/Desktop.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Desktop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/DesktopIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/Window.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Desktop$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/Desktop.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/data/apps.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Desktop({ openWindow, openWindows, closeWindow, minimizeWindow, activeWindow, setActiveWindow }) {
    const [selectedIcon, setSelectedIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [windowZIndexes, setWindowZIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSelecting, setIsSelecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectionStart, setSelectionStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [selectionEnd, setSelectionEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const desktopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize z-indexes for windows
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setWindowZIndexes((prev)=>{
            const newZIndexes = {
                ...prev
            };
            openWindows.forEach((window, index)=>{
                if (!newZIndexes[window.id]) {
                    newZIndexes[window.id] = 100 + index;
                }
            });
            return newZIndexes;
        });
    }, [
        openWindows
    ]);
    const handleIconClick = (e, app)=>{
        e.stopPropagation();
        setSelectedIcon(app.id);
    };
    const handleIconDoubleClick = (app)=>{
        openWindow(app);
    };
    const handleDesktopClick = ()=>{
        setSelectedIcon(null);
        setActiveWindow(null);
    };
    const handleMouseDown = (e)=>{
        // Start selection on desktop background, not on icons or windows
        // Check if click target is the desktop container or its direct children (like iconGrid)
        const target = e.target;
        const isClickingDesktop = target === desktopRef.current || desktopRef.current && desktopRef.current.contains(target);
        // Don't start selection if clicking on an icon
        const isClickingIcon = target.closest('[class*="iconContainer"]') || target.closest('[class*="DesktopIcon"]');
        if (isClickingDesktop && !isClickingIcon) {
            setIsSelecting(true);
            const rect = desktopRef.current.getBoundingClientRect();
            setSelectionStart({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
            setSelectionEnd({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };
    // Mouse move and mouse up handlers are now inline in the useEffect hook
    const focusWindow = (id)=>{
        setActiveWindow(id);
        // Update z-indexes to bring the focused window to the front
        const maxZ = Math.max(...Object.values(windowZIndexes), 100);
        setWindowZIndexes({
            ...windowZIndexes,
            [id]: maxZ + 1
        });
    };
    // Add event listeners for mouse events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isSelecting) return;
        const handleGlobalMouseMove = (e)=>{
            if (desktopRef.current) {
                const rect = desktopRef.current.getBoundingClientRect();
                setSelectionEnd({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };
        const handleGlobalMouseUp = ()=>{
            setIsSelecting(false);
            setSelectionStart({
                x: 0,
                y: 0
            });
            setSelectionEnd({
                x: 0,
                y: 0
            });
        };
        document.addEventListener('mousemove', handleGlobalMouseMove);
        document.addEventListener('mouseup', handleGlobalMouseUp);
        return ()=>{
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, [
        isSelecting
    ]);
    // Calculate selection box dimensions and position
    const selectionStyle = {
        position: 'absolute',
        left: Math.min(selectionStart.x, selectionEnd.x),
        top: Math.min(selectionStart.y, selectionEnd.y),
        width: Math.abs(selectionEnd.x - selectionStart.x),
        height: Math.abs(selectionEnd.y - selectionStart.y),
        border: '1px dashed #0078d7',
        backgroundColor: 'rgba(0, 120, 215, 0.1)',
        pointerEvents: 'none',
        zIndex: 9999
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: desktopRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Desktop$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktop,
        onClick: handleDesktopClick,
        onMouseDown: handleMouseDown,
        children: [
            isSelecting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: selectionStyle
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/Desktop.js",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Desktop$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconGrid,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["desktopApps"].map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$DesktopIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        app: app,
                        isSelected: selectedIcon === app.id,
                        onClick: (e)=>handleIconClick(e, app),
                        onDoubleClick: ()=>handleIconDoubleClick(app)
                    }, app.id, false, {
                        fileName: "[project]/app/windows10-components/Desktop.js",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/Desktop.js",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            openWindows.map((window)=>{
                // Add openWindow function to the window props
                const windowWithOpenWindow = {
                    ...window,
                    openWindow: openWindow
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Window$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    app: windowWithOpenWindow,
                    onClose: ()=>closeWindow(window.id),
                    isActive: activeWindow === window.id,
                    onFocus: ()=>focusWindow(window.id),
                    onMinimize: ()=>minimizeWindow(window.id),
                    zIndex: windowZIndexes[window.id] || 100
                }, window.id, false, {
                    fileName: "[project]/app/windows10-components/Desktop.js",
                    lineNumber: 161,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/Desktop.js",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/Taskbar.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "actionButton": "Taskbar-module__wUmIbG__actionButton",
  "active": "Taskbar-module__wUmIbG__active",
  "activeApp": "Taskbar-module__wUmIbG__activeApp",
  "appIconSmall": "Taskbar-module__wUmIbG__appIconSmall",
  "batteryBar": "Taskbar-module__wUmIbG__batteryBar",
  "batteryBarFill": "Taskbar-module__wUmIbG__batteryBarFill",
  "brightnessSlider": "Taskbar-module__wUmIbG__brightnessSlider",
  "calendar": "Taskbar-module__wUmIbG__calendar",
  "calendarDay": "Taskbar-module__wUmIbG__calendarDay",
  "calendarDayName": "Taskbar-module__wUmIbG__calendarDayName",
  "calendarGrid": "Taskbar-module__wUmIbG__calendarGrid",
  "calendarHeader": "Taskbar-module__wUmIbG__calendarHeader",
  "calendarTitle": "Taskbar-module__wUmIbG__calendarTitle",
  "currentMonth": "Taskbar-module__wUmIbG__currentMonth",
  "date": "Taskbar-module__wUmIbG__date",
  "dateTime": "Taskbar-module__wUmIbG__dateTime",
  "left": "Taskbar-module__wUmIbG__left",
  "minimizedApp": "Taskbar-module__wUmIbG__minimizedApp",
  "otherMonth": "Taskbar-module__wUmIbG__otherMonth",
  "quickSettingIcon": "Taskbar-module__wUmIbG__quickSettingIcon",
  "quickSettingItem": "Taskbar-module__wUmIbG__quickSettingItem",
  "quickSettingItemContent": "Taskbar-module__wUmIbG__quickSettingItemContent",
  "quickSettingItemLabel": "Taskbar-module__wUmIbG__quickSettingItemLabel",
  "quickSettingItemValue": "Taskbar-module__wUmIbG__quickSettingItemValue",
  "quickSettingLabel": "Taskbar-module__wUmIbG__quickSettingLabel",
  "quickSettingRow": "Taskbar-module__wUmIbG__quickSettingRow",
  "quickSettingText": "Taskbar-module__wUmIbG__quickSettingText",
  "quickSettingTile": "Taskbar-module__wUmIbG__quickSettingTile",
  "quickSettingValue": "Taskbar-module__wUmIbG__quickSettingValue",
  "quickSettings": "Taskbar-module__wUmIbG__quickSettings",
  "quickSettingsGrid": "Taskbar-module__wUmIbG__quickSettingsGrid",
  "right": "Taskbar-module__wUmIbG__right",
  "searchContainer": "Taskbar-module__wUmIbG__searchContainer",
  "searchIcon": "Taskbar-module__wUmIbG__searchIcon",
  "searchText": "Taskbar-module__wUmIbG__searchText",
  "showDesktop": "Taskbar-module__wUmIbG__showDesktop",
  "slideUp": "Taskbar-module__wUmIbG__slideUp",
  "startButton": "Taskbar-module__wUmIbG__startButton",
  "statusDot": "Taskbar-module__wUmIbG__statusDot",
  "systemTray": "Taskbar-module__wUmIbG__systemTray",
  "taskbar": "Taskbar-module__wUmIbG__taskbar",
  "taskbarIcon": "Taskbar-module__wUmIbG__taskbarIcon",
  "taskbarIcons": "Taskbar-module__wUmIbG__taskbarIcons",
  "time": "Taskbar-module__wUmIbG__time",
  "today": "Taskbar-module__wUmIbG__today",
  "tooltip": "Taskbar-module__wUmIbG__tooltip",
  "trayIcon": "Taskbar-module__wUmIbG__trayIcon",
  "volumeSlider": "Taskbar-module__wUmIbG__volumeSlider",
  "windowsLogo": "Taskbar-module__wUmIbG__windowsLogo",
});
}}),
"[project]/app/windows10-components/Taskbar.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Taskbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/Taskbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/data/apps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/bluetooth.js [app-ssr] (ecmascript) <export default as Bluetooth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$low$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryLow$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/battery-low.js [app-ssr] (ecmascript) <export default as BatteryLow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
"use client";
;
;
;
;
;
function Taskbar({ toggleStartMenu, startMenuOpen, openWindows, openWindow, focusWindow, minimizedWindows, showQuickSettings, setShowQuickSettings, showCalendar, setShowCalendar }) {
    const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
    const currentDate = new Date().toLocaleDateString();
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredIcon, setHoveredIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [wifiEnabled, setWifiEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(39);
    const [brightness, setBrightness] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    const [bluetoothEnabled, setBluetoothEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [airplaneMode, setAirplaneMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [doNotDisturb, setDoNotDisturb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Brightness control
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Apply brightness filter with minimum 15% for visibility
        const minBrightness = Math.max(brightness, 15);
        document.body.style.filter = `brightness(${minBrightness}%)`;
    }, [
        brightness
    ]);
    // Volume control
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Control all audio/video elements on the page
        const allMedia = document.querySelectorAll('audio, video');
        allMedia.forEach((media)=>{
            if (media.volume !== undefined) {
                media.volume = volume / 100;
            }
        });
    }, [
        volume
    ]);
    // Find apps by ID to open them from the taskbar
    const handleOpenApp = (appId)=>{
        const app = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allApps"].find((app)=>app.id === appId);
        if (app) {
            const existingWindow = openWindows.find((w)=>w.id === app.id);
            if (existingWindow) {
                focusWindow(app.id);
            } else {
                openWindow(app);
            }
        }
    };
    // Check if an app is minimized
    const isAppMinimized = (appId)=>{
        return minimizedWindows.includes(appId);
    };
    const toggleCalendar = ()=>{
        setShowCalendar(!showCalendar);
        if (showQuickSettings) setShowQuickSettings(false);
    };
    const getCurrentDateInfo = ()=>{
        const now = new Date();
        const months = [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık"
        ];
        const days = [
            "Pazar",
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi"
        ];
        return {
            day: now.getDate(),
            month: months[now.getMonth()],
            year: now.getFullYear(),
            dayName: days[now.getDay()]
        };
    };
    const generateCalendar = ()=>{
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startingDayOfWeek = firstDay.getDay();
        const daysInMonth = lastDay.getDate();
        const calendar = [];
        // Add previous month's days
        const prevMonth = new Date(year, month, 0);
        const prevMonthDays = prevMonth.getDate();
        for(let i = startingDayOfWeek - 1; i >= 0; i--){
            calendar.push({
                day: prevMonthDays - i,
                isCurrentMonth: false,
                isToday: false
            });
        }
        // Add current month's days
        for(let i = 1; i <= daysInMonth; i++){
            const isToday = i === now.getDate();
            calendar.push({
                day: i,
                isCurrentMonth: true,
                isToday
            });
        }
        // Add next month's days to complete the grid
        const remainingDays = 42 - calendar.length // 6 rows x 7 days
        ;
        for(let i = 1; i <= remainingDays; i++){
            calendar.push({
                day: i,
                isCurrentMonth: false,
                isToday: false
            });
        }
        return calendar;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taskbar,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].startButton} ${startMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                        onClick: toggleStartMenu,
                        onMouseEnter: ()=>{
                            setShowTooltip("Start");
                            setHoveredIcon("start");
                        },
                        onMouseLeave: ()=>{
                            setShowTooltip(null);
                            setHoveredIcon(null);
                        },
                        style: {
                            backgroundColor: hoveredIcon === "start" ? "rgba(255, 255, 255, 0.1)" : startMenuOpen ? "#0078d7" : "transparent"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].windowsLogo,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "#fff",
                                        d: "M0,0L7.5,1V7.5H0V0z M8.5,1L16,0v7.5H8.5V1z M0,8.5H7.5V15L0,16V8.5z M8.5,8.5H16V16L8.5,15V8.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            showTooltip === "Start" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tooltip,
                                children: "Start"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                lineNumber: 159,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/Taskbar.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/windows10-components/Taskbar.js",
                    lineNumber: 134,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taskbarIcons,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taskbarIcon} ${openWindows.some((w)=>w.id === "file-explorer") ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeApp : ""} ${isAppMinimized("file-explorer") ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].minimizedApp : ""}`,
                            onClick: ()=>handleOpenApp("file-explorer"),
                            onMouseEnter: ()=>{
                                setShowTooltip("Dosya Gezgini");
                                setHoveredIcon("file-explorer");
                            },
                            onMouseLeave: ()=>{
                                setShowTooltip(null);
                                setHoveredIcon(null);
                            },
                            style: {
                                backgroundColor: hoveredIcon === "file-explorer" ? "rgba(255, 255, 255, 0.1)" : "transparent"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                    size: 26,
                                    color: "#0078d7"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                showTooltip === "Dosya Gezgini" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tooltip,
                                    children: "Dosya Gezgini"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 186,
                                    columnNumber: 49
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/Taskbar.js",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        openWindows.map((window)=>{
                            // Skip if the app is already in the pinned section
                            if ([
                                "file-explorer"
                            ].includes(window.id)) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taskbarIcon} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeApp} ${isAppMinimized(window.id) ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].minimizedApp : ""}`,
                                onClick: ()=>focusWindow(window.id),
                                onMouseEnter: ()=>{
                                    setShowTooltip(window.name);
                                    setHoveredIcon(window.id);
                                },
                                onMouseLeave: ()=>{
                                    setShowTooltip(null);
                                    setHoveredIcon(null);
                                },
                                style: {
                                    backgroundColor: hoveredIcon === window.id ? "rgba(255, 255, 255, 0.1)" : "transparent"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appIconSmall,
                                        children: window.icon
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this),
                                    showTooltip === window.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tooltip,
                                        children: window.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                        lineNumber: 214,
                                        columnNumber: 49
                                    }, this)
                                ]
                            }, window.id, true, {
                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                lineNumber: 195,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/Taskbar.js",
                    lineNumber: 166,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].systemTray,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trayIcon,
                                onClick: ()=>{
                                    setShowQuickSettings(!showQuickSettings);
                                    if (showCalendar) setShowCalendar(false);
                                },
                                onMouseEnter: ()=>{
                                    setShowTooltip("Ağ ve Ses");
                                    setHoveredIcon("network");
                                },
                                onMouseLeave: ()=>{
                                    setShowTooltip(null);
                                    setHoveredIcon(null);
                                },
                                style: {
                                    backgroundColor: hoveredIcon === "network" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "4px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                        size: 24,
                                        color: wifiEnabled ? "#4CAF50" : "#999"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        size: 24,
                                        color: "#fff"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    showTooltip === "Ağ ve Ses" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tooltip,
                                        children: "Ağ ve Ses"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                        lineNumber: 247,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/Taskbar.js",
                            lineNumber: 222,
                            columnNumber: 9
                        }, this),
                        showQuickSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                                    onClick: ()=>setShowQuickSettings(false),
                                    style: {
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        zIndex: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettings,
                                    onClick: (e)=>e.stopPropagation(),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingsGrid,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingTile,
                                                onClick: ()=>{
                                                    const newWifiEnabled = !wifiEnabled;
                                                    setWifiEnabled(newWifiEnabled);
                                                    if (newWifiEnabled && airplaneMode) {
                                                        setAirplaneMode(false);
                                                    }
                                                },
                                                style: {
                                                    border: `2px solid ${wifiEnabled ? "#4CAF50" : "rgba(255,255,255,0.1)"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingIcon,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                            size: 24,
                                                            color: wifiEnabled ? "#4CAF50" : "#999"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/windows10-components/Taskbar.js",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 279,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingText,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingLabel,
                                                                children: "Wi-Fi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 283,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingValue,
                                                                children: wifiEnabled ? "KOCHAN" : "Kapalı"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 284,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 282,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusDot} ${wifiEnabled ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 286,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingTile,
                                                onClick: ()=>{
                                                    const newBluetoothEnabled = !bluetoothEnabled;
                                                    setBluetoothEnabled(newBluetoothEnabled);
                                                    if (newBluetoothEnabled && airplaneMode) {
                                                        setAirplaneMode(false);
                                                    }
                                                },
                                                style: {
                                                    border: `2px solid ${bluetoothEnabled ? "#0078D7" : "rgba(255,255,255,0.1)"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingIcon,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                                            size: 24,
                                                            color: bluetoothEnabled ? "#0078D7" : "#999"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/windows10-components/Taskbar.js",
                                                            lineNumber: 302,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingText,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingLabel,
                                                                children: "Bluetooth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 305,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingValue,
                                                                children: bluetoothEnabled ? "Açık" : "Kapalı"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 306,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 304,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusDot} ${bluetoothEnabled ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 308,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$low$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryLow$3e$__["BatteryLow"], {
                                                        size: 20,
                                                        color: "#FF9800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 313,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemContent,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemLabel,
                                                                children: "Pil"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 315,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemValue,
                                                                children: "69%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 316,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 314,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].batteryBar,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].batteryBarFill,
                                                            style: {
                                                                width: "69%"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/windows10-components/Taskbar.js",
                                                            lineNumber: 319,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 318,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                lineNumber: 312,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                        size: 20,
                                                        color: "#9E62E8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 325,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemContent,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemLabel,
                                                                children: "Ses"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 327,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemValue,
                                                                children: [
                                                                    volume,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 328,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 326,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "100",
                                                        value: volume,
                                                        onChange: (e)=>setVolume(Number(e.target.value)),
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].volumeSlider
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 330,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                        size: 20,
                                                        color: "#ff9800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 342,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemContent,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemLabel,
                                                                children: "Parlaklık"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 344,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemValue,
                                                                children: [
                                                                    brightness,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                                lineNumber: 345,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 343,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "100",
                                                        value: brightness,
                                                        onChange: (e)=>{
                                                            const newBrightness = Number(e.target.value);
                                                            setBrightness(newBrightness);
                                                            // Apply brightness filter with minimum 15% for visibility
                                                            const minBrightness = Math.max(newBrightness, 15);
                                                            document.body.style.filter = `brightness(${minBrightness}%)`;
                                                        },
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brightnessSlider
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 347,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                                onClick: ()=>{
                                                    setAirplaneMode(!airplaneMode);
                                                    if (!airplaneMode) {
                                                        setWifiEnabled(false);
                                                        setBluetoothEnabled(false);
                                                    } else {
                                                        setWifiEnabled(true);
                                                    }
                                                },
                                                style: {
                                                    backgroundColor: airplaneMode ? "rgba(0, 120, 215, 0.3)" : "rgba(255, 255, 255, 0.05)",
                                                    border: `2px solid ${airplaneMode ? "#0078D7" : "transparent"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                                                        size: 20,
                                                        color: airplaneMode ? "#0078D7" : "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 380,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: airplaneMode ? "Uçak Modu" : "Uçak Modu Kapalı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 381,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                                onClick: ()=>setDoNotDisturb(!doNotDisturb),
                                                style: {
                                                    backgroundColor: doNotDisturb ? "rgba(255, 152, 0, 0.3)" : "rgba(255, 255, 255, 0.05)",
                                                    border: `2px solid ${doNotDisturb ? "#FF9800" : "transparent"}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                        size: 20,
                                                        color: doNotDisturb ? "#FF9800" : "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 393,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: doNotDisturb ? "Rahatsız Etme" : "Rahatsız Etme Kapalı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 394,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateTime,
                            onClick: toggleCalendar,
                            onMouseEnter: ()=>{
                                setShowTooltip("Tarih ve saat");
                                setHoveredIcon("datetime");
                            },
                            onMouseLeave: ()=>{
                                setShowTooltip(null);
                                setHoveredIcon(null);
                            },
                            style: {
                                backgroundColor: hoveredIcon === "datetime" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                                cursor: "pointer"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].time,
                                    children: currentTime
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 417,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].date,
                                    children: currentDate
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 418,
                                    columnNumber: 11
                                }, this),
                                showTooltip === "Tarih ve saat" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tooltip,
                                    children: "Tarih ve saat"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 419,
                                    columnNumber: 47
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/Taskbar.js",
                            lineNumber: 401,
                            columnNumber: 9
                        }, this),
                        showCalendar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                                    onClick: ()=>setShowCalendar(false),
                                    style: {
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        zIndex: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendar,
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarHeader,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarTitle,
                                                children: [
                                                    getCurrentDateInfo().day,
                                                    " ",
                                                    getCurrentDateInfo().month,
                                                    " ",
                                                    getCurrentDateInfo().dayName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                                lineNumber: 438,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/Taskbar.js",
                                            lineNumber: 437,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarGrid,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarDayName,
                                                    children: "Pt"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                                    lineNumber: 441,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarDayName,
                                                    children: "Sa"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                                    lineNumber: 442,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarDayName,
                                                    children: "Ça"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                                    lineNumber: 443,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarDayName,
                                                    children: "Pe"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                                    lineNumber: 444,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarDayName,
                                                    children: "Cu"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                                    lineNumber: 445,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarDayName,
                                                    children: "Ct"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                                    lineNumber: 446,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarDayName,
                                                    children: "Pa"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                                    lineNumber: 447,
                                                    columnNumber: 15
                                                }, this),
                                                generateCalendar().map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarDay} ${day.isCurrentMonth ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].currentMonth : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].otherMonth} ${day.isToday ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].today : ""}`,
                                                        children: day.day
                                                    }, index, false, {
                                                        fileName: "[project]/app/windows10-components/Taskbar.js",
                                                        lineNumber: 449,
                                                        columnNumber: 17
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/windows10-components/Taskbar.js",
                                            lineNumber: 440,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/windows10-components/Taskbar.js",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].showDesktop,
                            onMouseEnter: ()=>{
                                setShowTooltip("Show desktop");
                                setHoveredIcon("showdesktop");
                            },
                            onMouseLeave: ()=>{
                                setShowTooltip(null);
                                setHoveredIcon(null);
                            },
                            style: {
                                backgroundColor: hoveredIcon === "showdesktop" ? "rgba(255, 255, 255, 0.1)" : "transparent"
                            },
                            children: showTooltip === "Show desktop" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tooltip,
                                children: "Show desktop"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/Taskbar.js",
                                lineNumber: 475,
                                columnNumber: 46
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/Taskbar.js",
                            lineNumber: 461,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/Taskbar.js",
                    lineNumber: 221,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/windows10-components/Taskbar.js",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}}),
"[project]/app/windows10-components/StartMenu.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "allApps": "StartMenu-module__J-tYDW__allApps",
  "appGrid": "StartMenu-module__J-tYDW__appGrid",
  "appIcon": "StartMenu-module__J-tYDW__appIcon",
  "appList": "StartMenu-module__J-tYDW__appList",
  "appListIcon": "StartMenu-module__J-tYDW__appListIcon",
  "appListItem": "StartMenu-module__J-tYDW__appListItem",
  "appListName": "StartMenu-module__J-tYDW__appListName",
  "appName": "StartMenu-module__J-tYDW__appName",
  "appTile": "StartMenu-module__J-tYDW__appTile",
  "footer": "StartMenu-module__J-tYDW__footer",
  "pinnedApps": "StartMenu-module__J-tYDW__pinnedApps",
  "powerButton": "StartMenu-module__J-tYDW__powerButton",
  "searchBar": "StartMenu-module__J-tYDW__searchBar",
  "startMenu": "StartMenu-module__J-tYDW__startMenu",
  "userProfile": "StartMenu-module__J-tYDW__userProfile",
});
}}),
"[project]/app/windows10-components/StartMenu.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>StartMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/StartMenu.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/data/apps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/power.js [app-ssr] (ecmascript) <export default as Power>");
"use client";
;
;
;
;
;
function StartMenu({ openWindow, onLogout }) {
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };
    const handleAppClick = (e, app)=>{
        e.stopPropagation();
        openWindow(app);
    };
    const handleLogout = (e)=>{
        e.stopPropagation();
        onLogout();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].startMenu,
        initial: "hidden",
        animate: "visible",
        variants: menuVariants,
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/StartMenu.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Buraya yazarak arayın"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/StartMenu.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/StartMenu.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pinnedApps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Sabitlenmiş"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/StartMenu.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appGrid,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allApps"].filter((app)=>!__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["desktopApps"].some((desktopApp)=>desktopApp.id === app.id)).slice(0, 12).map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appTile,
                                onClick: (e)=>handleAppClick(e, app),
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appIcon,
                                        children: app.icon
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/StartMenu.js",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appName,
                                        children: app.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/StartMenu.js",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, app.id, true, {
                                fileName: "[project]/app/windows10-components/StartMenu.js",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/StartMenu.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/StartMenu.js",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].allApps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Tüm Uygulamalar"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/StartMenu.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appList,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$apps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allApps"].map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appListItem,
                                onClick: (e)=>handleAppClick(e, app),
                                whileHover: {
                                    backgroundColor: "#f0f0f0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appListIcon,
                                        children: app.icon
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/StartMenu.js",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appListName,
                                        children: app.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/StartMenu.js",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, app.id, true, {
                                fileName: "[project]/app/windows10-components/StartMenu.js",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/StartMenu.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/StartMenu.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/StartMenu.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "melihkochan"
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/StartMenu.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/windows10-components/StartMenu.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].powerButton,
                        onClick: handleLogout,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/StartMenu.js",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/StartMenu.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/StartMenu.js",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/StartMenu.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/WindowsLogo.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>WindowsLogo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function WindowsLogo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "300",
            height: "300",
            viewBox: "0 0 88 88",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0,12.402,35.687,7.215v34.63H0ZM40,6.906,88,0V41.527H40ZM0,46.628H35.687v34.63L0,75.997ZM40,46.628H88v41.527L40,81.379Z",
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/WindowsLogo.js",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/windows10-components/WindowsLogo.js",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/windows10-components/WindowsLogo.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/LoginScreen.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "actionButton": "LoginScreen-module__-tXg7a__actionButton",
  "active": "LoginScreen-module__-tXg7a__active",
  "batteryBar": "LoginScreen-module__-tXg7a__batteryBar",
  "batteryBarFill": "LoginScreen-module__-tXg7a__batteryBarFill",
  "brightnessSlider": "LoginScreen-module__-tXg7a__brightnessSlider",
  "centerAvatar": "LoginScreen-module__-tXg7a__centerAvatar",
  "centerContent": "LoginScreen-module__-tXg7a__centerContent",
  "centerName": "LoginScreen-module__-tXg7a__centerName",
  "fadeOut": "LoginScreen-module__-tXg7a__fadeOut",
  "loader": "LoginScreen-module__-tXg7a__loader",
  "loginScreen": "LoginScreen-module__-tXg7a__loginScreen",
  "overlay": "LoginScreen-module__-tXg7a__overlay",
  "passwordContainer": "LoginScreen-module__-tXg7a__passwordContainer",
  "passwordForm": "LoginScreen-module__-tXg7a__passwordForm",
  "passwordInput": "LoginScreen-module__-tXg7a__passwordInput",
  "quickSettingIcon": "LoginScreen-module__-tXg7a__quickSettingIcon",
  "quickSettingItem": "LoginScreen-module__-tXg7a__quickSettingItem",
  "quickSettingItemContent": "LoginScreen-module__-tXg7a__quickSettingItemContent",
  "quickSettingItemLabel": "LoginScreen-module__-tXg7a__quickSettingItemLabel",
  "quickSettingItemValue": "LoginScreen-module__-tXg7a__quickSettingItemValue",
  "quickSettingLabel": "LoginScreen-module__-tXg7a__quickSettingLabel",
  "quickSettingRow": "LoginScreen-module__-tXg7a__quickSettingRow",
  "quickSettingText": "LoginScreen-module__-tXg7a__quickSettingText",
  "quickSettingTile": "LoginScreen-module__-tXg7a__quickSettingTile",
  "quickSettingValue": "LoginScreen-module__-tXg7a__quickSettingValue",
  "quickSettings": "LoginScreen-module__-tXg7a__quickSettings",
  "quickSettingsGrid": "LoginScreen-module__-tXg7a__quickSettingsGrid",
  "slideUp": "LoginScreen-module__-tXg7a__slideUp",
  "spin": "LoginScreen-module__-tXg7a__spin",
  "statusDot": "LoginScreen-module__-tXg7a__statusDot",
  "submitButton": "LoginScreen-module__-tXg7a__submitButton",
  "systemIcon": "LoginScreen-module__-tXg7a__systemIcon",
  "systemIcons": "LoginScreen-module__-tXg7a__systemIcons",
  "volumeSlider": "LoginScreen-module__-tXg7a__volumeSlider",
});
}}),
"[project]/app/windows10-components/LoginScreen.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LoginScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/LoginScreen.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/power.js [app-ssr] (ecmascript) <export default as Power>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-ssr] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/bluetooth.js [app-ssr] (ecmascript) <export default as Bluetooth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$low$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryLow$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/battery-low.js [app-ssr] (ecmascript) <export default as BatteryLow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
"use client";
;
;
;
;
function LoginScreen({ onLogin, onLock }) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fadeOut, setFadeOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQuickSettings, setShowQuickSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wifiEnabled, setWifiEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(39);
    const [brightness, setBrightness] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    const [bluetoothEnabled, setBluetoothEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [airplaneMode, setAirplaneMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [doNotDisturb, setDoNotDisturb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsLoading(true);
        // Simulate login after 2 seconds
        setTimeout(()=>{
            setFadeOut(true);
            // Store login state in localStorage
            localStorage.setItem("signin", "true");
            // Wait for fade out animation to complete
            setTimeout(()=>{
                onLogin();
            }, 500);
        }, 2000);
    };
    // Volume control
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach((audio)=>{
            audio.volume = volume / 100;
        });
    }, [
        volume
    ]);
    // Brightness control
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Apply brightness filter with minimum 15% for visibility
        const minBrightness = Math.max(brightness, 15);
        document.body.style.filter = `brightness(${minBrightness}%)`;
    }, [
        brightness
    ]);
    const toggleAirplaneMode = ()=>{
        const newAirplaneMode = !airplaneMode;
        setAirplaneMode(newAirplaneMode);
        if (newAirplaneMode) {
            setWifiEnabled(false);
            setBluetoothEnabled(false);
        }
    };
    const toggleWifi = ()=>{
        const newWifiEnabled = !wifiEnabled;
        setWifiEnabled(newWifiEnabled);
        if (newWifiEnabled && airplaneMode) {
            setAirplaneMode(false);
        }
    };
    const toggleBluetooth = ()=>{
        const newBluetoothEnabled = !bluetoothEnabled;
        setBluetoothEnabled(newBluetoothEnabled);
        if (newBluetoothEnabled && airplaneMode) {
            setAirplaneMode(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginScreen} ${fadeOut ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeOut : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerAvatar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            size: 60,
                            color: "white"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LoginScreen.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerName,
                        children: "melihkochan"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LoginScreen.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].passwordForm,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                            disabled: isLoading,
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loader
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LoginScreen.js",
                                lineNumber: 87,
                                columnNumber: 26
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/windows10-components/LoginScreen.js",
                                lineNumber: 87,
                                columnNumber: 66
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LoginScreen.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/LoginScreen.js",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].systemIcons,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].systemIcon,
                        onClick: (e)=>{
                            e.stopPropagation();
                            setShowQuickSettings(!showQuickSettings);
                        },
                        title: "İnternet",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                            size: 18,
                            color: "white"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LoginScreen.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].systemIcon,
                        onClick: ()=>{
                            if (onLock) {
                                onLock();
                            }
                        },
                        title: "Kilitle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                            size: 18,
                            color: "white"
                        }, void 0, false, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LoginScreen.js",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/LoginScreen.js",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            showQuickSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettings,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingsGrid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingTile,
                            onClick: toggleWifi,
                            style: {
                                border: `2px solid ${wifiEnabled ? "#4CAF50" : "rgba(255,255,255,0.1)"}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingIcon,
                                    children: wifiEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                        size: 24,
                                        color: "#4CAF50"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/LoginScreen.js",
                                        lineNumber: 127,
                                        columnNumber: 32
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                        size: 24,
                                        color: "#999"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/LoginScreen.js",
                                        lineNumber: 127,
                                        columnNumber: 69
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingText,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingLabel,
                                            children: "Wi-Fi"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingValue,
                                            children: wifiEnabled ? "KOCHAN" : "Kapalı"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusDot} ${wifiEnabled ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingTile,
                            onClick: toggleBluetooth,
                            style: {
                                border: `2px solid ${bluetoothEnabled ? "#0078D7" : "rgba(255,255,255,0.1)"}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                        size: 24,
                                        color: bluetoothEnabled ? "#0078D7" : "#999"
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/LoginScreen.js",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingText,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingLabel,
                                            children: "Bluetooth"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingValue,
                                            children: bluetoothEnabled ? "Açık" : "Kapalı"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusDot} ${bluetoothEnabled ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2d$low$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BatteryLow$3e$__["BatteryLow"], {
                                    size: 20,
                                    color: "#FF9800"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemLabel,
                                            children: "Pil"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemValue,
                                            children: "69%"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].batteryBar,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].batteryBarFill,
                                        style: {
                                            width: "69%"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/windows10-components/LoginScreen.js",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    size: 20,
                                    color: "#9E62E8"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemLabel,
                                            children: "Ses"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemValue,
                                            children: [
                                                volume,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    value: volume,
                                    onChange: (e)=>setVolume(Number(e.target.value)),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].volumeSlider
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    size: 20,
                                    color: "#ff9800"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemLabel,
                                            children: "Parlaklık"
                                        }, void 0, false, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickSettingItemValue,
                                            children: [
                                                brightness,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    value: brightness,
                                    onChange: (e)=>{
                                        const newBrightness = Number(e.target.value);
                                        setBrightness(newBrightness);
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brightnessSlider
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                            onClick: toggleAirplaneMode,
                            style: {
                                backgroundColor: airplaneMode ? "rgba(0, 120, 215, 0.3)" : "rgba(255, 255, 255, 0.05)",
                                border: `2px solid ${airplaneMode ? "#0078D7" : "transparent"}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                                    size: 20,
                                    color: airplaneMode ? "#0078D7" : "white"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: airplaneMode ? "Uçak Modu" : "Uçak Modu Kapalı"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                            onClick: ()=>setDoNotDisturb(!doNotDisturb),
                            style: {
                                backgroundColor: doNotDisturb ? "rgba(255, 152, 0, 0.3)" : "rgba(255, 255, 255, 0.05)",
                                border: `2px solid ${doNotDisturb ? "#FF9800" : "transparent"}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    size: 20,
                                    color: doNotDisturb ? "#FF9800" : "white"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: doNotDisturb ? "Rahatsız Etme" : "Rahatsız Etme Kapalı"
                                }, void 0, false, {
                                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/windows10-components/LoginScreen.js",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/windows10-components/LoginScreen.js",
                    lineNumber: 119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/LoginScreen.js",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            showQuickSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                onClick: ()=>setShowQuickSettings(false)
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/LoginScreen.js",
                lineNumber: 232,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/LoginScreen.js",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/windows10-components/LockScreen.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "bounce": "LockScreen-module__M-350q__bounce",
  "date": "LockScreen-module__M-350q__date",
  "fadeIn": "LockScreen-module__M-350q__fadeIn",
  "hintText": "LockScreen-module__M-350q__hintText",
  "lockIcon": "LockScreen-module__M-350q__lockIcon",
  "lockScreen": "LockScreen-module__M-350q__lockScreen",
  "lockScreenContent": "LockScreen-module__M-350q__lockScreenContent",
  "lockScreenHint": "LockScreen-module__M-350q__lockScreenHint",
  "overlay": "LockScreen-module__M-350q__overlay",
  "time": "LockScreen-module__M-350q__time",
});
}}),
"[project]/app/windows10-components/LockScreen.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LockScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/windows10-components/LockScreen.module.css [app-client] (css module)");
"use client";
;
;
;
function LockScreen({ onUnlock }) {
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [backgroundImage, setBackgroundImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            const now = new Date();
            setCurrentTime(now);
            setCurrentDate(now);
        }, 1000);
        return ()=>clearInterval(timer);
    }, []);
    // Pick a random image from public/images (1.jpg to 6.jpg)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const randomImageNumber = Math.floor(Math.random() * 6) + 1;
        setBackgroundImage(`/images/${randomImageNumber}.jpg`);
    }, []);
    const formatTime = (date)=>{
        return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const formatDate = (date)=>{
        const days = [
            "Pazar",
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi"
        ];
        const months = [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık"
        ];
        return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lockScreen,
        onClick: onUnlock,
        style: {
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
            }, void 0, false, {
                fileName: "[project]/app/windows10-components/LockScreen.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lockScreenContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].time,
                        children: formatTime(currentTime)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LockScreen.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].date,
                        children: formatDate(currentDate)
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LockScreen.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/LockScreen.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lockScreenHint,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lockIcon,
                        children: "🔒"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LockScreen.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hintText,
                        children: "Kilidi açmak için tıklayın"
                    }, void 0, false, {
                        fileName: "[project]/app/windows10-components/LockScreen.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/windows10-components/LockScreen.js",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/windows10-components/LockScreen.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/page.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "fadeOut": "page-module__E0kJGG__fadeOut",
  "loaderOverlay": "page-module__E0kJGG__loaderOverlay",
  "main": "page-module__E0kJGG__main",
});
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Desktop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/Desktop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/Taskbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/StartMenu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$WindowsLogo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/WindowsLogo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/LoginScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/windows10-components/LockScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/page.module.css [app-client] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    const [isLockScreenVisible, setIsLockScreenVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startMenuOpen, setStartMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openWindows, setOpenWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeWindow, setActiveWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [minimizedWindows, setMinimizedWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleUnlock = ()=>{
        setIsLockScreenVisible(false);
    };
    const handleLogin = ()=>{
        setIsLoggedIn(true);
        localStorage.setItem("signin", "true");
    };
    const handleLogout = ()=>{
        localStorage.removeItem("signin");
        setIsLockScreenVisible(true);
        setIsLoggedIn(false);
    };
    const handleLock = ()=>{
        setIsLockScreenVisible(true);
    };
    const toggleStartMenu = ()=>{
        setStartMenuOpen(!startMenuOpen);
    };
    const openWindow = (app)=>{
        if (minimizedWindows.includes(app.id)) {
            setMinimizedWindows(minimizedWindows.filter((id)=>id !== app.id));
            setActiveWindow(app.id);
            return;
        }
        if (!openWindows.find((window)=>window.id === app.id)) {
            setOpenWindows([
                ...openWindows,
                app
            ]);
            setActiveWindow(app.id);
        } else {
            focusWindow(app.id);
        }
    };
    const closeWindow = (id)=>{
        setOpenWindows(openWindows.filter((window)=>window.id !== id));
        setMinimizedWindows(minimizedWindows.filter((windowId)=>windowId !== id));
        if (activeWindow === id) {
            const remainingWindows = openWindows.filter((window)=>window.id !== id && !minimizedWindows.includes(window.id));
            setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1].id : null);
        }
    };
    const focusWindow = (id)=>{
        if (!id) return;
        if (minimizedWindows.includes(id)) {
            setMinimizedWindows(minimizedWindows.filter((windowId)=>windowId !== id));
        }
        setActiveWindow(id);
    };
    const minimizeWindow = (id)=>{
        if (!id) return;
        if (!minimizedWindows.includes(id)) {
            setMinimizedWindows([
                ...minimizedWindows,
                id
            ]);
        }
        if (activeWindow === id) {
            const remainingWindows = openWindows.filter((window)=>window.id !== id && !minimizedWindows.includes(window.id));
            setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1].id : null);
        }
    };
    const [showQuickSettings, setShowQuickSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCalendar, setShowCalendar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDesktopClick = ()=>{
        if (startMenuOpen) {
            setStartMenuOpen(false);
        }
        if (showQuickSettings) {
            setShowQuickSettings(false);
        }
        if (showCalendar) {
            setShowCalendar(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isLockScreenVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LockScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onUnlock: handleUnlock
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 108,
            columnNumber: 9
        }, this) : isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            ref: contentRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
            onClick: handleDesktopClick,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$WindowsLogo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Desktop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        openWindow: openWindow,
                        openWindows: openWindows,
                        closeWindow: closeWindow,
                        activeWindow: activeWindow,
                        setActiveWindow: setActiveWindow,
                        minimizeWindow: minimizeWindow
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 13
                    }, this),
                    startMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$StartMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        openWindow: (app)=>{
                            openWindow(app);
                            setStartMenuOpen(false);
                        },
                        onLogout: handleLogout
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$Taskbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        toggleStartMenu: toggleStartMenu,
                        startMenuOpen: startMenuOpen,
                        openWindows: openWindows,
                        openWindow: openWindow,
                        focusWindow: focusWindow,
                        minimizedWindows: minimizedWindows,
                        showQuickSettings: showQuickSettings,
                        setShowQuickSettings: setShowQuickSettings,
                        showCalendar: showCalendar,
                        setShowCalendar: setShowCalendar
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 134,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 110,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$windows10$2d$components$2f$LoginScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onLogin: handleLogin,
            onLock: handleLock
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 149,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_c95c29._.js.map