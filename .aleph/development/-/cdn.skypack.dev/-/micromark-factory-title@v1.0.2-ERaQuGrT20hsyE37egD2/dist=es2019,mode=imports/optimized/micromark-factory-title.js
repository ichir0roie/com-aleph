// https://cdn.skypack.dev/-/micromark-factory-title@v1.0.2-ERaQuGrT20hsyE37egD2/dist=es2019,mode=imports/optimized/micromark-factory-title.js
import { factorySpace } from "../../../micromark-factory-space@v1.0.0-JX4eXJPzDafORQ4SOHDQ/dist=es2019,mode=imports/optimized/micromark-factory-space.js";
import { markdownLineEnding } from "../../../micromark-util-character@v1.1.0-LVVnE8s8laxKavCIhB2g/dist=es2019,mode=imports/optimized/micromark-util-character.js";
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === 40 ? 41 : code;
    return atFirstTitleBreak;
  }
  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return atTitleBreak(code);
  }
  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }
    if (code === null) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return factorySpace(effects, atTitleBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return title(code);
  }
  function title(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit("chunkString");
      return atTitleBreak(code);
    }
    effects.consume(code);
    return code === 92 ? titleEscape : title;
  }
  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return title;
    }
    return title(code);
  }
}
var micromark_factory_title_default = null;
export {
  micromark_factory_title_default as default,
  factoryTitle
};
