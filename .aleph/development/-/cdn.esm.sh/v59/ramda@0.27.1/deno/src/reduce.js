// https://cdn.esm.sh/v59/ramda@0.27.1/deno/src/reduce.js
var M = Object.create;
var g = Object.defineProperty;
var N = Object.getOwnPropertyDescriptor;
var Q = Object.getOwnPropertyNames;
var U = Object.getPrototypeOf;
var V = Object.prototype.hasOwnProperty;
var Y = (e) => g(e, "__esModule", { value: true });
var s = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var Z = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let u of Q(r))
      !V.call(e, u) && (t || u !== "default") && g(e, u, { get: () => r[u], enumerable: !(n = N(r, u)) || n.enumerable });
  return e;
};
var $ = (e, r) => Z(Y(g(e != null ? M(U(e)) : {}, "default", !r && e && e.__esModule ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
var f = s((kr, q) => {
  function rr(e) {
    return e != null && typeof e == "object" && e["@@functional/placeholder"] === true;
  }
  q.exports = rr;
});
var y = s((xr, w) => {
  var er = f();
  function tr(e) {
    return function r(t) {
      return arguments.length === 0 || er(t) ? r : e.apply(this, arguments);
    };
  }
  w.exports = tr;
});
var m = s((Or, A) => {
  var _ = y(), p = f();
  function nr(e) {
    return function r(t, n) {
      switch (arguments.length) {
        case 0:
          return r;
        case 1:
          return p(t) ? r : _(function(u) {
            return e(t, u);
          });
        default:
          return p(t) && p(n) ? r : p(t) ? _(function(u) {
            return e(u, n);
          }) : p(n) ? _(function(u) {
            return e(t, u);
          }) : e(t, n);
      }
    };
  }
  A.exports = nr;
});
var j = s((br, S) => {
  var d = y(), c = m(), o = f();
  function ur(e) {
    return function r(t, n, u) {
      switch (arguments.length) {
        case 0:
          return r;
        case 1:
          return o(t) ? r : c(function(a, i) {
            return e(t, a, i);
          });
        case 2:
          return o(t) && o(n) ? r : o(t) ? c(function(a, i) {
            return e(a, n, i);
          }) : o(n) ? c(function(a, i) {
            return e(t, a, i);
          }) : d(function(a) {
            return e(t, n, a);
          });
        default:
          return o(t) && o(n) && o(u) ? r : o(t) && o(n) ? c(function(a, i) {
            return e(a, i, u);
          }) : o(t) && o(u) ? c(function(a, i) {
            return e(a, n, i);
          }) : o(n) && o(u) ? c(function(a, i) {
            return e(t, a, i);
          }) : o(t) ? d(function(a) {
            return e(a, n, u);
          }) : o(n) ? d(function(a) {
            return e(t, a, u);
          }) : o(u) ? d(function(a) {
            return e(t, n, a);
          }) : e(t, n, u);
      }
    };
  }
  S.exports = ur;
});
var k = s((Er, P) => {
  P.exports = Array.isArray || function(r) {
    return r != null && r.length >= 0 && Object.prototype.toString.call(r) === "[object Array]";
  };
});
var O = s((Lr, x) => {
  function ar(e) {
    return Object.prototype.toString.call(e) === "[object String]";
  }
  x.exports = ar;
});
var E = s((Rr, b) => {
  var ir = y(), or = k(), sr = O(), cr = ir(function(r) {
    return or(r) ? true : !r || typeof r != "object" || sr(r) ? false : r.nodeType === 1 ? !!r.length : r.length === 0 ? true : r.length > 0 ? r.hasOwnProperty(0) && r.hasOwnProperty(r.length - 1) : false;
  });
  b.exports = cr;
});
var R = s((Wr, L) => {
  var pr = function() {
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
  function lr(e) {
    return new pr(e);
  }
  L.exports = lr;
});
var X = s((Xr, W) => {
  function fr(e, r) {
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
        return function(t, n, u, a) {
          return r.apply(this, arguments);
        };
      case 5:
        return function(t, n, u, a, i) {
          return r.apply(this, arguments);
        };
      case 6:
        return function(t, n, u, a, i, l) {
          return r.apply(this, arguments);
        };
      case 7:
        return function(t, n, u, a, i, l, h) {
          return r.apply(this, arguments);
        };
      case 8:
        return function(t, n, u, a, i, l, h, v) {
          return r.apply(this, arguments);
        };
      case 9:
        return function(t, n, u, a, i, l, h, v, K) {
          return r.apply(this, arguments);
        };
      case 10:
        return function(t, n, u, a, i, l, h, v, K, jr) {
          return r.apply(this, arguments);
        };
      default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
  }
  W.exports = fr;
});
var F = s((Tr, T) => {
  var yr = X(), dr = m(), hr = dr(function(r, t) {
    return yr(r.length, function() {
      return r.apply(t, arguments);
    });
  });
  T.exports = hr;
});
var D = s((Fr, C) => {
  var gr = E(), _r = R(), mr = F();
  function vr(e, r, t) {
    for (var n = 0, u = t.length; n < u; ) {
      if (r = e["@@transducer/step"](r, t[n]), r && r["@@transducer/reduced"]) {
        r = r["@@transducer/value"];
        break;
      }
      n += 1;
    }
    return e["@@transducer/result"](r);
  }
  function I(e, r, t) {
    for (var n = t.next(); !n.done; ) {
      if (r = e["@@transducer/step"](r, n.value), r && r["@@transducer/reduced"]) {
        r = r["@@transducer/value"];
        break;
      }
      n = t.next();
    }
    return e["@@transducer/result"](r);
  }
  function z(e, r, t, n) {
    return e["@@transducer/result"](t[n](mr(e["@@transducer/step"], e), r));
  }
  var B = typeof Symbol != "undefined" ? Symbol.iterator : "@@iterator";
  function qr(e, r, t) {
    if (typeof e == "function" && (e = _r(e)), gr(t))
      return vr(e, r, t);
    if (typeof t["fantasy-land/reduce"] == "function")
      return z(e, r, t, "fantasy-land/reduce");
    if (t[B] != null)
      return I(e, r, t[B]());
    if (typeof t.next == "function")
      return I(e, r, t);
    if (typeof t.reduce == "function")
      return z(e, r, t, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  }
  C.exports = qr;
});
var H = s((Ir, G) => {
  var wr = j(), Ar = D(), Sr = wr(Ar);
  G.exports = Sr;
});
var J = $(H());
var zr = J.default;
export {
  zr as default
};
