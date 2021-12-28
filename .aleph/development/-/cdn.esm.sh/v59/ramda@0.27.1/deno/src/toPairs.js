// https://cdn.esm.sh/v59/ramda@0.27.1/deno/src/toPairs.js
var y = Object.create;
var o = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var x = Object.getOwnPropertyNames;
var P = Object.getPrototypeOf;
var g = Object.prototype.hasOwnProperty;
var m = (r) => o(r, "__esModule", { value: true });
var a = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var q = (r, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let u of x(e))
      !g.call(r, u) && (t || u !== "default") && o(r, u, { get: () => e[u], enumerable: !(n = d(e, u)) || n.enumerable });
  return r;
};
var O = (r, e) => q(m(o(r != null ? y(P(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r);
var l = a((D, i) => {
  function w(r) {
    return r != null && typeof r == "object" && r["@@functional/placeholder"] === true;
  }
  i.exports = w;
});
var c = a((E, s) => {
  var b = l();
  function j(r) {
    return function e(t) {
      return arguments.length === 0 || b(t) ? e : r.apply(this, arguments);
    };
  }
  s.exports = j;
});
var p = a((F, f) => {
  function k(r, e) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }
  f.exports = k;
});
var _ = a((G, h) => {
  var z = c(), A = p(), B = z(function(e) {
    var t = [];
    for (var n in e)
      A(n, e) && (t[t.length] = [n, e[n]]);
    return t;
  });
  h.exports = B;
});
var v = O(_());
var H = v.default;
export {
  H as default
};
