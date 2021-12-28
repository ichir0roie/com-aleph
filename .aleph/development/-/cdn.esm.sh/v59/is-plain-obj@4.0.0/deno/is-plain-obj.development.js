// https://cdn.esm.sh/v59/is-plain-obj@4.0.0/deno/is-plain-obj.development.js
function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
var mod_default = isPlainObject;
export {
  mod_default as default
};
