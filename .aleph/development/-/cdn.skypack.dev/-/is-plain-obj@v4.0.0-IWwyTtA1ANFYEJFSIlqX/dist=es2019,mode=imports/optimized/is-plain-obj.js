// https://cdn.skypack.dev/-/is-plain-obj@v4.0.0-IWwyTtA1ANFYEJFSIlqX/dist=es2019,mode=imports/optimized/is-plain-obj.js
function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
var is_plain_obj_default = isPlainObject;
export {
  is_plain_obj_default as default
};
