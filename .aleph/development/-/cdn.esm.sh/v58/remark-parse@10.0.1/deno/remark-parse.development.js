// https://cdn.esm.sh/v58/remark-parse@10.0.1/deno/remark-parse.development.js
import { fromMarkdown } from "../../mdast-util-from-markdown@1.2.0/deno/mdast-util-from-markdown.development.js";
function remarkParse(options) {
  const parser = (doc) => {
    const settings = this.data("settings");
    return fromMarkdown(doc, Object.assign({}, settings, options, {
      extensions: this.data("micromarkExtensions") || [],
      mdastExtensions: this.data("fromMarkdownExtensions") || []
    }));
  };
  Object.assign(this, { Parser: parser });
}
var remark_parse_default = remarkParse;
export {
  remark_parse_default as default
};
