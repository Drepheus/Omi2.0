(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/Omi-AI-1/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+functions-js@2.81.1/node_modules/@supabase/functions-js/dist/module/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFetch",
    ()=>resolveFetch
]);
const resolveFetch = (customFetch)=>{
    if (customFetch) {
        return (...args)=>customFetch(...args);
    }
    return (...args)=>fetch(...args);
}; //# sourceMappingURL=helper.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+functions-js@2.81.1/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionRegion",
    ()=>FunctionRegion,
    "FunctionsError",
    ()=>FunctionsError,
    "FunctionsFetchError",
    ()=>FunctionsFetchError,
    "FunctionsHttpError",
    ()=>FunctionsHttpError,
    "FunctionsRelayError",
    ()=>FunctionsRelayError
]);
class FunctionsError extends Error {
    constructor(message, name = 'FunctionsError', context){
        super(message);
        this.name = name;
        this.context = context;
    }
}
class FunctionsFetchError extends FunctionsError {
    constructor(context){
        super('Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
    }
}
class FunctionsRelayError extends FunctionsError {
    constructor(context){
        super('Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
    }
}
class FunctionsHttpError extends FunctionsError {
    constructor(context){
        super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
    }
}
var FunctionRegion;
(function(FunctionRegion) {
    FunctionRegion["Any"] = "any";
    FunctionRegion["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion["ApSouth1"] = "ap-south-1";
    FunctionRegion["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion["CaCentral1"] = "ca-central-1";
    FunctionRegion["EuCentral1"] = "eu-central-1";
    FunctionRegion["EuWest1"] = "eu-west-1";
    FunctionRegion["EuWest2"] = "eu-west-2";
    FunctionRegion["EuWest3"] = "eu-west-3";
    FunctionRegion["SaEast1"] = "sa-east-1";
    FunctionRegion["UsEast1"] = "us-east-1";
    FunctionRegion["UsWest1"] = "us-west-1";
    FunctionRegion["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {})); //# sourceMappingURL=types.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+functions-js@2.81.1/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionsClient",
    ()=>FunctionsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+functions-js@2.81.1/node_modules/@supabase/functions-js/dist/module/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+functions-js@2.81.1/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)");
;
;
;
class FunctionsClient {
    constructor(url, { headers = {}, customFetch, region = __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionRegion"].Any } = {}){
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFetch"])(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     */ invoke(functionName_1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*(functionName, options = {}) {
            var _a;
            let timeoutId;
            let timeoutController;
            try {
                const { headers, method, body: functionArgs, signal, timeout } = options;
                let _headers = {};
                let { region } = options;
                if (!region) {
                    region = this.region;
                }
                // Add region as query parameter using URL API
                const url = new URL(`${this.url}/${functionName}`);
                if (region && region !== 'any') {
                    _headers['x-region'] = region;
                    url.searchParams.set('forceFunctionRegion', region);
                }
                let body;
                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type') || !headers)) {
                    if (typeof Blob !== 'undefined' && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers['Content-Type'] = 'application/octet-stream';
                        body = functionArgs;
                    } else if (typeof functionArgs === 'string') {
                        // plain string
                        _headers['Content-Type'] = 'text/plain';
                        body = functionArgs;
                    } else if (typeof FormData !== 'undefined' && functionArgs instanceof FormData) {
                        // don't set content-type headers
                        // Request will automatically add the right boundary value
                        body = functionArgs;
                    } else {
                        // default, assume this is JSON
                        _headers['Content-Type'] = 'application/json';
                        body = JSON.stringify(functionArgs);
                    }
                } else {
                    // if the Content-Type was supplied, simply set the body
                    body = functionArgs;
                }
                // Handle timeout by creating an AbortController
                let effectiveSignal = signal;
                if (timeout) {
                    timeoutController = new AbortController();
                    timeoutId = setTimeout(()=>timeoutController.abort(), timeout);
                    // If user provided their own signal, we need to respect both
                    if (signal) {
                        effectiveSignal = timeoutController.signal;
                        // If the user's signal is aborted, abort our timeout controller too
                        signal.addEventListener('abort', ()=>timeoutController.abort());
                    } else {
                        effectiveSignal = timeoutController.signal;
                    }
                }
                const response = yield this.fetch(url.toString(), {
                    method: method || 'POST',
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body,
                    signal: effectiveSignal
                }).catch((fetchError)=>{
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsFetchError"](fetchError);
                });
                const isRelayError = response.headers.get('x-relay-error');
                if (isRelayError && isRelayError === 'true') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsRelayError"](response);
                }
                if (!response.ok) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsHttpError"](response);
                }
                let responseType = ((_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain').split(';')[0].trim();
                let data;
                if (responseType === 'application/json') {
                    data = yield response.json();
                } else if (responseType === 'application/octet-stream' || responseType === 'application/pdf') {
                    data = yield response.blob();
                } else if (responseType === 'text/event-stream') {
                    data = response;
                } else if (responseType === 'multipart/form-data') {
                    data = yield response.formData();
                } else {
                    // default to text
                    data = yield response.text();
                }
                return {
                    data,
                    error: null,
                    response
                };
            } catch (error) {
                return {
                    data: null,
                    error,
                    response: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsHttpError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsRelayError"] ? error.context : undefined
                };
            } finally{
                // Clear the timeout if it was set
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            }
        });
    }
} //# sourceMappingURL=FunctionsClient.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Error format
 *
 * {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
 */ class PostgrestError extends Error {
    constructor(context){
        super(context.message);
        this.name = 'PostgrestError';
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
}
exports.default = PostgrestError; //# sourceMappingURL=PostgrestError.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestError_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-client] (ecmascript)"));
class PostgrestBuilder {
    constructor(builder){
        var _a, _b;
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = new Headers(builder.headers);
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = (_a = builder.shouldThrowOnError) !== null && _a !== void 0 ? _a : false;
        this.signal = builder.signal;
        this.isMaybeSingle = (_b = builder.isMaybeSingle) !== null && _b !== void 0 ? _b : false;
        if (builder.fetch) {
            this.fetch = builder.fetch;
        } else {
            this.fetch = fetch;
        }
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Set an HTTP header for the request.
     */ setHeader(name, value) {
        this.headers = new Headers(this.headers);
        this.headers.set(name, value);
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) {
        // skip
        } else if ([
            'GET',
            'HEAD'
        ].includes(this.method)) {
            this.headers.set('Accept-Profile', this.schema);
        } else {
            this.headers.set('Content-Profile', this.schema);
        }
        if (this.method !== 'GET' && this.method !== 'HEAD') {
            this.headers.set('Content-Type', 'application/json');
        }
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res)=>{
            var _a, _b, _c, _d;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== 'HEAD') {
                    const body = await res.text();
                    if (body === '') {
                    // Prefer: return=minimal
                    } else if (this.headers.get('Accept') === 'text/csv') {
                        data = body;
                    } else if (this.headers.get('Accept') && ((_a = this.headers.get('Accept')) === null || _a === void 0 ? void 0 : _a.includes('application/vnd.pgrst.plan+text'))) {
                        data = body;
                    } else {
                        data = JSON.parse(body);
                    }
                }
                const countHeader = (_b = this.headers.get('Prefer')) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
                const contentRange = (_c = res.headers.get('content-range')) === null || _c === void 0 ? void 0 : _c.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                    count = parseInt(contentRange[1]);
                }
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === 'GET' && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: 'PGRST116',
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: 'JSON object requested, multiple (or no) rows returned'
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = 'Not Acceptable';
                    } else if (data.length === 1) {
                        data = data[0];
                    } else {
                        data = null;
                    }
                }
            } else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = 'OK';
                    }
                } catch (_e) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === '') {
                        status = 204;
                        statusText = 'No Content';
                    } else {
                        error = {
                            message: body
                        };
                    }
                }
                if (error && this.isMaybeSingle && ((_d = error === null || error === void 0 ? void 0 : error.details) === null || _d === void 0 ? void 0 : _d.includes('0 rows'))) {
                    error = null;
                    status = 200;
                    statusText = 'OK';
                }
                if (error && this.shouldThrowOnError) {
                    throw new PostgrestError_1.default(error);
                }
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) {
            res = res.catch((fetchError)=>{
                var _a, _b, _c;
                return {
                    error: {
                        message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                        details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ''}`,
                        hint: '',
                        code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ''}`
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ''
                };
            });
        }
        return res.then(onfulfilled, onrejected);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        /* istanbul ignore next */ return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */ overrideTypes() {
        return this;
    }
}
exports.default = PostgrestBuilder; //# sourceMappingURL=PostgrestBuilder.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-client] (ecmascript)"));
class PostgrestTransformBuilder extends PostgrestBuilder_1.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */ select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        this.headers.append('Prefer', 'return=representation');
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : 'order';
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}${nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === 'undefined' ? 'offset' : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */ single() {
        this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */ maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === 'GET') {
            this.headers.set('Accept', 'application/json');
        } else {
            this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        }
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */ csv() {
        this.headers.set('Accept', 'text/csv');
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */ geojson() {
        this.headers.set('Accept', 'application/geo+json');
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */ explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = 'text' } = {}) {
        var _a;
        const options = [
            analyze ? 'analyze' : null,
            verbose ? 'verbose' : null,
            settings ? 'settings' : null,
            buffers ? 'buffers' : null,
            wal ? 'wal' : null
        ].filter(Boolean).join('|');
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = (_a = this.headers.get('Accept')) !== null && _a !== void 0 ? _a : 'application/json';
        this.headers.set('Accept', `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
        if (format === 'json') {
            return this;
        } else {
            return this;
        }
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */ rollback() {
        this.headers.append('Prefer', 'tx=rollback');
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */ maxAffected(value) {
        this.headers.append('Prefer', 'handling=strict');
        this.headers.append('Prefer', `max-affected=${value}`);
        return this;
    }
}
exports.default = PostgrestTransformBuilder; //# sourceMappingURL=PostgrestTransformBuilder.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestTransformBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-client] (ecmascript)"));
const PostgrestReservedCharsRegexp = new RegExp('[,()]');
class PostgrestFilterBuilder extends PostgrestTransformBuilder_1.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */ in(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === 'string' && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(',');
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ contains(column, value) {
        if (typeof value === 'string') {
            // range types can be inclusive '[', ']' or exclusive '(', ')' so just
            // keep it simple and accept a string
            this.url.searchParams.append(column, `cs.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cs.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ containedBy(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `cd.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cd.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */ overlaps(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `ov.${value}`);
        } else {
            // array
            this.url.searchParams.append(column, `ov.{${value.join(',')}}`);
        }
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */ textSearch(column, query, { config, type } = {}) {
        let typePart = '';
        if (type === 'plain') {
            typePart = 'pl';
        } else if (type === 'phrase') {
            typePart = 'ph';
        } else if (type === 'websearch') {
            typePart = 'w';
        }
        const configPart = config === undefined ? '' : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : 'or';
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}
exports.default = PostgrestFilterBuilder; //# sourceMappingURL=PostgrestFilterBuilder.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestFilterBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)"));
class PostgrestQueryBuilder {
    constructor(url, { headers = {}, schema, fetch: fetch1 }){
        this.url = url;
        this.headers = new Headers(headers);
        this.schema = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ select(columns, options) {
        const { head = false, count } = options !== null && options !== void 0 ? options : {};
        const method = head ? 'HEAD' : 'GET';
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */ insert(values, { count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', `missing=default`);
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        this.headers.append('Prefer', `resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`);
        if (onConflict !== undefined) this.url.searchParams.set('on_conflict', onConflict);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', 'missing=default');
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ update(values, { count } = {}) {
        var _a;
        const method = 'PATCH';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ delete({ count } = {}) {
        var _a;
        const method = 'DELETE';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestQueryBuilder; //# sourceMappingURL=PostgrestQueryBuilder.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
const PostgrestQueryBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-client] (ecmascript)"));
const PostgrestFilterBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)"));
/**
 * PostgREST client.
 *
 * @typeParam Database - Types for the schema from the [type
 * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
 *
 * @typeParam SchemaName - Postgres schema to switch to. Must be a string
 * literal, the same one passed to the constructor. If the schema is not
 * `"public"`, this must be supplied manually.
 */ class PostgrestClient {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */ constructor(url, { headers = {}, schema, fetch: fetch1 } = {}){
        this.url = url;
        this.headers = new Headers(headers);
        this.schemaName = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        const url = new URL(`${this.url}/${relation}`);
        return new PostgrestQueryBuilder_1.default(url, {
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
        var _a;
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head || get) {
            method = head ? 'HEAD' : 'GET';
            Object.entries(args)// params with undefined value needs to be filtered out, otherwise it'll
            // show up as `?param=undefined`
            .filter(([_, value])=>value !== undefined)// array values need special syntax
            .map(([name, value])=>[
                    name,
                    Array.isArray(value) ? `{${value.join(',')}}` : `${value}`
                ]).forEach(([name, value])=>{
                url.searchParams.append(name, value);
            });
        } else {
            method = 'POST';
            body = args;
        }
        const headers = new Headers(this.headers);
        if (count) {
            headers.set('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestClient; //# sourceMappingURL=PostgrestClient.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostgrestError = exports.PostgrestBuilder = exports.PostgrestTransformBuilder = exports.PostgrestFilterBuilder = exports.PostgrestQueryBuilder = exports.PostgrestClient = void 0;
const tslib_1 = __turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
// Always update wrapper.mjs when updating this file.
const PostgrestClient_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-client] (ecmascript)"));
exports.PostgrestClient = PostgrestClient_1.default;
const PostgrestQueryBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-client] (ecmascript)"));
exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
const PostgrestFilterBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)"));
exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
const PostgrestTransformBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-client] (ecmascript)"));
exports.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
const PostgrestBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-client] (ecmascript)"));
exports.PostgrestBuilder = PostgrestBuilder_1.default;
const PostgrestError_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-client] (ecmascript)"));
exports.PostgrestError = PostgrestError_1.default;
exports.default = {
    PostgrestClient: PostgrestClient_1.default,
    PostgrestQueryBuilder: PostgrestQueryBuilder_1.default,
    PostgrestFilterBuilder: PostgrestFilterBuilder_1.default,
    PostgrestTransformBuilder: PostgrestTransformBuilder_1.default,
    PostgrestBuilder: PostgrestBuilder_1.default,
    PostgrestError: PostgrestError_1.default
}; //# sourceMappingURL=index.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostgrestBuilder",
    ()=>PostgrestBuilder,
    "PostgrestClient",
    ()=>PostgrestClient,
    "PostgrestError",
    ()=>PostgrestError,
    "PostgrestFilterBuilder",
    ()=>PostgrestFilterBuilder,
    "PostgrestQueryBuilder",
    ()=>PostgrestQueryBuilder,
    "PostgrestTransformBuilder",
    ()=>PostgrestTransformBuilder,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-client] (ecmascript)");
;
const { PostgrestClient, PostgrestQueryBuilder, PostgrestFilterBuilder, PostgrestTransformBuilder, PostgrestBuilder, PostgrestError } = __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.default || __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
;
const __TURBOPACK__default__export__ = {
    PostgrestClient,
    PostgrestQueryBuilder,
    PostgrestFilterBuilder,
    PostgrestTransformBuilder,
    PostgrestBuilder,
    PostgrestError
};
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Generated automatically during releases by scripts/update-version-files.ts
// This file provides runtime access to the package version for:
// - HTTP request headers (e.g., X-Client-Info header for API requests)
// - Debugging and support (identifying which version is running)
// - Telemetry and logging (version reporting in errors/analytics)
// - Ensuring build artifacts match the published package version
__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.81.1'; //# sourceMappingURL=version.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_AUTH_OPTIONS",
    ()=>DEFAULT_AUTH_OPTIONS,
    "DEFAULT_DB_OPTIONS",
    ()=>DEFAULT_DB_OPTIONS,
    "DEFAULT_GLOBAL_OPTIONS",
    ()=>DEFAULT_GLOBAL_OPTIONS,
    "DEFAULT_HEADERS",
    ()=>DEFAULT_HEADERS,
    "DEFAULT_REALTIME_OPTIONS",
    ()=>DEFAULT_REALTIME_OPTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-client] (ecmascript)");
;
let JS_ENV = '';
// @ts-ignore
if (typeof Deno !== 'undefined') {
    JS_ENV = 'deno';
} else if (typeof document !== 'undefined') {
    JS_ENV = 'web';
} else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    JS_ENV = 'react-native';
} else {
    JS_ENV = 'node';
}
const DEFAULT_HEADERS = {
    'X-Client-Info': `supabase-js-${JS_ENV}/${__TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`
};
const DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS
};
const DEFAULT_DB_OPTIONS = {
    schema: 'public'
};
const DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'implicit'
};
const DEFAULT_REALTIME_OPTIONS = {}; //# sourceMappingURL=constants.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchWithAuth",
    ()=>fetchWithAuth,
    "resolveFetch",
    ()=>resolveFetch,
    "resolveHeadersConstructor",
    ()=>resolveHeadersConstructor
]);
const resolveFetch = (customFetch)=>{
    if (customFetch) {
        return (...args)=>customFetch(...args);
    }
    return (...args)=>fetch(...args);
};
const resolveHeadersConstructor = ()=>{
    return Headers;
};
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch)=>{
    const fetch1 = resolveFetch(customFetch);
    const HeadersConstructor = resolveHeadersConstructor();
    return async (input, init)=>{
        var _a;
        const accessToken = (_a = await getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
        let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
        if (!headers.has('apikey')) {
            headers.set('apikey', supabaseKey);
        }
        if (!headers.has('Authorization')) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return fetch1(input, Object.assign(Object.assign({}, init), {
            headers
        }));
    };
}; //# sourceMappingURL=fetch.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applySettingDefaults",
    ()=>applySettingDefaults,
    "ensureTrailingSlash",
    ()=>ensureTrailingSlash,
    "isBrowser",
    ()=>isBrowser,
    "uuid",
    ()=>uuid,
    "validateSupabaseUrl",
    ()=>validateSupabaseUrl
]);
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function ensureTrailingSlash(url) {
    return url.endsWith('/') ? url : url + '/';
}
const isBrowser = ()=>typeof window !== 'undefined';
function applySettingDefaults(options, defaults) {
    var _a, _b;
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS, auth: DEFAULT_AUTH_OPTIONS, realtime: DEFAULT_REALTIME_OPTIONS, global: DEFAULT_GLOBAL_OPTIONS } = defaults;
    const result = {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions), {
            headers: Object.assign(Object.assign({}, (_a = DEFAULT_GLOBAL_OPTIONS === null || DEFAULT_GLOBAL_OPTIONS === void 0 ? void 0 : DEFAULT_GLOBAL_OPTIONS.headers) !== null && _a !== void 0 ? _a : {}), (_b = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.headers) !== null && _b !== void 0 ? _b : {})
        }),
        accessToken: async ()=>''
    };
    if (options.accessToken) {
        result.accessToken = options.accessToken;
    } else {
        // hack around Required<>
        delete result.accessToken;
    }
    return result;
}
function validateSupabaseUrl(supabaseUrl) {
    const trimmedUrl = supabaseUrl === null || supabaseUrl === void 0 ? void 0 : supabaseUrl.trim();
    if (!trimmedUrl) {
        throw new Error('supabaseUrl is required.');
    }
    if (!trimmedUrl.match(/^https?:\/\//i)) {
        throw new Error('Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.');
    }
    try {
        return new URL(ensureTrailingSlash(trimmedUrl));
    } catch (_a) {
        throw Error('Invalid supabaseUrl: Provided URL is malformed.');
    }
} //# sourceMappingURL=helpers.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseAuthClient",
    ()=>SupabaseAuthClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+auth-js@2.81.1/node_modules/@supabase/auth-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+auth-js@2.81.1/node_modules/@supabase/auth-js/dist/module/AuthClient.js [app-client] (ecmascript) <export default as AuthClient>");
;
class SupabaseAuthClient extends __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__["AuthClient"] {
    constructor(options){
        super(options);
    }
} //# sourceMappingURL=SupabaseAuthClient.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+functions-js@2.81.1/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+realtime-js@2.81.1/node_modules/@supabase/realtime-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+realtime-js@2.81.1/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-client] (ecmascript) <export default as RealtimeClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+storage-js@2.81.1/node_modules/@supabase/storage-js/dist/module/StorageClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.storage Options passed along to the storage-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     */ constructor(supabaseUrl, supabaseKey, options){
        var _a, _b, _c;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSupabaseUrl"])(supabaseUrl);
        if (!supabaseKey) throw new Error('supabaseKey is required.');
        this.realtimeUrl = new URL('realtime/v1', baseUrl);
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace('http', 'ws');
        this.authUrl = new URL('auth/v1', baseUrl);
        this.storageUrl = new URL('storage/v1', baseUrl);
        this.functionsUrl = new URL('functions/v1', baseUrl);
        // default storage key uses the supabase project ref as a namespace
        const defaultStorageKey = `sb-${baseUrl.hostname.split('.')[0]}-auth-token`;
        const DEFAULTS = {
            db: __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DB_OPTIONS"],
            realtime: __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_REALTIME_OPTIONS"],
            auth: Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_OPTIONS"]), {
                storageKey: defaultStorageKey
            }),
            global: __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_GLOBAL_OPTIONS"]
        };
        const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applySettingDefaults"])(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : '';
        this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
        if (!settings.accessToken) {
            this.auth = this._initSupabaseAuthClient((_c = settings.auth) !== null && _c !== void 0 ? _c : {}, this.headers, settings.global.fetch);
        } else {
            this.accessToken = settings.accessToken;
            this.auth = new Proxy({}, {
                get: (_, prop)=>{
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
                }
            });
        }
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, settings.realtime));
        if (this.accessToken) {
            // Start auth immediately to avoid race condition with channel subscriptions
            this.accessToken().then((token)=>this.realtime.setAuth(token)).catch((e)=>console.warn('Failed to set initial Realtime auth token:', e));
        }
        this.rest = new __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostgrestClient"](new URL('rest/v1', baseUrl).href, {
            headers: this.headers,
            schema: settings.db.schema,
            fetch: this.fetch
        });
        this.storage = new __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageClient"](this.storageUrl.href, this.headers, this.fetch, options === null || options === void 0 ? void 0 : options.storage);
        if (!settings.accessToken) {
            this._listenForAuthEvents();
        }
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */ get functions() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsClient"](this.functionsUrl.href, {
            headers: this.headers,
            customFetch: this.fetch
        });
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        return this.rest.from(relation);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.schema
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return this.rest.schema(schema);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.rpc
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, options = {
        head: false,
        get: false,
        count: undefined
    }) {
        return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */ channel(name, opts = {
        config: {}
    }) {
        return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */ getChannels() {
        return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */ removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */ removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
        var _a, _b;
        if (this.accessToken) {
            return await this.accessToken();
        }
        const { data } = await this.auth.getSession();
        return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug, throwOnError }, headers, fetch) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SupabaseAuthClient"]({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, authHeaders), headers),
            storageKey: storageKey,
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            storage,
            userStorage,
            flowType,
            lock,
            debug,
            throwOnError,
            fetch,
            // auth checks if there is a custom authorizaiton header using this flag
            // so it knows whether to return an error when getUser is called with no session
            hasCustomAuthorizationHeader: Object.keys(this.headers).some((key)=>key.toLowerCase() === 'authorization')
        });
    }
    _initRealtimeClient(options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__["RealtimeClient"](this.realtimeUrl.href, Object.assign(Object.assign({}, options), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, options === null || options === void 0 ? void 0 : options.params)
        }));
    }
    _listenForAuthEvents() {
        const data = this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, 'CLIENT', session === null || session === void 0 ? void 0 : session.access_token);
        });
        return data;
    }
    _handleTokenChanged(event, source, token) {
        if ((event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') && this.changedAccessToken !== token) {
            this.changedAccessToken = token;
            this.realtime.setAuth(token);
        } else if (event === 'SIGNED_OUT') {
            this.realtime.setAuth();
            if (source == 'STORAGE') this.auth.signOut();
            this.changedAccessToken = undefined;
        }
    }
} //# sourceMappingURL=SupabaseClient.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/next@16.0.3_@opentelemetry+_162ef2eee2977cfe0d3476575909914c/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+supabase-js@2.81.1/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+auth-js@2.81.1/node_modules/@supabase/auth-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+postgrest-js@2.81.1/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@supabase+realtime-js@2.81.1/node_modules/@supabase/realtime-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
const createClient = (supabaseUrl, supabaseKey, options)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$81$2e$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](supabaseUrl, supabaseKey, options);
};
// Check for Node.js <= 18 deprecation
function shouldShowDeprecationWarning() {
    // Skip in browser environments
    if (typeof window !== 'undefined') {
        return false;
    }
    // Skip if process is not available (e.g., Edge Runtime)
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === 'undefined') {
        return false;
    }
    // Use dynamic property access to avoid Next.js Edge Runtime static analysis warnings
    const processVersion = __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$opentelemetry$2b$_162ef2eee2977cfe0d3476575909914c$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['version'];
    if (processVersion === undefined || processVersion === null) {
        return false;
    }
    const versionMatch = processVersion.match(/^v(\d+)\./);
    if (!versionMatch) {
        return false;
    }
    const majorVersion = parseInt(versionMatch[1], 10);
    return majorVersion <= 18;
}
if (shouldShowDeprecationWarning()) {
    console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. ` + `Please upgrade to Node.js 20 or later. ` + `For more information, visit: https://github.com/orgs/supabase/discussions/37217`);
} //# sourceMappingURL=index.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@sentry-internal+feedback@10.25.0/node_modules/@sentry-internal/feedback/build/npm/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFeedbackIntegration",
    ()=>buildFeedbackIntegration,
    "feedbackModalIntegration",
    ()=>feedbackModalIntegration,
    "feedbackScreenshotIntegration",
    ()=>feedbackScreenshotIntegration,
    "getFeedback",
    ()=>getFeedback,
    "sendFeedback",
    ()=>sendFeedback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@sentry+core@10.25.0/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@sentry+core@10.25.0/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@sentry+core@10.25.0/node_modules/@sentry/core/build/esm/feedback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@sentry+core@10.25.0/node_modules/@sentry/core/build/esm/utils/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@sentry+core@10.25.0/node_modules/@sentry/core/build/esm/utils/isBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@sentry+core@10.25.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@sentry+core@10.25.0/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
;
// exporting a separate copy of `WINDOW` rather than exporting the one from `@sentry/browser`
// prevents the browser package from being bundled in the CDN bundle, and avoids a
// circular dependency between the browser and feedback packages
const WINDOW = __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
const DOCUMENT = WINDOW.document;
const NAVIGATOR = WINDOW.navigator;
const TRIGGER_LABEL = 'Report a Bug';
const CANCEL_BUTTON_LABEL = 'Cancel';
const SUBMIT_BUTTON_LABEL = 'Send Bug Report';
const CONFIRM_BUTTON_LABEL = 'Confirm';
const FORM_TITLE = 'Report a Bug';
const EMAIL_PLACEHOLDER = 'your.email@example.org';
const EMAIL_LABEL = 'Email';
const MESSAGE_PLACEHOLDER = "What's the bug? What did you expect?";
const MESSAGE_LABEL = 'Description';
const NAME_PLACEHOLDER = 'Your Name';
const NAME_LABEL = 'Name';
const SUCCESS_MESSAGE_TEXT = 'Thank you for your report!';
const IS_REQUIRED_LABEL = '(required)';
const ADD_SCREENSHOT_LABEL = 'Add a screenshot';
const REMOVE_SCREENSHOT_LABEL = 'Remove screenshot';
const HIGHLIGHT_TOOL_TEXT = 'Highlight';
const HIDE_TOOL_TEXT = 'Hide';
const REMOVE_HIGHLIGHT_TEXT = 'Remove';
const FEEDBACK_WIDGET_SOURCE = 'widget';
const FEEDBACK_API_SOURCE = 'api';
const SUCCESS_MESSAGE_TIMEOUT = 5000;
/**
 * Public API to send a Feedback item to Sentry
 */ const sendFeedback = (params, hint = {
    includeReplay: true
})=>{
    if (!params.message) {
        throw new Error('Unable to submit feedback with empty message');
    }
    // We want to wait for the feedback to be sent (or not)
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        throw new Error('No client setup, cannot send feedback.');
    }
    if (params.tags && Object.keys(params.tags).length) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().setTags(params.tags);
    }
    const eventId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureFeedback"])({
        source: FEEDBACK_API_SOURCE,
        url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocationHref"])(),
        ...params
    }, hint);
    // We want to wait for the feedback to be sent (or not)
    return new Promise((resolve, reject)=>{
        // After 30s, we want to clear anyhow
        const timeout = setTimeout(()=>reject('Unable to determine if Feedback was correctly sent.'), 30000);
        const cleanup = client.on('afterSendEvent', (event, response)=>{
            if (event.event_id !== eventId) {
                return;
            }
            clearTimeout(timeout);
            cleanup();
            // Require valid status codes, otherwise can assume feedback was not sent successfully
            if (response?.statusCode && response.statusCode >= 200 && response.statusCode < 300) {
                return resolve(eventId);
            }
            if (response?.statusCode === 403) {
                return reject('Unable to send feedback. This could be because this domain is not in your list of allowed domains.');
            }
            return reject('Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.');
        });
    });
};
/*
 * For reference, the fully built event looks something like this:
 * {
 *     "type": "feedback",
 *     "event_id": "d2132d31b39445f1938d7e21b6bf0ec4",
 *     "timestamp": 1597977777.6189718,
 *     "dist": "1.12",
 *     "platform": "javascript",
 *     "environment": "production",
 *     "release": 42,
 *     "tags": {"transaction": "/organizations/:orgId/performance/:eventSlug/"},
 *     "sdk": {"name": "name", "version": "version"},
 *     "user": {
 *         "id": "123",
 *         "username": "user",
 *         "email": "user@site.com",
 *         "ip_address": "192.168.11.12",
 *     },
 *     "request": {
 *         "url": None,
 *         "headers": {
 *             "user-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15"
 *         },
 *     },
 *     "contexts": {
 *         "feedback": {
 *             "message": "test message",
 *             "contact_email": "test@example.com",
 *             "type": "feedback",
 *         },
 *         "trace": {
 *             "trace_id": "4C79F60C11214EB38604F4AE0781BFB2",
 *             "span_id": "FA90FDEAD5F74052",
 *             "type": "trace",
 *         },
 *         "replay": {
 *             "replay_id": "e2d42047b1c5431c8cba85ee2a8ab25d",
 *         },
 *     },
 *   }
 */ /**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */ const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
