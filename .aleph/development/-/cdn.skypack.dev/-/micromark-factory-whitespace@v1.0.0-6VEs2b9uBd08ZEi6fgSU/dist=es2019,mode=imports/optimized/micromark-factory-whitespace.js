// https://cdn.skypack.dev/-/micromark-factory-whitespace@v1.0.0-6VEs2b9uBd08ZEi6fgSU/dist=es2019,mode=imports/optimized/micromark-factory-whitespace.js
import { factorySpace } from "../../../micromark-factory-space@v1.0.0-JX4eXJPzDafORQ4SOHDQ/dist=es2019,mode=imports/optimized/micromark-factory-space.js";
import { markdownLineEnding, markdownSpace } from "../../../micromark-util-character@v1.0.0-881MvdWm1BbUG1iG5PXU/dist=es2019,mode=imports/optimized/micromark-util-character.js";
function factoryWhitespace(effects, ok) {
  let seen;
  return start;
  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
    }
    return ok(code);
  }
}
var micromark_factory_whitespace_default = null;
export {
  micromark_factory_whitespace_default as default,
  factoryWhitespace
};
