// https://cdn.esm.sh/v59/hast-to-hyperscript@10.0.1/deno/hast-to-hyperscript.development.js
import { html, svg, find, hastToReact } from "../../property-information@6.1.1/deno/property-information.development.js";
import { stringify as spaces } from "../../space-separated-tokens@2.0.1/deno/space-separated-tokens.development.js";
import { stringify as commas } from "../../comma-separated-tokens@2.0.2/deno/comma-separated-tokens.development.js";
import style from "../../style-to-object@0.3.0/deno/style-to-object.development.js";
import { webNamespaces } from "../../web-namespaces@2.0.1/deno/web-namespaces.development.js";
import { convert } from "../../unist-util-is@5.1.1/deno/unist-util-is.development.js";
var ns = webNamespaces;
var toReact = hastToReact;
var own = {}.hasOwnProperty;
var root = convert("root");
var element = convert("element");
var text = convert("text");
function toH(h, tree, options) {
  if (typeof h !== "function") {
    throw new TypeError("h is not a function");
  }
  const r = react(h);
  const v = vue(h);
  const vd = vdom(h);
  let prefix;
  let node;
  if (typeof options === "string" || typeof options === "boolean") {
    prefix = options;
    options = {};
  } else {
    if (!options)
      options = {};
    prefix = options.prefix;
  }
  if (root(tree)) {
    node = tree.children.length === 1 && element(tree.children[0]) ? tree.children[0] : {
      type: "element",
      tagName: "div",
      properties: {},
      children: tree.children
    };
  } else if (element(tree)) {
    node = tree;
  } else {
    throw new Error("Expected root or element, not `" + (tree && tree.type || tree) + "`");
  }
  return transform(h, node, {
    schema: options.space === "svg" ? svg : html,
    prefix: prefix === void 0 || prefix === null ? r || v || vd ? "h-" : null : typeof prefix === "string" ? prefix : prefix ? "h-" : null,
    key: 0,
    react: r,
    vue: v,
    vdom: vd,
    hyperscript: hyperscript(h)
  });
}
function transform(h, node, ctx) {
  const parentSchema = ctx.schema;
  let schema = parentSchema;
  let name = node.tagName;
  const attributes = {};
  const nodes = [];
  let index = -1;
  let key;
  if (parentSchema.space === "html" && name.toLowerCase() === "svg") {
    schema = svg;
    ctx.schema = schema;
  }
  for (key in node.properties) {
    if (node.properties && own.call(node.properties, key)) {
      addAttribute(attributes, key, node.properties[key], ctx, name);
    }
  }
  if (ctx.vdom) {
    if (schema.space === "html") {
      name = name.toUpperCase();
    } else if (schema.space) {
      attributes.namespace = ns[schema.space];
    }
  }
  if (ctx.prefix) {
    ctx.key++;
    attributes.key = ctx.prefix + ctx.key;
  }
  if (node.children) {
    while (++index < node.children.length) {
      const value = node.children[index];
      if (element(value)) {
        nodes.push(transform(h, value, ctx));
      } else if (text(value)) {
        nodes.push(value.value);
      }
    }
  }
  ctx.schema = parentSchema;
  return nodes.length > 0 ? h.call(node, name, attributes, nodes) : h.call(node, name, attributes);
}
function addAttribute(props, prop, value, ctx, name) {
  const info = find(ctx.schema, prop);
  let subprop;
  if (value === void 0 || value === null || typeof value === "number" && Number.isNaN(value) || value === false && (ctx.vue || ctx.vdom || ctx.hyperscript) || !value && info.boolean && (ctx.vue || ctx.vdom || ctx.hyperscript)) {
    return;
  }
  if (Array.isArray(value)) {
    value = info.commaSeparated ? commas(value) : spaces(value);
  }
  if (info.boolean && ctx.hyperscript) {
    value = "";
  }
  if (info.property === "style" && typeof value === "string" && (ctx.react || ctx.vue || ctx.vdom)) {
    value = parseStyle(value, name);
  }
  if (ctx.vue) {
    if (info.property !== "style")
      subprop = "attrs";
  } else if (!info.mustUseProperty) {
    if (ctx.vdom) {
      if (info.property !== "style")
        subprop = "attributes";
    } else if (ctx.hyperscript) {
      subprop = "attrs";
    }
  }
  if (subprop) {
    props[subprop] = Object.assign(props[subprop] || {}, {
      [info.attribute]: value
    });
  } else if (info.space && ctx.react) {
    props[toReact[info.property] || info.property] = value;
  } else {
    props[info.attribute] = value;
  }
}
function react(h) {
  const node = h("div", {});
  return Boolean(node && ("_owner" in node || "_store" in node) && (node.key === void 0 || node.key === null));
}
function hyperscript(h) {
  return "context" in h && "cleanup" in h;
}
function vdom(h) {
  const node = h("div", {});
  return node.type === "VirtualNode";
}
function vue(h) {
  const node = h("div", {});
  return Boolean(node && node.context && node.context._isVue);
}
function parseStyle(value, tagName) {
  const result = {};
  try {
    style(value, (name, value2) => {
      if (name.slice(0, 4) === "-ms-")
        name = "ms-" + name.slice(4);
      result[name.replace(/-([a-z])/g, (_, $1) => $1.toUpperCase())] = value2;
    });
  } catch (error) {
    error.message = tagName + "[style]" + error.message.slice("undefined".length);
    throw error;
  }
  return result;
}
export {
  toH
};
