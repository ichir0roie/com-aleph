// https://cdn.skypack.dev/-/micromark-util-decode-numeric-character-reference@v1.0.0-QU6VzDVPsbTUeAVT6neg/dist=es2019,mode=imports/optimized/micromark-util-decode-numeric-character-reference.js
function decodeNumericCharacterReference(value, base) {
  const code = Number.parseInt(value, base);
  if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) {
    return "\uFFFD";
  }
  return String.fromCharCode(code);
}
var micromark_util_decode_numeric_character_reference_default = null;
export {
  decodeNumericCharacterReference,
  micromark_util_decode_numeric_character_reference_default as default
};
