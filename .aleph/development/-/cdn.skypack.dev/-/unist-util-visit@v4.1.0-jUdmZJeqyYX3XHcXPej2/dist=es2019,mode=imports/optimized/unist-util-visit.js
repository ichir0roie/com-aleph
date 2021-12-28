// https://cdn.skypack.dev/-/unist-util-visit@v4.1.0-jUdmZJeqyYX3XHcXPej2/dist=es2019,mode=imports/optimized/unist-util-visit.js
import { visitParents } from "../../../unist-util-visit-parents@v5.1.0-LrKz5i4mAzPRUXBeIZX7/dist=es2019,mode=imports/optimized/unist-util-visit-parents.js";
import { CONTINUE, EXIT, SKIP } from "../../../unist-util-visit-parents@v5.1.0-LrKz5i4mAzPRUXBeIZX7/dist=es2019,mode=imports/optimized/unist-util-visit-parents.js";
var visit = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
var unist_util_visit_default = null;
export {
  CONTINUE,
  EXIT,
  SKIP,
  unist_util_visit_default as default,
  visit
};
