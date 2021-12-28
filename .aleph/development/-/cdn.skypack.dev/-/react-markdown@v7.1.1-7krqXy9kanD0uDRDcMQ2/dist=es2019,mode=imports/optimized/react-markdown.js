// https://cdn.skypack.dev/-/react-markdown@v7.1.1-7krqXy9kanD0uDRDcMQ2/dist=es2019,mode=imports/optimized/react-markdown.js
import React from "../../../react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
import { VFile } from "../../../vfile@v5.2.0-FU9AXYIj1eWHuC6hcWqY/dist=es2019,mode=imports/optimized/vfile.js";
import { unified as unified2 } from "../../../unified@v10.1.1-4Y7B04uZ1lxkeoeH1ENO/dist=es2019,mode=imports/optimized/unified.js";
import remarkParse from "../../../remark-parse@v10.0.1-oLsap8LTxg4mT6ZkoyRK/dist=es2019,mode=imports/optimized/remark-parse.js";
import remarkRehype from "../../../remark-rehype@v9.1.0-zin0Nslm6bQMwvZUhCZ7/dist=es2019,mode=imports/optimized/remark-rehype.js";
import PropTypes from "../../../prop-types@v15.8.0-xMKfOjG8SncD5gSUf6S6/dist=es2019,mode=imports/optimized/prop-types.js";
import { find, hastToReact, svg, html } from "../../../property-information@v6.1.1-99r7iTlKeR7xsg0CkZmE/dist=es2019,mode=imports/optimized/property-information.js";
import { visit } from "../../../unist-util-visit@v4.1.0-7ynYcvoMn8oHcBOm8bwF/dist=es2019,mode=imports/optimized/unist-util-visit.js";
import ReactIs from "../../../react-is@v17.0.2-hi9A1D6Y5oSQRtGb2Qxl/dist=es2019,mode=imports/optimized/react-is.js";
import { whitespace } from "../../../hast-util-whitespace@v2.0.0-Y001vZXOFVlFaftChesd/dist=es2019,mode=imports/optimized/hast-util-whitespace.js";
import { stringify as stringify$1 } from "../../../space-separated-tokens@v2.0.1-3Gs3LlStmVL4UdTyBJo2/dist=es2019,mode=imports/optimized/space-separated-tokens.js";
import { stringify } from "../../../comma-separated-tokens@v2.0.2-ln2RLX9fmfYuUY6K2C5M/dist=es2019,mode=imports/optimized/comma-separated-tokens.js";
import style from "../../../style-to-object@v0.3.0-4QynMWyK2W16Tcnoj3I0/dist=es2019,mode=imports/optimized/style-to-object.js";
var protocols = ["http", "https", "mailto", "tel"];
function uriTransformer(uri) {
  const url = (uri || "").trim();
  const first = url.charAt(0);
  if (first === "#" || first === "/") {
    return url;
  }
  const colon = url.indexOf(":");
  if (colon === -1) {
    return url;
  }
  let index = -1;
  while (++index < protocols.length) {
    const protocol = protocols[index];
    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }
  index = url.indexOf("?");
  if (index !== -1 && colon > index) {
    return url;
  }
  index = url.indexOf("#");
  if (index !== -1 && colon > index) {
    return url;
  }
  return "javascript:void(0)";
}
function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements) {
    throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
  }
  if (options.allowedElements || options.disallowedElements || options.allowElement) {
    return (tree) => {
      visit(tree, "element", (node, index, parent_) => {
        const parent = parent_;
        let remove;
        if (options.allowedElements) {
          remove = !options.allowedElements.includes(node.tagName);
        } else if (options.disallowedElements) {
          remove = options.disallowedElements.includes(node.tagName);
        }
        if (!remove && options.allowElement && typeof index === "number") {
          remove = !options.allowElement(node, index, parent);
        }
        if (remove && typeof index === "number") {
          if (options.unwrapDisallowed && node.children) {
            parent.children.splice(index, 1, ...node.children);
          } else {
            parent.children.splice(index, 1);
          }
          return index;
        }
        return void 0;
      });
    };
  }
}
var own = {}.hasOwnProperty;
var tableElements = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function childrenToReact(context, node) {
  const children = [];
  let childIndex = -1;
  let child;
  while (++childIndex < node.children.length) {
    child = node.children[childIndex];
    if (child.type === "element") {
      children.push(toReact(context, child, childIndex, node));
    } else if (child.type === "text") {
      if (node.type !== "element" || !tableElements.has(node.tagName) || !whitespace(child)) {
        children.push(child.value);
      }
    } else if (child.type === "raw" && !context.options.skipHtml) {
      children.push(child.value);
    }
  }
  return children;
}
function toReact(context, node, index, parent) {
  const options = context.options;
  const parentSchema = context.schema;
  const name = node.tagName;
  const properties = {};
  let schema = parentSchema;
  let property;
  if (parentSchema.space === "html" && name === "svg") {
    schema = svg;
    context.schema = schema;
  }
  if (node.properties) {
    for (property in node.properties) {
      if (own.call(node.properties, property)) {
        addProperty(properties, property, node.properties[property], context);
      }
    }
  }
  if (name === "ol" || name === "ul") {
    context.listDepth++;
  }
  const children = childrenToReact(context, node);
  if (name === "ol" || name === "ul") {
    context.listDepth--;
  }
  context.schema = parentSchema;
  const position = node.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  };
  const component = options.components && own.call(options.components, name) ? options.components[name] : name;
  const basic = typeof component === "string" || component === React.Fragment;
  if (!ReactIs.isValidElementType(component)) {
    throw new TypeError(`Component for name \`${name}\` not defined or is not renderable`);
  }
  properties.key = [
    name,
    position.start.line,
    position.start.column,
    index
  ].join("-");
  if (name === "a" && options.linkTarget) {
    properties.target = typeof options.linkTarget === "function" ? options.linkTarget(String(properties.href || ""), node.children, typeof properties.title === "string" ? properties.title : null) : options.linkTarget;
  }
  if (name === "a" && options.transformLinkUri) {
    properties.href = options.transformLinkUri(String(properties.href || ""), node.children, typeof properties.title === "string" ? properties.title : null);
  }
  if (!basic && name === "code" && parent.type === "element" && parent.tagName !== "pre") {
    properties.inline = true;
  }
  if (!basic && (name === "h1" || name === "h2" || name === "h3" || name === "h4" || name === "h5" || name === "h6")) {
    properties.level = Number.parseInt(name.charAt(1), 10);
  }
  if (name === "img" && options.transformImageUri) {
    properties.src = options.transformImageUri(String(properties.src || ""), String(properties.alt || ""), typeof properties.title === "string" ? properties.title : null);
  }
  if (!basic && name === "li" && parent.type === "element") {
    const input = getInputElement(node);
    properties.checked = input && input.properties ? Boolean(input.properties.checked) : null;
    properties.index = getElementsBeforeCount(parent, node);
    properties.ordered = parent.tagName === "ol";
  }
  if (!basic && (name === "ol" || name === "ul")) {
    properties.ordered = name === "ol";
    properties.depth = context.listDepth;
  }
  if (name === "td" || name === "th") {
    if (properties.align) {
      if (!properties.style)
        properties.style = {};
      properties.style.textAlign = properties.align;
      delete properties.align;
    }
    if (!basic) {
      properties.isHeader = name === "th";
    }
  }
  if (!basic && name === "tr" && parent.type === "element") {
    properties.isHeader = Boolean(parent.tagName === "thead");
  }
  if (options.sourcePos) {
    properties["data-sourcepos"] = flattenPosition(position);
  }
  if (!basic && options.rawSourcePos) {
    properties.sourcePosition = node.position;
  }
  if (!basic && options.includeElementIndex) {
    properties.index = getElementsBeforeCount(parent, node);
    properties.siblingCount = getElementsBeforeCount(parent);
  }
  if (!basic) {
    properties.node = node;
  }
  return children.length > 0 ? React.createElement(component, properties, children) : React.createElement(component, properties);
}
function getInputElement(node) {
  let index = -1;
  while (++index < node.children.length) {
    const child = node.children[index];
    if (child.type === "element" && child.tagName === "input") {
      return child;
    }
  }
  return null;
}
function getElementsBeforeCount(parent, node) {
  let index = -1;
  let count = 0;
  while (++index < parent.children.length) {
    if (parent.children[index] === node)
      break;
    if (parent.children[index].type === "element")
      count++;
  }
  return count;
}
function addProperty(props, prop, value, ctx) {
  const info = find(ctx.schema, prop);
  let result = value;
  if (result === null || result === void 0 || result !== result) {
    return;
  }
  if (Array.isArray(result)) {
    result = info.commaSeparated ? stringify(result) : stringify$1(result);
  }
  if (info.property === "style" && typeof result === "string") {
    result = parseStyle(result);
  }
  if (info.space && info.property) {
    props[own.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result;
  } else if (info.attribute) {
    props[info.attribute] = result;
  }
}
function parseStyle(value) {
  const result = {};
  try {
    style(value, iterator);
  } catch {
  }
  return result;
  function iterator(name, v) {
    const k = name.slice(0, 4) === "-ms-" ? `ms-${name.slice(4)}` : name;
    result[k.replace(/-([a-z])/g, styleReplacer)] = v;
  }
}
function styleReplacer(_, $1) {
  return $1.toUpperCase();
}
function flattenPosition(pos) {
  return [
    pos.start.line,
    ":",
    pos.start.column,
    "-",
    pos.end.line,
    ":",
    pos.end.column
  ].map((d) => String(d)).join("");
}
var own$1 = {}.hasOwnProperty;
var changelog = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md";
var deprecated = {
  renderers: { to: "components", id: "change-renderers-to-components" },
  astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
  allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
  escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
  source: { to: "children", id: "change-source-to-children" },
  allowNode: {
    to: "allowElement",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  allowedTypes: {
    to: "allowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  disallowedTypes: {
    to: "disallowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  includeNodeIndex: {
    to: "includeElementIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }
};
function ReactMarkdown(options) {
  for (const key in deprecated) {
    if (own$1.call(deprecated, key) && own$1.call(options, key)) {
      const deprecation = deprecated[key];
      console.warn(`[react-markdown] Warning: please ${deprecation.to ? `use \`${deprecation.to}\` instead of` : "remove"} \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`);
      delete deprecated[key];
    }
  }
  const processor = unified2().use(remarkParse).use(options.remarkPlugins || options.plugins || []).use(remarkRehype, { allowDangerousHtml: true }).use(options.rehypePlugins || []).use(rehypeFilter, options);
  const file = new VFile();
  if (typeof options.children === "string") {
    file.value = options.children;
  } else if (options.children !== void 0 && options.children !== null) {
    console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`);
  }
  const hastNode = processor.runSync(processor.parse(file), file);
  if (hastNode.type !== "root") {
    throw new TypeError("Expected a `root` node");
  }
  let result = React.createElement(React.Fragment, {}, childrenToReact({ options, schema: html, listDepth: 0 }, hastNode));
  if (options.className) {
    result = React.createElement("div", { className: options.className }, result);
  }
  return result;
}
ReactMarkdown.defaultProps = { transformLinkUri: uriTransformer };
ReactMarkdown.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  allowElement: PropTypes.func,
  allowedElements: PropTypes.arrayOf(PropTypes.string),
  disallowedElements: PropTypes.arrayOf(PropTypes.string),
  unwrapDisallowed: PropTypes.bool,
  remarkPlugins: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func]))
  ])),
  rehypePlugins: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func]))
  ])),
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  skipHtml: PropTypes.bool,
  includeElementIndex: PropTypes.bool,
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  components: PropTypes.object
};
var react_markdown_default = ReactMarkdown;
export {
  react_markdown_default as default,
  uriTransformer
};
