var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// https://cdn.esm.sh/v59/domutils@2.8.0/deno/domutils.js
import __domelementtype$ from "../../domelementtype@2.2.0/deno/domelementtype.js";
import __dom_serializer$ from "../../dom-serializer@1.3.2/deno/dom-serializer.js";
import __domhandler$ from "../../domhandler@4.3.0/deno/domhandler.js";
var le = Object.create;
var I = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var oe = Object.getOwnPropertyNames;
var ve = Object.getPrototypeOf;
var de = Object.prototype.hasOwnProperty;
var pe = (e) => I(e, "__esModule", { value: true });
var b = ((e) => typeof __require != "undefined" ? __require : typeof Proxy != "undefined" ? new Proxy(e, { get: (t, r) => (typeof __require != "undefined" ? __require : t)[r] }) : e)(function(e) {
  if (typeof __require != "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var m = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ce = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of oe(t))
      !de.call(e, i) && (r || i !== "default") && I(e, i, { get: () => t[i], enumerable: !(n = se(t, i)) || n.enumerable });
  return e;
};
var J = (e, t) => ce(pe(I(e != null ? le(ve(e)) : {}, "default", !t && e && e.__esModule ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
var F = m((v) => {
  "use strict";
  var ge = v && v.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(v, "__esModule", { value: true });
  v.innerText = v.textContent = v.getText = v.getInnerHTML = v.getOuterHTML = void 0;
  var y = __domhandler$, he = ge(__dom_serializer$), ye = __domelementtype$;
  function K(e, t) {
    return (0, he.default)(e, t);
  }
  v.getOuterHTML = K;
  function be(e, t) {
    return (0, y.hasChildren)(e) ? e.children.map(function(r) {
      return K(r, t);
    }).join("") : "";
  }
  v.getInnerHTML = be;
  function j(e) {
    return Array.isArray(e) ? e.map(j).join("") : (0, y.isTag)(e) ? e.name === "br" ? `
` : j(e.children) : (0, y.isCDATA)(e) ? j(e.children) : (0, y.isText)(e) ? e.data : "";
  }
  v.getText = j;
  function B(e) {
    return Array.isArray(e) ? e.map(B).join("") : (0, y.hasChildren)(e) && !(0, y.isComment)(e) ? B(e.children) : (0, y.isText)(e) ? e.data : "";
  }
  v.textContent = B;
  function N(e) {
    return Array.isArray(e) ? e.map(N).join("") : (0, y.hasChildren)(e) && (e.type === ye.ElementType.Tag || (0, y.isCDATA)(e)) ? N(e.children) : (0, y.isText)(e) ? e.data : "";
  }
  v.innerText = N;
});
var X = m((o) => {
  "use strict";
  Object.defineProperty(o, "__esModule", { value: true });
  o.prevElementSibling = o.nextElementSibling = o.getName = o.hasAttrib = o.getAttributeValue = o.getSiblings = o.getParent = o.getChildren = void 0;
  var Q = __domhandler$, me = [];
  function U(e) {
    var t;
    return (t = e.children) !== null && t !== void 0 ? t : me;
  }
  o.getChildren = U;
  function W(e) {
    return e.parent || null;
  }
  o.getParent = W;
  function Te(e) {
    var t, r, n = W(e);
    if (n != null)
      return U(n);
    for (var i = [e], a = e.prev, u = e.next; a != null; )
      i.unshift(a), t = a, a = t.prev;
    for (; u != null; )
      i.push(u), r = u, u = r.next;
    return i;
  }
  o.getSiblings = Te;
  function xe(e, t) {
    var r;
    return (r = e.attribs) === null || r === void 0 ? void 0 : r[t];
  }
  o.getAttributeValue = xe;
  function _e(e, t) {
    return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null;
  }
  o.hasAttrib = _e;
  function Oe(e) {
    return e.name;
  }
  o.getName = Oe;
  function Ce(e) {
    for (var t, r = e.next; r !== null && !(0, Q.isTag)(r); )
      t = r, r = t.next;
    return r;
  }
  o.nextElementSibling = Ce;
  function Ee(e) {
    for (var t, r = e.prev; r !== null && !(0, Q.isTag)(r); )
      t = r, r = t.prev;
    return r;
  }
  o.prevElementSibling = Ee;
});
var Y = m((d) => {
  "use strict";
  Object.defineProperty(d, "__esModule", { value: true });
  d.prepend = d.prependChild = d.append = d.appendChild = d.replaceElement = d.removeElement = void 0;
  function E(e) {
    if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
      var t = e.parent.children;
      t.splice(t.lastIndexOf(e), 1);
    }
  }
  d.removeElement = E;
  function Ae(e, t) {
    var r = t.prev = e.prev;
    r && (r.next = t);
    var n = t.next = e.next;
    n && (n.prev = t);
    var i = t.parent = e.parent;
    if (i) {
      var a = i.children;
      a[a.lastIndexOf(e)] = t;
    }
  }
  d.replaceElement = Ae;
  function De(e, t) {
    if (E(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
      var r = e.children[e.children.length - 2];
      r.next = t, t.prev = r;
    } else
      t.prev = null;
  }
  d.appendChild = De;
  function Pe(e, t) {
    E(t);
    var r = e.parent, n = e.next;
    if (t.next = n, t.prev = e, e.next = t, t.parent = r, n) {
      if (n.prev = t, r) {
        var i = r.children;
        i.splice(i.lastIndexOf(n), 0, t);
      }
    } else
      r && r.children.push(t);
  }
  d.append = Pe;
  function je(e, t) {
    if (E(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
      var r = e.children[1];
      r.prev = t, t.next = r;
    } else
      t.next = null;
  }
  d.prependChild = je;
  function qe(e, t) {
    E(t);
    var r = e.parent;
    if (r) {
      var n = r.children;
      n.splice(n.indexOf(e), 0, t);
    }
    e.prev && (e.prev.next = t), t.parent = r, t.prev = e.prev, t.next = e, e.prev = t;
  }
  d.prepend = qe;
});
var L = m((p) => {
  "use strict";
  Object.defineProperty(p, "__esModule", { value: true });
  p.findAll = p.existsOne = p.findOne = p.findOneChild = p.find = p.filter = void 0;
  var A = __domhandler$;
  function Se(e, t, r, n) {
    return r === void 0 && (r = true), n === void 0 && (n = 1 / 0), Array.isArray(t) || (t = [t]), H(e, t, r, n);
  }
  p.filter = Se;
  function H(e, t, r, n) {
    for (var i = [], a = 0, u = t; a < u.length; a++) {
      var l = u[a];
      if (e(l) && (i.push(l), --n <= 0))
        break;
      if (r && (0, A.hasChildren)(l) && l.children.length > 0) {
        var s = H(e, l.children, r, n);
        if (i.push.apply(i, s), n -= s.length, n <= 0)
          break;
      }
    }
    return i;
  }
  p.find = H;
  function we(e, t) {
    return t.find(e);
  }
  p.findOneChild = we;
  function Z(e, t, r) {
    r === void 0 && (r = true);
    for (var n = null, i = 0; i < t.length && !n; i++) {
      var a = t[i];
      if ((0, A.isTag)(a))
        e(a) ? n = a : r && a.children.length > 0 && (n = Z(e, a.children));
      else
        continue;
    }
    return n;
  }
  p.findOne = Z;
  function $(e, t) {
    return t.some(function(r) {
      return (0, A.isTag)(r) && (e(r) || r.children.length > 0 && $(e, r.children));
    });
  }
  p.existsOne = $;
  function Me(e, t) {
    for (var r, n = [], i = t.filter(A.isTag), a; a = i.shift(); ) {
      var u = (r = a.children) === null || r === void 0 ? void 0 : r.filter(A.isTag);
      u && u.length > 0 && i.unshift.apply(i, u), e(a) && n.push(a);
    }
    return n;
  }
  p.findAll = Me;
});
var V = m((g) => {
  "use strict";
  Object.defineProperty(g, "__esModule", { value: true });
  g.getElementsByTagType = g.getElementsByTagName = g.getElementById = g.getElements = g.testElement = void 0;
  var x = __domhandler$, q = L(), S = { tag_name: function(e) {
    return typeof e == "function" ? function(t) {
      return (0, x.isTag)(t) && e(t.name);
    } : e === "*" ? x.isTag : function(t) {
      return (0, x.isTag)(t) && t.name === e;
    };
  }, tag_type: function(e) {
    return typeof e == "function" ? function(t) {
      return e(t.type);
    } : function(t) {
      return t.type === e;
    };
  }, tag_contains: function(e) {
    return typeof e == "function" ? function(t) {
      return (0, x.isText)(t) && e(t.data);
    } : function(t) {
      return (0, x.isText)(t) && t.data === e;
    };
  } };
  function k(e, t) {
    return typeof t == "function" ? function(r) {
      return (0, x.isTag)(r) && t(r.attribs[e]);
    } : function(r) {
      return (0, x.isTag)(r) && r.attribs[e] === t;
    };
  }
  function Ie(e, t) {
    return function(r) {
      return e(r) || t(r);
    };
  }
  function ee(e) {
    var t = Object.keys(e).map(function(r) {
      var n = e[r];
      return Object.prototype.hasOwnProperty.call(S, r) ? S[r](n) : k(r, n);
    });
    return t.length === 0 ? null : t.reduce(Ie);
  }
  function Be(e, t) {
    var r = ee(e);
    return r ? r(t) : true;
  }
  g.testElement = Be;
  function Ne(e, t, r, n) {
    n === void 0 && (n = 1 / 0);
    var i = ee(e);
    return i ? (0, q.filter)(i, t, r, n) : [];
  }
  g.getElements = Ne;
  function Fe(e, t, r) {
    return r === void 0 && (r = true), Array.isArray(t) || (t = [t]), (0, q.findOne)(k("id", e), t, r);
  }
  g.getElementById = Fe;
  function He(e, t, r, n) {
    return r === void 0 && (r = true), n === void 0 && (n = 1 / 0), (0, q.filter)(S.tag_name(e), t, r, n);
  }
  g.getElementsByTagName = He;
  function Le(e, t, r, n) {
    return r === void 0 && (r = true), n === void 0 && (n = 1 / 0), (0, q.filter)(S.tag_type(e), t, r, n);
  }
  g.getElementsByTagType = Le;
});
var ne = m((T) => {
  "use strict";
  Object.defineProperty(T, "__esModule", { value: true });
  T.uniqueSort = T.compareDocumentPosition = T.removeSubsets = void 0;
  var te = __domhandler$;
  function Ve(e) {
    for (var t = e.length; --t >= 0; ) {
      var r = e[t];
      if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
        e.splice(t, 1);
        continue;
      }
      for (var n = r.parent; n; n = n.parent)
        if (e.includes(n)) {
          e.splice(t, 1);
          break;
        }
    }
    return e;
  }
  T.removeSubsets = Ve;
  function re(e, t) {
    var r = [], n = [];
    if (e === t)
      return 0;
    for (var i = (0, te.hasChildren)(e) ? e : e.parent; i; )
      r.unshift(i), i = i.parent;
    for (i = (0, te.hasChildren)(t) ? t : t.parent; i; )
      n.unshift(i), i = i.parent;
    for (var a = Math.min(r.length, n.length), u = 0; u < a && r[u] === n[u]; )
      u++;
    if (u === 0)
      return 1;
    var l = r[u - 1], s = l.children, h = r[u], P = n[u];
    return s.indexOf(h) > s.indexOf(P) ? l === t ? 4 | 16 : 4 : l === e ? 2 | 8 : 2;
  }
  T.compareDocumentPosition = re;
  function ze(e) {
    return e = e.filter(function(t, r, n) {
      return !n.includes(t, r + 1);
    }), e.sort(function(t, r) {
      var n = re(t, r);
      return n & 2 ? -1 : n & 4 ? 1 : 0;
    }), e;
  }
  T.uniqueSort = ze;
});
var ae = m((M) => {
  "use strict";
  Object.defineProperty(M, "__esModule", { value: true });
  M.getFeed = void 0;
  var Re = F(), D = V();
  function Ge(e) {
    var t = w(We, e);
    return t ? t.name === "feed" ? Je(t) : Ke(t) : null;
  }
  M.getFeed = Ge;
  function Je(e) {
    var t, r = e.children, n = { type: "atom", items: (0, D.getElementsByTagName)("entry", r).map(function(u) {
      var l, s = u.children, h = { media: ie(s) };
      c(h, "id", "id", s), c(h, "title", "title", s);
      var P = (l = w("link", s)) === null || l === void 0 ? void 0 : l.attribs.href;
      P && (h.link = P);
      var R = _("summary", s) || _("content", s);
      R && (h.description = R);
      var G = _("updated", s);
      return G && (h.pubDate = new Date(G)), h;
    }) };
    c(n, "id", "id", r), c(n, "title", "title", r);
    var i = (t = w("link", r)) === null || t === void 0 ? void 0 : t.attribs.href;
    i && (n.link = i), c(n, "description", "subtitle", r);
    var a = _("updated", r);
    return a && (n.updated = new Date(a)), c(n, "author", "email", r, true), n;
  }
  function Ke(e) {
    var t, r, n = (r = (t = w("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && r !== void 0 ? r : [], i = { type: e.name.substr(0, 3), id: "", items: (0, D.getElementsByTagName)("item", e.children).map(function(u) {
      var l = u.children, s = { media: ie(l) };
      c(s, "id", "guid", l), c(s, "title", "title", l), c(s, "link", "link", l), c(s, "description", "description", l);
      var h = _("pubDate", l);
      return h && (s.pubDate = new Date(h)), s;
    }) };
    c(i, "title", "title", n), c(i, "link", "link", n), c(i, "description", "description", n);
    var a = _("lastBuildDate", n);
    return a && (i.updated = new Date(a)), c(i, "author", "managingEditor", n, true), i;
  }
  var Qe = ["url", "type", "lang"], Ue = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
  function ie(e) {
    return (0, D.getElementsByTagName)("media:content", e).map(function(t) {
      for (var r = t.attribs, n = { medium: r.medium, isDefault: !!r.isDefault }, i = 0, a = Qe; i < a.length; i++) {
        var u = a[i];
        r[u] && (n[u] = r[u]);
      }
      for (var l = 0, s = Ue; l < s.length; l++) {
        var u = s[l];
        r[u] && (n[u] = parseInt(r[u], 10));
      }
      return r.expression && (n.expression = r.expression), n;
    });
  }
  function w(e, t) {
    return (0, D.getElementsByTagName)(e, t, true, 1)[0];
  }
  function _(e, t, r) {
    return r === void 0 && (r = false), (0, Re.textContent)((0, D.getElementsByTagName)(e, t, r, 1)).trim();
  }
  function c(e, t, r, n, i) {
    i === void 0 && (i = false);
    var a = _(r, n, i);
    a && (e[t] = a);
  }
  function We(e) {
    return e === "rss" || e === "feed" || e === "rdf:RDF";
  }
});
var z = m((f) => {
  "use strict";
  var Xe = f && f.__createBinding || (Object.create ? function(e, t, r, n) {
    n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
      return t[r];
    } });
  } : function(e, t, r, n) {
    n === void 0 && (n = r), e[n] = t[r];
  }), O = f && f.__exportStar || function(e, t) {
    for (var r in e)
      r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Xe(t, e, r);
  };
  Object.defineProperty(f, "__esModule", { value: true });
  f.hasChildren = f.isDocument = f.isComment = f.isText = f.isCDATA = f.isTag = void 0;
  O(F(), f);
  O(X(), f);
  O(Y(), f);
  O(L(), f);
  O(V(), f);
  O(ne(), f);
  O(ae(), f);
  var C = __domhandler$;
  Object.defineProperty(f, "isTag", { enumerable: true, get: function() {
    return C.isTag;
  } });
  Object.defineProperty(f, "isCDATA", { enumerable: true, get: function() {
    return C.isCDATA;
  } });
  Object.defineProperty(f, "isText", { enumerable: true, get: function() {
    return C.isText;
  } });
  Object.defineProperty(f, "isComment", { enumerable: true, get: function() {
    return C.isComment;
  } });
  Object.defineProperty(f, "isDocument", { enumerable: true, get: function() {
    return C.isDocument;
  } });
  Object.defineProperty(f, "hasChildren", { enumerable: true, get: function() {
    return C.hasChildren;
  } });
});
var ue = J(z());
var fe = J(z());
var { hasChildren: at, isTag: ut, isCDATA: ft, isText: lt, isComment: st, isDocument: ot } = fe;
var vt = ue.default || fe;
export {
  vt as default,
  at as hasChildren,
  ft as isCDATA,
  st as isComment,
  ot as isDocument,
  ut as isTag,
  lt as isText
};
