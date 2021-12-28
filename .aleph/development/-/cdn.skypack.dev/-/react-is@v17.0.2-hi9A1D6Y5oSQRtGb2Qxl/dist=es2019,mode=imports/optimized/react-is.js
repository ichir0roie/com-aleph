// https://cdn.skypack.dev/-/react-is@v17.0.2-hi9A1D6Y5oSQRtGb2Qxl/dist=es2019,mode=imports/optimized/react-is.js
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var b = 60103;
var c = 60106;
var d = 60107;
var e = 60108;
var f = 60114;
var g = 60109;
var h = 60110;
var k = 60112;
var l = 60113;
var m = 60120;
var n = 60115;
var p = 60116;
var q = 60121;
var r = 60122;
var u = 60117;
var v = 60129;
var w = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
var x;
function y(a) {
  if (typeof a === "object" && a !== null) {
    var t = a.$$typeof;
    switch (t) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;
              default:
                return t;
            }
        }
      case c:
        return t;
    }
  }
}
var z = g;
var A = b;
var B = k;
var C = d;
var D = p;
var E = n;
var F = c;
var G = f;
var H = e;
var I = l;
var ContextConsumer = h;
var ContextProvider = z;
var Element = A;
var ForwardRef = B;
var Fragment = C;
var Lazy = D;
var Memo = E;
var Portal = F;
var Profiler = G;
var StrictMode = H;
var Suspense = I;
var isAsyncMode = function() {
  return false;
};
var isConcurrentMode = function() {
  return false;
};
var isContextConsumer = function(a) {
  return y(a) === h;
};
var isContextProvider = function(a) {
  return y(a) === g;
};
var isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === b;
};
var isForwardRef = function(a) {
  return y(a) === k;
};
var isFragment = function(a) {
  return y(a) === d;
};
var isLazy = function(a) {
  return y(a) === p;
};
var isMemo = function(a) {
  return y(a) === n;
};
var isPortal = function(a) {
  return y(a) === c;
};
var isProfiler = function(a) {
  return y(a) === f;
};
var isStrictMode = function(a) {
  return y(a) === e;
};
var isSuspense = function(a) {
  return y(a) === l;
};
var isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === d || a === f || a === v || a === e || a === l || a === m || a === w || typeof a === "object" && a !== null && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? true : false;
};
var typeOf = y;
var reactIs_production_min = {
  ContextConsumer,
  ContextProvider,
  Element,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
var ContextConsumer$1 = reactIs.ContextConsumer;
var ContextProvider$1 = reactIs.ContextProvider;
var Element$1 = reactIs.Element;
var ForwardRef$1 = reactIs.ForwardRef;
var Fragment$1 = reactIs.Fragment;
var Lazy$1 = reactIs.Lazy;
var Memo$1 = reactIs.Memo;
var Portal$1 = reactIs.Portal;
var Profiler$1 = reactIs.Profiler;
var StrictMode$1 = reactIs.StrictMode;
var Suspense$1 = reactIs.Suspense;
var react_is_default = reactIs;
var isAsyncMode$1 = reactIs.isAsyncMode;
var isConcurrentMode$1 = reactIs.isConcurrentMode;
var isContextConsumer$1 = reactIs.isContextConsumer;
var isContextProvider$1 = reactIs.isContextProvider;
var isElement$1 = reactIs.isElement;
var isForwardRef$1 = reactIs.isForwardRef;
var isFragment$1 = reactIs.isFragment;
var isLazy$1 = reactIs.isLazy;
var isMemo$1 = reactIs.isMemo;
var isPortal$1 = reactIs.isPortal;
var isProfiler$1 = reactIs.isProfiler;
var isStrictMode$1 = reactIs.isStrictMode;
var isSuspense$1 = reactIs.isSuspense;
var isValidElementType$1 = reactIs.isValidElementType;
var typeOf$1 = reactIs.typeOf;
export {
  ContextConsumer$1 as ContextConsumer,
  ContextProvider$1 as ContextProvider,
  Element$1 as Element,
  ForwardRef$1 as ForwardRef,
  Fragment$1 as Fragment,
  Lazy$1 as Lazy,
  Memo$1 as Memo,
  Portal$1 as Portal,
  Profiler$1 as Profiler,
  StrictMode$1 as StrictMode,
  Suspense$1 as Suspense,
  reactIs as __moduleExports,
  react_is_default as default,
  isAsyncMode$1 as isAsyncMode,
  isConcurrentMode$1 as isConcurrentMode,
  isContextConsumer$1 as isContextConsumer,
  isContextProvider$1 as isContextProvider,
  isElement$1 as isElement,
  isForwardRef$1 as isForwardRef,
  isFragment$1 as isFragment,
  isLazy$1 as isLazy,
  isMemo$1 as isMemo,
  isPortal$1 as isPortal,
  isProfiler$1 as isProfiler,
  isStrictMode$1 as isStrictMode,
  isSuspense$1 as isSuspense,
  isValidElementType$1 as isValidElementType,
  typeOf$1 as typeOf
};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
