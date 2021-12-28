// https://cdn.esm.sh/v59/remark-rehype@10.1.0/deno/remark-rehype.development.js
import { defaultHandlers, all, one } from "../../mdast-util-to-hast@12.1.0/deno/mdast-util-to-hast.development.js";
import { toHast } from "../../mdast-util-to-hast@12.1.0/deno/mdast-util-to-hast.development.js";
var remarkRehype = function(destination, options) {
  return destination && "run" in destination ? bridge(destination, options) : mutate(destination || options);
};
var lib_default = remarkRehype;
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
  all,
  lib_default as default,
  defaultHandlers,
  one
};
