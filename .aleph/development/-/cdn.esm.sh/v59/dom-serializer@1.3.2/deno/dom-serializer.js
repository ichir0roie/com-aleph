var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});

// https://cdn.esm.sh/v59/dom-serializer@1.3.2/deno/dom-serializer.js
import __entities$ from "../../entities@2.2.0/deno/entities.js";
import __domelementtype$ from "../../domelementtype@2.2.0/deno/domelementtype.js";
var x = Object.create;
var u = Object.defineProperty;
var M = Object.getOwnPropertyDescriptor;
var _ = Object.getOwnPropertyNames;
var C = Object.getPrototypeOf;
var T = Object.prototype.hasOwnProperty;
var w = (e) => u(e, "__esModule", { value: true });
var d = ((e) => typeof __require != "undefined" ? __require : typeof Proxy != "undefined" ? new Proxy(e, { get: (t, n) => (typeof __require != "undefined" ? __require : t)[n] }) : e)(function(e) {
  if (typeof __require != "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var g = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var O = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of _(t))
      !T.call(e, a) && (n || a !== "default") && u(e, a, { get: () => t[a], enumerable: !(r = M(t, a)) || r.enumerable });
  return e;
};
var j = (e, t) => O(w(u(e != null ? x(C(e)) : {}, "default", !t && e && e.__esModule ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
var m = g((s) => {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: true });
  s.attributeNames = s.elementNames = void 0;
  s.elementNames = new Map([["altglyph", "altGlyph"], ["altglyphdef", "altGlyphDef"], ["altglyphitem", "altGlyphItem"], ["animatecolor", "animateColor"], ["animatemotion", "animateMotion"], ["animatetransform", "animateTransform"], ["clippath", "clipPath"], ["feblend", "feBlend"], ["fecolormatrix", "feColorMatrix"], ["fecomponenttransfer", "feComponentTransfer"], ["fecomposite", "feComposite"], ["feconvolvematrix", "feConvolveMatrix"], ["fediffuselighting", "feDiffuseLighting"], ["fedisplacementmap", "feDisplacementMap"], ["fedistantlight", "feDistantLight"], ["fedropshadow", "feDropShadow"], ["feflood", "feFlood"], ["fefunca", "feFuncA"], ["fefuncb", "feFuncB"], ["fefuncg", "feFuncG"], ["fefuncr", "feFuncR"], ["fegaussianblur", "feGaussianBlur"], ["feimage", "feImage"], ["femerge", "feMerge"], ["femergenode", "feMergeNode"], ["femorphology", "feMorphology"], ["feoffset", "feOffset"], ["fepointlight", "fePointLight"], ["fespecularlighting", "feSpecularLighting"], ["fespotlight", "feSpotLight"], ["fetile", "feTile"], ["feturbulence", "feTurbulence"], ["foreignobject", "foreignObject"], ["glyphref", "glyphRef"], ["lineargradient", "linearGradient"], ["radialgradient", "radialGradient"], ["textpath", "textPath"]]);
  s.attributeNames = new Map([["definitionurl", "definitionURL"], ["attributename", "attributeName"], ["attributetype", "attributeType"], ["basefrequency", "baseFrequency"], ["baseprofile", "baseProfile"], ["calcmode", "calcMode"], ["clippathunits", "clipPathUnits"], ["diffuseconstant", "diffuseConstant"], ["edgemode", "edgeMode"], ["filterunits", "filterUnits"], ["glyphref", "glyphRef"], ["gradienttransform", "gradientTransform"], ["gradientunits", "gradientUnits"], ["kernelmatrix", "kernelMatrix"], ["kernelunitlength", "kernelUnitLength"], ["keypoints", "keyPoints"], ["keysplines", "keySplines"], ["keytimes", "keyTimes"], ["lengthadjust", "lengthAdjust"], ["limitingconeangle", "limitingConeAngle"], ["markerheight", "markerHeight"], ["markerunits", "markerUnits"], ["markerwidth", "markerWidth"], ["maskcontentunits", "maskContentUnits"], ["maskunits", "maskUnits"], ["numoctaves", "numOctaves"], ["pathlength", "pathLength"], ["patterncontentunits", "patternContentUnits"], ["patterntransform", "patternTransform"], ["patternunits", "patternUnits"], ["pointsatx", "pointsAtX"], ["pointsaty", "pointsAtY"], ["pointsatz", "pointsAtZ"], ["preservealpha", "preserveAlpha"], ["preserveaspectratio", "preserveAspectRatio"], ["primitiveunits", "primitiveUnits"], ["refx", "refX"], ["refy", "refY"], ["repeatcount", "repeatCount"], ["repeatdur", "repeatDur"], ["requiredextensions", "requiredExtensions"], ["requiredfeatures", "requiredFeatures"], ["specularconstant", "specularConstant"], ["specularexponent", "specularExponent"], ["spreadmethod", "spreadMethod"], ["startoffset", "startOffset"], ["stddeviation", "stdDeviation"], ["stitchtiles", "stitchTiles"], ["surfacescale", "surfaceScale"], ["systemlanguage", "systemLanguage"], ["tablevalues", "tableValues"], ["targetx", "targetX"], ["targety", "targetY"], ["textlength", "textLength"], ["viewbox", "viewBox"], ["viewtarget", "viewTarget"], ["xchannelselector", "xChannelSelector"], ["ychannelselector", "yChannelSelector"], ["zoomandpan", "zoomAndPan"]]);
});
var b = g((i) => {
  "use strict";
  var l = i && i.__assign || function() {
    return l = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var a in t)
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      }
      return e;
    }, l.apply(this, arguments);
  }, A = i && i.__createBinding || (Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: true, get: function() {
      return t[n];
    } });
  } : function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  }), S = i && i.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  } : function(e, t) {
    e.default = t;
  }), D = i && i.__importStar || function(e) {
    if (e && e.__esModule)
      return e;
    var t = {};
    if (e != null)
      for (var n in e)
        n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && A(t, e, n);
    return S(t, e), t;
  };
  Object.defineProperty(i, "__esModule", { value: true });
  var f = D(__domelementtype$), h = __entities$, p = m(), P = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
  function L(e, t) {
    if (!!e)
      return Object.keys(e).map(function(n) {
        var r, a, o = (r = e[n]) !== null && r !== void 0 ? r : "";
        return t.xmlMode === "foreign" && (n = (a = p.attributeNames.get(n)) !== null && a !== void 0 ? a : n), !t.emptyAttrs && !t.xmlMode && o === "" ? n : n + '="' + (t.decodeEntities !== false ? h.encodeXML(o) : o.replace(/"/g, "&quot;")) + '"';
      }).join(" ");
  }
  var v = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
  function c(e, t) {
    t === void 0 && (t = {});
    for (var n = ("length" in e) ? e : [e], r = "", a = 0; a < n.length; a++)
      r += k(n[a], t);
    return r;
  }
  i.default = c;
  function k(e, t) {
    switch (e.type) {
      case f.Root:
        return c(e.children, t);
      case f.Directive:
      case f.Doctype:
        return E(e);
      case f.Comment:
        return B(e);
      case f.CDATA:
        return G(e);
      case f.Script:
      case f.Style:
      case f.Tag:
        return N(e, t);
      case f.Text:
        return F(e, t);
    }
  }
  var U = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), q = new Set(["svg", "math"]);
  function N(e, t) {
    var n;
    t.xmlMode === "foreign" && (e.name = (n = p.elementNames.get(e.name)) !== null && n !== void 0 ? n : e.name, e.parent && U.has(e.parent.name) && (t = l(l({}, t), { xmlMode: false }))), !t.xmlMode && q.has(e.name) && (t = l(l({}, t), { xmlMode: "foreign" }));
    var r = "<" + e.name, a = L(e.attribs, t);
    return a && (r += " " + a), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== false : t.selfClosingTags && v.has(e.name)) ? (t.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += c(e.children, t)), (t.xmlMode || !v.has(e.name)) && (r += "</" + e.name + ">")), r;
  }
  function E(e) {
    return "<" + e.data + ">";
  }
  function F(e, t) {
    var n = e.data || "";
    return t.decodeEntities !== false && !(!t.xmlMode && e.parent && P.has(e.parent.name)) && (n = h.encodeXML(n)), n;
  }
  function G(e) {
    return "<![CDATA[" + e.children[0].data + "]]>";
  }
  function B(e) {
    return "<!--" + e.data + "-->";
  }
});
var y = j(b());
var I = y.default;
export {
  I as default
};
