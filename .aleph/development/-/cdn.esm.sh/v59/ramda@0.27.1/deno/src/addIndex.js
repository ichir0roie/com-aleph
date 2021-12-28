// https://cdn.esm.sh/v59/ramda@0.27.1/deno/src/addIndex.js
var C = Object.create;
var h = Object.defineProperty;
var D = Object.getOwnPropertyDescriptor;
var G = Object.getOwnPropertyNames;
var H = Object.getPrototypeOf;
var J = Object.prototype.hasOwnProperty;
var K = (a) => h(a, "__esModule", { value: true });
var s = (a, r) => () => (r || a((r = { exports: {} }).exports, r), r.exports);
var L = (a, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let e of G(r))
      !J.call(a, e) && (t || e !== "default") && h(a, e, { get: () => r[e], enumerable: !(n = D(r, e)) || n.enumerable });
  return a;
};
var M = (a, r) => L(K(h(a != null ? C(H(a)) : {}, "default", !r && a && a.__esModule ? { get: () => a.default, enumerable: true } : { value: a, enumerable: true })), a);
var _ = s((ir, f) => {
  function O(a, r) {
    a = a || [], r = r || [];
    var t, n = a.length, e = r.length, u = [];
    for (t = 0; t < n; )
      u[u.length] = a[t], t += 1;
    for (t = 0; t < e; )
      u[u.length] = r[t], t += 1;
    return u;
  }
  f.exports = O;
});
var l = s((cr, d) => {
  function Q(a) {
    return a != null && typeof a == "object" && a["@@functional/placeholder"] === true;
  }
  d.exports = Q;
});
var p = s((sr, x) => {
  var R = l();
  function S(a) {
    return function r(t) {
      return arguments.length === 0 || R(t) ? r : a.apply(this, arguments);
    };
  }
  x.exports = S;
});
var y = s((or, q) => {
  function T(a, r) {
    switch (a) {
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
        return function(t, n, e) {
          return r.apply(this, arguments);
        };
      case 4:
        return function(t, n, e, u) {
          return r.apply(this, arguments);
        };
      case 5:
        return function(t, n, e, u, i) {
          return r.apply(this, arguments);
        };
      case 6:
        return function(t, n, e, u, i, c) {
          return r.apply(this, arguments);
        };
      case 7:
        return function(t, n, e, u, i, c, g) {
          return r.apply(this, arguments);
        };
      case 8:
        return function(t, n, e, u, i, c, g, v) {
          return r.apply(this, arguments);
        };
      case 9:
        return function(t, n, e, u, i, c, g, v, B) {
          return r.apply(this, arguments);
        };
      case 10:
        return function(t, n, e, u, i, c, g, v, B, nr) {
          return r.apply(this, arguments);
        };
      default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
  }
  q.exports = T;
});
var N = s((lr, w) => {
  var m = p(), o = l();
  function U(a) {
    return function r(t, n) {
      switch (arguments.length) {
        case 0:
          return r;
        case 1:
          return o(t) ? r : m(function(e) {
            return a(t, e);
          });
        default:
          return o(t) && o(n) ? r : o(t) ? m(function(e) {
            return a(e, n);
          }) : o(n) ? m(function(e) {
            return a(t, e);
          }) : a(t, n);
      }
    };
  }
  w.exports = U;
});
var b = s((pr, F) => {
  var V = y(), I = l();
  function P(a, r, t) {
    return function() {
      for (var n = [], e = 0, u = a, i = 0; i < r.length || e < arguments.length; ) {
        var c;
        i < r.length && (!I(r[i]) || e >= arguments.length) ? c = r[i] : (c = arguments[e], e += 1), n[i] = c, I(c) || (u -= 1), i += 1;
      }
      return u <= 0 ? t.apply(this, n) : V(u, P(a, n, t));
    };
  }
  F.exports = P;
});
var A = s((gr, j) => {
  var W = y(), X = p(), Y = N(), Z = b(), $ = Y(function(r, t) {
    return r === 1 ? X(t) : W(r, Z(r, [], t));
  });
  j.exports = $;
});
var k = s((hr, E) => {
  var rr = _(), ar = p(), tr = A(), er = ar(function(r) {
    return tr(r.length, function() {
      var t = 0, n = arguments[0], e = arguments[arguments.length - 1], u = Array.prototype.slice.call(arguments, 0);
      return u[0] = function() {
        var i = n.apply(this, rr(arguments, [t, e]));
        return t += 1, i;
      }, r.apply(this, u);
    });
  });
  E.exports = er;
});
var z = M(k());
var yr = z.default;
export {
  yr as default
};
