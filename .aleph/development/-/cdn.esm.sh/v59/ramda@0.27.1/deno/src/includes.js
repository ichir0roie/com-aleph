// https://cdn.esm.sh/v59/ramda@0.27.1/deno/src/includes.js
var ae = Object.create;
var v = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var ie = Object.getOwnPropertyNames;
var ce = Object.getPrototypeOf;
var oe = Object.prototype.hasOwnProperty;
var fe = (r) => v(r, "__esModule", { value: true });
var a = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var le = (r, e, n, u) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let t of ie(e))
      !oe.call(r, t) && (n || t !== "default") && v(r, t, { get: () => e[t], enumerable: !(u = se(e, t)) || u.enumerable });
  return r;
};
var pe = (r, e) => le(fe(v(r != null ? ae(ce(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r);
var g = a((He, d) => {
  function ye(r) {
    return r != null && typeof r == "object" && r["@@functional/placeholder"] === true;
  }
  d.exports = ye;
});
var l = a((Je, O) => {
  var ve = g();
  function ge(r) {
    return function e(n) {
      return arguments.length === 0 || ve(n) ? e : r.apply(this, arguments);
    };
  }
  O.exports = ge;
});
var q = a((Ke, A) => {
  var h = l(), f = g();
  function he(r) {
    return function e(n, u) {
      switch (arguments.length) {
        case 0:
          return e;
        case 1:
          return f(n) ? e : h(function(t) {
            return r(n, t);
          });
        default:
          return f(n) && f(u) ? e : f(n) ? h(function(t) {
            return r(t, u);
          }) : f(u) ? h(function(t) {
            return r(n, t);
          }) : r(n, u);
      }
    };
  }
  A.exports = he;
});
var w = a((Qe, x) => {
  function qe(r) {
    for (var e = [], n; !(n = r.next()).done; )
      e.push(n.value);
    return e;
  }
  x.exports = qe;
});
var E = a((Te, S) => {
  function me(r, e, n) {
    for (var u = 0, t = n.length; u < t; ) {
      if (r(e, n[u]))
        return true;
      u += 1;
    }
    return false;
  }
  S.exports = me;
});
var j = a((Ve, I) => {
  function _e(r) {
    var e = String(r).match(/^function (\w*)/);
    return e == null ? "" : e[1];
  }
  I.exports = _e;
});
var p = a((Xe, k) => {
  function de(r, e) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }
  k.exports = de;
});
var N = a((Ye, P) => {
  function Oe(r, e) {
    return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
  }
  P.exports = typeof Object.is == "function" ? Object.is : Oe;
});
var C = a((Ze, z) => {
  var Ae = p(), U = Object.prototype.toString, xe = function() {
    return U.call(arguments) === "[object Arguments]" ? function(e) {
      return U.call(e) === "[object Arguments]";
    } : function(e) {
      return Ae("callee", e);
    };
  }();
  z.exports = xe;
});
var W = a(($e, R) => {
  var F = l(), B = p(), we = C(), Se = !{ toString: null }.propertyIsEnumerable("toString"), D = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], L = function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
  }(), Ee = function(e, n) {
    for (var u = 0; u < e.length; ) {
      if (e[u] === n)
        return true;
      u += 1;
    }
    return false;
  }, Ie = F(typeof Object.keys == "function" && !L ? function(e) {
    return Object(e) !== e ? [] : Object.keys(e);
  } : function(e) {
    if (Object(e) !== e)
      return [];
    var n, u, t = [], s = L && we(e);
    for (n in e)
      B(n, e) && (!s || n !== "length") && (t[t.length] = n);
    if (Se)
      for (u = D.length - 1; u >= 0; )
        n = D[u], B(n, e) && !Ee(t, n) && (t[t.length] = n), u -= 1;
    return t;
  });
  R.exports = Ie;
});
var G = a((be, M) => {
  var je = l(), ke = je(function(e) {
    return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
  });
  M.exports = ke;
});
var X = a((er, V) => {
  var H = w(), J = E(), Pe = j(), Ne = p(), m = N(), K = W(), Q = G();
  function T(r, e, n, u) {
    var t = H(r), s = H(e);
    function i(c, o) {
      return _(c, o, n.slice(), u.slice());
    }
    return !J(function(c, o) {
      return !J(i, o, c);
    }, s, t);
  }
  function _(r, e, n, u) {
    if (m(r, e))
      return true;
    var t = Q(r);
    if (t !== Q(e) || r == null || e == null)
      return false;
    if (typeof r["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
      return typeof r["fantasy-land/equals"] == "function" && r["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](r);
    if (typeof r.equals == "function" || typeof e.equals == "function")
      return typeof r.equals == "function" && r.equals(e) && typeof e.equals == "function" && e.equals(r);
    switch (t) {
      case "Arguments":
      case "Array":
      case "Object":
        if (typeof r.constructor == "function" && Pe(r.constructor) === "Promise")
          return r === e;
        break;
      case "Boolean":
      case "Number":
      case "String":
        if (!(typeof r == typeof e && m(r.valueOf(), e.valueOf())))
          return false;
        break;
      case "Date":
        if (!m(r.valueOf(), e.valueOf()))
          return false;
        break;
      case "Error":
        return r.name === e.name && r.message === e.message;
      case "RegExp":
        if (!(r.source === e.source && r.global === e.global && r.ignoreCase === e.ignoreCase && r.multiline === e.multiline && r.sticky === e.sticky && r.unicode === e.unicode))
          return false;
        break;
    }
    for (var s = n.length - 1; s >= 0; ) {
      if (n[s] === r)
        return u[s] === e;
      s -= 1;
    }
    switch (t) {
      case "Map":
        return r.size !== e.size ? false : T(r.entries(), e.entries(), n.concat([r]), u.concat([e]));
      case "Set":
        return r.size !== e.size ? false : T(r.values(), e.values(), n.concat([r]), u.concat([e]));
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
    var i = K(r);
    if (i.length !== K(e).length)
      return false;
    var c = n.concat([r]), o = u.concat([e]);
    for (s = i.length - 1; s >= 0; ) {
      var y = i[s];
      if (!(Ne(y, e) && _(e[y], r[y], c, o)))
        return false;
      s -= 1;
    }
    return true;
  }
  V.exports = _;
});
var Z = a((rr, Y) => {
  var Ue = q(), ze = X(), Ce = Ue(function(e, n) {
    return ze(e, n, [], []);
  });
  Y.exports = Ce;
});
var b = a((nr, $) => {
  var Fe = Z();
  function Be(r, e, n) {
    var u, t;
    if (typeof r.indexOf == "function")
      switch (typeof e) {
        case "number":
          if (e === 0) {
            for (u = 1 / e; n < r.length; ) {
              if (t = r[n], t === 0 && 1 / t === u)
                return n;
              n += 1;
            }
            return -1;
          } else if (e !== e) {
            for (; n < r.length; ) {
              if (t = r[n], typeof t == "number" && t !== t)
                return n;
              n += 1;
            }
            return -1;
          }
          return r.indexOf(e, n);
        case "string":
        case "boolean":
        case "function":
        case "undefined":
          return r.indexOf(e, n);
        case "object":
          if (e === null)
            return r.indexOf(e, n);
      }
    for (; n < r.length; ) {
      if (Fe(r[n], e))
        return n;
      n += 1;
    }
    return -1;
  }
  $.exports = Be;
});
var re = a((tr, ee) => {
  var De = b();
  function Le(r, e) {
    return De(e, r, 0) >= 0;
  }
  ee.exports = Le;
});
var te = a((ur, ne) => {
  var Re = re(), We = q(), Me = We(Re);
  ne.exports = Me;
});
var ue = pe(te());
var ar = ue.default;
export {
  ar as default
};
