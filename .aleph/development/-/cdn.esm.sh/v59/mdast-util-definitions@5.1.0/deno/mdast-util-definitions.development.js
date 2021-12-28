// https://cdn.esm.sh/v59/mdast-util-definitions@5.1.0/deno/mdast-util-definitions.development.js
import { visit } from "../../unist-util-visit@3.1.0/deno/unist-util-visit.development.js";
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
export {
  definitions
};
