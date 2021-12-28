// https://cdn.skypack.dev/-/micromark-factory-label@v1.0.2-bjkGYm64FAMVeJQNa6iS/dist=es2019,mode=imports/optimized/micromark-factory-label.js
import { markdownLineEnding, markdownSpace } from "../../../micromark-util-character@v1.1.0-LVVnE8s8laxKavCIhB2g/dist=es2019,mode=imports/optimized/micromark-util-character.js";
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  let data;
  return start;
  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code) {
    if (code === null || code === 91 || code === 93 && !data || code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
      return nok(code);
    }
    if (code === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return label(code);
  }
  function label(code) {
    if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code);
    }
    effects.consume(code);
    data = data || !markdownSpace(code);
    return code === 92 ? labelEscape : label;
  }
  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return label;
    }
    return label(code);
  }
}
var micromark_factory_label_default = null;
export {
  micromark_factory_label_default as default,
  factoryLabel
};
