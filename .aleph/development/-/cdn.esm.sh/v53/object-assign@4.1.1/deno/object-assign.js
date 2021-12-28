// https://cdn.esm.sh/v53/object-assign@4.1.1/deno/object-assign.js
var b = Object.create;
var s = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var O = Object.getOwnPropertyNames;
var j = Object.getPrototypeOf;
var g = Object.prototype.hasOwnProperty;
var m = (r) => s(r, "__esModule", { value: true });
var v = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var y = (r, e, t) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of O(e))
      !g.call(r, n) && n !== "default" && s(r, n, { get: () => e[n], enumerable: !(t = p(e, n)) || t.enumerable });
  return r;
};
var h = (r) => y(m(s(r != null ? b(j(r)) : {}, "default", r && r.__esModule && "default" in r ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r);
var l = v((q, i) => {
  "use strict";
  var u = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
  function P(r) {
    if (r == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(r);
  }
  function E() {
    try {
      if (!Object.assign)
        return false;
      var r = new String("abc");
      if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5")
        return false;
      for (var e = {}, t = 0; t < 10; t++)
        e["_" + String.fromCharCode(t)] = t;
      var n = Object.getOwnPropertyNames(e).map(function(o) {
        return e[o];
      });
      if (n.join("") !== "0123456789")
        return false;
      var a = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(o) {
        a[o] = o;
      }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
    } catch (o) {
      return false;
    }
  }
  i.exports = E() ? Object.assign : function(r, e) {
    for (var t, n = P(r), a, o = 1; o < arguments.length; o++) {
      t = Object(arguments[o]);
      for (var f in t)
        d.call(t, f) && (n[f] = t[f]);
      if (u) {
        a = u(t);
        for (var c = 0; c < a.length; c++)
          w.call(t, a[c]) && (n[a[c]] = t[a[c]]);
      }
    }
    return n;
  };
});
var S = h(l());
var export_default = S.default;
export {
  export_default as default
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
