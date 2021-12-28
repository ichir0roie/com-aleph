// https://cdn.skypack.dev/-/hast-util-whitespace@v2.0.0-Y001vZXOFVlFaftChesd/dist=es2019,mode=imports/optimized/hast-util-whitespace.js
function whitespace(thing) {
  var value = thing && typeof thing === "object" && thing.type === "text" ? thing.value || "" : thing;
  return typeof value === "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}
var hast_util_whitespace_default = null;
export {
  hast_util_whitespace_default as default,
  whitespace
};
