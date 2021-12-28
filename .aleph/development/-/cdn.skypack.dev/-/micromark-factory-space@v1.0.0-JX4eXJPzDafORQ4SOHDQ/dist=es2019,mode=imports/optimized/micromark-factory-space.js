// https://cdn.skypack.dev/-/micromark-factory-space@v1.0.0-JX4eXJPzDafORQ4SOHDQ/dist=es2019,mode=imports/optimized/micromark-factory-space.js
import { markdownSpace } from "../../../micromark-util-character@v1.0.0-881MvdWm1BbUG1iG5PXU/dist=es2019,mode=imports/optimized/micromark-util-character.js";
function factorySpace(effects, ok, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type);
      return prefix(code);
    }
    return ok(code);
  }
  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code);
      return prefix;
    }
    effects.exit(type);
    return ok(code);
  }
}
var micromark_factory_space_default = null;
export {
  micromark_factory_space_default as default,
  factorySpace
};
