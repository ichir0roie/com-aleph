// https://cdn.skypack.dev/-/micromark-util-classify-character@v1.0.0-x1RVrdF374Zo24GaDCM1/dist=es2019,mode=imports/optimized/micromark-util-classify-character.js
import { markdownLineEndingOrSpace, unicodeWhitespace, unicodePunctuation } from "../../../micromark-util-character@v1.0.0-881MvdWm1BbUG1iG5PXU/dist=es2019,mode=imports/optimized/micromark-util-character.js";
function classifyCharacter(code) {
  if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
    return 1;
  }
  if (unicodePunctuation(code)) {
    return 2;
  }
}
var micromark_util_classify_character_default = null;
export {
  classifyCharacter,
  micromark_util_classify_character_default as default
};
