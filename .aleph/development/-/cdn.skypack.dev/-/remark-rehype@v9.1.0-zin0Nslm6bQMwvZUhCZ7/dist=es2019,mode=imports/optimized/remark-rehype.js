// https://cdn.skypack.dev/-/remark-rehype@v9.1.0-zin0Nslm6bQMwvZUhCZ7/dist=es2019,mode=imports/optimized/remark-rehype.js
import { toHast } from "../../../mdast-util-to-hast@v11.3.0-rqb8PaH8NPjNJPin1Hm7/dist=es2019,mode=imports/optimized/mdast-util-to-hast.js";
var remarkRehype = function(destination, options) {
  return destination && "run" in destination ? bridge(destination, options) : mutate(destination);
};
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
var remark_rehype_default = remarkRehype;
export {
  remark_rehype_default as default
};
