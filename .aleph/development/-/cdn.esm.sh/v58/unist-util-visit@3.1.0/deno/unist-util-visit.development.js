// https://cdn.esm.sh/v58/unist-util-visit@3.1.0/deno/unist-util-visit.development.js
import { visitParents, CONTINUE, SKIP, EXIT } from "../../unist-util-visit-parents@4.1.1/deno/unist-util-visit-parents.development.js";
var visit = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
export {
  CONTINUE,
  EXIT,
  SKIP,
  visit
};
