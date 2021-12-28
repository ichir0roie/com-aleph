// https://cdn.esm.sh/v59/unist-util-position@4.0.1/deno/unist-util-position.development.js
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
export {
  pointEnd,
  pointStart,
  position
};
