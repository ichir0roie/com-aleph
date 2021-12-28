// https://cdn.esm.sh/v59/rehype-react@7.0.3/deno/rehype-react.development.js
import { toH } from "../../hast-to-hyperscript@10.0.1/deno/hast-to-hyperscript.development.js";
import tableCellStyle from "../../@mapbox/hast-util-table-cell-style@0.2.0/deno/hast-util-table-cell-style.development.js";
import { whitespace } from "../../hast-util-whitespace@2.0.0/deno/hast-util-whitespace.development.js";
var own = {}.hasOwnProperty;
var tableElements = /* @__PURE__ */ new Set([
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td"
]);
function rehypeReact(options) {
  if (!options || typeof options.createElement !== "function") {
    throw new TypeError("createElement is not a function");
  }
  const createElement = options.createElement;
  Object.assign(this, { Compiler: compiler });
  function compiler(node) {
    let result = toH(h, tableCellStyle(node), options.prefix);
    if (node.type === "root") {
      result = result && typeof result === "object" && "type" in result && "props" in result && result.type === "div" && (node.children.length !== 1 || node.children[0].type !== "element") ? result.props.children : [result];
      return createElement(options.Fragment || "div", {}, result);
    }
    return result;
  }
  function h(name, props, children) {
    if (children && tableElements.has(name)) {
      children = children.filter((child) => !whitespace(child));
    }
    if (options.components && own.call(options.components, name)) {
      const component = options.components[name];
      if (options.passNode && typeof component === "function") {
        props = Object.assign({ node: this }, props);
      }
      return createElement(component, props, children);
    }
    return createElement(name, props, children);
  }
}
var rehype_react_default = rehypeReact;
export {
  rehype_react_default as default
};
