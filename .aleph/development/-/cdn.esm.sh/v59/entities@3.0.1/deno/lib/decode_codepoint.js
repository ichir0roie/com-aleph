// https://cdn.esm.sh/v59/entities@3.0.1/deno/lib/decode_codepoint.js
var n = Object.create;
var u = Object.defineProperty;
var C = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf;
var v = Object.prototype.hasOwnProperty;
var i = (f) => u(f, "__esModule", { value: true });
var o = (f, r) => () => (r || f((r = { exports: {} }).exports, r), r.exports);
var _ = (f, r, l, a) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let e of m(r))
      !v.call(f, e) && (l || e !== "default") && u(f, e, { get: () => r[e], enumerable: !(a = C(r, e)) || a.enumerable });
  return f;
};
var g = (f, r) => _(i(u(f != null ? n(p(f)) : {}, "default", !r && f && f.__esModule ? { get: () => f.default, enumerable: true } : { value: f, enumerable: true })), f);
var d = o((t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true });
  var s = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), F = String.fromCodePoint || function(f) {
    var r = "";
    return f > 65535 && (f -= 65536, r += String.fromCharCode(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023), r += String.fromCharCode(f), r;
  };
  function M(f) {
    var r;
    return f >= 55296 && f <= 57343 || f > 1114111 ? "\uFFFD" : F((r = s.get(f)) !== null && r !== void 0 ? r : f);
  }
  t.default = M;
});
var x = g(d());
var b = x.default;
export {
  b as default
};
