// https://cdn.skypack.dev/-/mdast-util-to-string@v3.1.0-J1ZoFY0wN8olX8j3t1ZG/dist=es2019,mode=imports/optimized/mdast-util-to-string.js
function toString(node, options) {
  var { includeImageAlt = true } = options || {};
  return one(node, includeImageAlt);
}
function one(node, includeImageAlt) {
  return node && typeof node === "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all(node.children, includeImageAlt) || Array.isArray(node) && all(node, includeImageAlt)) || "";
}
function all(values, includeImageAlt) {
  var result = [];
  var index = -1;
  while (++index < values.length) {
    result[index] = one(values[index], includeImageAlt);
  }
  return result.join("");
}
var mdast_util_to_string_default = null;
export {
  mdast_util_to_string_default as default,
  toString
};
