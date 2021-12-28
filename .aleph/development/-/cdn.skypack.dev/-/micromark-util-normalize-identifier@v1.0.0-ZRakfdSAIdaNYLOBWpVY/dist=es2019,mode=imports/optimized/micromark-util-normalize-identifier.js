// https://cdn.skypack.dev/-/micromark-util-normalize-identifier@v1.0.0-ZRakfdSAIdaNYLOBWpVY/dist=es2019,mode=imports/optimized/micromark-util-normalize-identifier.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var micromark_util_normalize_identifier_default = null;
export {
  micromark_util_normalize_identifier_default as default,
  normalizeIdentifier
};
