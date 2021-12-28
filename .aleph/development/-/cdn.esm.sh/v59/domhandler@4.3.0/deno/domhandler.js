var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// https://cdn.esm.sh/v59/domhandler@4.3.0/deno/domhandler.js
import __domelementtype$ from "../../domelementtype@2.2.0/deno/domelementtype.js";
var F = Object.create;
var g = Object.defineProperty;
var G = Object.getOwnPropertyDescriptor;
var J = Object.getOwnPropertyNames;
var K = Object.getPrototypeOf;
var Q = Object.prototype.hasOwnProperty;
var U = (e) => g(e, "__esModule", { value: true });
var C = ((e) => typeof __require != "undefined" ? __require : typeof Proxy != "undefined" ? new Proxy(e, { get: (t, n) => (typeof __require != "undefined" ? __require : t)[n] }) : e)(function(e) {
  if (typeof __require != "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var _ = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var X = (e, t, n, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of J(t))
      !Q.call(e, r) && (n || r !== "default") && g(e, r, { get: () => t[r], enumerable: !(i = G(t, r)) || i.enumerable });
  return e;
};
var w = (e, t) => X(U(g(e != null ? F(K(e)) : {}, "default", !t && e && e.__esModule ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
var N = _((o) => {
  "use strict";
  var f = o && o.__extends || function() {
    var e = function(t, n) {
      return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
        i.__proto__ = r;
      } || function(i, r) {
        for (var s in r)
          Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
      }, e(t, n);
    };
    return function(t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
      e(t, n);
      function i() {
        this.constructor = t;
      }
      t.prototype = n === null ? Object.create(n) : (i.prototype = n.prototype, new i());
    };
  }(), h = o && o.__assign || function() {
    return h = Object.assign || function(e) {
      for (var t, n = 1, i = arguments.length; n < i; n++) {
        t = arguments[n];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      }
      return e;
    }, h.apply(this, arguments);
  };
  Object.defineProperty(o, "__esModule", { value: true });
  o.cloneNode = o.hasChildren = o.isDocument = o.isDirective = o.isComment = o.isText = o.isCDATA = o.isTag = o.Element = o.Document = o.NodeWithChildren = o.ProcessingInstruction = o.Comment = o.Text = o.DataNode = o.Node = void 0;
  var a = __domelementtype$, Y = new Map([[a.ElementType.Tag, 1], [a.ElementType.Script, 1], [a.ElementType.Style, 1], [a.ElementType.Directive, 1], [a.ElementType.Text, 3], [a.ElementType.CDATA, 4], [a.ElementType.Comment, 8], [a.ElementType.Root, 9]]), x = function() {
    function e(t) {
      this.type = t, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "nodeType", { get: function() {
      var t;
      return (t = Y.get(this.type)) !== null && t !== void 0 ? t : 1;
    }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "parentNode", { get: function() {
      return this.parent;
    }, set: function(t) {
      this.parent = t;
    }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "previousSibling", { get: function() {
      return this.prev;
    }, set: function(t) {
      this.prev = t;
    }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "nextSibling", { get: function() {
      return this.next;
    }, set: function(t) {
      this.next = t;
    }, enumerable: false, configurable: true }), e.prototype.cloneNode = function(t) {
      return t === void 0 && (t = false), b(this, t);
    }, e;
  }();
  o.Node = x;
  var p = function(e) {
    f(t, e);
    function t(n, i) {
      var r = e.call(this, n) || this;
      return r.data = i, r;
    }
    return Object.defineProperty(t.prototype, "nodeValue", { get: function() {
      return this.data;
    }, set: function(n) {
      this.data = n;
    }, enumerable: false, configurable: true }), t;
  }(x);
  o.DataNode = p;
  var D = function(e) {
    f(t, e);
    function t(n) {
      return e.call(this, a.ElementType.Text, n) || this;
    }
    return t;
  }(p);
  o.Text = D;
  var I = function(e) {
    f(t, e);
    function t(n) {
      return e.call(this, a.ElementType.Comment, n) || this;
    }
    return t;
  }(p);
  o.Comment = I;
  var O = function(e) {
    f(t, e);
    function t(n, i) {
      var r = e.call(this, a.ElementType.Directive, i) || this;
      return r.name = n, r;
    }
    return t;
  }(p);
  o.ProcessingInstruction = O;
  var m = function(e) {
    f(t, e);
    function t(n, i) {
      var r = e.call(this, n) || this;
      return r.children = i, r;
    }
    return Object.defineProperty(t.prototype, "firstChild", { get: function() {
      var n;
      return (n = this.children[0]) !== null && n !== void 0 ? n : null;
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "lastChild", { get: function() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "childNodes", { get: function() {
      return this.children;
    }, set: function(n) {
      this.children = n;
    }, enumerable: false, configurable: true }), t;
  }(x);
  o.NodeWithChildren = m;
  var P = function(e) {
    f(t, e);
    function t(n) {
      return e.call(this, a.ElementType.Root, n) || this;
    }
    return t;
  }(m);
  o.Document = P;
  var j = function(e) {
    f(t, e);
    function t(n, i, r, s) {
      r === void 0 && (r = []), s === void 0 && (s = n === "script" ? a.ElementType.Script : n === "style" ? a.ElementType.Style : a.ElementType.Tag);
      var c = e.call(this, s, r) || this;
      return c.name = n, c.attribs = i, c;
    }
    return Object.defineProperty(t.prototype, "tagName", { get: function() {
      return this.name;
    }, set: function(n) {
      this.name = n;
    }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "attributes", { get: function() {
      var n = this;
      return Object.keys(this.attribs).map(function(i) {
        var r, s;
        return { name: i, value: n.attribs[i], namespace: (r = n["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[i], prefix: (s = n["x-attribsPrefix"]) === null || s === void 0 ? void 0 : s[i] };
      });
    }, enumerable: false, configurable: true }), t;
  }(m);
  o.Element = j;
  function S(e) {
    return (0, a.isTag)(e);
  }
  o.isTag = S;
  function A(e) {
    return e.type === a.ElementType.CDATA;
  }
  o.isCDATA = A;
  function W(e) {
    return e.type === a.ElementType.Text;
  }
  o.isText = W;
  function H(e) {
    return e.type === a.ElementType.Comment;
  }
  o.isComment = H;
  function M(e) {
    return e.type === a.ElementType.Directive;
  }
  o.isDirective = M;
  function q(e) {
    return e.type === a.ElementType.Root;
  }
  o.isDocument = q;
  function Z(e) {
    return Object.prototype.hasOwnProperty.call(e, "children");
  }
  o.hasChildren = Z;
  function b(e, t) {
    t === void 0 && (t = false);
    var n;
    if (W(e))
      n = new D(e.data);
    else if (H(e))
      n = new I(e.data);
    else if (S(e)) {
      var i = t ? T(e.children) : [], r = new j(e.name, h({}, e.attribs), i);
      i.forEach(function(V) {
        return V.parent = r;
      }), e.namespace != null && (r.namespace = e.namespace), e["x-attribsNamespace"] && (r["x-attribsNamespace"] = h({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (r["x-attribsPrefix"] = h({}, e["x-attribsPrefix"])), n = r;
    } else if (A(e)) {
      var i = t ? T(e.children) : [], s = new m(a.ElementType.CDATA, i);
      i.forEach(function(v) {
        return v.parent = s;
      }), n = s;
    } else if (q(e)) {
      var i = t ? T(e.children) : [], c = new P(i);
      i.forEach(function(v) {
        return v.parent = c;
      }), e["x-mode"] && (c["x-mode"] = e["x-mode"]), n = c;
    } else if (M(e)) {
      var d = new O(e.name, e.data);
      e["x-name"] != null && (d["x-name"] = e["x-name"], d["x-publicId"] = e["x-publicId"], d["x-systemId"] = e["x-systemId"]), n = d;
    } else
      throw new Error("Not implemented yet: ".concat(e.type));
    return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
  }
  o.cloneNode = b;
  function T(e) {
    for (var t = e.map(function(i) {
      return b(i, true);
    }), n = 1; n < t.length; n++)
      t[n].prev = t[n - 1], t[n - 1].next = t[n];
    return t;
  }
});
var E = _((l) => {
  "use strict";
  var $ = l && l.__createBinding || (Object.create ? function(e, t, n, i) {
    i === void 0 && (i = n), Object.defineProperty(e, i, { enumerable: true, get: function() {
      return t[n];
    } });
  } : function(e, t, n, i) {
    i === void 0 && (i = n), e[i] = t[n];
  }), tt = l && l.__exportStar || function(e, t) {
    for (var n in e)
      n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && $(t, e, n);
  };
  Object.defineProperty(l, "__esModule", { value: true });
  l.DomHandler = void 0;
  var y = __domelementtype$, u = N();
  tt(N(), l);
  var z = /\s+/g, L = { normalizeWhitespace: false, withStartIndices: false, withEndIndices: false, xmlMode: false }, R = function() {
    function e(t, n, i) {
      this.dom = [], this.root = new u.Document(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof n == "function" && (i = n, n = L), typeof t == "object" && (n = t, t = void 0), this.callback = t ?? null, this.options = n ?? L, this.elementCB = i ?? null;
    }
    return e.prototype.onparserinit = function(t) {
      this.parser = t;
    }, e.prototype.onreset = function() {
      this.dom = [], this.root = new u.Document(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
    }, e.prototype.onend = function() {
      this.done || (this.done = true, this.parser = null, this.handleCallback(null));
    }, e.prototype.onerror = function(t) {
      this.handleCallback(t);
    }, e.prototype.onclosetag = function() {
      this.lastNode = null;
      var t = this.tagStack.pop();
      this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t);
    }, e.prototype.onopentag = function(t, n) {
      var i = this.options.xmlMode ? y.ElementType.Tag : void 0, r = new u.Element(t, n, void 0, i);
      this.addNode(r), this.tagStack.push(r);
    }, e.prototype.ontext = function(t) {
      var n = this.options.normalizeWhitespace, i = this.lastNode;
      if (i && i.type === y.ElementType.Text)
        n ? i.data = (i.data + t).replace(z, " ") : i.data += t, this.options.withEndIndices && (i.endIndex = this.parser.endIndex);
      else {
        n && (t = t.replace(z, " "));
        var r = new u.Text(t);
        this.addNode(r), this.lastNode = r;
      }
    }, e.prototype.oncomment = function(t) {
      if (this.lastNode && this.lastNode.type === y.ElementType.Comment) {
        this.lastNode.data += t;
        return;
      }
      var n = new u.Comment(t);
      this.addNode(n), this.lastNode = n;
    }, e.prototype.oncommentend = function() {
      this.lastNode = null;
    }, e.prototype.oncdatastart = function() {
      var t = new u.Text(""), n = new u.NodeWithChildren(y.ElementType.CDATA, [t]);
      this.addNode(n), t.parent = n, this.lastNode = t;
    }, e.prototype.oncdataend = function() {
      this.lastNode = null;
    }, e.prototype.onprocessinginstruction = function(t, n) {
      var i = new u.ProcessingInstruction(t, n);
      this.addNode(i);
    }, e.prototype.handleCallback = function(t) {
      if (typeof this.callback == "function")
        this.callback(t, this.dom);
      else if (t)
        throw t;
    }, e.prototype.addNode = function(t) {
      var n = this.tagStack[this.tagStack.length - 1], i = n.children[n.children.length - 1];
      this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), n.children.push(t), i && (t.prev = i, i.next = t), t.parent = n, this.lastNode = null;
    }, e;
  }();
  l.DomHandler = R;
  l.default = R;
});
var k = w(E());
var B = w(E());
var { DomHandler: rt } = B;
var ot = k.default || B;
export {
  rt as DomHandler,
  ot as default
};
