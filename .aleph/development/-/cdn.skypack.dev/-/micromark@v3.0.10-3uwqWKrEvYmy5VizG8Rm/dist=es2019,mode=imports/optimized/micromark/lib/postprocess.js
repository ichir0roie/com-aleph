// https://cdn.skypack.dev/-/micromark@v3.0.10-3uwqWKrEvYmy5VizG8Rm/dist=es2019,mode=imports/optimized/micromark/lib/postprocess.js
import { subtokenize } from "../../../../../micromark-util-subtokenize@v1.0.2-Higix5scC6TVQOJaws34/dist=es2019,mode=imports/optimized/micromark-util-subtokenize.js";
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}
var postprocess_default = null;
export {
  postprocess_default as default,
  postprocess
};
