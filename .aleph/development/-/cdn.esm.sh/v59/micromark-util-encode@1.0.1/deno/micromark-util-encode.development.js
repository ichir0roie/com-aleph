// https://cdn.esm.sh/v59/micromark-util-encode@1.0.1/deno/micromark-util-encode.development.js
var characterReferences = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
function encode(value) {
  return value.replace(/["&<>]/g, replace);
  function replace(value2) {
    return "&" + characterReferences[value2] + ";";
  }
}
export {
  encode
};
