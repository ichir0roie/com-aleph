// https://cdn.skypack.dev/-/unist-util-visit@v3.1.0-4Mb3wiOVmMbwt1F5hxpg/dist=es2019,mode=imports/optimized/unist-util-visit.js
import { visitParents } from "../../../unist-util-visit-parents@v4.1.1-xAXyePbjZ6eKtJVPo58L/dist=es2019,mode=imports/optimized/unist-util-visit-parents.js";
import { CONTINUE, EXIT, SKIP } from "../../../unist-util-visit-parents@v4.1.1-xAXyePbjZ6eKtJVPo58L/dist=es2019,mode=imports/optimized/unist-util-visit-parents.js";
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
var unist_util_visit_default = null;
export {
  CONTINUE,
  EXIT,
  SKIP,
  unist_util_visit_default as default,
  visit
};
