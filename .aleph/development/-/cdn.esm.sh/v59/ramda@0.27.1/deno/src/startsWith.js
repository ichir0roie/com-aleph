// https://cdn.esm.sh/v59/ramda@0.27.1/deno/src/startsWith.js
var wr = Object.create;
var d = Object.defineProperty;
var Sr = Object.getOwnPropertyDescriptor;
var jr = Object.getOwnPropertyNames;
var Ir = Object.getPrototypeOf;
var Er = Object.prototype.hasOwnProperty;
var Pr = (r) => d(r, "__esModule", { value: true });
var a = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var Fr = (r, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let u of jr(e))
      !Er.call(r, u) && (t || u !== "default") && d(r, u, { get: () => e[u], enumerable: !(n = Sr(e, u)) || n.enumerable });
  return r;
};
var Ur = (r, e) => Fr(Pr(d(r != null ? wr(Ir(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r);
var h = a((Se, O) => {
  function zr(r) {
    return r != null && typeof r == "object" && r["@@functional/placeholder"] === true;
  }
  O.exports = zr;
});
var y = a((je, w) => {
  var Br = h();
  function Cr(r) {
    return function e(t) {
      return arguments.length === 0 || Br(t) ? e : r.apply(this, arguments);
    };
  }
  w.exports = Cr;
});
var o = a((Ie, S) => {
  var m = y(), v = h();
  function Tr(r) {
    return function e(t, n) {
      switch (arguments.length) {
        case 0:
          return e;
        case 1:
          return v(t) ? e : m(function(u) {
            return r(t, u);
          });
        default:
          return v(t) && v(n) ? e : v(t) ? m(function(u) {
            return r(u, n);
          }) : v(n) ? m(function(u) {
            return r(t, u);
          }) : r(t, n);
      }
    };
  }
  S.exports = Tr;
});
var I = a((Ee, j) => {
  function Mr(r) {
    for (var e = [], t; !(t = r.next()).done; )
      e.push(t.value);
    return e;
  }
  j.exports = Mr;
});
var P = a((Pe, E) => {
  function Nr(r, e, t) {
    for (var n = 0, u = t.length; n < u; ) {
      if (r(e, t[n]))
        return true;
      n += 1;
    }
    return false;
  }
  E.exports = Nr;
});
var U = a((Fe, F) => {
  function Wr(r) {
    var e = String(r).match(/^function (\w*)/);
    return e == null ? "" : e[1];
  }
  F.exports = Wr;
});
var g = a((Ue, z) => {
  function Dr(r, e) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }
  z.exports = Dr;
});
var C = a((ze, B) => {
  function Lr(r, e) {
    return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
  }
  B.exports = typeof Object.is == "function" ? Object.is : Lr;
});
var N = a((Be, M) => {
  var Rr = g(), T = Object.prototype.toString, Xr = function() {
    return T.call(arguments) === "[object Arguments]" ? function(e) {
      return T.call(e) === "[object Arguments]";
    } : function(e) {
      return Rr("callee", e);
    };
  }();
  M.exports = Xr;
});
var G = a((Ce, X) => {
  var W = y(), D = g(), Gr = N(), Hr = !{ toString: null }.propertyIsEnumerable("toString"), L = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], R = function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
  }(), Jr = function(e, t) {
    for (var n = 0; n < e.length; ) {
      if (e[n] === t)
        return true;
      n += 1;
    }
    return false;
  }, Kr = W(typeof Object.keys == "function" && !R ? function(e) {
    return Object(e) !== e ? [] : Object.keys(e);
  } : function(e) {
    if (Object(e) !== e)
      return [];
    var t, n, u = [], i = R && Gr(e);
    for (t in e)
      D(t, e) && (!i || t !== "length") && (u[u.length] = t);
    if (Hr)
      for (n = L.length - 1; n >= 0; )
        t = L[n], D(t, e) && !Jr(u, t) && (u[u.length] = t), n -= 1;
    return u;
  });
  X.exports = Kr;
});
var J = a((Te, H) => {
  var Qr = y(), Vr = Qr(function(e) {
    return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
  });
  H.exports = Vr;
});
var b = a((Me, $) => {
  var K = I(), Q = P(), Yr = U(), Zr = g(), x = C(), V = G(), Y = J();
  function Z(r, e, t, n) {
    var u = K(r), i = K(e);
    function s(f, p) {
      return A(f, p, t.slice(), n.slice());
    }
    return !Q(function(f, p) {
      return !Q(s, p, f);
    }, i, u);
  }
  function A(r, e, t, n) {
    if (x(r, e))
      return true;
    var u = Y(r);
    if (u !== Y(e) || r == null || e == null)
      return false;
    if (typeof r["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
      return typeof r["fantasy-land/equals"] == "function" && r["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](r);
    if (typeof r.equals == "function" || typeof e.equals == "function")
      return typeof r.equals == "function" && r.equals(e) && typeof e.equals == "function" && e.equals(r);
    switch (u) {
      case "Arguments":
      case "Array":
      case "Object":
        if (typeof r.constructor == "function" && Yr(r.constructor) === "Promise")
          return r === e;
        break;
      case "Boolean":
      case "Number":
      case "String":
        if (!(typeof r == typeof e && x(r.valueOf(), e.valueOf())))
          return false;
        break;
      case "Date":
        if (!x(r.valueOf(), e.valueOf()))
          return false;
        break;
      case "Error":
        return r.name === e.name && r.message === e.message;
      case "RegExp":
        if (!(r.source === e.source && r.global === e.global && r.ignoreCase === e.ignoreCase && r.multiline === e.multiline && r.sticky === e.sticky && r.unicode === e.unicode))
          return false;
        break;
    }
    for (var i = t.length - 1; i >= 0; ) {
      if (t[i] === r)
        return n[i] === e;
      i -= 1;
    }
    switch (u) {
      case "Map":
        return r.size !== e.size ? false : Z(r.entries(), e.entries(), t.concat([r]), n.concat([e]));
      case "Set":
        return r.size !== e.size ? false : Z(r.values(), e.values(), t.concat([r]), n.concat([e]));
      case "Arguments":
      case "Array":
      case "Object":
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "Error":
      case "RegExp":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "ArrayBuffer":
        break;
      default:
        return false;
    }
    var s = V(r);
    if (s.length !== V(e).length)
      return false;
    var f = t.concat([r]), p = n.concat([e]);
    for (i = s.length - 1; i >= 0; ) {
      var _ = s[i];
      if (!(Zr(_, e) && A(e[_], r[_], f, p)))
        return false;
      i -= 1;
    }
    return true;
  }
  $.exports = A;
});
var er = a((Ne, rr) => {
  var $r = o(), br = b(), re = $r(function(e, t) {
    return br(e, t, [], []);
  });
  rr.exports = re;
});
var k = a((We, tr) => {
  tr.exports = Array.isArray || function(e) {
    return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
  };
});
var ur = a((De, nr) => {
  function ee(r) {
    return r != null && typeof r["@@transducer/step"] == "function";
  }
  nr.exports = ee;
});
var ar = a((Le, ir) => {
  var te = k(), ne = ur();
  function ue(r, e, t) {
    return function() {
      if (arguments.length === 0)
        return t();
      var n = Array.prototype.slice.call(arguments, 0), u = n.pop();
      if (!te(u)) {
        for (var i = 0; i < r.length; ) {
          if (typeof u[r[i]] == "function")
            return u[r[i]].apply(u, n);
          i += 1;
        }
        if (ne(u)) {
          var s = e.apply(null, n);
          return s(u);
        }
      }
      return t.apply(this, arguments);
    };
  }
  ir.exports = ue;
});
var cr = a((Re, sr) => {
  function ie(r) {
    return r && r["@@transducer/reduced"] ? r : { "@@transducer/value": r, "@@transducer/reduced": true };
  }
  sr.exports = ie;
});
var lr = a((Xe, or) => {
  or.exports = { init: function() {
    return this.xf["@@transducer/init"]();
  }, result: function(r) {
    return this.xf["@@transducer/result"](r);
  } };
});
var yr = a((Ge, pr) => {
  var ae = o(), se = cr(), fr = lr(), ce = function() {
    function r(e, t) {
      this.xf = t, this.n = e, this.i = 0;
    }
    return r.prototype["@@transducer/init"] = fr.init, r.prototype["@@transducer/result"] = fr.result, r.prototype["@@transducer/step"] = function(e, t) {
      this.i += 1;
      var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, t);
      return this.n >= 0 && this.i >= this.n ? se(n) : n;
    }, r;
  }(), oe = ae(function(e, t) {
    return new ce(e, t);
  });
  pr.exports = oe;
});
var hr = a((He, vr) => {
  var le = k();
  function fe(r, e) {
    return function() {
      var t = arguments.length;
      if (t === 0)
        return e();
      var n = arguments[t - 1];
      return le(n) || typeof n[r] != "function" ? e.apply(this, arguments) : n[r].apply(n, Array.prototype.slice.call(arguments, 0, t - 1));
    };
  }
  vr.exports = fe;
});
var qr = a((Je, gr) => {
  var q = y(), l = o(), c = h();
  function pe(r) {
    return function e(t, n, u) {
      switch (arguments.length) {
        case 0:
          return e;
        case 1:
          return c(t) ? e : l(function(i, s) {
            return r(t, i, s);
          });
        case 2:
          return c(t) && c(n) ? e : c(t) ? l(function(i, s) {
            return r(i, n, s);
          }) : c(n) ? l(function(i, s) {
            return r(t, i, s);
          }) : q(function(i) {
            return r(t, n, i);
          });
        default:
          return c(t) && c(n) && c(u) ? e : c(t) && c(n) ? l(function(i, s) {
            return r(i, s, u);
          }) : c(t) && c(u) ? l(function(i, s) {
            return r(i, n, s);
          }) : c(n) && c(u) ? l(function(i, s) {
            return r(t, i, s);
          }) : c(t) ? q(function(i) {
            return r(i, n, u);
          }) : c(n) ? q(function(i) {
            return r(t, i, u);
          }) : c(u) ? q(function(i) {
            return r(t, n, i);
          }) : r(t, n, u);
      }
    };
  }
  gr.exports = pe;
});
var dr = a((Ke, _r) => {
  var ye = hr(), ve = qr(), he = ve(ye("slice", function(e, t, n) {
    return Array.prototype.slice.call(n, e, t);
  }));
  _r.exports = he;
});
var xr = a((Qe, mr) => {
  var ge = o(), qe = ar(), _e = yr(), de = dr(), me = ge(qe(["take"], _e, function(e, t) {
    return de(0, e < 0 ? 1 / 0 : e, t);
  }));
  mr.exports = me;
});
var kr = a((Ve, Ar) => {
  var xe = o(), Ae = er(), ke = xr(), Oe = xe(function(r, e) {
    return Ae(ke(r.length, e), r);
  });
  Ar.exports = Oe;
});
var Or = Ur(kr());
var Ye = Or.default;
export {
  Ye as default
};
