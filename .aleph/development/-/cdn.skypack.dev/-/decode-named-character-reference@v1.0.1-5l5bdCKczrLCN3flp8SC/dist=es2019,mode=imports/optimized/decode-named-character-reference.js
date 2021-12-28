// https://cdn.skypack.dev/-/decode-named-character-reference@v1.0.1-5l5bdCKczrLCN3flp8SC/dist=es2019,mode=imports/optimized/decode-named-character-reference.js
var element = document.createElement("i");
function decodeNamedCharacterReference(value) {
  const characterReference = "&" + value + ";";
  element.innerHTML = characterReference;
  const char = element.textContent;
  if (char.charCodeAt(char.length - 1) === 59 && value !== "semi") {
    return false;
  }
  return char === characterReference ? false : char;
}
var decode_named_character_reference_default = null;
export {
  decodeNamedCharacterReference,
  decode_named_character_reference_default as default
};
