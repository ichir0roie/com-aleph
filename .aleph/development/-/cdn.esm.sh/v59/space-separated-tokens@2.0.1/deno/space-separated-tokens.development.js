// https://cdn.esm.sh/v59/space-separated-tokens@2.0.1/deno/space-separated-tokens.development.js
function parse(value) {
  const input = String(value || "").trim();
  return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
  return values.join(" ").trim();
}
export {
  parse,
  stringify
};
