// https://cdn.esm.sh/v59/micromark-util-normalize-identifier@1.0.0/deno/micromark-util-normalize-identifier.development.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
export {
  normalizeIdentifier
};
