// https://cdn.skypack.dev/-/remark-parse@v10.0.1-oLsap8LTxg4mT6ZkoyRK/dist=es2019,mode=imports/optimized/remark-parse.js
import { fromMarkdown } from "../../../mdast-util-from-markdown@v1.2.0-bFTitMqWRVr2GXauG3H0/dist=es2019,mode=imports/optimized/mdast-util-from-markdown.js";
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
