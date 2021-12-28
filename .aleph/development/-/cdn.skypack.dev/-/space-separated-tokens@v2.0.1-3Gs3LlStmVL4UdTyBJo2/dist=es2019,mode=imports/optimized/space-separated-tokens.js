// https://cdn.skypack.dev/-/space-separated-tokens@v2.0.1-3Gs3LlStmVL4UdTyBJo2/dist=es2019,mode=imports/optimized/space-separated-tokens.js
function parse(value) {
  const input = String(value || "").trim();
  return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
  return values.join(" ").trim();
}
var space_separated_tokens_default = null;
export {
  space_separated_tokens_default as default,
  parse,
  stringify
};
