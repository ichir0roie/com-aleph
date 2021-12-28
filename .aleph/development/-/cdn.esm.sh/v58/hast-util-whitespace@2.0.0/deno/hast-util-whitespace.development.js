// https://cdn.esm.sh/v58/hast-util-whitespace@2.0.0/deno/hast-util-whitespace.development.js
function whitespace(thing) {
  var value = thing && typeof thing === "object" && thing.type === "text" ? thing.value || "" : thing;
  return typeof value === "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}
export {
  whitespace
};
