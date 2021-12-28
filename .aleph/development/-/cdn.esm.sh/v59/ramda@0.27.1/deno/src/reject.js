// https://cdn.esm.sh/v59/ramda@0.27.1/deno/src/reject.js
var gr = Object.create;
var y = Object.defineProperty;
var vr = Object.getOwnPropertyDescriptor;
var dr = Object.getOwnPropertyNames;
var _r = Object.getPrototypeOf;
var mr = Object.prototype.hasOwnProperty;
var qr = (e) => y(e, "__esModule", { value: true });
var a = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var xr = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let u of dr(r))
      !mr.call(e, u) && (t || u !== "default") && y(e, u, { get: () => r[u], enumerable: !(n = vr(r, u)) || n.enumerable });
  return e;
};
var br = (e, r) => xr(qr(y(e != null ? gr(_r(e)) : {}, "default", !r && e && e.__esModule ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
var q = a((qe, m) => {
  function wr(e) {
    return function() {
      return !e.apply(this, arguments);
    };
  }
  m.exports = wr;
});
var h = a((xe, x) => {
  function Ar(e) {
    return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
  }
  x.exports = Ar;
});
var f = a((be, b) => {
  var Or = h();
  function jr(e) {
    return function r(t) {
      return arguments.length === 0 || Or(t) ? r : e.apply(this, arguments);
    };
  }
  b.exports = jr;
});
var c = a((we, w) => {
  var g = f(), s = h();
  function Sr(e) {
    return function r(t, n) {
      switch (arguments.length) {
        case 0:
          return r;
        case 1:
          return s(t) ? r : g(function(u) {
            return e(t, u);
          });
        default:
          return s(t) && s(n) ? r : s(t) ? g(function(u) {
            return e(u, n);
          }) : s(n) ? g(function(u) {
            return e(t, u);
          }) : e(t, n);
      }
    };
  }
  w.exports = Sr;
});
var v = a((Ae, A) => {
  A.exports = Array.isArray || function(r) {
    return r != null && r.length >= 0 && Object.prototype.toString.call(r) === "[object Array]";
  };
});
var j = a((Oe, O) => {
  function kr(e) {
    return e != null && typeof e["@@transducer/step"] == "function";
  }
  O.exports = kr;
});
var k = a((je, S) => {
  var Er = v(), Pr = j();
  function Ir(e, r, t) {
    return function() {
      if (arguments.length === 0)
        return t();
      var n = Array.prototype.slice.call(arguments, 0), u = n.pop();
      if (!Er(u)) {
        for (var i = 0; i < e.length; ) {
          if (typeof u[e[i]] == "function")
            return u[e[i]].apply(u, n);
          i += 1;
        }
        if (Pr(u)) {
          var o = r.apply(null, n);
          return o(u);
        }
      }
      return t.apply(this, arguments);
    };
  }
  S.exports = Ir;
});
var P = a((Se, E) => {
  function Lr(e, r) {
    for (var t = 0, n = r.length, u = []; t < n; )
      e(r[t]) && (u[u.length] = r[t]), t += 1;
    return u;
  }
  E.exports = Lr;
});
var L = a((ke, I) => {
  function Xr(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  I.exports = Xr;
});
var T = a((Ee, X) => {
  function Tr(e) {
    return Object.prototype.toString.call(e) === "[object String]";
  }
  X.exports = Tr;
});
var F = a((Pe, B) => {
  var Br = f(), Fr = v(), Rr = T(), Wr = Br(function(r) {
    return Fr(r) ? true : !r || typeof r != "object" || Rr(r) ? false : r.nodeType === 1 ? !!r.length : r.length === 0 ? true : r.length > 0 ? r.hasOwnProperty(0) && r.hasOwnProperty(r.length - 1) : false;
  });
  B.exports = Wr;
});
var W = a((Ie, R) => {
  var zr = function() {
    function e(r) {
      this.f = r;
    }
    return e.prototype["@@transducer/init"] = function() {
      throw new Error("init not implemented on XWrap");
    }, e.prototype["@@transducer/result"] = function(r) {
      return r;
    }, e.prototype["@@transducer/step"] = function(r, t) {
      return this.f(r, t);
    }, e;
  }();
  function Cr(e) {
    return new zr(e);
  }
  R.exports = Cr;
});
var C = a((Le, z) => {
  function Dr(e, r) {
    switch (e) {
      case 0:
        return function() {
          return r.apply(this, arguments);
        };
      case 1:
        return function(t) {
          return r.apply(this, arguments);
        };
      case 2:
        return function(t, n) {
          return r.apply(this, arguments);
        };
      case 3:
        return function(t, n, u) {
          return r.apply(this, arguments);
        };
      case 4:
        return function(t, n, u, i) {
          return r.apply(this, arguments);
        };
      case 5:
        return function(t, n, u, i, o) {
          return r.apply(this, arguments);
        };
      case 6:
        return function(t, n, u, i, o, p) {
          return r.apply(this, arguments);
        };
      case 7:
        return function(t, n, u, i, o, p, l) {
          return r.apply(this, arguments);
        };
      case 8:
        return function(t, n, u, i, o, p, l, _) {
          return r.apply(this, arguments);
        };
      case 9:
        return function(t, n, u, i, o, p, l, _, hr) {
          return r.apply(this, arguments);
        };
      case 10:
        return function(t, n, u, i, o, p, l, _, hr, _e) {
          return r.apply(this, arguments);
        };
      default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
  }
  z.exports = Dr;
});
var G = a((Xe, D) => {
  var Gr = C(), Hr = c(), Jr = Hr(function(r, t) {
    return Gr(r.length, function() {
      return r.apply(t, arguments);
    });
  });
  D.exports = Jr;
});
var Q = a((Te, M) => {
  var Kr = F(), Mr = W(), Qr = G();
  function Ur(e, r, t) {
    for (var n = 0, u = t.length; n < u; ) {
      if (r = e["@@transducer/step"](r, t[n]), r && r["@@transducer/reduced"]) {
        r = r["@@transducer/value"];
        break;
      }
      n += 1;
    }
    return e["@@transducer/result"](r);
  }
  function H(e, r, t) {
    for (var n = t.next(); !n.done; ) {
      if (r = e["@@transducer/step"](r, n.value), r && r["@@transducer/reduced"]) {
        r = r["@@transducer/value"];
        break;
      }
      n = t.next();
    }
    return e["@@transducer/result"](r);
  }
  function J(e, r, t, n) {
    return e["@@transducer/result"](t[n](Qr(e["@@transducer/step"], e), r));
  }
  var K = typeof Symbol != "undefined" ? Symbol.iterator : "@@iterator";
  function Vr(e, r, t) {
    if (typeof e == "function" && (e = Mr(e)), Kr(t))
      return Ur(e, r, t);
    if (typeof t["fantasy-land/reduce"] == "function")
      return J(e, r, t, "fantasy-land/reduce");
    if (t[K] != null)
      return H(e, r, t[K]());
    if (typeof t.next == "function")
      return H(e, r, t);
    if (typeof t.reduce == "function")
      return J(e, r, t, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  }
  M.exports = Vr;
});
var V = a((Be, U) => {
  U.exports = { init: function() {
    return this.xf["@@transducer/init"]();
  }, result: function(e) {
    return this.xf["@@transducer/result"](e);
  } };
});
var $ = a((Fe, Z) => {
  var Yr = c(), Y = V(), Zr = function() {
    function e(r, t) {
      this.xf = t, this.f = r;
    }
    return e.prototype["@@transducer/init"] = Y.init, e.prototype["@@transducer/result"] = Y.result, e.prototype["@@transducer/step"] = function(r, t) {
      return this.f(t) ? this.xf["@@transducer/step"](r, t) : r;
    }, e;
  }(), $r = Yr(function(r, t) {
    return new Zr(r, t);
  });
  Z.exports = $r;
});
var d = a((Re, N) => {
  function Nr(e, r) {
    return Object.prototype.hasOwnProperty.call(r, e);
  }
  N.exports = Nr;
});
var tr = a((We, er) => {
  var re = d(), rr = Object.prototype.toString, ee = function() {
    return rr.call(arguments) === "[object Arguments]" ? function(r) {
      return rr.call(r) === "[object Arguments]";
    } : function(r) {
      return re("callee", r);
    };
  }();
  er.exports = ee;
});
var sr = a((ze, or) => {
  var nr = f(), ur = d(), te = tr(), ne = !{ toString: null }.propertyIsEnumerable("toString"), ar = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], ir = function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
  }(), ue = function(r, t) {
    for (var n = 0; n < r.length; ) {
      if (r[n] === t)
        return true;
      n += 1;
    }
    return false;
  }, ae = nr(typeof Object.keys == "function" && !ir ? function(r) {
    return Object(r) !== r ? [] : Object.keys(r);
  } : function(r) {
    if (Object(r) !== r)
      return [];
    var t, n, u = [], i = ir && te(r);
    for (t in r)
      ur(t, r) && (!i || t !== "length") && (u[u.length] = t);
    if (ne)
      for (n = ar.length - 1; n >= 0; )
        t = ar[n], ur(t, r) && !ue(u, t) && (u[u.length] = t), n -= 1;
    return u;
  });
  or.exports = ae;
});
var pr = a((Ce, cr) => {
  var ie = c(), oe = k(), se = P(), ce = L(), pe = Q(), fe = $(), le = sr(), ye = ie(oe(["filter"], fe, function(e, r) {
    return ce(r) ? pe(function(t, n) {
      return e(r[n]) && (t[n] = r[n]), t;
    }, {}, le(r)) : se(e, r);
  }));
  cr.exports = ye;
});
var lr = a((De, fr) => {
  var he = q(), ge = c(), ve = pr(), de = ge(function(r, t) {
    return ve(he(r), t);
  });
  fr.exports = de;
});
var yr = br(lr());
var Ge = yr.default;
export {
  Ge as default
};
