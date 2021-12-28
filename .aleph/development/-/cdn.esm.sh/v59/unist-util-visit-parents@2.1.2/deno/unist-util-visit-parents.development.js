// https://cdn.esm.sh/v59/unist-util-visit-parents@2.1.2/deno/unist-util-visit-parents.development.js
import __unist_util_is_convert$ from "../../unist-util-is@3.0.0/deno/convert.development.js";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var require_unist_util_visit_parents = __commonJS({
  "esm-build-673c7ece2b720d61e8fbfcc90037069511e2f3ef-2ced2b89/node_modules/unist-util-visit-parents/index.js"(exports, module) {
    "use strict";
    module.exports = visitParents;
    var convert = __unist_util_is_convert$;
    var CONTINUE = true;
    var SKIP = "skip";
    var EXIT = false;
    visitParents.CONTINUE = CONTINUE;
    visitParents.SKIP = SKIP;
    visitParents.EXIT = EXIT;
    function visitParents(tree, test, visitor, reverse) {
      var is;
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      is = convert(test);
      one(tree, null, []);
      function one(node, index, parents) {
        var result = [];
        var subresult;
        if (!test || is(node, index, parents[parents.length - 1] || null)) {
          result = toResult(visitor(node, parents));
          if (result[0] === EXIT) {
            return result;
          }
        }
        if (node.children && result[0] !== SKIP) {
          subresult = toResult(all(node.children, parents.concat(node)));
          return subresult[0] === EXIT ? subresult : result;
        }
        return result;
      }
      function all(children, parents) {
        var min = -1;
        var step = reverse ? -1 : 1;
        var index = (reverse ? children.length : min) + step;
        var result;
        while (index > min && index < children.length) {
          result = one(children[index], index, parents);
          if (result[0] === EXIT) {
            return result;
          }
          index = typeof result[1] === "number" ? result[1] : index + step;
        }
      }
    }
    function toResult(value) {
      if (value !== null && typeof value === "object" && "length" in value) {
        return value;
      }
      if (typeof value === "number") {
        return [CONTINUE, value];
      }
      return [value];
    }
  }
});
var import_unist_util_visit_parents = __toESM(require_unist_util_visit_parents());
var mod_default = import_unist_util_visit_parents.default;
export {
  mod_default as default
};
