// https://cdn.skypack.dev/-/vfile-message@v3.1.0-PHnuwdS1FqSPsA1KIr99/dist=es2019,mode=imports/optimized/vfile-message.js
import { stringifyPosition } from "../../../unist-util-stringify-position@v3.0.0-PzqJYHLguP8t14EUW2kE/dist=es2019,mode=imports/optimized/unist-util-stringify-position.js";
var VFileMessage = class extends Error {
  constructor(reason, place, origin) {
    var parts = [null, null];
    var position = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    var index;
    super();
    if (typeof place === "string") {
      origin = place;
      place = null;
    }
    if (typeof origin === "string") {
      index = origin.indexOf(":");
      if (index === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index);
        parts[1] = origin.slice(index + 1);
      }
    }
    if (place) {
      if ("type" in place || "position" in place) {
        if (place.position) {
          position = place.position;
        }
      } else if ("start" in place || "end" in place) {
        position = place;
      } else if ("line" in place || "column" in place) {
        position.start = place;
      }
    }
    this.name = stringifyPosition(place) || "1:1";
    this.message = typeof reason === "object" ? reason.message : reason;
    this.stack = typeof reason === "object" ? reason.stack : "";
    this.reason = this.message;
    this.fatal;
    this.line = position.start.line;
    this.column = position.start.column;
    this.source = parts[0];
    this.ruleId = parts[1];
    this.position = position;
    this.actual;
    this.expected;
    this.file;
    this.url;
    this.note;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;
var vfile_message_default = null;
export {
  VFileMessage,
  vfile_message_default as default
};
