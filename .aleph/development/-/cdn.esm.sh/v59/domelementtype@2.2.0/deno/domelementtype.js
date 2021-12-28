// https://cdn.esm.sh/v59/domelementtype@2.2.0/deno/domelementtype.js
var S = Object.create;
var c = Object.defineProperty;
var g = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf;
var A = Object.prototype.hasOwnProperty;
var C = (t) => c(t, "__esModule", { value: true });
var u = (t, o) => () => (o || t((o = { exports: {} }).exports, o), o.exports);
var v = (t, o, s, p) => {
  if (o && typeof o == "object" || typeof o == "function")
    for (let r of m(o))
      !A.call(t, r) && (s || r !== "default") && c(t, r, { get: () => o[r], enumerable: !(p = g(o, r)) || p.enumerable });
  return t;
};
var T = (t, o) => v(C(c(t != null ? S(n(t)) : {}, "default", !o && t && t.__esModule ? { get: () => t.default, enumerable: true } : { value: t, enumerable: true })), t);
var a = u((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
  var i;
  (function(t) {
    t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype";
  })(i = e.ElementType || (e.ElementType = {}));
  function d(t) {
    return t.type === i.Tag || t.type === i.Script || t.type === i.Style;
  }
  e.isTag = d;
  e.Root = i.Root;
  e.Text = i.Text;
  e.Directive = i.Directive;
  e.Comment = i.Comment;
  e.Script = i.Script;
  e.Style = i.Style;
  e.Tag = i.Tag;
  e.CDATA = i.CDATA;
  e.Doctype = i.Doctype;
});
var D = T(a());
var y = T(a());
var { Doctype: l, ElementType: _, isTag: R, Root: b, Text: j, Directive: M, Comment: O, Script: P, Style: h, Tag: k, CDATA: q } = y;
var w = D.default || y;
export {
  q as CDATA,
  O as Comment,
  M as Directive,
  l as Doctype,
  _ as ElementType,
  b as Root,
  P as Script,
  h as Style,
  k as Tag,
  j as Text,
  w as default,
  R as isTag
};
