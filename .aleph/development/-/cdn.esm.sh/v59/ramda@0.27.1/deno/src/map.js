// https://cdn.esm.sh/v59/ramda@0.27.1/deno/src/map.js
var gr = Object.create;
var g = Object.defineProperty;
var vr = Object.getOwnPropertyDescriptor;
var dr = Object.getOwnPropertyNames;
var mr = Object.getPrototypeOf;
var _r = Object.prototype.hasOwnProperty;
var qr = (e) => g(e, "__esModule", { value: true });
var a = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var br = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let u of dr(r))
      !_r.call(e, u) && (t || u !== "default") && g(e, u, { get: () => r[u], enumerable: !(n = vr(r, u)) || n.enumerable });
  return e;
};
var wr = (e, r) => br(qr(g(e != null ? gr(mr(e)) : {}, "default", !r && e && e.__esModule ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
var f = a((qe, q) => {
  function xr(e) {
    return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
  }
  q.exports = xr;
});
var p = a((be, b) => {
  var Ar = f();
  function Or(e) {
    return function r(t) {
      return arguments.length === 0 || Ar(t) ? r : e.apply(this, arguments);
    };
  }
  b.exports = Or;
});
var l = a((we, w) => {
  var v = p(), c = f();
  function Sr(e) {
    return function r(t, n) {
      switch (arguments.length) {
        case 0:
          return r;
        case 1:
          return c(t) ? r : v(function(u) {
            return e(t, u);
          });
        default:
          return c(t) && c(n) ? r : c(t) ? v(function(u) {
            return e(u, n);
          }) : c(n) ? v(function(u) {
            return e(t, u);
          }) : e(t, n);
      }
    };
  }
  w.exports = Sr;
});
var d = a((xe, x) => {
  x.exports = Array.isArray || function(r) {
    return r != null && r.length >= 0 && Object.prototype.toString.call(r) === "[object Array]";
  };
});
var O = a((Ae, A) => {
  function kr(e) {
    return e != null && typeof e["@@transducer/step"] == "function";
  }
  A.exports = kr;
});
var k = a((Oe, S) => {
  var jr = d(), Pr = O();
  function Er(e, r, t) {
    return function() {
      if (arguments.length === 0)
        return t();
      var n = Array.prototype.slice.call(arguments, 0), u = n.pop();
      if (!jr(u)) {
        for (var i = 0; i < e.length; ) {
          if (typeof u[e[i]] == "function")
            return u[e[i]].apply(u, n);
          i += 1;
        }
        if (Pr(u)) {
          var s = r.apply(null, n);
          return s(u);
        }
      }
      return t.apply(this, arguments);
    };
  }
  S.exports = Er;
});
var P = a((Se, j) => {
  function Ir(e, r) {
    for (var t = 0, n = r.length, u = Array(n); t < n; )
      u[t] = e(r[t]), t += 1;
    return u;
  }
  j.exports = Ir;
});
var I = a((ke, E) => {
  function Lr(e) {
    return Object.prototype.toString.call(e) === "[object String]";
  }
  E.exports = Lr;
});
var X = a((je, L) => {
  var Xr = p(), Tr = d(), Br = I(), Nr = Xr(function(r) {
    return Tr(r) ? true : !r || typeof r != "object" || Br(r) ? false : r.nodeType === 1 ? !!r.length : r.length === 0 ? true : r.length > 0 ? r.hasOwnProperty(0) && r.hasOwnProperty(r.length - 1) : false;
  });
  L.exports = Nr;
});
var B = a((Pe, T) => {
  var Rr = function() {
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
  function Wr(e) {
    return new Rr(e);
  }
  T.exports = Wr;
});
var y = a((Ee, N) => {
  function Fr(e, r) {
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
        return function(t, n, u, i, s) {
          return r.apply(this, arguments);
        };
      case 6:
        return function(t, n, u, i, s, o) {
          return r.apply(this, arguments);
        };
      case 7:
        return function(t, n, u, i, s, o, h) {
          return r.apply(this, arguments);
        };
      case 8:
        return function(t, n, u, i, s, o, h, _) {
          return r.apply(this, arguments);
        };
      case 9:
        return function(t, n, u, i, s, o, h, _, hr) {
          return r.apply(this, arguments);
        };
      case 10:
        return function(t, n, u, i, s, o, h, _, hr, me) {
          return r.apply(this, arguments);
        };
      default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
  }
  N.exports = Fr;
});
var W = a((Ie, R) => {
  var Mr = y(), zr = l(), Cr = zr(function(r, t) {
    return Mr(r.length, function() {
      return r.apply(t, arguments);
    });
  });
  R.exports = Cr;
});
var D = a((Le, C) => {
  var Dr = X(), Gr = B(), Hr = W();
  function Jr(e, r, t) {
    for (var n = 0, u = t.length; n < u; ) {
      if (r = e["@@transducer/step"](r, t[n]), r && r["@@transducer/reduced"]) {
        r = r["@@transducer/value"];
        break;
      }
      n += 1;
    }
    return e["@@transducer/result"](r);
  }
  function F(e, r, t) {
    for (var n = t.next(); !n.done; ) {
      if (r = e["@@transducer/step"](r, n.value), r && r["@@transducer/reduced"]) {
        r = r["@@transducer/value"];
        break;
      }
      n = t.next();
    }
    return e["@@transducer/result"](r);
  }
  function M(e, r, t, n) {
    return e["@@transducer/result"](t[n](Hr(e["@@transducer/step"], e), r));
  }
  var z = typeof Symbol != "undefined" ? Symbol.iterator : "@@iterator";
  function Kr(e, r, t) {
    if (typeof e == "function" && (e = Gr(e)), Dr(t))
      return Jr(e, r, t);
    if (typeof t["fantasy-land/reduce"] == "function")
      return M(e, r, t, "fantasy-land/reduce");
    if (t[z] != null)
      return F(e, r, t[z]());
    if (typeof t.next == "function")
      return F(e, r, t);
    if (typeof t.reduce == "function")
      return M(e, r, t, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  }
  C.exports = Kr;
});
var H = a((Xe, G) => {
  G.exports = { init: function() {
    return this.xf["@@transducer/init"]();
  }, result: function(e) {
    return this.xf["@@transducer/result"](e);
  } };
});
var Q = a((Te, K) => {
  var Qr = l(), J = H(), Ur = function() {
    function e(r, t) {
      this.xf = t, this.f = r;
    }
    return e.prototype["@@transducer/init"] = J.init, e.prototype["@@transducer/result"] = J.result, e.prototype["@@transducer/step"] = function(r, t) {
      return this.xf["@@transducer/step"](r, this.f(t));
    }, e;
  }(), Vr = Qr(function(r, t) {
    return new Ur(r, t);
  });
  K.exports = Vr;
});
var Z = a((Be, Y) => {
  var Yr = y(), U = f();
  function V(e, r, t) {
    return function() {
      for (var n = [], u = 0, i = e, s = 0; s < r.length || u < arguments.length; ) {
        var o;
        s < r.length && (!U(r[s]) || u >= arguments.length) ? o = r[s] : (o = arguments[u], u += 1), n[s] = o, U(o) || (i -= 1), s += 1;
      }
      return i <= 0 ? t.apply(this, n) : Yr(i, V(e, n, t));
    };
  }
  Y.exports = V;
});
var rr = a((Ne, $) => {
  var Zr = y(), $r = p(), re = l(), ee = Z(), te = re(function(r, t) {
    return r === 1 ? $r(t) : Zr(r, ee(r, [], t));
  });
  $.exports = te;
});
var m = a((Re, er) => {
  function ne(e, r) {
    return Object.prototype.hasOwnProperty.call(r, e);
  }
  er.exports = ne;
});
var ur = a((We, nr) => {
  var ue = m(), tr = Object.prototype.toString, ae = function() {
    return tr.call(arguments) === "[object Arguments]" ? function(r) {
      return tr.call(r) === "[object Arguments]";
    } : function(r) {
      return ue("callee", r);
    };
  }();
  nr.exports = ae;
});
var cr = a((Fe, pr) => {
  var ar = p(), ir = m(), ie = ur(), se = !{ toString: null }.propertyIsEnumerable("toString"), sr = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], or = function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
  }(), oe = function(r, t) {
    for (var n = 0; n < r.length; ) {
      if (r[n] === t)
        return true;
      n += 1;
    }
    return false;
  }, pe = ar(typeof Object.keys == "function" && !or ? function(r) {
    return Object(r) !== r ? [] : Object.keys(r);
  } : function(r) {
    if (Object(r) !== r)
      return [];
    var t, n, u = [], i = or && ie(r);
    for (t in r)
      ir(t, r) && (!i || t !== "length") && (u[u.length] = t);
    if (se)
      for (n = sr.length - 1; n >= 0; )
        t = sr[n], ir(t, r) && !oe(u, t) && (u[u.length] = t), n -= 1;
    return u;
  });
  pr.exports = pe;
});
var fr = a((Me, lr) => {
  var ce = l(), le = k(), fe = P(), ye = D(), he = Q(), ge = rr(), ve = cr(), de = ce(le(["fantasy-land/map", "map"], he, function(r, t) {
    switch (Object.prototype.toString.call(t)) {
      case "[object Function]":
        return ge(t.length, function() {
          return r.call(this, t.apply(this, arguments));
        });
      case "[object Object]":
        return ye(function(n, u) {
          return n[u] = r(t[u]), n;
        }, {}, ve(t));
      default:
        return fe(r, t);
    }
  }));
  lr.exports = de;
});
var yr = wr(fr());
var ze = yr.default;
export {
  ze as default
};
