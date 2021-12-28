var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});

// https://cdn.esm.sh/v59/html-to-react@1.4.7/deno/html-to-react.js
import __ramda_src_includes$ from "../../ramda@0.27.1/deno/src/includes.js";
import __ramda_src_addIndex$ from "../../ramda@0.27.1/deno/src/addIndex.js";
import __ramda_src_find$ from "../../ramda@0.27.1/deno/src/find.js";
import __ramda_src_forEach$ from "../../ramda@0.27.1/deno/src/forEach.js";
import __react$ from "../../../v53/react@17.0.2/deno/react.js";
import __ramda_src_toPairs$ from "../../ramda@0.27.1/deno/src/toPairs.js";
import __lodash_camelcase$ from "../../lodash.camelcase@4.3.0/deno/lodash.camelcase.js";
import { Parser as __htmlparser2$Parser } from "../../htmlparser2@7.2.0/deno/htmlparser2.js";
import __ramda_src_map$ from "../../ramda@0.27.1/deno/src/map.js";
import __ramda_src_reduce$ from "../../ramda@0.27.1/deno/src/reduce.js";
import { DomHandler as __domhandler$DomHandler } from "../../domhandler@4.3.0/deno/domhandler.js";
import __ramda_src_reject$ from "../../ramda@0.27.1/deno/src/reject.js";
import __ramda_src_startsWith$ from "../../ramda@0.27.1/deno/src/startsWith.js";
var L = Object.create;
var h = Object.defineProperty;
var U = Object.getOwnPropertyDescriptor;
var V = Object.getOwnPropertyNames;
var F = Object.getPrototypeOf;
var z = Object.prototype.hasOwnProperty;
var B = (e) => h(e, "__esModule", { value: true });
var c = ((e) => typeof __require != "undefined" ? __require : typeof Proxy != "undefined" ? new Proxy(e, { get: (t, r) => (typeof __require != "undefined" ? __require : t)[r] }) : e)(function(e) {
  if (typeof __require != "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var f = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var _ = (e, t, r, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of V(t))
      !z.call(e, i) && (r || i !== "default") && h(e, i, { get: () => t[i], enumerable: !(o = U(t, i)) || o.enumerable });
  return e;
};
var P = (e, t) => _(B(h(e != null ? L(F(e)) : {}, "default", !t && e && e.__esModule ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
var S = f((we, T) => {
  "use strict";
  function W(e) {
    return true;
  }
  T.exports = { shouldProcessEveryNode: W };
});
var q = f((De, b) => {
  "use strict";
  var X = ["accept", "acceptCharset", "accessKey", "action", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "colSpan", "cols", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label", "lang", "list", "loop", "low", "manifest", "marginHeight", "marginWidth", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "nonce", "open", "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rowSpan", "rows", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "width", "wmode", "wrap", "onClick"], j = ["autoCapitalize", "autoCorrect", "color", "itemProp", "itemScope", "itemType", "itemRef", "itemID", "security", "unselectable", "results", "autoSave"], Y = ["accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baseProfile", "baselineShift", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "ideographic", "imageRendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "scale", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "vHanging", "vIdeographic", "vMathematical", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "viewBox", "viewTarget", "visibility", "widths", "wordSpacing", "writingMode", "x", "x1", "x2", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlns", "xmlnsXlink", "xmlBase", "xmlLang", "xmlSpace", "y", "y1", "y2", "yChannelSelector", "z", "zoomAndPan"], G = X.concat(j).concat(Y).reduce(function(e, t) {
    let r = t.toLowerCase();
    return r !== t && (e[r] = t), e;
  }, {});
  b.exports = G;
});
var g = f((Ce, N) => {
  "use strict";
  var J = __lodash_camelcase$, K = __ramda_src_toPairs$, Z = __ramda_src_reduce$, Q = __ramda_src_startsWith$, $ = __react$, ee = __ramda_src_includes$, te = q();
  function re(e) {
    e = e || "";
    let t = e.split(/;(?!base64)/), r, o, i, n = {};
    for (let a = 0; a < t.length; ++a)
      r = t[a].split(":"), r.length > 2 && (r[1] = r.slice(1).join(":")), o = r[0], i = r[1], typeof i == "string" && (i = i.trim()), o != null && i != null && o.length > 0 && i.length > 0 && (n[J(o)] = i);
    return n;
  }
  var ne = ["allowFullScreen", "allowpaymentrequest", "async", "autoFocus", "autoPlay", "checked", "controls", "default", "disabled", "formNoValidate", "hidden", "ismap", "itemScope", "loop", "multiple", "muted", "nomodule", "noValidate", "open", "playsinline", "readOnly", "required", "reversed", "selected", "truespeed"];
  function ie(e, t, r, o) {
    let i = { key: t };
    e.attribs && (i = Z(function(a, d) {
      let s = d[0], l = d[1];
      return s = te[s.replace(/[-:]/, "")] || s, s === "style" ? l = re(l) : s === "class" ? s = "className" : s === "for" ? s = "htmlFor" : Q("on", s) && (l = Function(l)), ee(s, ne) && (l || "") === "" && (l = s), a[s] = l, a;
    }, i, K(e.attribs))), o = o || [];
    let n = r != null ? [r].concat(o) : o;
    return $.createElement.apply(null, [e.name, i].concat(n));
  }
  N.exports = { createElement: ie };
});
var y = f((Ee, D) => {
  "use strict";
  var w = g(), se = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr", "menuitem", "textarea"];
  function oe() {
    function e(t, r, o) {
      return t.type === "text" ? t.data : t.type === "comment" ? false : se.indexOf(t.name) > -1 ? w.createElement(t, o) : w.createElement(t, o, t.data, r);
    }
    return { processDefaultNode: e };
  }
  D.exports = oe;
});
var k = f((Ae, C) => {
  "use strict";
  var ae = S(), le = y();
  function ce() {
    let e = new le();
    return { defaultProcessingInstructions: [{ shouldProcessNode: ae.shouldProcessEveryNode, processNode: e.processDefaultNode }] };
  }
  C.exports = ce;
});
var x = f((Ie, E) => {
  "use strict";
  function ue() {
    return true;
  }
  E.exports = { alwaysValid: ue };
});
var I = f((Re, A) => {
  "use strict";
  var de = __ramda_src_forEach$, pe = __ramda_src_find$, fe = __ramda_src_reject$, me = __ramda_src_addIndex$, he = __ramda_src_map$, ge = __htmlparser2$Parser, ye = __domhandler$DomHandler, ke = k(), xe = x(), ve = g();
  function Pe(e) {
    function t(n) {
      e = e || {}, e.decodeEntities = true;
      let a = new ye();
      return new ge(a, e).parseComplete(n), a.dom.filter(function(s) {
        return s.type !== "directive";
      });
    }
    function r(n, a, d, s, l) {
      if (a(n)) {
        de(function(u) {
          u.shouldPreprocessNode(n) && u.preprocessNode(n, l);
        }, s || []);
        let p = pe(function(u) {
          return u.shouldProcessNode(n);
        }, d || []);
        if (p != null) {
          let u = fe(function(m) {
            return m == null || m === false;
          }, me(he)(function(m, H) {
            return r(m, a, d, s, H);
          }, n.children || []));
          return p.replaceChildren ? ve.createElement(n, l, n.data, [p.processNode(n, u, l)]) : p.processNode(n, u, l);
        } else
          return false;
      } else
        return false;
    }
    function o(n, a, d, s) {
      let p = t(n).map(function(u, m) {
        return r(u, a, d, s, m);
      });
      return p.length <= 1 ? p[0] : p;
    }
    function i(n) {
      let a = new ke();
      return o(n, xe.alwaysValid, a.defaultProcessingInstructions);
    }
    return { parse: i, parseWithInstructions: o };
  }
  A.exports = Pe;
});
var v = f((Oe, R) => {
  "use strict";
  var Te = I(), Se = k(), be = x(), qe = y();
  R.exports = { Parser: Te, ProcessingInstructions: Se, IsValidNodeDefinitions: be, ProcessNodeDefinitions: qe };
});
var O = P(v());
var M = P(v());
var { Parser: Me, ProcessingInstructions: He, IsValidNodeDefinitions: Le, ProcessNodeDefinitions: Ue } = M;
var Ve = O.default || M;
export {
  Le as IsValidNodeDefinitions,
  Me as Parser,
  Ue as ProcessNodeDefinitions,
  He as ProcessingInstructions,
  Ve as default
};
