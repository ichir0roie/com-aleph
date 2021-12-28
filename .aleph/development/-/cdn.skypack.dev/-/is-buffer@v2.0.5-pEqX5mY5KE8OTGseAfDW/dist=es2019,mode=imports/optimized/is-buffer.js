// https://cdn.skypack.dev/-/is-buffer@v2.0.5-pEqX5mY5KE8OTGseAfDW/dist=es2019,mode=imports/optimized/is-buffer.js
var isBuffer = function isBuffer2(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};
var is_buffer_default = isBuffer;
export {
  is_buffer_default as default
};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
