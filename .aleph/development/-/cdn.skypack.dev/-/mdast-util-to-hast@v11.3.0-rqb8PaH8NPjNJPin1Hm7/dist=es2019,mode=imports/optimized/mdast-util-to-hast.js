// https://cdn.skypack.dev/-/mdast-util-to-hast@v11.3.0-rqb8PaH8NPjNJPin1Hm7/dist=es2019,mode=imports/optimized/mdast-util-to-hast.js
import { u } from "../../../unist-builder@v3.0.0-geMo3CNBDmUDPX4bEG2l/dist=es2019,mode=imports/optimized/unist-builder.js";
import { visit } from "../../../unist-util-visit@v4.1.0-jUdmZJeqyYX3XHcXPej2/dist=es2019,mode=imports/optimized/unist-util-visit.js";
import { pointStart, pointEnd } from "../../../unist-util-position@v4.0.1-7jrHYwTfEK1OnLa0qCNb/dist=es2019,mode=imports/optimized/unist-util-position.js";
import { generated } from "../../../unist-util-generated@v2.0.0-qgbqvz5daenXJYT4Rs1a/dist=es2019,mode=imports/optimized/unist-util-generated.js";
import { definitions } from "../../../mdast-util-definitions@v5.1.0-p4dZ0TFngx70abzWKx58/dist=es2019,mode=imports/optimized/mdast-util-definitions.js";
import normalize from "../../../mdurl@v1.0.1-6zg8ICocHByHr7WG8ONr/dist=es2019,mode=imports/unoptimized/encode.js";
var own = {}.hasOwnProperty;
function unknown(h, node) {
  const data = node.data || {};
  if ("value" in node && !(own.call(data, "hName") || own.call(data, "hProperties") || own.call(data, "hChildren"))) {
    return h.augment(node, u("text", node.value));
  }
  return h(node, "div", all(h, node));
}
function one(h, node, parent) {
  const type = node && node.type;
  let fn;
  if (!type) {
    throw new Error("Expected node, got `" + node + "`");
  }
  if (own.call(h.handlers, type)) {
    fn = h.handlers[type];
  } else if (h.passThrough && h.passThrough.includes(type)) {
    fn = returnNode;
  } else {
    fn = h.unknownHandler;
  }
  return (typeof fn === "function" ? fn : unknown)(h, node, parent);
}
function returnNode(h, node) {
  return "children" in node ? { ...node, children: all(h, node) } : node;
}
function all(h, parent) {
  const values = [];
  if ("children" in parent) {
    const nodes = parent.children;
    let index = -1;
    while (++index < nodes.length) {
      const result = one(h, nodes[index], parent);
      if (result) {
        if (index && nodes[index - 1].type === "break") {
          if (!Array.isArray(result) && result.type === "text") {
            result.value = result.value.replace(/^\s+/, "");
          }
          if (!Array.isArray(result) && result.type === "element") {
            const head = result.children[0];
            if (head && head.type === "text") {
              head.value = head.value.replace(/^\s+/, "");
            }
          }
        }
        if (Array.isArray(result)) {
          values.push(...result);
        } else {
          values.push(result);
        }
      }
    }
  }
  return values;
}
function thematicBreak(h, node) {
  return h(node, "hr");
}
function wrap(nodes, loose) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index)
      result.push(u("text", "\n"));
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}
function list(h, node) {
  const props = {};
  const name = node.ordered ? "ol" : "ul";
  const items = all(h, node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  while (++index < items.length) {
    const item = items[index];
    if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
      props.className = ["contains-task-list"];
      break;
    }
  }
  return h(node, name, props, wrap(items, true));
}
function footer(h) {
  const footnoteById = h.footnoteById;
  const footnoteOrder = h.footnoteOrder;
  let index = -1;
  const listItems = [];
  while (++index < footnoteOrder.length) {
    const def = footnoteById[footnoteOrder[index].toUpperCase()];
    if (!def) {
      continue;
    }
    const marker = String(index + 1);
    const content = [...def.children];
    const backReference = {
      type: "link",
      url: "#fnref" + marker,
      data: { hProperties: { className: ["footnote-back"], role: "doc-backlink" } },
      children: [{ type: "text", value: "\u21A9" }]
    };
    const tail = content[content.length - 1];
    if (tail && tail.type === "paragraph") {
      tail.children.push(backReference);
    } else {
      content.push(backReference);
    }
    listItems.push({
      type: "listItem",
      data: { hProperties: { id: "fn" + marker, role: "doc-endnote" } },
      children: content,
      position: def.position
    });
  }
  if (listItems.length === 0) {
    return null;
  }
  return h(null, "section", { className: ["footnotes"], role: "doc-endnotes" }, wrap([
    thematicBreak(h),
    list(h, { type: "list", ordered: true, children: listItems })
  ], true));
}
function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}
function hardBreak(h, node) {
  return [h(node, "br"), u("text", "\n")];
}
function code(h, node) {
  const value = node.value ? node.value + "\n" : "";
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  const props = {};
  if (lang) {
    props.className = ["language-" + lang];
  }
  const code2 = h(node, "code", props, [u("text", value)]);
  if (node.meta) {
    code2.data = { meta: node.meta };
  }
  return h(node.position, "pre", [code2]);
}
function strikethrough(h, node) {
  return h(node, "del", all(h, node));
}
function emphasis(h, node) {
  return h(node, "em", all(h, node));
}
function footnoteReference(h, node) {
  const footnoteOrder = h.footnoteOrder;
  const identifier = String(node.identifier);
  const index = footnoteOrder.indexOf(identifier);
  const marker = String(index === -1 ? footnoteOrder.push(identifier) : index + 1);
  return h(node, "a", {
    href: "#fn" + marker,
    className: ["footnote-ref"],
    id: "fnref" + marker,
    role: "doc-noteref"
  }, [h(node.position, "sup", [u("text", marker)])]);
}
function footnote(h, node) {
  const footnoteById = h.footnoteById;
  const footnoteOrder = h.footnoteOrder;
  let no = 1;
  while (no in footnoteById)
    no++;
  const identifier = String(no);
  footnoteOrder.push(identifier);
  footnoteById[identifier] = {
    type: "footnoteDefinition",
    identifier,
    children: [{ type: "paragraph", children: node.children }],
    position: node.position
  };
  return footnoteReference(h, {
    type: "footnoteReference",
    identifier,
    position: node.position
  });
}
function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}
function html(h, node) {
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}
function revert(h, node) {
  const subtype = node.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node.label || node.identifier) + "]";
  }
  if (node.type === "imageReference") {
    return u("text", "![" + node.alt + suffix);
  }
  const contents = all(h, node);
  const head = contents[0];
  if (head && head.type === "text") {
    head.value = "[" + head.value;
  } else {
    contents.unshift(u("text", "["));
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents.push(u("text", suffix));
  }
  return contents;
}
function imageReference(h, node) {
  const def = h.definition(node.identifier);
  if (!def) {
    return revert(h, node);
  }
  const props = { src: normalize(def.url || ""), alt: node.alt };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h(node, "img", props);
}
function image(h, node) {
  const props = { src: normalize(node.url), alt: node.alt };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}
