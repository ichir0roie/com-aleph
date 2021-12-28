// https://cdn.esm.sh/v59/lodash.camelcase@4.3.0/deno/lodash.camelcase.js
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var G = Object.create;
var i = Object.defineProperty;
var P = Object.getOwnPropertyDescriptor;
var H = Object.getOwnPropertyNames;
var J = Object.getPrototypeOf;
var Y = Object.prototype.hasOwnProperty;
var V = (u) => i(u, "__esModule", { value: true });
var B = (u, e) => () => (e || u((e = { exports: {} }).exports, e), e.exports);
var _ = (u, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let o of H(e))
      !Y.call(u, o) && (r || o !== "default") && i(u, o, { get: () => e[o], enumerable: !(n = P(e, o)) || n.enumerable });
  return u;
};
var $ = (u, e) => _(V(i(u != null ? G(J(u)) : {}, "default", !e && u && u.__esModule ? { get: () => u.default, enumerable: true } : { value: u, enumerable: true })), u);
var D = B((Yu, w) => {
  var q = 1 / 0, K = "[object Symbol]", Q = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, X = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, x = "\\ud800-\\udfff", p = "\\u0300-\\u036f\\ufe20-\\ufe23", g = "\\u20d0-\\u20f0", A = "\\u2700-\\u27bf", v = "a-z\\xdf-\\xf6\\xf8-\\xff", uu = "\\xac\\xb1\\xd7\\xf7", eu = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ru = "\\u2000-\\u206f", ou = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", S = "A-Z\\xc0-\\xd6\\xd8-\\xde", h = "\\ufe0e\\ufe0f", O = uu + eu + ru + ou, d = "['\u2019]", nu = "[" + x + "]", R = "[" + O + "]", c = "[" + p + g + "]", m = "\\d+", fu = "[" + A + "]", j = "[" + v + "]", U = "[^" + x + O + m + A + v + S + "]", s = "\\ud83c[\\udffb-\\udfff]", tu = "(?:" + c + "|" + s + ")", y = "[^" + x + "]", b = "(?:\\ud83c[\\udde6-\\uddff]){2}", l = "[\\ud800-\\udbff][\\udc00-\\udfff]", f = "[" + S + "]", C = "\\u200d", E = "(?:" + j + "|" + U + ")", xu = "(?:" + f + "|" + U + ")", L = "(?:" + d + "(?:d|ll|m|re|s|t|ve))?", I = "(?:" + d + "(?:D|LL|M|RE|S|T|VE))?", T = tu + "?", z = "[" + h + "]?", cu = "(?:" + C + "(?:" + [y, b, l].join("|") + ")" + z + T + ")*", Z = z + T + cu, au = "(?:" + [fu, b, l].join("|") + ")" + Z, iu = "(?:" + [y + c + "?", c, b, l, nu].join("|") + ")", du = RegExp(d, "g"), su = RegExp(c, "g"), bu = RegExp(s + "(?=" + s + ")|" + iu + Z, "g"), lu = RegExp([f + "?" + j + "+" + L + "(?=" + [R, f, "$"].join("|") + ")", xu + "+" + I + "(?=" + [R, f + E, "$"].join("|") + ")", f + "?" + E + "+" + L, f + "+" + I, m, au].join("|"), "g"), pu = RegExp("[" + C + x + p + g + h + "]"), gu = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Au = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u00C7: "C", \u00E7: "c", \u00D0: "D", \u00F0: "d", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00D1: "N", \u00F1: "n", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", \u00D8: "O", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u00DD: "Y", \u00FD: "y", \u00FF: "y", \u00C6: "Ae", \u00E6: "ae", \u00DE: "Th", \u00FE: "th", \u00DF: "ss", \u0100: "A", \u0102: "A", \u0104: "A", \u0101: "a", \u0103: "a", \u0105: "a", \u0106: "C", \u0108: "C", \u010A: "C", \u010C: "C", \u0107: "c", \u0109: "c", \u010B: "c", \u010D: "c", \u010E: "D", \u0110: "D", \u010F: "d", \u0111: "d", \u0112: "E", \u0114: "E", \u0116: "E", \u0118: "E", \u011A: "E", \u0113: "e", \u0115: "e", \u0117: "e", \u0119: "e", \u011B: "e", \u011C: "G", \u011E: "G", \u0120: "G", \u0122: "G", \u011D: "g", \u011F: "g", \u0121: "g", \u0123: "g", \u0124: "H", \u0126: "H", \u0125: "h", \u0127: "h", \u0128: "I", \u012A: "I", \u012C: "I", \u012E: "I", \u0130: "I", \u0129: "i", \u012B: "i", \u012D: "i", \u012F: "i", \u0131: "i", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u0138: "k", \u0139: "L", \u013B: "L", \u013D: "L", \u013F: "L", \u0141: "L", \u013A: "l", \u013C: "l", \u013E: "l", \u0140: "l", \u0142: "l", \u0143: "N", \u0145: "N", \u0147: "N", \u014A: "N", \u0144: "n", \u0146: "n", \u0148: "n", \u014B: "n", \u014C: "O", \u014E: "O", \u0150: "O", \u014D: "o", \u014F: "o", \u0151: "o", \u0154: "R", \u0156: "R", \u0158: "R", \u0155: "r", \u0157: "r", \u0159: "r", \u015A: "S", \u015C: "S", \u015E: "S", \u0160: "S", \u015B: "s", \u015D: "s", \u015F: "s", \u0161: "s", \u0162: "T", \u0164: "T", \u0166: "T", \u0163: "t", \u0165: "t", \u0167: "t", \u0168: "U", \u016A: "U", \u016C: "U", \u016E: "U", \u0170: "U", \u0172: "U", \u0169: "u", \u016B: "u", \u016D: "u", \u016F: "u", \u0171: "u", \u0173: "u", \u0174: "W", \u0175: "w", \u0176: "Y", \u0177: "y", \u0178: "Y", \u0179: "Z", \u017B: "Z", \u017D: "Z", \u017A: "z", \u017C: "z", \u017E: "z", \u0132: "IJ", \u0133: "ij", \u0152: "Oe", \u0153: "oe", \u0149: "'n", \u017F: "ss" }, vu = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, Su = typeof self == "object" && self && self.Object === Object && self, hu = vu || Su || Function("return this")();
  function Ou(u, e, r, n) {
    var o = -1, t = u ? u.length : 0;
    for (n && t && (r = u[++o]); ++o < t; )
      r = e(r, u[o], o, u);
    return r;
  }
  function Ru(u) {
    return u.split("");
  }
  function mu(u) {
    return u.match(Q) || [];
  }
  function ju(u) {
    return function(e) {
      return u == null ? void 0 : u[e];
    };
  }
  var Uu = ju(Au);
  function M(u) {
    return pu.test(u);
  }
  function yu(u) {
    return gu.test(u);
  }
  function Cu(u) {
    return M(u) ? Eu(u) : Ru(u);
  }
  function Eu(u) {
    return u.match(bu) || [];
  }
  function Lu(u) {
    return u.match(lu) || [];
  }
  var Iu = Object.prototype, Tu = Iu.toString, N = hu.Symbol, W = N ? N.prototype : void 0, k = W ? W.toString : void 0;
  function zu(u, e, r) {
    var n = -1, o = u.length;
    e < 0 && (e = -e > o ? 0 : o + e), r = r > o ? o : r, r < 0 && (r += o), o = e > r ? 0 : r - e >>> 0, e >>>= 0;
    for (var t = Array(o); ++n < o; )
      t[n] = u[n + e];
    return t;
  }
  function Zu(u) {
    if (typeof u == "string")
      return u;
    if (wu(u))
      return k ? k.call(u) : "";
    var e = u + "";
    return e == "0" && 1 / u == -q ? "-0" : e;
  }
  function Mu(u, e, r) {
    var n = u.length;
    return r = r === void 0 ? n : r, !e && r >= n ? u : zu(u, e, r);
  }
  function Nu(u) {
    return function(e) {
      e = a(e);
      var r = M(e) ? Cu(e) : void 0, n = r ? r[0] : e.charAt(0), o = r ? Mu(r, 1).join("") : e.slice(1);
      return n[u]() + o;
    };
  }
  function Wu(u) {
    return function(e) {
      return Ou(Hu(Gu(e).replace(du, "")), u, "");
    };
  }
  function ku(u) {
    return !!u && typeof u == "object";
  }
  function wu(u) {
    return typeof u == "symbol" || ku(u) && Tu.call(u) == K;
  }
  function a(u) {
    return u == null ? "" : Zu(u);
  }
  var Du = Wu(function(u, e, r) {
    return e = e.toLowerCase(), u + (r ? Fu(e) : e);
  });
  function Fu(u) {
    return Pu(a(u).toLowerCase());
  }
  function Gu(u) {
    return u = a(u), u && u.replace(X, Uu).replace(su, "");
  }
  var Pu = Nu("toUpperCase");
  function Hu(u, e, r) {
    return u = a(u), e = r ? void 0 : e, e === void 0 ? yu(u) ? Lu(u) : mu(u) : u.match(e) || [];
  }
  w.exports = Du;
});
var F = $(D());
var Vu = F.default;
export {
  Vu as default
};
