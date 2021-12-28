// https://cdn.skypack.dev/-/mdast-util-definitions@v5.1.0-p4dZ0TFngx70abzWKx58/dist=es2019,mode=imports/optimized/mdast-util-definitions.js
import { visit } from "../../../unist-util-visit@v3.1.0-4Mb3wiOVmMbwt1F5hxpg/dist=es2019,mode=imports/optimized/unist-util-visit.js";
var own = {}.hasOwnProperty;
function definitions(node) {
  const cache = Object.create(null);
  if (!node || !node.type) {
    throw new Error("mdast-util-definitions expected node");
  }
  visit(node, "definition", ondefinition);
  return getDefinition;
  function ondefinition(definition) {
    const id = clean(definition.identifier);
    if (id && !own.call(cache, id)) {
      cache[id] = definition;
    }
  }
  function getDefinition(identifier) {
    const id = clean(identifier);
    return id && own.call(cache, id) ? cache[id] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}
var mdast_util_definitions_default = null;
export {
  mdast_util_definitions_default as default,
  definitions
};
