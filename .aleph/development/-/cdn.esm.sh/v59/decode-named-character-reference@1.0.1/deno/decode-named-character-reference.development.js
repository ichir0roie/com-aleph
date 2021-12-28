// https://cdn.esm.sh/v59/decode-named-character-reference@1.0.1/deno/decode-named-character-reference.development.js
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
export {
  decodeNamedCharacterReference
};