function inlineCode(h, node) {
  return h(node, "code", [u("text", node.value.replace(/\r?\n|\r/g, " "))]);
}
function linkReference(h, node) {
  const def = h.definition(node.identifier);
  if (!def) {
    return revert(h, node);
  }
  const props = { href: normalize(def.url || "") };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h(node, "a", props, all(h, node));
}
function link(h, node) {
  const props = { href: normalize(node.url) };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}
function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  const wrapped = [];
  if (typeof node.checked === "boolean") {
    let paragraph2;
    if (result[0] && result[0].type === "element" && result[0].tagName === "p") {
      paragraph2 = result[0];
    } else {
      paragraph2 = h(null, "p", []);
      result.unshift(paragraph2);
    }
    if (paragraph2.children.length > 0) {
      paragraph2.children.unshift(u("text", " "));
    }
    paragraph2.children.unshift(h(null, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }));
    props.className = ["task-list-item"];
  }
  let index = -1;
  while (++index < result.length) {
    const child = result[index];
    if (loose || index !== 0 || child.type !== "element" || child.tagName !== "p") {
      wrapped.push(u("text", "\n"));
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      wrapped.push(...child.children);
    } else {
      wrapped.push(child);
    }
  }
  const tail = result[result.length - 1];
  if (tail && (loose || !("tagName" in tail) || tail.tagName !== "p")) {
    wrapped.push(u("text", "\n"));
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  let index = -1;
  while (!loose && ++index < children.length) {
    loose = listItemLoose(children[index]);
  }
  return Boolean(loose);
}
function listItemLoose(node) {
  const spread = node.spread;
  return spread === void 0 || spread === null ? node.children.length > 1 : spread;
}
function paragraph(h, node) {
  return h(node, "p", all(h, node));
}
function root(h, node) {
  return h.augment(node, u("root", wrap(all(h, node))));
}
function strong(h, node) {
  return h(node, "strong", all(h, node));
}
function table(h, node) {
  const rows = node.children;
  let index = -1;
  const align = node.align || [];
  const result = [];
  while (++index < rows.length) {
    const row = rows[index].children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : row.length;
    const out = [];
    while (pos--) {
      const cell = row[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    result[index] = h(rows[index], "tr", wrap(out, true));
  }
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(result[1] ? h({
    start: pointStart(result[1]),
    end: pointEnd(result[result.length - 1])
  }, "tbody", wrap(result.slice(1), true)) : []), true));
}
function text(h, node) {
  return h.augment(node, u("text", String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")));
}
var handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list,
  paragraph,
  root,
  strong,
  table,
  text,
  thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return null;
}
var own$1 = {}.hasOwnProperty;
function factory(tree, options) {
  const settings = options || {};
  const dangerous = settings.allowDangerousHtml || false;
  const footnoteById = {};
  h.dangerous = dangerous;
  h.definition = definitions(tree);
  h.footnoteById = footnoteById;
  h.footnoteOrder = [];
  h.augment = augment;
  h.handlers = { ...handlers, ...settings.handlers };
  h.unknownHandler = settings.unknownHandler;
  h.passThrough = settings.passThrough;
  visit(tree, "footnoteDefinition", (definition) => {
    const id = String(definition.identifier).toUpperCase();
    if (!own$1.call(footnoteById, id)) {
      footnoteById[id] = definition;
    }
  });
  return h;
  function augment(left, right) {
    if (left && "data" in left && left.data) {
      const data = left.data;
      if (data.hName) {
        if (right.type !== "element") {
          right = {
            type: "element",
            tagName: "",
            properties: {},
            children: []
          };
        }
        right.tagName = data.hName;
      }
      if (right.type === "element" && data.hProperties) {
        right.properties = { ...right.properties, ...data.hProperties };
      }
      if ("children" in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }
    if (left) {
      const ctx = "type" in left ? left : { position: left };
      if (!generated(ctx)) {
        right.position = { start: pointStart(ctx), end: pointEnd(ctx) };
      }
    }
    return right;
  }
  function h(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }
    return augment(node, {
      type: "element",
      tagName,
      properties: props || {},
      children: children || []
    });
  }
}
function toHast(tree, options) {
  const h = factory(tree, options);
  const node = one(h, tree, null);
  const foot = footer(h);
  if (foot) {
    node.children.push(u("text", "\n"), foot);
  }
  return Array.isArray(node) ? { type: "root", children: node } : node;
}
var mdast_util_to_hast_default = null;
export {
  all,
  mdast_util_to_hast_default as default,
  one,
  toHast
};
