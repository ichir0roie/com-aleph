// https://cdn.esm.sh/v59/micromark-util-decode-string@1.0.2/deno/micromark-util-decode-string.development.js
import { decodeNamedCharacterReference } from "../../decode-named-character-reference@1.0.1/deno/decode-named-character-reference.development.js";
import { decodeNumericCharacterReference } from "../../micromark-util-decode-numeric-character-reference@1.0.0/deno/micromark-util-decode-numeric-character-reference.development.js";
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}
export {
  decodeString
};
