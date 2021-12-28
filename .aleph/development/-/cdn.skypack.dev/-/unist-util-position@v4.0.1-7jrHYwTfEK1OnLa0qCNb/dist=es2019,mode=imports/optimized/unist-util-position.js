// https://cdn.skypack.dev/-/unist-util-position@v4.0.1-7jrHYwTfEK1OnLa0qCNb/dist=es2019,mode=imports/optimized/unist-util-position.js
var pointStart = point("start");
var pointEnd = point("end");
function position(node) {
  return { start: pointStart(node), end: pointEnd(node) };
}
function point(type) {
  return point2;
  function point2(node) {
    var point3 = node && node.position && node.position[type] || {};
    return {
      line: point3.line || null,
      column: point3.column || null,
      offset: point3.offset > -1 ? point3.offset : null
    };
  }
}
var unist_util_position_default = null;
export {
  unist_util_position_default as default,
  pointEnd,
  pointStart,
  position
};
