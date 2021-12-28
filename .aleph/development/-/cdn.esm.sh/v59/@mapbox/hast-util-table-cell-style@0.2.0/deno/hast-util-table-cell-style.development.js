// https://cdn.esm.sh/v59/@mapbox/hast-util-table-cell-style@0.2.0/deno/hast-util-table-cell-style.development.js
import __unist_util_visit$ from "../../../unist-util-visit@1.4.1/deno/unist-util-visit.development.js";
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
var require_hast_util_table_cell_style = __commonJS({
  "esm-build-c358c9a125b93a59840b5bde33dcd6c6ac226f60-661122e9/node_modules/@mapbox/hast-util-table-cell-style/index.js"(exports, module) {
    "use strict";
    var visit = __unist_util_visit$;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hastCssPropertyMap = {
      align: "text-align",
      valign: "vertical-align",
      height: "height",
      width: "width"
    };
    module.exports = function tableCellStyle(node) {
      visit(node, "element", visitor);
      return node;
    };
    function visitor(node) {
      if (node.tagName !== "tr" && node.tagName !== "td" && node.tagName !== "th") {
        return;
      }
      var hastName;
      var cssName;
      for (hastName in hastCssPropertyMap) {
        if (!hasOwnProperty.call(hastCssPropertyMap, hastName) || node.properties[hastName] === void 0) {
          continue;
        }
        cssName = hastCssPropertyMap[hastName];
        appendStyle(node, cssName, node.properties[hastName]);
        delete node.properties[hastName];
      }
    }
    function appendStyle(node, property, value) {
      var prevStyle = (node.properties.style || "").trim();
      if (prevStyle && !/;\s*/.test(prevStyle)) {
        prevStyle += ";";
      }
      if (prevStyle) {
        prevStyle += " ";
      }
      var nextStyle = prevStyle + property + ": " + value + ";";
      node.properties.style = nextStyle;
    }
  }
});
var import_hast_util_table_cell_style = __toESM(require_hast_util_table_cell_style());
var mod_default = import_hast_util_table_cell_style.default;
export {
  mod_default as default
};
