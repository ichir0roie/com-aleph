// https://cdn.skypack.dev/-/unist-builder@v3.0.0-geMo3CNBDmUDPX4bEG2l/dist=es2019,mode=imports/optimized/unist-builder.js
var u = function(type, props, value) {
  var node = { type: String(type) };
  if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }
  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== void 0 && value !== null) {
    node.value = String(value);
  }
  return node;
};
var unist_builder_default = null;
export {
  unist_builder_default as default,
  u
};
