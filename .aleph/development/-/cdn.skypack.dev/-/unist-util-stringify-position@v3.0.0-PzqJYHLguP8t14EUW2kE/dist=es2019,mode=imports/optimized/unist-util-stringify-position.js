// https://cdn.skypack.dev/-/unist-util-stringify-position@v3.0.0-PzqJYHLguP8t14EUW2kE/dist=es2019,mode=imports/optimized/unist-util-stringify-position.js
var own = {}.hasOwnProperty;
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if (own.call(value, "position") || own.call(value, "type")) {
    return position(value.position);
  }
  if (own.call(value, "start") || own.call(value, "end")) {
    return position(value);
  }
  if (own.call(value, "line") || own.call(value, "column")) {
    return point(value);
  }
  return "";
}
function point(point2) {
  return index(point2 && point2.line) + ":" + index(point2 && point2.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}
var unist_util_stringify_position_default = null;
export {
  unist_util_stringify_position_default as default,
  stringifyPosition
};
