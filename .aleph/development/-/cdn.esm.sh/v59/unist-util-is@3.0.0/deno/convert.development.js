// https://cdn.esm.sh/v59/unist-util-is@3.0.0/deno/convert.development.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
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
var require_convert = __commonJS({
  "esm-build-2273bc659fc8a556ee08fafc1b40e2a6566f4818-c7c55379/node_modules/unist-util-is/convert.js"(exports, module) {
    "use strict";
    module.exports = convert;
    function convert(test) {
      if (typeof test === "string") {
        return typeFactory(test);
      }
      if (test === null || test === void 0) {
        return ok;
      }
      if (typeof test === "object") {
        return ("length" in test ? anyFactory : matchesFactory)(test);
      }
      if (typeof test === "function") {
        return test;
      }
      throw new Error("Expected function, string, or object as test");
    }
    function convertAll(tests) {
      var results = [];
      var length = tests.length;
      var index = -1;
      while (++index < length) {
        results[index] = convert(tests[index]);
      }
      return results;
    }
    function matchesFactory(test) {
      return matches;
      function matches(node) {
        var key;
        for (key in test) {
          if (node[key] !== test[key]) {
            return false;
          }
        }
        return true;
      }
    }
    function anyFactory(tests) {
      var checks = convertAll(tests);
      var length = checks.length;
      return matches;
      function matches() {
        var index = -1;
        while (++index < length) {
          if (checks[index].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory(test) {
      return type;
      function type(node) {
        return Boolean(node && node.type === test);
      }
    }
    function ok() {
      return true;
    }
  }
});
var import_convert = __toESM(require_convert());
var mod_default = import_convert.default;
export {
  mod_default as default
};
