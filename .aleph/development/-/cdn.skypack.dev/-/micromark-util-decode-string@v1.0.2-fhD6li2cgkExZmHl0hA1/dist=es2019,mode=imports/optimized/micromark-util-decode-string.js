// https://cdn.skypack.dev/-/micromark-util-decode-string@v1.0.2-fhD6li2cgkExZmHl0hA1/dist=es2019,mode=imports/optimized/micromark-util-decode-string.js
import { decodeNamedCharacterReference } from "../../../decode-named-character-reference@v1.0.0-OEYj5Brk0bZR3EG7TzE8/dist=es2019,mode=imports/optimized/decode-named-character-reference.js";
import { decodeNumericCharacterReference } from "../../../micromark-util-decode-numeric-character-reference@v1.0.0-QU6VzDVPsbTUeAVT6neg/dist=es2019,mode=imports/optimized/micromark-util-decode-numeric-character-reference.js";
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
var micromark_util_decode_string_default = null;
export {
  decodeString,
  micromark_util_decode_string_default as default
};
