// https://cdn.esm.sh/v59/ramda@0.27.1/deno/src/find.js
var S = Object.create;
var c = Object.defineProperty;
var k = Object.getOwnPropertyDescriptor;
var z = Object.getOwnPropertyNames;
var C = Object.getPrototypeOf;
var D = Object.prototype.hasOwnProperty;
var E = (r) => c(r, "__esModule", { value: true });
var i = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var G = (r, e, t, u) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of z(e))
      !D.call(r, n) && (t || n !== "default") && c(r, n, { get: () => e[n], enumerable: !(u = k(e, n)) || u.enumerable });
  return r;
};
var H = (r, e) => G(E(c(r != null ? S(C(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r);
var a = i((ir, l) => {
  function I(r) {
    return r != null && typeof r == "object" && r["@@functional/placeholder"] === true;
  }
  l.exports = I;
});
var h = i((or, d) => {
  var J = a();
  function K(r) {
    return function e(t) {
      return arguments.length === 0 || J(t) ? e : r.apply(this, arguments);
    };
  }
  d.exports = K;
});
var p = i((sr, y) => {
  var f = h(), o = a();
  function L(r) {
    return function e(t, u) {
      switch (arguments.length) {
        case 0:
          return e;
        case 1:
          return o(t) ? e : f(function(n) {
            return r(t, n);
          });
        default:
          return o(t) && o(u) ? e : o(t) ? f(function(n) {
            return r(n, u);
          }) : o(u) ? f(function(n) {
            return r(t, n);
          }) : r(t, u);
      }
    };
  }
  y.exports = L;
});
var v = i((cr, _) => {
  _.exports = Array.isArray || function(e) {
    return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
  };
});
var g = i((ar, x) => {
  function M(r) {
    return r != null && typeof r["@@transducer/step"] == "function";
  }
  x.exports = M;
});
var m = i((fr, q) => {
  var Q = v(), R = g();
  function U(r, e, t) {
    return function() {
      if (arguments.length === 0)
        return t();
      var u = Array.prototype.slice.call(arguments, 0), n = u.pop();
      if (!Q(n)) {
        for (var s = 0; s < r.length; ) {
          if (typeof n[r[s]] == "function")
            return n[r[s]].apply(n, u);
          s += 1;
        }
        if (R(n)) {
          var O = e.apply(null, u);
          return O(n);
        }
      }
      return t.apply(this, arguments);
    };
  }
  q.exports = U;
});
var w = i((pr, A) => {
  function V(r) {
    return r && r["@@transducer/reduced"] ? r : { "@@transducer/value": r, "@@transducer/reduced": true };
  }
  A.exports = V;
});
var P = i((lr, j) => {
  j.exports = { init: function() {
    return this.xf["@@transducer/init"]();
  }, result: function(r) {
    return this.xf["@@transducer/result"](r);
  } };
});
var F = i((dr, b) => {
  var W = p(), Y = w(), Z = P(), $ = function() {
    function r(e, t) {
      this.xf = t, this.f = e, this.found = false;
    }
    return r.prototype["@@transducer/init"] = Z.init, r.prototype["@@transducer/result"] = function(e) {
      return this.found || (e = this.xf["@@transducer/step"](e, void 0)), this.xf["@@transducer/result"](e);
    }, r.prototype["@@transducer/step"] = function(e, t) {
      return this.f(t) && (this.found = true, e = Y(this.xf["@@transducer/step"](e, t))), e;
    }, r;
  }(), N = W(function(e, t) {
    return new $(e, t);
  });
  b.exports = N;
});
var X = i((hr, T) => {
  var rr = p(), er = m(), tr = F(), nr = rr(er(["find"], tr, function(e, t) {
    for (var u = 0, n = t.length; u < n; ) {
      if (e(t[u]))
        return t[u];
      u += 1;
    }
  }));
  T.exports = nr;
});
var B = H(X());
var yr = B.default;
export {
  yr as default
};
