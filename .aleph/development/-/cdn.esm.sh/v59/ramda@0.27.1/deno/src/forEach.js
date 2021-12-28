// https://cdn.esm.sh/v59/ramda@0.27.1/deno/src/forEach.js
var A = Object.create;
var i = Object.defineProperty;
var j = Object.getOwnPropertyDescriptor;
var E = Object.getOwnPropertyNames;
var P = Object.getPrototypeOf;
var k = Object.prototype.hasOwnProperty;
var w = (r) => i(r, "__esModule", { value: true });
var o = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var F = (r, e, t, u) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of E(e))
      !k.call(r, n) && (t || n !== "default") && i(r, n, { get: () => e[n], enumerable: !(u = j(e, n)) || u.enumerable });
  return r;
};
var M = (r, e) => F(w(i(r != null ? A(P(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r);
var f = o((J, s) => {
  s.exports = Array.isArray || function(e) {
    return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
  };
});
var h = o((K, p) => {
  var b = f();
  function O(r, e) {
    return function() {
      var t = arguments.length;
      if (t === 0)
        return e();
      var u = arguments[t - 1];
      return b(u) || typeof u[r] != "function" ? e.apply(this, arguments) : u[r].apply(u, Array.prototype.slice.call(arguments, 0, t - 1));
    };
  }
  p.exports = O;
});
var a = o((L, y) => {
  function S(r) {
    return r != null && typeof r == "object" && r["@@functional/placeholder"] === true;
  }
  y.exports = S;
});
var _ = o((N, g) => {
  var z = a();
  function B(r) {
    return function e(t) {
      return arguments.length === 0 || z(t) ? e : r.apply(this, arguments);
    };
  }
  g.exports = B;
});
var v = o((Q, d) => {
  var l = _(), c = a();
  function C(r) {
    return function e(t, u) {
      switch (arguments.length) {
        case 0:
          return e;
        case 1:
          return c(t) ? e : l(function(n) {
            return r(t, n);
          });
        default:
          return c(t) && c(u) ? e : c(t) ? l(function(n) {
            return r(n, u);
          }) : c(u) ? l(function(n) {
            return r(t, n);
          }) : r(t, u);
      }
    };
  }
  d.exports = C;
});
var m = o((R, x) => {
  var D = h(), G = v(), H = G(D("forEach", function(e, t) {
    for (var u = t.length, n = 0; n < u; )
      e(t[n]), n += 1;
    return t;
  }));
  x.exports = H;
});
var q = M(m());
var T = q.default;
export {
  T as default
};