/**
 * Mobile browsers do not support `mediaDevices.getDisplayMedia` even though they have the api implemented
 * Instead they return things like `NotAllowedError` when called.
 *
 * It's simpler for us to browser sniff first, and avoid loading the integration if we can.
 *
 * https://stackoverflow.com/a/58879212
 * https://stackoverflow.com/a/3540295
 *
 * `mediaDevices.getDisplayMedia` is also only supported in secure contexts, and return a `mediaDevices is not supported` error, so we should also avoid loading the integration if we can.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
 */ function isScreenshotSupported() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(NAVIGATOR.userAgent)) {
        return false;
    }
    /**
   * User agent on iPads show as Macintosh, so we need extra checks
   *
   * https://forums.developer.apple.com/forums/thread/119186
   * https://stackoverflow.com/questions/60482650/how-to-detect-ipad-useragent-on-safari-browser
   */ if (/Macintosh/i.test(NAVIGATOR.userAgent) && NAVIGATOR.maxTouchPoints && NAVIGATOR.maxTouchPoints > 1) {
        return false;
    }
    if (!isSecureContext) {
        return false;
    }
    return true;
}
/**
 * Quick and dirty deep merge for the Feedback integration options
 */ function mergeOptions(defaultOptions, optionOverrides) {
    return {
        ...defaultOptions,
        ...optionOverrides,
        tags: {
            ...defaultOptions.tags,
            ...optionOverrides.tags
        },
        onFormOpen: ()=>{
            optionOverrides.onFormOpen?.();
            defaultOptions.onFormOpen?.();
        },
        onFormClose: ()=>{
            optionOverrides.onFormClose?.();
            defaultOptions.onFormClose?.();
        },
        onSubmitSuccess: (data, eventId)=>{
            optionOverrides.onSubmitSuccess?.(data, eventId);
            defaultOptions.onSubmitSuccess?.(data, eventId);
        },
        onSubmitError: (error)=>{
            optionOverrides.onSubmitError?.(error);
            defaultOptions.onSubmitError?.(error);
        },
        onFormSubmitted: ()=>{
            optionOverrides.onFormSubmitted?.();
            defaultOptions.onFormSubmitted?.();
        },
        themeDark: {
            ...defaultOptions.themeDark,
            ...optionOverrides.themeDark
        },
        themeLight: {
            ...defaultOptions.themeLight,
            ...optionOverrides.themeLight
        }
    };
}
/**
 * Creates <style> element for widget actor (button that opens the dialog)
 */ function createActorStyles(styleNonce) {
    const style = DOCUMENT.createElement('style');
    style.textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`;
    if (styleNonce) {
        style.setAttribute('nonce', styleNonce);
    }
    return style;
}
/**
 * Helper function to set a dict of attributes on element (w/ specified namespace)
 */ function setAttributesNS(el, attributes) {
    Object.entries(attributes).forEach(([key, val])=>{
        el.setAttributeNS(null, key, val);
    });
    return el;
}
const SIZE = 20;
const XMLNS$2 = 'http://www.w3.org/2000/svg';
/**
 * Feedback Icon
 */ function FeedbackIcon() {
    const createElementNS = (tagName)=>WINDOW.document.createElementNS(XMLNS$2, tagName);
    const svg = setAttributesNS(createElementNS('svg'), {
        width: `${SIZE}`,
        height: `${SIZE}`,
        viewBox: `0 0 ${SIZE} ${SIZE}`,
        fill: 'var(--actor-color, var(--foreground))'
    });
    const g = setAttributesNS(createElementNS('g'), {
        clipPath: 'url(#clip0_57_80)'
    });
    const path = setAttributesNS(createElementNS('path'), {
        ['fill-rule']: 'evenodd',
        ['clip-rule']: 'evenodd',
        d: 'M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z'
    });
    svg.appendChild(g).appendChild(path);
    const speakerDefs = createElementNS('defs');
    const speakerClipPathDef = setAttributesNS(createElementNS('clipPath'), {
        id: 'clip0_57_80'
    });
    const speakerRect = setAttributesNS(createElementNS('rect'), {
        width: `${SIZE}`,
        height: `${SIZE}`,
        fill: 'white'
    });
    speakerClipPathDef.appendChild(speakerRect);
    speakerDefs.appendChild(speakerClipPathDef);
    svg.appendChild(speakerDefs).appendChild(speakerClipPathDef).appendChild(speakerRect);
    return svg;
}
/**
 * The sentry-provided button to open the feedback modal
 */ function Actor({ triggerLabel, triggerAriaLabel, shadow, styleNonce }) {
    const el = DOCUMENT.createElement('button');
    el.type = 'button';
    el.className = 'widget__actor';
    el.ariaHidden = 'false';
    el.ariaLabel = triggerAriaLabel || triggerLabel || TRIGGER_LABEL;
    el.appendChild(FeedbackIcon());
    if (triggerLabel) {
        const label = DOCUMENT.createElement('span');
        label.appendChild(DOCUMENT.createTextNode(triggerLabel));
        el.appendChild(label);
    }
    const style = createActorStyles(styleNonce);
    return {
        el,
        appendToDom () {
            shadow.appendChild(style);
            shadow.appendChild(el);
        },
        removeFromDom () {
            el.remove();
            style.remove();
        },
        show () {
            el.ariaHidden = 'false';
        },
        hide () {
            el.ariaHidden = 'true';
        }
    };
}
const PURPLE = 'rgba(88, 74, 192, 1)';
const DEFAULT_LIGHT = {
    foreground: '#2b2233',
    background: '#ffffff',
    accentForeground: 'white',
    accentBackground: PURPLE,
    successColor: '#268d75',
    errorColor: '#df3338',
    border: '1.5px solid rgba(41, 35, 47, 0.13)',
    boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
    outline: '1px auto var(--accent-background)',
    interactiveFilter: 'brightness(95%)'
};
const DEFAULT_DARK = {
    foreground: '#ebe6ef',
    background: '#29232f',
    accentForeground: 'white',
    accentBackground: PURPLE,
    successColor: '#2da98c',
    errorColor: '#f55459',
    border: '1.5px solid rgba(235, 230, 239, 0.15)',
    boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
    outline: '1px auto var(--accent-background)',
    interactiveFilter: 'brightness(150%)'
};
function getThemedCssVariables(theme) {
    return `
  --foreground: ${theme.foreground};
  --background: ${theme.background};
  --accent-foreground: ${theme.accentForeground};
  --accent-background: ${theme.accentBackground};
  --success-color: ${theme.successColor};
  --error-color: ${theme.errorColor};
  --border: ${theme.border};
  --box-shadow: ${theme.boxShadow};
  --outline: ${theme.outline};
  --interactive-filter: ${theme.interactiveFilter};
  `;
}
/**
 * Creates <style> element for widget actor (button that opens the dialog)
 */ function createMainStyles({ colorScheme, themeDark, themeLight, styleNonce }) {
    const style = DOCUMENT.createElement('style');
    style.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${colorScheme !== 'system' ? 'color-scheme: only light;' : ''}

  ${getThemedCssVariables(colorScheme === 'dark' ? {
        ...DEFAULT_DARK,
        ...themeDark
    } : {
        ...DEFAULT_LIGHT,
        ...themeLight
    })}
}

${colorScheme === 'system' ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${getThemedCssVariables({
        ...DEFAULT_DARK,
        ...themeDark
    })}
  }
}` : ''}
}
`;
    if (styleNonce) {
        style.setAttribute('nonce', styleNonce);
    }
    return style;
}
const buildFeedbackIntegration = ({ lazyLoadIntegration, getModalIntegration, getScreenshotIntegration })=>{
    const feedbackIntegration = ({ // FeedbackGeneralConfiguration
    id = 'sentry-feedback', autoInject = true, showBranding = true, isEmailRequired = false, isNameRequired = false, showEmail = true, showName = true, enableScreenshot = true, useSentryUser = {
        email: 'email',
        name: 'username'
    }, tags, styleNonce, scriptNonce, // FeedbackThemeConfiguration
    colorScheme = 'system', themeLight = {}, themeDark = {}, // FeedbackTextConfiguration
    addScreenshotButtonLabel = ADD_SCREENSHOT_LABEL, cancelButtonLabel = CANCEL_BUTTON_LABEL, confirmButtonLabel = CONFIRM_BUTTON_LABEL, emailLabel = EMAIL_LABEL, emailPlaceholder = EMAIL_PLACEHOLDER, formTitle = FORM_TITLE, isRequiredLabel = IS_REQUIRED_LABEL, messageLabel = MESSAGE_LABEL, messagePlaceholder = MESSAGE_PLACEHOLDER, nameLabel = NAME_LABEL, namePlaceholder = NAME_PLACEHOLDER, removeScreenshotButtonLabel = REMOVE_SCREENSHOT_LABEL, submitButtonLabel = SUBMIT_BUTTON_LABEL, successMessageText = SUCCESS_MESSAGE_TEXT, triggerLabel = TRIGGER_LABEL, triggerAriaLabel = '', highlightToolText = HIGHLIGHT_TOOL_TEXT, hideToolText = HIDE_TOOL_TEXT, removeHighlightText = REMOVE_HIGHLIGHT_TEXT, // FeedbackCallbacks
    onFormOpen, onFormClose, onSubmitSuccess, onSubmitError, onFormSubmitted } = {})=>{
        const _options = {
            id,
            autoInject,
            showBranding,
            isEmailRequired,
            isNameRequired,
            showEmail,
            showName,
            enableScreenshot,
            useSentryUser,
            tags,
            styleNonce,
            scriptNonce,
            colorScheme,
            themeDark,
            themeLight,
            triggerLabel,
            triggerAriaLabel,
            cancelButtonLabel,
            submitButtonLabel,
            confirmButtonLabel,
            formTitle,
            emailLabel,
            emailPlaceholder,
            messageLabel,
            messagePlaceholder,
            nameLabel,
            namePlaceholder,
            successMessageText,
            isRequiredLabel,
            addScreenshotButtonLabel,
            removeScreenshotButtonLabel,
            highlightToolText,
            hideToolText,
            removeHighlightText,
            onFormClose,
            onFormOpen,
            onSubmitError,
            onSubmitSuccess,
            onFormSubmitted
        };
        let _shadow = null;
        let _subscriptions = [];
        /**
     * Get the shadow root where we will append css
     */ const _createShadow = (options)=>{
            if (!_shadow) {
                const host = DOCUMENT.createElement('div');
                host.id = String(options.id);
                DOCUMENT.body.appendChild(host);
                _shadow = host.attachShadow({
                    mode: 'open'
                });
                _shadow.appendChild(createMainStyles(options));
            }
            return _shadow;
        };
        const _loadAndRenderDialog = async (options)=>{
            const screenshotRequired = options.enableScreenshot && isScreenshotSupported();
            let modalIntegration;
            let screenshotIntegration;
            try {
                const modalIntegrationFn = getModalIntegration ? getModalIntegration() : await lazyLoadIntegration('feedbackModalIntegration', scriptNonce);
                modalIntegration = modalIntegrationFn();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addIntegration"])(modalIntegration);
            } catch  {
                DEBUG_BUILD && __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error('[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`.');
                throw new Error('[Feedback] Missing feedback modal integration!');
            }
            try {
                const screenshotIntegrationFn = screenshotRequired ? getScreenshotIntegration ? getScreenshotIntegration() : await lazyLoadIntegration('feedbackScreenshotIntegration', scriptNonce) : undefined;
                if (screenshotIntegrationFn) {
                    screenshotIntegration = screenshotIntegrationFn();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addIntegration"])(screenshotIntegration);
                }
            } catch  {
                DEBUG_BUILD && __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error('[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.');
            }
            const dialog = modalIntegration.createDialog({
                options: {
                    ...options,
                    onFormClose: ()=>{
                        dialog?.close();
                        options.onFormClose?.();
                    },
                    onFormSubmitted: ()=>{
                        dialog?.close();
                        options.onFormSubmitted?.();
                    }
                },
                screenshotIntegration,
                sendFeedback,
                shadow: _createShadow(options)
            });
            return dialog;
        };
        const _attachTo = (el, optionOverrides = {})=>{
            const mergedOptions = mergeOptions(_options, optionOverrides);
            const targetEl = typeof el === 'string' ? DOCUMENT.querySelector(el) : typeof el.addEventListener === 'function' ? el : null;
            if (!targetEl) {
                DEBUG_BUILD && __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error('[Feedback] Unable to attach to target element');
                throw new Error('Unable to attach to target element');
            }
            let dialog = null;
            const handleClick = async ()=>{
                if (!dialog) {
                    dialog = await _loadAndRenderDialog({
                        ...mergedOptions,
                        onFormSubmitted: ()=>{
                            dialog?.removeFromDom();
                            mergedOptions.onFormSubmitted?.();
                        }
                    });
                }
                dialog.appendToDom();
                dialog.open();
            };
            targetEl.addEventListener('click', handleClick);
            const unsubscribe = ()=>{
                _subscriptions = _subscriptions.filter((sub)=>sub !== unsubscribe);
                dialog?.removeFromDom();
                dialog = null;
                targetEl.removeEventListener('click', handleClick);
            };
            _subscriptions.push(unsubscribe);
            return unsubscribe;
        };
        const _createActor = (optionOverrides = {})=>{
            const mergedOptions = mergeOptions(_options, optionOverrides);
            const shadow = _createShadow(mergedOptions);
            const actor = Actor({
                triggerLabel: mergedOptions.triggerLabel,
                triggerAriaLabel: mergedOptions.triggerAriaLabel,
                shadow,
                styleNonce
            });
            _attachTo(actor.el, {
                ...mergedOptions,
                onFormOpen () {
                    actor.hide();
                },
                onFormClose () {
                    actor.show();
                },
                onFormSubmitted () {
                    actor.show();
                }
            });
            return actor;
        };
        return {
            name: 'Feedback',
            setupOnce () {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])() || !_options.autoInject) {
                    return;
                }
                if (DOCUMENT.readyState === 'loading') {
                    DOCUMENT.addEventListener('DOMContentLoaded', ()=>_createActor().appendToDom());
                } else {
                    _createActor().appendToDom();
                }
            },
            /**
       * Adds click listener to the element to open a feedback dialog
       *
       * The returned function can be used to remove the click listener
       */ attachTo: _attachTo,
            /**
       * Creates a new widget which is composed of a Button which triggers a Dialog.
       * Accepts partial options to override any options passed to constructor.
       */ createWidget (optionOverrides = {}) {
                const actor = _createActor(mergeOptions(_options, optionOverrides));
                actor.appendToDom();
                return actor;
            },
            /**
       * Creates a new Form which you can
       * Accepts partial options to override any options passed to constructor.
       */ async createForm (optionOverrides = {}) {
                return _loadAndRenderDialog(mergeOptions(_options, optionOverrides));
            },
            /**
       * Removes the Feedback integration (including host, shadow DOM, and all widgets)
       */ remove () {
                if (_shadow) {
                    _shadow.parentElement?.remove();
                    _shadow = null;
                }
                // Remove any lingering subscriptions
                _subscriptions.forEach((sub)=>sub());
                _subscriptions = [];
            }
        };
    };
    return feedbackIntegration;
};
/**
 * This is a small utility to get a type-safe instance of the Feedback integration.
 */ function getFeedback() {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    return client?.getIntegrationByName('Feedback');
}
var n, l$1, u$1, i$1, o$1, r$1, f$1, c$1 = {}, s$1 = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, h$1 = Array.isArray;
function v$1(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function p$1(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
}
function y$1(l, u, t) {
    var i, o, r, f = {};
    for(r in u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(r in l.defaultProps)void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return d$1(l, f, i, o, null);
}
function d$1(n, t, i, o, r) {
    var f = {
        type: n,
        props: t,
        key: i,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == r ? ++u$1 : r,
        __i: -1,
        __u: 0
    };
    return null == r && null != l$1.vnode && l$1.vnode(f), f;
}
function g$1(n) {
    return n.children;
}
function b$1(n, l) {
    this.props = n, this.context = l;
}
function m$1(n, l) {
    if (null == l) return n.__ ? m$1(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? m$1(n) : null;
}
function w$1(n, u, t) {
    var i, o = n.__v, r = o.__e, f = n.__P;
    if (f) return (i = v$1({}, o)).__v = o.__v + 1, l$1.vnode && l$1.vnode(i), M(f, i, o, n.__n, void 0 !== f.ownerSVGElement, 32 & o.__u ? [
        r
    ] : null, u, null == r ? m$1(o) : r, !!(32 & o.__u), t), i.__.__k[i.__i] = i, i.__d = void 0, i.__e != r && k$1(i), i;
}
function k$1(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return k$1(n);
    }
}
function x$1(n) {
    (!n.__d && (n.__d = true) && i$1.push(n) && !C$1.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(C$1);
}
function C$1() {
    var n, u, t, o = [], r = [];
    for(i$1.sort(f$1); n = i$1.shift();)n.__d && (t = i$1.length, u = w$1(n, o, r) || u, 0 === t || i$1.length > t ? (j$1(o, u, r), r.length = o.length = 0, u = void 0, i$1.sort(f$1)) : u && l$1.__c && l$1.__c(u, s$1));
    u && j$1(o, u, r), C$1.__r = 0;
}
function P$1(n, l, u, t, i, o, r, f, e, a, h) {
    var v, p, y, d, _, g = t && t.__k || s$1, b = l.length;
    for(u.__d = e, S(u, l, g), e = u.__d, v = 0; v < b; v++)null != (y = u.__k[v]) && "boolean" != typeof y && "function" != typeof y && (p = -1 === y.__i ? c$1 : g[y.__i] || c$1, y.__i = v, M(n, y, p, i, o, r, f, e, a, h), d = y.__e, y.ref && p.ref != y.ref && (p.ref && N(p.ref, null, y), h.push(y.ref, y.__c || d, y)), null == _ && null != d && (_ = d), 65536 & y.__u || p.__k === y.__k ? e = $(y, e, n) : "function" == typeof y.type && void 0 !== y.__d ? e = y.__d : d && (e = d.nextSibling), y.__d = void 0, y.__u &= -196609);
    u.__d = e, u.__e = _;
}
function S(n, l, u) {
    var t, i, o, r, f, e = l.length, c = u.length, s = c, a = 0;
    for(n.__k = [], t = 0; t < e; t++)null != (i = n.__k[t] = null == (i = l[t]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? d$1(null, i, null, null, i) : h$1(i) ? d$1(g$1, {
        children: i
    }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? d$1(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = n, i.__b = n.__b + 1, f = I(i, u, r = t + a, s), i.__i = f, o = null, -1 !== f && (s--, (o = u[f]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == f && a--, "function" != typeof i.type && (i.__u |= 65536)) : f !== r && (f === r + 1 ? a++ : f > r ? s > e - r ? a += f - r : a-- : a = f < r && f == r - 1 ? f - r : 0, f !== t + a && (i.__u |= 65536))) : (o = u[t]) && null == o.key && o.__e && (o.__e == n.__d && (n.__d = m$1(o)), O(o, o, false), u[t] = null, s--);
    if (s) for(t = 0; t < c; t++)null != (o = u[t]) && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = m$1(o)), O(o, o));
}
function $(n, l, u) {
    var t, i;
    if ("function" == typeof n.type) {
        for(t = n.__k, i = 0; t && i < t.length; i++)t[i] && (t[i].__ = n, l = $(t[i], l, u));
        return l;
    }
    n.__e != l && (u.insertBefore(n.__e, l || null), l = n.__e);
    do {
        l = l && l.nextSibling;
    }while (null != l && 8 === l.nodeType)
    return l;
}
function I(n, l, u, t) {
    var i = n.key, o = n.type, r = u - 1, f = u + 1, e = l[u];
    if (null === e || e && i == e.key && o === e.type) return u;
    if (t > (null != e && 0 == (131072 & e.__u) ? 1 : 0)) for(; r >= 0 || f < l.length;){
        if (r >= 0) {
            if ((e = l[r]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return r;
            r--;
        }
        if (f < l.length) {
            if ((e = l[f]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return f;
            f++;
        }
    }
    return -1;
}
function T$1(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a$1.test(l) ? u : u + "px";
}
function A$1(n, l, u, t, i) {
    var o;
    n: if ("style" === l) if ("string" == typeof u) n.style.cssText = u;
    else {
        if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || T$1(n.style, l, "");
        if (u) for(l in u)t && u[l] === t[l] || T$1(n.style, l, u[l]);
    }
    else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, "$1")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = Date.now(), n.addEventListener(l, o ? L : D$1, o)) : n.removeEventListener(l, o ? L : D$1, o);
    else {
        if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && "rowSpan" !== l && "colSpan" !== l && "role" !== l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || false === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
}
function D$1(n) {
    if (this.l) {
        var u = this.l[n.type + false];
        if (n.t) {
            if (n.t <= u.u) return;
        } else n.t = Date.now();
        return u(l$1.event ? l$1.event(n) : n);
    }
}
function L(n) {
    if (this.l) return this.l[n.type + true](l$1.event ? l$1.event(n) : n);
}
function M(n, u, t, i, o, r, f, e, c, s) {
    var a, p, y, d, _, m, w, k, x, C, S, $, H, I, T, A = u.type;
    if (void 0 !== u.constructor) return null;
    128 & t.__u && (c = !!(32 & t.__u), r = [
        e = u.__e = t.__e
    ]), (a = l$1.__b) && a(u);
    n: if ("function" == typeof A) try {
        if (k = u.props, x = (a = A.contextType) && i[a.__c], C = a ? x ? x.props.value : a.__ : i, t.__c ? w = (p = u.__c = t.__c).__ = p.__E : ("prototype" in A && A.prototype.render ? u.__c = p = new A(k, C) : (u.__c = p = new b$1(k, C), p.constructor = A, p.render = q$1), x && x.sub(p), p.props = k, p.state || (p.state = {}), p.context = C, p.__n = i, y = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), null != A.getDerivedStateFromProps && (p.__s == p.state && (p.__s = v$1({}, p.__s)), v$1(p.__s, A.getDerivedStateFromProps(k, p.__s))), d = p.props, _ = p.state, p.__v = u, y) null == A.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
        else {
            if (null == A.getDerivedStateFromProps && k !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(k, C), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(k, p.__s, C) || u.__v === t.__v)) {
                for(u.__v !== t.__v && (p.props = k, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function(n) {
                    n && (n.__ = u);
                }), S = 0; S < p._sb.length; S++)p.__h.push(p._sb[S]);
                p._sb = [], p.__h.length && f.push(p);
                break n;
            }
            null != p.componentWillUpdate && p.componentWillUpdate(k, p.__s, C), null != p.componentDidUpdate && p.__h.push(function() {
                p.componentDidUpdate(d, _, m);
            });
        }
        if (p.context = C, p.props = k, p.__P = n, p.__e = !1, $ = l$1.__r, H = 0, "prototype" in A && A.prototype.render) {
            for(p.state = p.__s, p.__d = !1, $ && $(u), a = p.render(p.props, p.state, p.context), I = 0; I < p._sb.length; I++)p.__h.push(p._sb[I]);
            p._sb = [];
        } else do {
            p.__d = !1, $ && $(u), a = p.render(p.props, p.state, p.context), p.state = p.__s;
        }while (p.__d && ++H < 25)
        p.state = p.__s, null != p.getChildContext && (i = v$1(v$1({}, i), p.getChildContext())), y || null == p.getSnapshotBeforeUpdate || (m = p.getSnapshotBeforeUpdate(d, _)), P$1(n, h$1(T = null != a && a.type === g$1 && null == a.key ? a.props.children : a) ? T : [
            T
        ], u, t, i, o, r, f, e, c, s), p.base = u.__e, u.__u &= -161, p.__h.length && f.push(p), w && (p.__E = p.__ = null);
    } catch (n) {
        u.__v = null, c || null != r ? (u.__e = e, u.__u |= c ? 160 : 32, r[r.indexOf(e)] = null) : (u.__e = t.__e, u.__k = t.__k), l$1.__e(n, u, t);
    }
    else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = z$1(t.__e, u, t, i, o, r, f, c, s);
    (a = l$1.diffed) && a(u);
}
function j$1(n, u, t) {
    for(var i = 0; i < t.length; i++)N(t[i], t[++i], t[++i]);
    l$1.__c && l$1.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l$1.__e(n, u.__v);
        }
    });
}
function z$1(l, u, t, i, o, r, f, e, s) {
    var a, v, y, d, _, g, b, w = t.props, k = u.props, x = u.type;
    if ("svg" === x && (o = true), null != r) {
        for(a = 0; a < r.length; a++)if ((_ = r[a]) && "setAttribute" in _ == !!x && (x ? _.localName === x : 3 === _.nodeType)) {
            l = _, r[a] = null;
            break;
        }
    }
    if (null == l) {
        if (null === x) return document.createTextNode(k);
        l = o ? document.createElementNS("http://www.w3.org/2000/svg", x) : document.createElement(x, k.is && k), r = null, e = false;
    }
    if (null === x) w === k || e && l.data === k || (l.data = k);
    else {
        if (r = r && n.call(l.childNodes), w = t.props || c$1, !e && null != r) for(w = {}, a = 0; a < l.attributes.length; a++)w[(_ = l.attributes[a]).name] = _.value;
        for(a in w)_ = w[a], "children" == a || ("dangerouslySetInnerHTML" == a ? y = _ : "key" === a || a in k || A$1(l, a, null, _, o));
        for(a in k)_ = k[a], "children" == a ? d = _ : "dangerouslySetInnerHTML" == a ? v = _ : "value" == a ? g = _ : "checked" == a ? b = _ : "key" === a || e && "function" != typeof _ || w[a] === _ || A$1(l, a, _, w[a], o);
        if (v) e || y && (v.__html === y.__html || v.__html === l.innerHTML) || (l.innerHTML = v.__html), u.__k = [];
        else if (y && (l.innerHTML = ""), P$1(l, h$1(d) ? d : [
            d
        ], u, t, i, o && "foreignObject" !== x, r, f, r ? r[0] : t.__k && m$1(t, 0), e, s), null != r) for(a = r.length; a--;)null != r[a] && p$1(r[a]);
        e || (a = "value", void 0 !== g && (g !== l[a] || "progress" === x && !g || "option" === x && g !== w[a]) && A$1(l, a, g, w[a], false), a = "checked", void 0 !== b && b !== l[a] && A$1(l, a, b, w[a], false));
    }
    return l;
}
function N(n, u, t) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
        l$1.__e(n, t);
    }
}
function O(n, u, t) {
    var i, o;
    if (l$1.unmount && l$1.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || N(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            l$1.__e(n, u);
        }
        i.base = i.__P = null, n.__c = void 0;
    }
    if (i = n.__k) for(o = 0; o < i.length; o++)i[o] && O(i[o], u, t || "function" != typeof n.type);
    t || null == n.__e || p$1(n.__e), n.__ = n.__e = n.__d = void 0;
}
function q$1(n, l, u) {
    return this.constructor(n, u);
}
function B$1(u, t, i) {
    var o, r, f, e;
    l$1.__ && l$1.__(u, t), r = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : t.__k, f = [], e = [], M(t, u = t.__k = y$1(g$1, null, [
        u
    ]), r || c$1, c$1, void 0 !== t.ownerSVGElement, r ? null : t.firstChild ? n.call(t.childNodes) : null, f, r ? r.__e : t.firstChild, o, e), u.__d = void 0, j$1(f, u, e);
}
n = s$1.slice, l$1 = {
    __e: function(n, l, u, t) {
        for(var i, o, r; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u$1 = 0, b$1.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v$1({}, this.state), "function" == typeof n && (n = n(v$1({}, u), this.props)), n && v$1(u, n), null != n && this.__v && (l && this._sb.push(l), x$1(this));
}, b$1.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = true, n && this.__h.push(n), x$1(this));
}, b$1.prototype.render = g$1, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, C$1.__r = 0;
var t, r, u, i, o = 0, f = [], c = [], e = l$1, a = e.__b, v = e.__r, l = e.diffed, m = e.__c, s = e.unmount, d = e.__;
function h(n, t) {
    e.__h && e.__h(r, n, o || t), o = 0;
    var u = r.__H || (r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({
        __V: c
    }), u.__[n];
}
function p(n) {
    return o = 1, y(D, n);
}
function y(n, u, i) {
    var o = h(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : D(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = r, !r.u)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return true;
            var u = o.__c.__H.__.filter(function(n) {
                return !!n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = false;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = true);
                }
            }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
        };
        r.u = true;
        var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
        r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function _(n, u) {
    var i = h(t++, 3);
    !e.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__H.__h.push(i));
}
function A(n, u) {
    var i = h(t++, 4);
    !e.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__h.push(i));
}
function F(n) {
    return o = 5, q(function() {
        return {
            current: n
        };
    }, []);
}
function T(n, t, r) {
    o = 6, A(function() {
        return "function" == typeof n ? (n(t()), function() {
            return n(null);
        }) : n ? (n.current = t(), function() {
            return n.current = null;
        }) : void 0;
    }, null == r ? r : r.concat(n));
}
function q(n, r) {
    var u = h(t++, 7);
    return C(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function x(n, t) {
    return o = 8, q(function() {
        return n;
    }, t);
}
function P(n) {
    var u = r.context[n.__c], i = h(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = true, u.sub(r)), u.props.value) : n.__;
}
function V(n, t) {
    e.useDebugValue && e.useDebugValue(t ? t(n) : n);
}
function b(n) {
    var u = h(t++, 10), i = p();
    return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function g() {
    var n = h(t++, 11);
    if (!n.__) {
        for(var u = r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function j() {
    for(var n; n = f.shift();)if (n.__P && n.__H) try {
        n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
    } catch (t) {
        n.__H.__h = [], e.__e(t, n.__v);
    }
}
e.__b = function(n) {
    r = null, a && a(n);
}, e.__ = function(n, t) {
    t.__k && t.__k.__m && (n.__m = t.__k.__m), d && d(n, t);
}, e.__r = function(n) {
    v && v(n), t = 0;
    var i = (r = n.__c).__H;
    i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
    })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, e.diffed = function(n) {
    l && l(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === e.requestAnimationFrame || ((i = e.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function(n) {
        n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
    })), u = r = null;
}, e.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(z), n.__h = n.__h.filter(function(n) {
                return !n.__ || B(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], e.__e(r, n.__v);
        }
    }), m && m(n, t);
}, e.unmount = function(n) {
    s && s(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            z(n);
        } catch (n) {
            t = n;
        }
    }), r.__H = void 0, t && e.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
    var t, r = function() {
        clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    k && (t = requestAnimationFrame(r));
}
function z(n) {
    var t = r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
    var t = r;
    n.__c = n.__(), r = t;
}
function C(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function D(n, t) {
    return "function" == typeof t ? t(n) : t;
}
const hooks = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    useCallback: x,
    useContext: P,
    useDebugValue: V,
    useEffect: _,
    useErrorBoundary: b,
    useId: g,
    useImperativeHandle: T,
    useLayoutEffect: A,
    useMemo: q,
    useReducer: y,
    useRef: F,
    useState: p
}, Symbol.toStringTag, {
    value: 'Module'
});
const XMLNS$1 = 'http://www.w3.org/2000/svg';
/**
 * Sentry Logo
 */ function SentryLogo() {
    const createElementNS = (tagName)=>DOCUMENT.createElementNS(XMLNS$1, tagName);
    const svg = setAttributesNS(createElementNS('svg'), {
        width: '32',
        height: '30',
        viewBox: '0 0 72 66',
        fill: 'inherit'
    });
    const path = setAttributesNS(createElementNS('path'), {
        transform: 'translate(11, 11)',
        d: 'M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z'
    });
    svg.appendChild(path);
    return svg;
}
function DialogHeader({ options }) {
    const logoHtml = q(()=>({
            __html: SentryLogo().outerHTML
        }), []);
    return y$1('h2', {
        class: "dialog__header"
    }, y$1('span', {
        class: "dialog__title"
    }, options.formTitle), options.showBranding ? y$1('a', {
        class: "brand-link",
        target: "_blank",
        href: "https://sentry.io/welcome/",
        title: "Powered by Sentry",
        rel: "noopener noreferrer",
        dangerouslySetInnerHTML: logoHtml
    }) : null);
}
/**
 * Validate that a given feedback submission has the required fields
 */ function getMissingFields(feedback, props) {
    const emptyFields = [];
    if (props.isNameRequired && !feedback.name) {
        emptyFields.push(props.nameLabel);
    }
    if (props.isEmailRequired && !feedback.email) {
        emptyFields.push(props.emailLabel);
    }
    if (!feedback.message) {
        emptyFields.push(props.messageLabel);
    }
    return emptyFields;
}
function retrieveStringValue(formData, key) {
    const value = formData.get(key);
    if (typeof value === 'string') {
        return value.trim();
    }
    return '';
}
function Form({ options, defaultEmail, defaultName, onFormClose, onSubmit, onSubmitSuccess, onSubmitError, showEmail, showName, screenshotInput }) {
    const { tags, addScreenshotButtonLabel, removeScreenshotButtonLabel, cancelButtonLabel, emailLabel, emailPlaceholder, isEmailRequired, isNameRequired, messageLabel, messagePlaceholder, nameLabel, namePlaceholder, submitButtonLabel, isRequiredLabel } = options;
    const [isSubmitting, setIsSubmitting] = p(false);
    // TODO: set a ref on the form, and whenever an input changes call processForm() and setError()
    const [error, setError] = p(null);
    const [showScreenshotInput, setShowScreenshotInput] = p(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ScreenshotInputComponent = screenshotInput?.input;
    const [screenshotError, setScreenshotError] = p(null);
    const onScreenshotError = x((error)=>{
        setScreenshotError(error);
        setShowScreenshotInput(false);
    }, []);
    const hasAllRequiredFields = x((data)=>{
        const missingFields = getMissingFields(data, {
            emailLabel,
            isEmailRequired,
            isNameRequired,
            messageLabel,
            nameLabel
        });
        if (missingFields.length > 0) {
            setError(`Please enter in the following required fields: ${missingFields.join(', ')}`);
        } else {
            setError(null);
        }
        return missingFields.length === 0;
    }, [
        emailLabel,
        isEmailRequired,
        isNameRequired,
        messageLabel,
        nameLabel
    ]);
    const handleSubmit = x(async (e)=>{
        setIsSubmitting(true);
        try {
            e.preventDefault();
            if (!(e.target instanceof HTMLFormElement)) {
                return;
            }
            const formData = new FormData(e.target);
            const attachment = await (screenshotInput && showScreenshotInput ? screenshotInput.value() : undefined);
            const data = {
                name: retrieveStringValue(formData, 'name'),
                email: retrieveStringValue(formData, 'email'),
                message: retrieveStringValue(formData, 'message'),
                attachments: attachment ? [
                    attachment
                ] : undefined
            };
            if (!hasAllRequiredFields(data)) {
                return;
            }
            try {
                const eventId = await onSubmit({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    source: FEEDBACK_WIDGET_SOURCE,
                    tags
                }, {
                    attachments: data.attachments
                });
                onSubmitSuccess(data, eventId);
            } catch (error) {
                DEBUG_BUILD && __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error(error);
                setError(error);
                onSubmitError(error);
            }
        } finally{
            setIsSubmitting(false);
        }
    }, [
        screenshotInput && showScreenshotInput,
        onSubmitSuccess,
        onSubmitError
    ]);
    return y$1('form', {
        class: "form",
        onSubmit: handleSubmit
    }, ScreenshotInputComponent && showScreenshotInput ? y$1(ScreenshotInputComponent, {
        onError: onScreenshotError
    }) : null, y$1('fieldset', {
        class: "form__right",
        'data-sentry-feedback': true,
        disabled: isSubmitting
    }, y$1('div', {
        class: "form__top"
    }, error ? y$1('div', {
        class: "form__error-container"
    }, error) : null, showName ? y$1('label', {
        for: "name",
        class: "form__label"
    }, y$1(LabelText, {
        label: nameLabel,
        isRequiredLabel: isRequiredLabel,
        isRequired: isNameRequired
    }), y$1('input', {
        class: "form__input",
        defaultValue: defaultName,
        id: "name",
        name: "name",
        placeholder: namePlaceholder,
        required: isNameRequired,
        type: "text"
    })) : y$1('input', {
        'aria-hidden': true,
        value: defaultName,
        name: "name",
        type: "hidden"
    }), showEmail ? y$1('label', {
        for: "email",
        class: "form__label"
    }, y$1(LabelText, {
        label: emailLabel,
        isRequiredLabel: isRequiredLabel,
        isRequired: isEmailRequired
    }), y$1('input', {
        class: "form__input",
        defaultValue: defaultEmail,
        id: "email",
        name: "email",
        placeholder: emailPlaceholder,
        required: isEmailRequired,
        type: "email"
    })) : y$1('input', {
        'aria-hidden': true,
        value: defaultEmail,
        name: "email",
        type: "hidden"
    }), y$1('label', {
        for: "message",
        class: "form__label"
    }, y$1(LabelText, {
        label: messageLabel,
        isRequiredLabel: isRequiredLabel,
        isRequired: true
    }), y$1('textarea', {
        autoFocus: true,
        class: "form__input form__input--textarea",
        id: "message",
        name: "message",
        placeholder: messagePlaceholder,
        required: true,
        rows: 5
    })), ScreenshotInputComponent ? y$1('label', {
        for: "screenshot",
        class: "form__label"
    }, y$1('button', {
        class: "btn btn--default",
        disabled: isSubmitting,
        type: "button",
        onClick: ()=>{
            setScreenshotError(null);
            setShowScreenshotInput((prev)=>!prev);
        }
    }, showScreenshotInput ? removeScreenshotButtonLabel : addScreenshotButtonLabel), screenshotError ? y$1('div', {
        class: "form__error-container"
    }, screenshotError.message) : null) : null), y$1('div', {
        class: "btn-group"
    }, y$1('button', {
        class: "btn btn--primary",
        disabled: isSubmitting,
        type: "submit"
    }, submitButtonLabel), y$1('button', {
        class: "btn btn--default",
        disabled: isSubmitting,
        type: "button",
        onClick: onFormClose
    }, cancelButtonLabel))));
}
function LabelText({ label, isRequired, isRequiredLabel }) {
    return y$1('span', {
        class: "form__label__text"
    }, label, isRequired && y$1('span', {
        class: "form__label__text--required"
    }, isRequiredLabel));
}
const WIDTH = 16;
const HEIGHT = 17;
const XMLNS = 'http://www.w3.org/2000/svg';
/**
 * Success Icon (checkmark)
 */ function SuccessIcon() {
    const createElementNS = (tagName)=>WINDOW.document.createElementNS(XMLNS, tagName);
    const svg = setAttributesNS(createElementNS('svg'), {
        width: `${WIDTH}`,
        height: `${HEIGHT}`,
        viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
        fill: 'inherit'
    });
    const g = setAttributesNS(createElementNS('g'), {
        clipPath: 'url(#clip0_57_156)'
    });
    const path2 = setAttributesNS(createElementNS('path'), {
        ['fill-rule']: 'evenodd',
        ['clip-rule']: 'evenodd',
        d: 'M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z'
    });
    const path = setAttributesNS(createElementNS('path'), {
        d: 'M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z'
    });
    svg.appendChild(g).append(path, path2);
    const speakerDefs = createElementNS('defs');
    const speakerClipPathDef = setAttributesNS(createElementNS('clipPath'), {
        id: 'clip0_57_156'
    });
    const speakerRect = setAttributesNS(createElementNS('rect'), {
        width: `${WIDTH}`,
        height: `${WIDTH}`,
        fill: 'white',
        transform: 'translate(0 0.5)'
    });
    speakerClipPathDef.appendChild(speakerRect);
    speakerDefs.appendChild(speakerClipPathDef);
    svg.appendChild(speakerDefs).appendChild(speakerClipPathDef).appendChild(speakerRect);
    return svg;
}
function Dialog({ open, onFormSubmitted, ...props }) {
    const options = props.options;
    const successIconHtml = q(()=>({
            __html: SuccessIcon().outerHTML
        }), []);
    const [timeoutId, setTimeoutId] = p(null);
    const handleOnSuccessClick = x(()=>{
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        onFormSubmitted();
    }, [
        timeoutId
    ]);
    const onSubmitSuccess = x((data, eventId)=>{
        props.onSubmitSuccess(data, eventId);
        setTimeoutId(setTimeout(()=>{
            onFormSubmitted();
            setTimeoutId(null);
        }, SUCCESS_MESSAGE_TIMEOUT));
    }, [
        onFormSubmitted
    ]);
    return y$1(g$1, null, timeoutId ? y$1('div', {
        class: "success__position",
        onClick: handleOnSuccessClick
    }, y$1('div', {
        class: "success__content"
    }, options.successMessageText, y$1('span', {
        class: "success__icon",
        dangerouslySetInnerHTML: successIconHtml
    }))) : y$1('dialog', {
        class: "dialog",
        onClick: options.onFormClose,
        open: open
    }, y$1('div', {
        class: "dialog__position"
    }, y$1('div', {
        class: "dialog__content",
        onClick: (e)=>{
            // Stop event propagation so clicks on content modal do not propagate to dialog (which will close dialog)
            e.stopPropagation();
        }
    }, y$1(DialogHeader, {
        options: options
    }), y$1(Form, {
        ...props,
        onSubmitSuccess: onSubmitSuccess
    })))));
}
const DIALOG = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`;
const DIALOG_HEADER = `
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`;
const FORM = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`;
const BUTTON = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`;
const SUCCESS = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`;
/**
 * Creates <style> element for widget dialog
 */ function createDialogStyles(styleNonce) {
    const style = DOCUMENT.createElement('style');
    style.textContent = `
:host {
  --dialog-inset: var(--inset);
}

${DIALOG}
${DIALOG_HEADER}
${FORM}
${BUTTON}
${SUCCESS}
`;
    if (styleNonce) {
        style.setAttribute('nonce', styleNonce);
    }
    return style;
}
function getUser() {
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])().getUser();
    const isolationUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])().getUser();
    const globalUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalScope"])().getUser();
    if (currentUser && Object.keys(currentUser).length) {
        return currentUser;
    }
    if (isolationUser && Object.keys(isolationUser).length) {
        return isolationUser;
    }
    return globalUser;
}
const feedbackModalIntegration = ()=>{
    return {
        name: 'FeedbackModal',
        setupOnce () {},
        createDialog: ({ options, screenshotIntegration, sendFeedback, shadow })=>{
            const shadowRoot = shadow;
            const userKey = options.useSentryUser;
            const user = getUser();
            const el = DOCUMENT.createElement('div');
            const style = createDialogStyles(options.styleNonce);
            let originalOverflow = '';
            const dialog = {
                get el () {
                    return el;
                },
                appendToDom () {
                    if (!shadowRoot.contains(style) && !shadowRoot.contains(el)) {
                        shadowRoot.appendChild(style);
                        shadowRoot.appendChild(el);
                    }
                },
                removeFromDom () {
                    el.remove();
                    style.remove();
                    DOCUMENT.body.style.overflow = originalOverflow;
                },
                open () {
                    renderContent(true);
                    options.onFormOpen?.();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])()?.emit('openFeedbackWidget');
                    originalOverflow = DOCUMENT.body.style.overflow;
                    DOCUMENT.body.style.overflow = 'hidden';
                },
                close () {
                    renderContent(false);
                    DOCUMENT.body.style.overflow = originalOverflow;
                }
            };
            const screenshotInput = screenshotIntegration?.createInput({
                h: y$1,
                hooks,
                dialog,
                options
            });
            const renderContent = (open)=>{
                B$1(y$1(Dialog, {
                    options: options,
                    screenshotInput: screenshotInput,
                    showName: options.showName || options.isNameRequired,
                    showEmail: options.showEmail || options.isEmailRequired,
                    defaultName: userKey && user?.[userKey.name] || '',
                    defaultEmail: userKey && user?.[userKey.email] || '',
                    onFormClose: ()=>{
                        renderContent(false);
                        options.onFormClose?.();
                    },
                    onSubmit: sendFeedback,
                    onSubmitSuccess: (data, eventId)=>{
                        renderContent(false);
                        options.onSubmitSuccess?.(data, eventId);
                    },
                    onSubmitError: (error)=>{
                        options.onSubmitError?.(error);
                    },
                    onFormSubmitted: ()=>{
                        options.onFormSubmitted?.();
                    },
                    open: open
                }), el);
            };
            return dialog;
        }
    };
};
function IconCloseFactory({ h }) {
    return function IconClose() {
        return h('svg', {
            'data-test-id': "icon-close",
            viewBox: "0 0 16 16",
            fill: "#2B2233",
            height: "25px",
            width: "25px"
        }, h('circle', {
            r: "7",
            cx: "8",
            cy: "8",
            fill: "white"
        }), h('path', {
            strokeWidth: "1.5",
            d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"
        }), h('path', {
            strokeWidth: "1.5",
            d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z"
        }), h('path', {
            strokeWidth: "1.5",
            d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z"
        }));
    };
}
/**
 * Creates <style> element for widget dialog
 */ function createScreenshotInputStyles(styleNonce) {
    const style = DOCUMENT.createElement('style');
    const surface200 = '#1A141F';
    const gray100 = '#302735';
    style.textContent = `
.editor {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.editor__image-container {
  justify-items: center;
  padding: 15px;
  position: relative;
  height: 100%;
  border-radius: var(--menu-border-radius, 6px);

  background-color: ${surface200};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${surface200} 8px,
      ${surface200} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${gray100} 15px,
      ${gray100} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container > * {
  object-fit: contain;
  position: absolute;
}

.editor__tool-container {
  padding-top: 8px;
  display: flex;
  justify-content: center;
}

.editor__tool-bar {
  display: flex;
  gap: 8px;
}

.editor__tool {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  background: var(--button-background, var(--background));
  color: var(--button-color, var(--foreground));
}

.editor__tool--active {
  background: var(--button-primary-background, var(--accent-background));
  color: var(--button-primary-color, var(--accent-foreground));
}

.editor__rect {
  position: absolute;
  z-index: 2;
}

.editor__rect button {
  opacity: 0;
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
  padding: 0;
  z-index: 3;
  border: none;
  background: none;
}

.editor__rect:hover button {
  opacity: 1;
}
`;
    if (styleNonce) {
        style.setAttribute('nonce', styleNonce);
    }
    return style;
}
function ToolbarFactory({ h }) {
    return function Toolbar({ action, setAction, options }) {
        return h('div', {
            class: "editor__tool-container"
        }, h('div', {
            class: "editor__tool-bar"
        }, h('button', {
            type: "button",
            class: `editor__tool ${action === 'highlight' ? 'editor__tool--active' : ''}`,
            onClick: ()=>{
                setAction(action === 'highlight' ? '' : 'highlight');
            }
        }, options.highlightToolText), h('button', {
            type: "button",
            class: `editor__tool ${action === 'hide' ? 'editor__tool--active' : ''}`,
            onClick: ()=>{
                setAction(action === 'hide' ? '' : 'hide');
            }
        }, options.hideToolText)));
    };
}
function useTakeScreenshotFactory({ hooks }) {
    function useDpi() {
        const [dpi, setDpi] = hooks.useState(WINDOW.devicePixelRatio ?? 1);
        hooks.useEffect({
            "useTakeScreenshotFactory.useDpi.useEffect": ()=>{
                const onChange = {
                    "useTakeScreenshotFactory.useDpi.useEffect.onChange": ()=>{
                        setDpi(WINDOW.devicePixelRatio);
                    }
                }["useTakeScreenshotFactory.useDpi.useEffect.onChange"];
                const media = matchMedia(`(resolution: ${WINDOW.devicePixelRatio}dppx)`);
                media.addEventListener('change', onChange);
                return ({
                    "useTakeScreenshotFactory.useDpi.useEffect": ()=>{
                        media.removeEventListener('change', onChange);
                    }
                })["useTakeScreenshotFactory.useDpi.useEffect"];
            }
        }["useTakeScreenshotFactory.useDpi.useEffect"], []);
        return dpi;
    }
    return function useTakeScreenshot({ onBeforeScreenshot, onScreenshot, onAfterScreenshot, onError }) {
        const dpi = useDpi();
        hooks.useEffect({
            "useTakeScreenshotFactory.useTakeScreenshot.useEffect": ()=>{
                const takeScreenshot = {
                    "useTakeScreenshotFactory.useTakeScreenshot.useEffect.takeScreenshot": async ()=>{
                        onBeforeScreenshot();
                        // Chrome will animate a top-bar which can shrink the window height by a
                        // few pixels. The exact amount depends on how fast it takes to exec
                        // the onloadedmetadata callback.
                        // https://stackoverflow.com/q/75833049
                        const stream = await NAVIGATOR.mediaDevices.getDisplayMedia({
                            video: {
                                width: WINDOW.innerWidth * dpi,
                                height: WINDOW.innerHeight * dpi
                            },
                            audio: false,
                            // @ts-expect-error experimental flags: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab
                            monitorTypeSurfaces: 'exclude',
                            preferCurrentTab: true,
                            selfBrowserSurface: 'include',
                            surfaceSwitching: 'exclude'
                        });
                        const video = DOCUMENT.createElement('video');
                        await new Promise({
                            "useTakeScreenshotFactory.useTakeScreenshot.useEffect.takeScreenshot": (resolve, reject)=>{
                                video.srcObject = stream;
                                video.onloadedmetadata = ({
                                    "useTakeScreenshotFactory.useTakeScreenshot.useEffect.takeScreenshot": ()=>{
                                        onScreenshot(video, dpi);
                                        stream.getTracks().forEach({
                                            "useTakeScreenshotFactory.useTakeScreenshot.useEffect.takeScreenshot": (track)=>track.stop()
                                        }["useTakeScreenshotFactory.useTakeScreenshot.useEffect.takeScreenshot"]);
                                        resolve();
                                    }
                                })["useTakeScreenshotFactory.useTakeScreenshot.useEffect.takeScreenshot"];
                                video.play().catch(reject);
                            }
                        }["useTakeScreenshotFactory.useTakeScreenshot.useEffect.takeScreenshot"]);
                        onAfterScreenshot();
                    }
                }["useTakeScreenshotFactory.useTakeScreenshot.useEffect.takeScreenshot"];
                takeScreenshot().catch(onError);
            }
        }["useTakeScreenshotFactory.useTakeScreenshot.useEffect"], []);
    };
}
function drawRect(command, ctx, color) {
    switch(command.type){
        case 'highlight':
            {
                // creates a shadow around
                ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
                ctx.shadowBlur = 50;
                // draws a rectangle first with a shadow
                ctx.fillStyle = color;
                ctx.fillRect(command.x - 1, command.y - 1, command.w + 2, command.h + 2);
                // cut out the inside of the rectangle
                ctx.clearRect(command.x, command.y, command.w, command.h);
                break;
            }
        case 'hide':
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(command.x, command.y, command.w, command.h);
            break;
    }
}
function with2dContext(canvas, options, callback) {
    if (!canvas) {
        return;
    }
    const ctx = canvas.getContext('2d', options);
    if (!ctx) {
        return;
    }
    callback(canvas, ctx);
}
function paintImage(maybeDest, source) {
    with2dContext(maybeDest, {
        alpha: true
    }, (destCanvas, destCtx)=>{
        destCtx.drawImage(source, 0, 0, source.width, source.height, 0, 0, destCanvas.width, destCanvas.height);
    });
}
// Paint the array of drawCommands into a canvas.
// Assuming this is the canvas foreground, and the background is cleaned.
function paintForeground(maybeCanvas, strokeColor, drawCommands) {
    with2dContext(maybeCanvas, {
        alpha: true
    }, (canvas, ctx)=>{
        // If there's anything to draw, then we'll first clear the canvas with
        // a transparent grey background
        if (drawCommands.length) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        drawCommands.forEach((command)=>{
            drawRect(command, ctx, strokeColor);
        });
    });
}
function ScreenshotEditorFactory({ h, hooks, outputBuffer, dialog, options }) {
    const useTakeScreenshot = useTakeScreenshotFactory({
        hooks
    });
    const Toolbar = ToolbarFactory({
        h
    });
    const IconClose = IconCloseFactory({
        h
    });
    const editorStyleInnerText = {
        __html: createScreenshotInputStyles(options.styleNonce).innerText
    };
    const dialogStyle = dialog.el.style;
    const ScreenshotEditor = ({ screenshot })=>{
        // Data for rendering:
        const [action, setAction] = hooks.useState('highlight');
        const [drawCommands, setDrawCommands] = hooks.useState([]);
        // Refs to our html components:
        const measurementRef = hooks.useRef(null);
        const backgroundRef = hooks.useRef(null);
        const foregroundRef = hooks.useRef(null);
        const mouseRef = hooks.useRef(null);
        // The size of our window, relative to the imageSource
        const [scaleFactor, setScaleFactor] = hooks.useState(1);
        const strokeColor = hooks.useMemo({
            "ScreenshotEditorFactory.ScreenshotEditor.useMemo[strokeColor]": ()=>{
                const sentryFeedback = DOCUMENT.getElementById(options.id);
                if (!sentryFeedback) {
                    return 'white';
                }
                const computedStyle = getComputedStyle(sentryFeedback);
                return computedStyle.getPropertyValue('--button-primary-background') || computedStyle.getPropertyValue('--accent-background');
            }
        }["ScreenshotEditorFactory.ScreenshotEditor.useMemo[strokeColor]"], [
            options.id
        ]);
        // The initial resize, to measure the area and set the children to the correct size
        hooks.useLayoutEffect({
            "ScreenshotEditorFactory.ScreenshotEditor.useLayoutEffect": ()=>{
                const handleResize = {
                    "ScreenshotEditorFactory.ScreenshotEditor.useLayoutEffect.handleResize": ()=>{
                        const measurementDiv = measurementRef.current;
                        if (!measurementDiv) {
                            return;
                        }
                        with2dContext(screenshot.canvas, {
                            alpha: false
                        }, {
                            "ScreenshotEditorFactory.ScreenshotEditor.useLayoutEffect.handleResize": (canvas)=>{
                                const scale = Math.min(measurementDiv.clientWidth / canvas.width, measurementDiv.clientHeight / canvas.height);
                                setScaleFactor(scale);
                            }
                        }["ScreenshotEditorFactory.ScreenshotEditor.useLayoutEffect.handleResize"]);
                        // For Firefox, the canvas is not yet measured, so we need to wait for it to get the correct size
                        if (measurementDiv.clientHeight === 0 || measurementDiv.clientWidth === 0) {
                            setTimeout(handleResize, 0);
                        }
                    }
                }["ScreenshotEditorFactory.ScreenshotEditor.useLayoutEffect.handleResize"];
                handleResize();
                WINDOW.addEventListener('resize', handleResize);
                return ({
                    "ScreenshotEditorFactory.ScreenshotEditor.useLayoutEffect": ()=>{
                        WINDOW.removeEventListener('resize', handleResize);
                    }
                })["ScreenshotEditorFactory.ScreenshotEditor.useLayoutEffect"];
            }
        }["ScreenshotEditorFactory.ScreenshotEditor.useLayoutEffect"], [
            screenshot
        ]);
        // Set the size of the canvas element to match our screenshot
        const setCanvasSize = hooks.useCallback({
            "ScreenshotEditorFactory.ScreenshotEditor.useCallback[setCanvasSize]": (maybeCanvas, scale)=>{
                with2dContext(maybeCanvas, {
                    alpha: true
                }, {
                    "ScreenshotEditorFactory.ScreenshotEditor.useCallback[setCanvasSize]": (canvas, ctx)=>{
                        // Must call `scale()` before setting `width` & `height`
                        ctx.scale(scale, scale);
                        canvas.width = screenshot.canvas.width;
                        canvas.height = screenshot.canvas.height;
                    }
                }["ScreenshotEditorFactory.ScreenshotEditor.useCallback[setCanvasSize]"]);
            }
        }["ScreenshotEditorFactory.ScreenshotEditor.useCallback[setCanvasSize]"], [
            screenshot
        ]);
        // Draw the screenshot into the background
        hooks.useEffect({
            "ScreenshotEditorFactory.ScreenshotEditor.useEffect": ()=>{
                setCanvasSize(backgroundRef.current, screenshot.dpi);
                paintImage(backgroundRef.current, screenshot.canvas);
            }
        }["ScreenshotEditorFactory.ScreenshotEditor.useEffect"], [
            screenshot
        ]);
        // Draw the commands into the foreground
        hooks.useEffect({
            "ScreenshotEditorFactory.ScreenshotEditor.useEffect": ()=>{
                setCanvasSize(foregroundRef.current, screenshot.dpi);
                with2dContext(foregroundRef.current, {
                    alpha: true
                }, {
                    "ScreenshotEditorFactory.ScreenshotEditor.useEffect": (canvas, ctx)=>{
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                    }
                }["ScreenshotEditorFactory.ScreenshotEditor.useEffect"]);
                paintForeground(foregroundRef.current, strokeColor, drawCommands);
            }
        }["ScreenshotEditorFactory.ScreenshotEditor.useEffect"], [
            drawCommands,
            strokeColor
        ]);
        // Draw into the output outputBuffer
        hooks.useEffect({
            "ScreenshotEditorFactory.ScreenshotEditor.useEffect": ()=>{
                setCanvasSize(outputBuffer, screenshot.dpi);
                paintImage(outputBuffer, screenshot.canvas);
                with2dContext(DOCUMENT.createElement('canvas'), {
                    alpha: true
                }, {
                    "ScreenshotEditorFactory.ScreenshotEditor.useEffect": (foreground, ctx)=>{
                        ctx.scale(screenshot.dpi, screenshot.dpi); // The scale needs to be set before we set the width/height and paint
                        foreground.width = screenshot.canvas.width;
                        foreground.height = screenshot.canvas.height;
                        paintForeground(foreground, strokeColor, drawCommands);
                        paintImage(outputBuffer, foreground);
                    }
                }["ScreenshotEditorFactory.ScreenshotEditor.useEffect"]);
            }
        }["ScreenshotEditorFactory.ScreenshotEditor.useEffect"], [
            drawCommands,
            screenshot,
            strokeColor
        ]);
        const handleMouseDown = (e)=>{
            if (!action || !mouseRef.current) {
                return;
            }
            const boundingRect = mouseRef.current.getBoundingClientRect();
            const startingPoint = {
                type: action,
                x: e.offsetX / scaleFactor,
                y: e.offsetY / scaleFactor
            };
            const getDrawCommand = (startingPoint, e)=>{
                const x = (e.clientX - boundingRect.x) / scaleFactor;
                const y = (e.clientY - boundingRect.y) / scaleFactor;
                return {
                    type: startingPoint.type,
                    x: Math.min(startingPoint.x, x),
                    y: Math.min(startingPoint.y, y),
                    w: Math.abs(x - startingPoint.x),
                    h: Math.abs(y - startingPoint.y)
                };
            };
            const handleMouseMove = (e)=>{
                with2dContext(foregroundRef.current, {
                    alpha: true
                }, (canvas, ctx)=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                });
                paintForeground(foregroundRef.current, strokeColor, [
                    ...drawCommands,
                    getDrawCommand(startingPoint, e)
                ]);
            };
            const handleMouseUp = (e)=>{
                const drawCommand = getDrawCommand(startingPoint, e);
                // Prevent just clicking onto the canvas, mouse has to move at least 1 pixel
                if (drawCommand.w * scaleFactor >= 1 && drawCommand.h * scaleFactor >= 1) {
                    setDrawCommands((prev)=>[
                            ...prev,
                            drawCommand
                        ]);
                }
                DOCUMENT.removeEventListener('mousemove', handleMouseMove);
                DOCUMENT.removeEventListener('mouseup', handleMouseUp);
            };
            DOCUMENT.addEventListener('mousemove', handleMouseMove);
            DOCUMENT.addEventListener('mouseup', handleMouseUp);
        };
        const deleteRect = hooks.useCallback({
            "ScreenshotEditorFactory.ScreenshotEditor.useCallback[deleteRect]": (index)=>{
                return ({
                    "ScreenshotEditorFactory.ScreenshotEditor.useCallback[deleteRect]": (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        setDrawCommands({
                            "ScreenshotEditorFactory.ScreenshotEditor.useCallback[deleteRect]": (prev)=>{
                                const updatedRects = [
                                    ...prev
                                ];
                                updatedRects.splice(index, 1);
                                return updatedRects;
                            }
                        }["ScreenshotEditorFactory.ScreenshotEditor.useCallback[deleteRect]"]);
                    }
                })["ScreenshotEditorFactory.ScreenshotEditor.useCallback[deleteRect]"];
            }
        }["ScreenshotEditorFactory.ScreenshotEditor.useCallback[deleteRect]"], []);
        const dimensions = {
            width: `${screenshot.canvas.width * scaleFactor}px`,
            height: `${screenshot.canvas.height * scaleFactor}px`
        };
        const handleStopPropagation = (e)=>{
            e.stopPropagation();
        };
        return h('div', {
            class: "editor"
        }, h('style', {
            nonce: options.styleNonce,
            dangerouslySetInnerHTML: editorStyleInnerText
        }), h('div', {
            class: "editor__image-container"
        }, h('div', {
            class: "editor__canvas-container",
            ref: measurementRef
        }, h('canvas', {
            ref: backgroundRef,
            id: "background",
            style: dimensions
        }), h('canvas', {
            ref: foregroundRef,
            id: "foreground",
            style: dimensions
        }), h('div', {
            ref: mouseRef,
            onMouseDown: handleMouseDown,
            style: dimensions
        }, drawCommands.map((rect, index)=>h('div', {
                key: index,
                class: "editor__rect",
                style: {
                    top: `${rect.y * scaleFactor}px`,
                    left: `${rect.x * scaleFactor}px`,
                    width: `${rect.w * scaleFactor}px`,
                    height: `${rect.h * scaleFactor}px`
                }
            }, h('button', {
                'aria-label': options.removeHighlightText,
                onClick: deleteRect(index),
                onMouseDown: handleStopPropagation,
                onMouseUp: handleStopPropagation,
                type: "button"
            }, h(IconClose, null))))))), h(Toolbar, {
            options: options,
            action: action,
            setAction: setAction
        }));
    };
    return function Wrapper({ onError }) {
        const [screenshot, setScreenshot] = hooks.useState();
        useTakeScreenshot({
            onBeforeScreenshot: hooks.useCallback({
                "ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback": ()=>{
                    dialogStyle.display = 'none';
                }
            }["ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback"], []),
            onScreenshot: hooks.useCallback({
                "ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback": (screenshotVideo, dpi)=>{
                    // Stash the original screenshot image so we can (re)draw it multiple times
                    with2dContext(DOCUMENT.createElement('canvas'), {
                        alpha: false
                    }, {
                        "ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback": (canvas, ctx)=>{
                            ctx.scale(dpi, dpi); // The scale needs to be set before we set the width/height and paint
                            canvas.width = screenshotVideo.videoWidth;
                            canvas.height = screenshotVideo.videoHeight;
                            ctx.drawImage(screenshotVideo, 0, 0, canvas.width, canvas.height);
                            setScreenshot({
                                canvas,
                                dpi
                            });
                        }
                    }["ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback"]);
                    // The output buffer, we only need to set the width/height on this once, it stays the same forever
                    outputBuffer.width = screenshotVideo.videoWidth;
                    outputBuffer.height = screenshotVideo.videoHeight;
                }
            }["ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback"], []),
            onAfterScreenshot: hooks.useCallback({
                "ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback": ()=>{
                    dialogStyle.display = 'block';
                }
            }["ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback"], []),
            onError: hooks.useCallback({
                "ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback": (error)=>{
                    dialogStyle.display = 'block';
                    onError(error);
                }
            }["ScreenshotEditorFactory.Wrapper.useTakeScreenshot.useCallback"], [])
        });
        if (screenshot) {
            return h(ScreenshotEditor, {
                screenshot: screenshot
            });
        }
        return h('div', null);
    };
}
const feedbackScreenshotIntegration = ()=>{
    return {
        name: 'FeedbackScreenshot',
        setupOnce () {},
        createInput: ({ h, hooks, dialog, options })=>{
            const outputBuffer = DOCUMENT.createElement('canvas');
            return {
                input: ScreenshotEditorFactory({
                    h: h,
                    hooks: hooks,
                    outputBuffer,
                    dialog,
                    options
                }),
                value: async ()=>{
                    const blob = await new Promise((resolve)=>{
                        outputBuffer.toBlob(resolve, 'image/png');
                    });
                    if (blob) {
                        const data = new Uint8Array(await blob.arrayBuffer());
                        const attachment = {
                            data,
                            filename: 'screenshot.png',
                            contentType: 'application/png'
                        };
                        return attachment;
                    }
                    return undefined;
                }
            };
        }
    };
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Omi-AI-1/node_modules/.pnpm/@sentry-internal+replay-canvas@10.25.0/node_modules/@sentry-internal/replay-canvas/build/npm/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replayCanvasIntegration",
    ()=>replayCanvasIntegration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Omi-AI-1/node_modules/.pnpm/@sentry+core@10.25.0/node_modules/@sentry/core/build/esm/integration.js [app-client] (ecmascript)");
;
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value)=>key in obj ? __defProp$1(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField$1 = (obj, key, value)=>__defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
class Mirror {
    constructor(){
        __publicField$1(this, "idNodeMap", /* @__PURE__ */ new Map());
        __publicField$1(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
    }
    getId(n2) {
        if (!n2) return -1;
        const id = this.getMeta(n2)?.id;
        return id ?? -1;
    }
    getNode(id) {
        return this.idNodeMap.get(id) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(n2) {
        return this.nodeMetaMap.get(n2) || null;
    }
    // removes the node from idNodeMap
    // doesn't remove the node from nodeMetaMap
    removeNodeFromMap(n2) {
        const id = this.getId(n2);
        this.idNodeMap.delete(id);
        if (n2.childNodes) {
            n2.childNodes.forEach((childNode)=>this.removeNodeFromMap(childNode));
        }
    }
    has(id) {
        return this.idNodeMap.has(id);
    }
    hasNode(node) {
        return this.nodeMetaMap.has(node);
    }
    add(n2, meta) {
        const id = meta.id;
        this.idNodeMap.set(id, n2);
        this.nodeMetaMap.set(n2, meta);
    }
    replace(id, n2) {
        const oldNode = this.getNode(id);
        if (oldNode) {
            const meta = this.nodeMetaMap.get(oldNode);
            if (meta) this.nodeMetaMap.set(n2, meta);
        }
        this.idNodeMap.set(id, n2);
    }
    reset() {
        this.idNodeMap = /* @__PURE__ */ new Map();
        this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
}
function createMirror$2() {
    return new Mirror();
}
function elementClassMatchesRegex(el, regex) {
    for(let eIndex = el.classList.length; eIndex--;){
        const className = el.classList[eIndex];
        if (regex.test(className)) {
            return true;
        }
    }
    return false;
}
function distanceToMatch(node, matchPredicate, limit = Infinity, distance = 0) {
    if (!node) return -1;
    if (node.nodeType !== node.ELEMENT_NODE) return -1;
    if (distance > limit) return -1;
    if (matchPredicate(node)) return distance;
    return distanceToMatch(node.parentNode, matchPredicate, limit, distance + 1);
}
function createMatchPredicate(className, selector) {
    return (node)=>{
        const el = node;
        if (el === null) return false;
        try {
            if (className) {
                if (typeof className === "string") {
                    if (el.matches(`.${className}`)) return true;
                } else if (elementClassMatchesRegex(el, className)) {
                    return true;
                }
            }
            if (selector && el.matches(selector)) return true;
            return false;
        } catch  {
            return false;
        }
    };
}
const DEPARTED_MIRROR_ACCESS_WARNING = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
let _mirror = {
    map: {},
    getId () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return -1;
    },
    getNode () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return null;
    },
    removeNodeFromMap () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
    has () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return false;
    },
    reset () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    }
};
if (typeof window !== "undefined" && window.Proxy && window.Reflect) {
    _mirror = new Proxy(_mirror, {
        get (target, prop, receiver) {
            if (prop === "map") {
                console.error(DEPARTED_MIRROR_ACCESS_WARNING);
            }
            return Reflect.get(target, prop, receiver);
        }
    });
}
function hookSetter(target, key, d, isRevoked, win = window) {
    const original = win.Object.getOwnPropertyDescriptor(target, key);
    win.Object.defineProperty(target, key, isRevoked ? d : {
        set (value) {
            setTimeout$1(()=>{
                d.set.call(this, value);
            }, 0);
            if (original && original.set) {
                original.set.call(this, value);
            }
        }
    });
    return ()=>hookSetter(target, key, original || {}, true);
}
function patch(source, name, replacement) {
    try {
        if (!(name in source)) {
            return ()=>{};
        }
        const original = source[name];
        const wrapped = replacement(original);
        if (typeof wrapped === "function") {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __rrweb_original__: {
                    enumerable: false,
                    value: original
                }
            });
        }
        source[name] = wrapped;
        return ()=>{
            source[name] = original;
        };
    } catch  {
        return ()=>{};
    }
}
if (!/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString())) ;
function closestElementOfNode(node) {
    if (!node) {
        return null;
    }
    try {
        const el = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
        return el;
    } catch (error) {
        return null;
    }
}
function isBlocked(node, blockClass, blockSelector, unblockSelector, checkAncestors) {
    if (!node) {
        return false;
    }
    const el = closestElementOfNode(node);
    if (!el) {
        return false;
    }
    const blockedPredicate = createMatchPredicate(blockClass, blockSelector);
    if (!checkAncestors) {
        const isUnblocked = unblockSelector && el.matches(unblockSelector);
        return blockedPredicate(el) && !isUnblocked;
    }
    const blockDistance = distanceToMatch(el, blockedPredicate);
    let unblockDistance = -1;
    if (blockDistance < 0) {
        return false;
    }
    if (unblockSelector) {
        unblockDistance = distanceToMatch(el, createMatchPredicate(null, unblockSelector));
    }
    if (blockDistance > -1 && unblockDistance < 0) {
        return true;
    }
    return blockDistance < unblockDistance;
}
const cachedImplementations = {};
function getImplementation(name) {
    const cached = cachedImplementations[name];
    if (cached) {
        return cached;
    }
    const document2 = window.document;
    let impl = window[name];
    if (document2 && typeof document2.createElement === "function") {
        try {
            const sandbox = document2.createElement("iframe");
            sandbox.hidden = true;
            document2.head.appendChild(sandbox);
            const contentWindow = sandbox.contentWindow;
            if (contentWindow && contentWindow[name]) {
                impl = contentWindow[name];
            }
            document2.head.removeChild(sandbox);
        } catch (e2) {}
    }
    return cachedImplementations[name] = impl.bind(window);
}
function onRequestAnimationFrame(...rest) {
    return getImplementation("requestAnimationFrame")(...rest);
}
function setTimeout$1(...rest) {
    return getImplementation("setTimeout")(...rest);
}
var CanvasContext = /* @__PURE__ */ ((CanvasContext2)=>{
    CanvasContext2[CanvasContext2["2D"] = 0] = "2D";
    CanvasContext2[CanvasContext2["WebGL"] = 1] = "WebGL";
    CanvasContext2[CanvasContext2["WebGL2"] = 2] = "WebGL2";
    return CanvasContext2;
})(CanvasContext || {});
let errorHandler;
function registerErrorHandler(handler) {
    errorHandler = handler;
}
const callbackWrapper = (cb)=>{
    if (!errorHandler) {
        return cb;
    }
    const rrwebWrapped = (...rest)=>{
        try {
            return cb(...rest);
        } catch (error) {
            if (errorHandler && errorHandler(error) === true) {
                return ()=>{};
            }
            throw error;
        }
    };
    return rrwebWrapped;
};
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for(var i$1 = 0; i$1 < chars.length; i$1++){
    lookup[chars.charCodeAt(i$1)] = i$1;
}
var encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";
    for(i2 = 0; i2 < len; i2 += 3){
        base64 += chars[bytes[i2] >> 2];
        base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];
        base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];
        base64 += chars[bytes[i2 + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
    }
    return base64;
};
const canvasVarMap = /* @__PURE__ */ new Map();
function variableListFor$1(ctx, ctor) {
    let contextMap = canvasVarMap.get(ctx);
    if (!contextMap) {
        contextMap = /* @__PURE__ */ new Map();
        canvasVarMap.set(ctx, contextMap);
    }
    if (!contextMap.has(ctor)) {
        contextMap.set(ctor, []);
    }
    return contextMap.get(ctor);
}
const saveWebGLVar = (value, win, ctx)=>{
    if (!value || !(isInstanceOfWebGLObject(value, win) || typeof value === "object")) return;
    const name = value.constructor.name;
    const list = variableListFor$1(ctx, name);
    let index = list.indexOf(value);
    if (index === -1) {
        index = list.length;
        list.push(value);
    }
    return index;
};
function serializeArg(value, win, ctx) {
    if (value instanceof Array) {
        return value.map((arg)=>serializeArg(arg, win, ctx));
    } else if (value === null) {
        return value;
    } else if (value instanceof Float32Array || value instanceof Float64Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Uint8Array || value instanceof Uint16Array || value instanceof Int16Array || value instanceof Int8Array || value instanceof Uint8ClampedArray) {
        const name = value.constructor.name;
        return {
            rr_type: name,
            args: [
                Object.values(value)
            ]
        };
    } else if (// SharedArrayBuffer disabled on most browsers due to spectre.
    // More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
    // value instanceof SharedArrayBuffer ||
    value instanceof ArrayBuffer) {
        const name = value.constructor.name;
        const base64 = encode(value);
        return {
            rr_type: name,
            base64
        };
    } else if (value instanceof DataView) {
        const name = value.constructor.name;
        return {
            rr_type: name,
            args: [
                serializeArg(value.buffer, win, ctx),
                value.byteOffset,
                value.byteLength
            ]
        };
    } else if (value instanceof HTMLImageElement) {
        const name = value.constructor.name;
        const { src } = value;
        return {
            rr_type: name,
            src
        };
    } else if (value instanceof HTMLCanvasElement) {
        const name = "HTMLImageElement";
        const src = value.toDataURL();
        return {
            rr_type: name,
            src
        };
    } else if (value instanceof ImageData) {
        const name = value.constructor.name;
        return {
            rr_type: name,
            args: [
                serializeArg(value.data, win, ctx),
                value.width,
                value.height
            ]
        };
    } else if (isInstanceOfWebGLObject(value, win) || typeof value === "object") {
        const name = value.constructor.name;
        const index = saveWebGLVar(value, win, ctx);
        return {
            rr_type: name,
            index
        };
    }
    return value;
}
const serializeArgs = (args, win, ctx)=>{
    return args.map((arg)=>serializeArg(arg, win, ctx));
};
const isInstanceOfWebGLObject = (value, win)=>{
    const webGLConstructorNames = [
        "WebGLActiveInfo",
        "WebGLBuffer",
        "WebGLFramebuffer",
        "WebGLProgram",
        "WebGLRenderbuffer",
        "WebGLShader",
        "WebGLShaderPrecisionFormat",
        "WebGLTexture",
        "WebGLUniformLocation",
        "WebGLVertexArrayObject",
        // In old Chrome versions, value won't be an instanceof WebGLVertexArrayObject.
        "WebGLVertexArrayObjectOES"
    ];
    const supportedWebGLConstructorNames = webGLConstructorNames.filter((name)=>typeof win[name] === "function");
    return Boolean(supportedWebGLConstructorNames.find((name)=>value instanceof win[name]));
};
function initCanvas2DMutationObserver(cb, win, blockClass2, blockSelector, unblockSelector) {
    const handlers = [];
    const props2D = Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype);
    for (const prop of props2D){
        try {
            if (typeof win.CanvasRenderingContext2D.prototype[prop] !== "function") {
                continue;
            }
            const restoreHandler = patch(win.CanvasRenderingContext2D.prototype, prop, function(original) {
                return function(...args) {
                    if (!isBlocked(this.canvas, blockClass2, blockSelector, unblockSelector, true)) {
                        setTimeout$1(()=>{
                            const recordArgs = serializeArgs(args, win, this);
                            cb(this.canvas, {
                                type: CanvasContext["2D"],
                                property: prop,
                                args: recordArgs
                            });
                        }, 0);
                    }
                    return original.apply(this, args);
                };
            });
            handlers.push(restoreHandler);
        } catch  {
            const hookHandler = hookSetter(win.CanvasRenderingContext2D.prototype, prop, {
                set (v2) {
                    cb(this.canvas, {
                        type: CanvasContext["2D"],
                        property: prop,
                        args: [
                            v2
                        ],
                        setter: true
                    });
                }
            });
            handlers.push(hookHandler);
        }
    }
    return ()=>{
        handlers.forEach((h)=>h());
    };
}
function getNormalizedContextName(contextType) {
    return contextType === "experimental-webgl" ? "webgl" : contextType;
}
function initCanvasContextObserver(win, blockClass, blockSelector, unblockSelector, setPreserveDrawingBufferToTrue) {
    const handlers = [];
    try {
        const restoreHandler = patch(win.HTMLCanvasElement.prototype, "getContext", function(original) {
            return function(contextType, ...args) {
                if (!isBlocked(this, blockClass, blockSelector, unblockSelector, true)) {
                    const ctxName = getNormalizedContextName(contextType);
                    if (!("__context" in this)) this.__context = ctxName;
                    if (setPreserveDrawingBufferToTrue && [
                        "webgl",
                        "webgl2"
                    ].includes(ctxName)) {
                        if (args[0] && typeof args[0] === "object") {
                            const contextAttributes = args[0];
                            if (!contextAttributes.preserveDrawingBuffer) {
                                contextAttributes.preserveDrawingBuffer = true;
                            }
                        } else {
                            args.splice(0, 1, {
                                preserveDrawingBuffer: true
                            });
                        }
                    }
                }
                return original.apply(this, [
                    contextType,
                    ...args
                ]);
            };
        });
        handlers.push(restoreHandler);
    } catch  {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext");
    }
    return ()=>{
        handlers.forEach((h)=>h());
    };
}
function patchGLPrototype(prototype, type, cb, blockClass2, blockSelector, unblockSelector, _mirror2, win) {
    const handlers = [];
    const props = Object.getOwnPropertyNames(prototype);
    for (const prop of props){
        if (//prop.startsWith('get') ||  // e.g. getProgramParameter, but too risky
        [
            "isContextLost",
            "canvas",
            "drawingBufferWidth",
            "drawingBufferHeight"
        ].includes(prop)) {
            continue;
        }
        try {
            if (typeof prototype[prop] !== "function") {
                continue;
            }
            const restoreHandler = patch(prototype, prop, function(original) {
                return function(...args) {
                    const result = original.apply(this, args);
                    saveWebGLVar(result, win, this);
                    if ("tagName" in this.canvas && !isBlocked(this.canvas, blockClass2, blockSelector, unblockSelector, true)) {
                        const recordArgs = serializeArgs(args, win, this);
                        const mutation = {
                            type,
                            property: prop,
                            args: recordArgs
                        };
                        cb(this.canvas, mutation);
                    }
                    return result;
                };
            });
            handlers.push(restoreHandler);
        } catch  {
            const hookHandler = hookSetter(prototype, prop, {
                set (v2) {
                    cb(this.canvas, {
                        type,
                        property: prop,
                        args: [
                            v2
                        ],
                        setter: true
                    });
                }
            });
            handlers.push(hookHandler);
        }
    }
    return handlers;
}
function initCanvasWebGLMutationObserver(cb, win, blockClass2, blockSelector, unblockSelector, mirror2) {
    const handlers = [];
    handlers.push(...patchGLPrototype(win.WebGLRenderingContext.prototype, CanvasContext.WebGL, cb, blockClass2, blockSelector, unblockSelector, mirror2, win));
    if (typeof win.WebGL2RenderingContext !== "undefined") {
        handlers.push(...patchGLPrototype(win.WebGL2RenderingContext.prototype, CanvasContext.WebGL2, cb, blockClass2, blockSelector, unblockSelector, mirror2, win));
    }
    return ()=>{
        handlers.forEach((h)=>h());
    };
}
const r$1 = `for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};`;
function t$1() {
    const t2 = new Blob([
        r$1
    ]);
    return URL.createObjectURL(t2);
}
class CanvasManager {
    constructor(options){
        this.pendingCanvasMutations = /* @__PURE__ */ new Map();
        this.rafStamps = {
            latestId: 0,
            invokeId: null
        };
        this.shadowDoms = /* @__PURE__ */ new Set();
        this.windowsSet = /* @__PURE__ */ new WeakSet();
        this.windows = [];
        this.restoreHandlers = [];
        this.frozen = false;
        this.locked = false;
        this.snapshotInProgressMap = /* @__PURE__ */ new Map();
        this.worker = null;
        this.lastSnapshotTime = 0;
        this.processMutation = (target, mutation)=>{
            const newFrame = this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId;
            if (newFrame || !this.rafStamps.invokeId) this.rafStamps.invokeId = this.rafStamps.latestId;
            if (!this.pendingCanvasMutations.has(target)) {
                this.pendingCanvasMutations.set(target, []);
            }
            this.pendingCanvasMutations.get(target).push(mutation);
        };
        const { enableManualSnapshot, sampling = "all", win, recordCanvas, errorHandler: errorHandler2 } = options;
        options.sampling = sampling;
        this.mutationCb = options.mutationCb;
        this.mirror = options.mirror;
        this.options = options;
        if (errorHandler2) {
            registerErrorHandler(errorHandler2);
        }
        if (recordCanvas && typeof sampling === "number" || enableManualSnapshot) {
            this.worker = this.initFPSWorker();
        }
        this.addWindow(win);
        if (enableManualSnapshot) {
            return;
        }
        callbackWrapper(()=>{
            if (recordCanvas && sampling === "all") {
                this.startRAFTimestamping();
                this.startPendingCanvasMutationFlusher();
            }
            if (recordCanvas && typeof sampling === "number") {
                this.initCanvasFPSObserver();
            }
        })();
    }
    reset() {
        this.pendingCanvasMutations.clear();
        this.restoreHandlers.forEach((handler)=>{
            try {
                handler();
            } catch (e2) {}
        });
        this.restoreHandlers = [];
        this.windowsSet = /* @__PURE__ */ new WeakSet();
        this.windows = [];
        this.shadowDoms = /* @__PURE__ */ new Set();
        this.worker?.terminate();
        this.worker = null;
        this.snapshotInProgressMap = /* @__PURE__ */ new Map();
    }
    freeze() {
        this.frozen = true;
    }
    unfreeze() {
        this.frozen = false;
    }
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }
    addWindow(win) {
        const { sampling = "all", blockClass, blockSelector, unblockSelector, recordCanvas, enableManualSnapshot } = this.options;
        if (this.windowsSet.has(win)) return;
        if (enableManualSnapshot) {
            this.windowsSet.add(win);
            this.windows.push(new WeakRef(win));
            return;
        }
        callbackWrapper(()=>{
            if (recordCanvas && sampling === "all") {
                this.initCanvasMutationObserver(win, blockClass, blockSelector, unblockSelector);
            }
            if (recordCanvas && typeof sampling === "number") {
                const canvasContextReset = initCanvasContextObserver(win, blockClass, blockSelector, unblockSelector, true);
                this.restoreHandlers.push(()=>{
                    canvasContextReset();
                });
            }
        })();
        this.windowsSet.add(win);
        this.windows.push(new WeakRef(win));
    }
    addShadowRoot(shadowRoot) {
        this.shadowDoms.add(new WeakRef(shadowRoot));
    }
    resetShadowRoots() {
        this.shadowDoms = /* @__PURE__ */ new Set();
    }
    snapshot(canvasElement, options) {
        if (options?.skipRequestAnimationFrame) {
            this.takeSnapshot(performance.now(), true, canvasElement);
            return;
        }
        onRequestAnimationFrame((timestamp)=>this.takeSnapshot(timestamp, true, canvasElement));
    }
    initFPSWorker() {
        const worker = new Worker(t$1());
        worker.onmessage = (e2)=>{
            const data = e2.data;
            const { id } = data;
            this.snapshotInProgressMap.set(id, false);
            if (!("base64" in data)) return;
            const { base64, type, width, height } = data;
            this.mutationCb({
                id,
                type: CanvasContext["2D"],
                commands: [
                    {
                        property: "clearRect",
                        // wipe canvas
                        args: [
                            0,
                            0,
                            width,
                            height
                        ]
                    },
                    {
                        property: "drawImage",
                        // draws (semi-transparent) image
                        args: [
                            {
                                rr_type: "ImageBitmap",
                                args: [
                                    {
                                        rr_type: "Blob",
                                        data: [
                                            {
                                                rr_type: "ArrayBuffer",
                                                base64
                                            }
                                        ],
                                        type
                                    }
                                ]
                            },
                            0,
                            0,
                            // The below args are needed if we enforce a max size, we want to
                            // retain the original size when drawing the image (which should be smaller)
                            width,
                            height
                        ]
                    }
                ]
            });
        };
        return worker;
    }
    initCanvasFPSObserver() {
        let rafId;
        if (!this.windows.length && !this.shadowDoms.size) {
            return;
        }
        const rafCallback = (timestamp)=>{
            this.takeSnapshot(timestamp, false);
            rafId = onRequestAnimationFrame(rafCallback);
        };
        rafId = onRequestAnimationFrame(rafCallback);
        this.restoreHandlers.push(()=>{
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        });
    }
    initCanvasMutationObserver(win, blockClass, blockSelector, unblockSelector) {
        const canvasContextReset = initCanvasContextObserver(win, blockClass, blockSelector, unblockSelector, false);
        const canvas2DReset = initCanvas2DMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector, unblockSelector);
        const canvasWebGL1and2Reset = initCanvasWebGLMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector, unblockSelector, this.mirror);
        this.restoreHandlers.push(()=>{
            canvasContextReset();
            canvas2DReset();
            canvasWebGL1and2Reset();
        });
    }
    /**
   * Returns all `canvas` elements that are not blocked by the given selectors. Searches all windows and shadow roots.
   */ getCanvasElements(blockClass, blockSelector, unblockSelector) {
        const matchedCanvas = [];
        const searchCanvas = (root)=>{
            root.querySelectorAll("canvas").forEach((canvas)=>{
                if (!isBlocked(canvas, blockClass, blockSelector, unblockSelector, true)) {
                    matchedCanvas.push(canvas);
                }
            });
        };
        for (const item of this.windows){
            const window2 = item.deref();
            let _document;
            try {
                _document = window2 && window2.document;
            } catch  {}
            if (_document) {
                searchCanvas(_document);
            }
        }
        for (const item of this.shadowDoms){
            const shadowRoot = item.deref();
            if (shadowRoot) {
                searchCanvas(shadowRoot);
            }
        }
        return matchedCanvas;
    }
    /**
   * Takes a snapshot of the provided canvas element, or will search all windows/shadow roots for canvases. Will self-throttle based on `options.sampling`.
   *
   * @returns `true` if the snapshot was taken, `false` if it was throttled.
   */ takeSnapshot(timestamp, isManualSnapshot, canvasElement) {
        const { sampling, blockClass, blockSelector, unblockSelector, dataURLOptions, maxCanvasSize } = this.options;
        const fps = sampling === "all" ? 2 : sampling || 2;
        const timeBetweenSnapshots = 1e3 / fps;
        const shouldThrottle = this.lastSnapshotTime && timestamp - this.lastSnapshotTime < timeBetweenSnapshots;
        if (shouldThrottle) {
            return false;
        }
        this.lastSnapshotTime = timestamp;
        const canvases = canvasElement ? [
            canvasElement
        ] : this.getCanvasElements(blockClass, blockSelector, unblockSelector);
        canvases.forEach((canvas)=>{
            const id = this.mirror.getId(canvas);
            if (!this.mirror.hasNode(canvas) || !canvas.width || !canvas.height || this.snapshotInProgressMap.get(id)) {
                return;
            }
            this.snapshotInProgressMap.set(id, true);
            if (!isManualSnapshot && [
                "webgl",
                "webgl2"
            ].includes(canvas.__context)) {
                const context = canvas.getContext(canvas.__context);
                if (context?.getContextAttributes()?.preserveDrawingBuffer === false) {
                    context.clear(context.COLOR_BUFFER_BIT);
                }
            }
            createImageBitmap(canvas).then((bitmap)=>{
                this.worker?.postMessage({
                    id,
                    bitmap,
                    width: canvas.width,
                    height: canvas.height,
                    dataURLOptions,
                    maxCanvasSize
                }, [
                    bitmap
                ]);
            }).catch((error)=>{
                callbackWrapper(()=>{
                    this.snapshotInProgressMap.delete(id);
                    throw error;
                })();
            });
        });
        return true;
    }
    startPendingCanvasMutationFlusher() {
        onRequestAnimationFrame(()=>this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
        const setLatestRAFTimestamp = (timestamp)=>{
            this.rafStamps.latestId = timestamp;
            onRequestAnimationFrame(setLatestRAFTimestamp);
        };
        onRequestAnimationFrame(setLatestRAFTimestamp);
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((_values, canvas)=>{
            const id = this.mirror.getId(canvas);
            this.flushPendingCanvasMutationFor(canvas, id);
        });
        onRequestAnimationFrame(()=>this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(canvas, id) {
        if (this.frozen || this.locked) {
            return;
        }
        const valuesWithType = this.pendingCanvasMutations.get(canvas);
        if (!valuesWithType || id === -1) return;
        const values = valuesWithType.map((value)=>{
            const { type: type2, ...rest } = value;
            return rest;
        });
        const { type } = valuesWithType[0];
        this.mutationCb({
            id,
            type,
            commands: values
        });
        this.pendingCanvasMutations.delete(canvas);
    }
}
try {
    if (Array.from([
        1
    ], (x)=>x * 2)[0] !== 2) {
        const cleanFrame = document.createElement("iframe");
        document.body.appendChild(cleanFrame);
        Array.from = cleanFrame.contentWindow?.Array.from || Array.from;
        document.body.removeChild(cleanFrame);
    }
} catch (err) {
    console.debug("Unable to override Array.from", err);
}
createMirror$2();
var n;
!function(t2) {
    t2[t2.NotStarted = 0] = "NotStarted", t2[t2.Running = 1] = "Running", t2[t2.Stopped = 2] = "Stopped";
}(n || (n = {}));
const CANVAS_QUALITY = {
    low: {
        sampling: {
            canvas: 1
        },
        dataURLOptions: {
            type: 'image/webp',
            quality: 0.25
        }
    },
    medium: {
        sampling: {
            canvas: 2
        },
        dataURLOptions: {
            type: 'image/webp',
            quality: 0.4
        }
    },
    high: {
        sampling: {
            canvas: 4
        },
        dataURLOptions: {
            type: 'image/webp',
            quality: 0.5
        }
    }
};
const INTEGRATION_NAME = 'ReplayCanvas';
const DEFAULT_MAX_CANVAS_SIZE = 1280;
/** Exported only for type safe tests. */ const _replayCanvasIntegration = (options = {})=>{
    const [maxCanvasWidth, maxCanvasHeight] = options.maxCanvasSize || [];
    const _canvasOptions = {
        quality: options.quality || 'medium',
        enableManualSnapshot: options.enableManualSnapshot,
        maxCanvasSize: [
            maxCanvasWidth ? Math.min(maxCanvasWidth, DEFAULT_MAX_CANVAS_SIZE) : DEFAULT_MAX_CANVAS_SIZE,
            maxCanvasHeight ? Math.min(maxCanvasHeight, DEFAULT_MAX_CANVAS_SIZE) : DEFAULT_MAX_CANVAS_SIZE
        ]
    };
    let canvasManagerResolve;
    const _canvasManager = new Promise((resolve)=>canvasManagerResolve = resolve);
    return {
        name: INTEGRATION_NAME,
        getOptions () {
            const { quality, enableManualSnapshot, maxCanvasSize } = _canvasOptions;
            return {
                enableManualSnapshot,
                recordCanvas: true,
                getCanvasManager: (getCanvasManagerOptions)=>{
                    const manager = new CanvasManager({
                        ...getCanvasManagerOptions,
                        enableManualSnapshot,
                        maxCanvasSize,
                        errorHandler: (err)=>{
                            try {
                                if (typeof err === 'object') {
                                    err.__rrweb__ = true;
                                }
                            } catch  {
                            // ignore errors here
                            // this can happen if the error is frozen or does not allow mutation for other reasons
                            }
                        }
                    });
                    canvasManagerResolve(manager);
                    return manager;
                },
                ...CANVAS_QUALITY[quality] || CANVAS_QUALITY.medium
            };
        },
        async snapshot (canvasElement, options) {
            const canvasManager = await _canvasManager;
            canvasManager.snapshot(canvasElement, options);
        }
    };
};
/**
 * Add this in addition to `replayIntegration()` to enable canvas recording.
 */ const replayCanvasIntegration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Omi$2d$AI$2d$1$2f$node_modules$2f2e$pnpm$2f40$sentry$2b$core$40$10$2e$25$2e$0$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineIntegration"])(_replayCanvasIntegration);
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=3a5a7__pnpm_85a980c8._.js.map