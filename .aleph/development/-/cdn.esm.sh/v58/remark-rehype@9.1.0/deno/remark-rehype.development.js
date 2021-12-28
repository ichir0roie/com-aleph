// https://cdn.esm.sh/v58/remark-rehype@9.1.0/deno/remark-rehype.development.js
import { toHast } from "../../mdast-util-to-hast@11.3.0/deno/mdast-util-to-hast.development.js";
var remarkRehype = function(destination, options) {
  return destination && "run" in destination ? bridge(destination, options) : mutate(destination);
};
var remark_rehype_default = remarkRehype;
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, (error) => {
      next(error);
    });
  };
}
function mutate(options) {
  return (node) => toHast(node, options);
}
export {
  remark_rehype_default as default
};
