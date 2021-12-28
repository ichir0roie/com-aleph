var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// https://cdn.esm.sh/v59/htmlparser2@7.2.0/deno/htmlparser2.js
import __entities_lib_decode$ from "../../entities@3.0.1/deno/lib/decode.js";
import __entities_lib_decode_codepoint$ from "../../entities@3.0.1/deno/lib/decode_codepoint.js";
import __domutils$ from "../../domutils@2.8.0/deno/domutils.js";
import __domelementtype$ from "../../domelementtype@2.2.0/deno/domelementtype.js";
import __domhandler$ from "../../domhandler@4.3.0/deno/domhandler.js";
var Q = Object.create;
var T = Object.defineProperty;
var W = Object.getOwnPropertyDescriptor;
var Y = Object.getOwnPropertyNames;
var G = Object.getPrototypeOf;
var J = Object.prototype.hasOwnProperty;
var K = (e) => T(e, "__esModule", { value: true });
var c = ((e) => typeof __require != "undefined" ? __require : typeof Proxy != "undefined" ? new Proxy(e, { get: (t, i) => (typeof __require != "undefined" ? __require : t)[i] }) : e)(function(e) {
  if (typeof __require != "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var y = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var X = (e, t, i, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of Y(t))
      !J.call(e, n) && (i || n !== "default") && T(e, n, { get: () => t[n], enumerable: !(s = W(t, n)) || s.enumerable });
  return e;
};
var k = (e, t) => X(K(T(e != null ? Q(G(e)) : {}, "default", !t && e && e.__esModule ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
var E = y((m) => {
  "use strict";
  var Z = m && m.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(m, "__esModule", { value: true });
  var $ = Z(__entities_lib_decode_codepoint$), g = __entities_lib_decode$;
  function f(e) {
    return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
  }
  function S(e) {
    return e === 47 || e === 62 || f(e);
  }
  function O(e) {
    return e >= 48 && e <= 57;
  }
  function tt(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
  }
  var u = { Cdata: new Uint16Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint16Array([93, 93, 62]), CommentEnd: new Uint16Array([45, 45, 62]), ScriptEnd: new Uint16Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint16Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint16Array([60, 47, 116, 105, 116, 108, 101]) }, et = function() {
    function e(t, i) {
      var s = t.xmlMode, n = s === void 0 ? false : s, a = t.decodeEntities, h = a === void 0 ? true : a;
      this.cbs = i, this._state = 1, this.buffer = "", this.sectionStart = 0, this._index = 0, this.bufferOffset = 0, this.baseState = 1, this.isSpecial = false, this.running = true, this.ended = false, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.trieResult = null, this.entityExcess = 0, this.xmlMode = n, this.decodeEntities = h, this.entityTrie = n ? g.xmlDecodeTree : g.htmlDecodeTree;
    }
    return e.prototype.reset = function() {
      this._state = 1, this.buffer = "", this.sectionStart = 0, this._index = 0, this.bufferOffset = 0, this.baseState = 1, this.currentSequence = void 0, this.running = true, this.ended = false;
    }, e.prototype.write = function(t) {
      if (this.ended)
        return this.cbs.onerror(Error(".write() after done!"));
      this.buffer += t, this.parse();
    }, e.prototype.end = function(t) {
      if (this.ended)
        return this.cbs.onerror(Error(".end() after done!"));
      t && this.write(t), this.ended = true, this.running && this.finish();
    }, e.prototype.pause = function() {
      this.running = false;
    }, e.prototype.resume = function() {
      this.running = true, this._index < this.buffer.length && this.parse(), this.ended && this.finish();
    }, e.prototype.getAbsoluteSectionStart = function() {
      return this.sectionStart + this.bufferOffset;
    }, e.prototype.getAbsoluteIndex = function() {
      return this.bufferOffset + this._index;
    }, e.prototype.stateText = function(t) {
      t === 60 || !this.decodeEntities && this.fastForwardTo(60) ? (this._index > this.sectionStart && this.cbs.ontext(this.getSection()), this._state = 2, this.sectionStart = this._index) : this.decodeEntities && t === 38 && (this._state = 25);
    }, e.prototype.stateSpecialStartSequence = function(t) {
      var i = this.sequenceIndex === this.currentSequence.length, s = i ? S(t) : (t | 32) === this.currentSequence[this.sequenceIndex];
      if (!s)
        this.isSpecial = false;
      else if (!i) {
        this.sequenceIndex++;
        return;
      }
      this.sequenceIndex = 0, this._state = 3, this.stateInTagName(t);
    }, e.prototype.stateInSpecialTag = function(t) {
      if (this.sequenceIndex === this.currentSequence.length) {
        if (t === 62 || f(t)) {
          var i = this._index - this.currentSequence.length;
          if (this.sectionStart < i) {
            var s = this._index;
            this._index = i, this.cbs.ontext(this.getSection()), this._index = s;
          }
          this.isSpecial = false, this.sectionStart = i + 2, this.stateInClosingTagName(t);
          return;
        }
        this.sequenceIndex = 0;
      }
      (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === u.TitleEnd ? this.decodeEntities && t === 38 && (this._state = 25) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(t === 60);
    }, e.prototype.stateCDATASequence = function(t) {
      t === u.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === u.Cdata.length && (this._state = 21, this.currentSequence = u.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this._index + 1) : (this.sequenceIndex = 0, this._state = 16, this.stateInDeclaration(t));
    }, e.prototype.fastForwardTo = function(t) {
      for (; ++this._index < this.buffer.length; )
        if (this.buffer.charCodeAt(this._index) === t)
          return true;
      return this._index = this.buffer.length - 1, false;
    }, e.prototype.stateInCommentLike = function(t) {
      if (t === this.currentSequence[this.sequenceIndex]) {
        if (++this.sequenceIndex === this.currentSequence.length) {
          var i = this.buffer.slice(this.sectionStart, this._index - 2);
          this.currentSequence === u.CdataEnd ? this.cbs.oncdata(i) : this.cbs.oncomment(i), this.sequenceIndex = 0, this.sectionStart = this._index + 1, this._state = 1;
        }
      } else
        this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
    }, e.prototype.isTagStartChar = function(t) {
      return this.xmlMode ? !S(t) : tt(t);
    }, e.prototype.startSpecial = function(t, i) {
      this.isSpecial = true, this.currentSequence = t, this.sequenceIndex = i, this._state = 23;
    }, e.prototype.stateBeforeTagName = function(t) {
      if (t === 33)
        this._state = 15, this.sectionStart = this._index + 1;
      else if (t === 63)
        this._state = 17, this.sectionStart = this._index + 1;
      else if (this.isTagStartChar(t)) {
        var i = t | 32;
        this.sectionStart = this._index, !this.xmlMode && i === u.TitleEnd[2] ? this.startSpecial(u.TitleEnd, 3) : this._state = !this.xmlMode && i === u.ScriptEnd[2] ? 22 : 3;
      } else
        t === 47 ? this._state = 5 : (this._state = 1, this.stateText(t));
    }, e.prototype.stateInTagName = function(t) {
      S(t) && (this.cbs.onopentagname(this.getSection()), this.sectionStart = -1, this._state = 8, this.stateBeforeAttributeName(t));
    }, e.prototype.stateBeforeClosingTagName = function(t) {
      f(t) || (t === 62 ? this._state = 1 : (this._state = this.isTagStartChar(t) ? 6 : 20, this.sectionStart = this._index));
    }, e.prototype.stateInClosingTagName = function(t) {
      (t === 62 || f(t)) && (this.cbs.onclosetag(this.getSection()), this.sectionStart = -1, this._state = 7, this.stateAfterClosingTagName(t));
    }, e.prototype.stateAfterClosingTagName = function(t) {
      (t === 62 || this.fastForwardTo(62)) && (this._state = 1, this.sectionStart = this._index + 1);
    }, e.prototype.stateBeforeAttributeName = function(t) {
      t === 62 ? (this.cbs.onopentagend(), this.isSpecial ? (this._state = 24, this.sequenceIndex = 0) : this._state = 1, this.baseState = this._state, this.sectionStart = this._index + 1) : t === 47 ? this._state = 4 : f(t) || (this._state = 9, this.sectionStart = this._index);
    }, e.prototype.stateInSelfClosingTag = function(t) {
      t === 62 ? (this.cbs.onselfclosingtag(), this._state = 1, this.baseState = 1, this.sectionStart = this._index + 1, this.isSpecial = false) : f(t) || (this._state = 8, this.stateBeforeAttributeName(t));
    }, e.prototype.stateInAttributeName = function(t) {
      (t === 61 || S(t)) && (this.cbs.onattribname(this.getSection()), this.sectionStart = -1, this._state = 10, this.stateAfterAttributeName(t));
    }, e.prototype.stateAfterAttributeName = function(t) {
      t === 61 ? this._state = 11 : t === 47 || t === 62 ? (this.cbs.onattribend(void 0), this._state = 8, this.stateBeforeAttributeName(t)) : f(t) || (this.cbs.onattribend(void 0), this._state = 9, this.sectionStart = this._index);
    }, e.prototype.stateBeforeAttributeValue = function(t) {
      t === 34 ? (this._state = 12, this.sectionStart = this._index + 1) : t === 39 ? (this._state = 13, this.sectionStart = this._index + 1) : f(t) || (this.sectionStart = this._index, this._state = 14, this.stateInAttributeValueNoQuotes(t));
    }, e.prototype.handleInAttributeValue = function(t, i) {
      t === i || !this.decodeEntities && this.fastForwardTo(i) ? (this.cbs.onattribdata(this.getSection()), this.sectionStart = -1, this.cbs.onattribend(String.fromCharCode(i)), this._state = 8) : this.decodeEntities && t === 38 && (this.baseState = this._state, this._state = 25);
    }, e.prototype.stateInAttributeValueDoubleQuotes = function(t) {
      this.handleInAttributeValue(t, 34);
    }, e.prototype.stateInAttributeValueSingleQuotes = function(t) {
      this.handleInAttributeValue(t, 39);
    }, e.prototype.stateInAttributeValueNoQuotes = function(t) {
      f(t) || t === 62 ? (this.cbs.onattribdata(this.getSection()), this.sectionStart = -1, this.cbs.onattribend(null), this._state = 8, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === 38 && (this.baseState = this._state, this._state = 25);
    }, e.prototype.stateBeforeDeclaration = function(t) {
      t === 91 ? (this._state = 19, this.sequenceIndex = 0) : this._state = t === 45 ? 18 : 16;
    }, e.prototype.stateInDeclaration = function(t) {
      (t === 62 || this.fastForwardTo(62)) && (this.cbs.ondeclaration(this.getSection()), this._state = 1, this.sectionStart = this._index + 1);
    }, e.prototype.stateInProcessingInstruction = function(t) {
      (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.getSection()), this._state = 1, this.sectionStart = this._index + 1);
    }, e.prototype.stateBeforeComment = function(t) {
      t === 45 ? (this._state = 21, this.currentSequence = u.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this._index + 1) : this._state = 16;
    }, e.prototype.stateInSpecialComment = function(t) {
      (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.getSection()), this._state = 1, this.sectionStart = this._index + 1);
    }, e.prototype.stateBeforeSpecialS = function(t) {
      var i = t | 32;
      i === u.ScriptEnd[3] ? this.startSpecial(u.ScriptEnd, 4) : i === u.StyleEnd[3] ? this.startSpecial(u.StyleEnd, 4) : (this._state = 3, this.stateInTagName(t));
    }, e.prototype.stateBeforeEntity = function(t) {
      this.entityExcess = 1, t === 35 ? this._state = 26 : t === 38 || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.trieResult = null, this._state = 27, this.stateInNamedEntity(t));
    }, e.prototype.stateInNamedEntity = function(t) {
      if (this.entityExcess += 1, this.trieIndex = (0, g.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, t), this.trieIndex < 0) {
        this.emitNamedEntity(), this._index--;
        return;
      }
      if (this.trieCurrent = this.entityTrie[this.trieIndex], this.trieCurrent & g.BinTrieFlags.HAS_VALUE)
        if (!this.allowLegacyEntity() && t !== 59)
          this.trieIndex += 1;
        else {
          var i = this._index - this.entityExcess + 1;
          i > this.sectionStart && this.emitPartial(this.buffer.substring(this.sectionStart, i)), this.trieResult = this.trieCurrent & g.BinTrieFlags.MULTI_BYTE ? String.fromCharCode(this.entityTrie[++this.trieIndex], this.entityTrie[++this.trieIndex]) : String.fromCharCode(this.entityTrie[++this.trieIndex]), this.entityExcess = 0, this.sectionStart = this._index + 1;
        }
    }, e.prototype.emitNamedEntity = function() {
      this.trieResult && this.emitPartial(this.trieResult), this._state = this.baseState;
    }, e.prototype.stateBeforeNumericEntity = function(t) {
      (t | 32) === 120 ? (this.entityExcess++, this._state = 29) : (this._state = 28, this.stateInNumericEntity(t));
    }, e.prototype.decodeNumericEntity = function(t, i) {
      var s = this._index - this.entityExcess - 1, n = s + 2 + (t >> 4);
      if (n !== this._index) {
        s > this.sectionStart && this.emitPartial(this.buffer.substring(this.sectionStart, s));
        var a = this.buffer.substring(n, this._index), h = parseInt(a, t);
        this.emitPartial((0, $.default)(h)), this.sectionStart = this._index + Number(i);
      }
      this._state = this.baseState;
    }, e.prototype.stateInNumericEntity = function(t) {
      t === 59 ? this.decodeNumericEntity(10, true) : O(t) ? this.entityExcess++ : (this.allowLegacyEntity() ? this.decodeNumericEntity(10, false) : this._state = this.baseState, this._index--);
    }, e.prototype.stateInHexEntity = function(t) {
      t === 59 ? this.decodeNumericEntity(16, true) : (t < 97 || t > 102) && (t < 65 || t > 70) && !O(t) ? (this.allowLegacyEntity() ? this.decodeNumericEntity(16, false) : this._state = this.baseState, this._index--) : this.entityExcess++;
    }, e.prototype.allowLegacyEntity = function() {
      return !this.xmlMode && (this.baseState === 1 || this.baseState === 24);
    }, e.prototype.cleanup = function() {
      this.running && this.sectionStart !== this._index && (this._state === 1 || this._state === 24 && this.sequenceIndex === 0) && (this.cbs.ontext(this.buffer.substr(this.sectionStart)), this.sectionStart = this._index);
      var t = this.sectionStart < 0 ? this._index : this.sectionStart;
      this.buffer = t === this.buffer.length ? "" : this.buffer.substr(t), this._index -= t, this.bufferOffset += t, this.sectionStart > 0 && (this.sectionStart = 0);
    }, e.prototype.shouldContinue = function() {
      return this._index < this.buffer.length && this.running;
    }, e.prototype.parse = function() {
      for (; this.shouldContinue(); ) {
        var t = this.buffer.charCodeAt(this._index);
        this._state === 1 ? this.stateText(t) : this._state === 23 ? this.stateSpecialStartSequence(t) : this._state === 24 ? this.stateInSpecialTag(t) : this._state === 19 ? this.stateCDATASequence(t) : this._state === 12 ? this.stateInAttributeValueDoubleQuotes(t) : this._state === 9 ? this.stateInAttributeName(t) : this._state === 21 ? this.stateInCommentLike(t) : this._state === 20 ? this.stateInSpecialComment(t) : this._state === 8 ? this.stateBeforeAttributeName(t) : this._state === 3 ? this.stateInTagName(t) : this._state === 6 ? this.stateInClosingTagName(t) : this._state === 2 ? this.stateBeforeTagName(t) : this._state === 10 ? this.stateAfterAttributeName(t) : this._state === 13 ? this.stateInAttributeValueSingleQuotes(t) : this._state === 11 ? this.stateBeforeAttributeValue(t) : this._state === 5 ? this.stateBeforeClosingTagName(t) : this._state === 7 ? this.stateAfterClosingTagName(t) : this._state === 22 ? this.stateBeforeSpecialS(t) : this._state === 14 ? this.stateInAttributeValueNoQuotes(t) : this._state === 4 ? this.stateInSelfClosingTag(t) : this._state === 16 ? this.stateInDeclaration(t) : this._state === 15 ? this.stateBeforeDeclaration(t) : this._state === 18 ? this.stateBeforeComment(t) : this._state === 17 ? this.stateInProcessingInstruction(t) : this._state === 27 ? this.stateInNamedEntity(t) : this._state === 25 ? this.stateBeforeEntity(t) : this._state === 29 ? this.stateInHexEntity(t) : this._state === 28 ? this.stateInNumericEntity(t) : this.stateBeforeNumericEntity(t), this._index++;
      }
      this.cleanup();
    }, e.prototype.finish = function() {
      this._state === 27 && this.emitNamedEntity(), this.sectionStart < this._index && this.handleTrailingData(), this.cbs.onend();
    }, e.prototype.handleTrailingData = function() {
      var t = this.buffer.substr(this.sectionStart);
      this._state === 21 ? this.currentSequence === u.CdataEnd ? this.cbs.oncdata(t) : this.cbs.oncomment(t) : this._state === 28 && this.allowLegacyEntity() ? this.decodeNumericEntity(10, false) : this._state === 29 && this.allowLegacyEntity() ? this.decodeNumericEntity(16, false) : this._state === 3 || this._state === 8 || this._state === 11 || this._state === 10 || this._state === 9 || this._state === 13 || this._state === 12 || this._state === 14 || this._state === 6 || this.cbs.ontext(t);
    }, e.prototype.getSection = function() {
      return this.buffer.substring(this.sectionStart, this._index);
    }, e.prototype.emitPartial = function(t) {
      this.baseState !== 1 && this.baseState !== 24 ? this.cbs.onattribdata(t) : this.cbs.ontext(t);
    }, e;
  }();
  m.default = et;
});
var C = y((x) => {
  "use strict";
  var it = x && x.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(x, "__esModule", { value: true });
  x.Parser = void 0;
  var st = it(E()), b = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), o = new Set(["p"]), P = new Set(["thead", "tbody"]), M = new Set(["dd", "dt"]), B = new Set(["rt", "rp"]), nt = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", o], ["h1", o], ["h2", o], ["h3", o], ["h4", o], ["h5", o], ["h6", o], ["select", b], ["input", b], ["output", b], ["button", b], ["datalist", b], ["textarea", b], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", M], ["dt", M], ["address", o], ["article", o], ["aside", o], ["blockquote", o], ["details", o], ["div", o], ["dl", o], ["fieldset", o], ["figcaption", o], ["figure", o], ["footer", o], ["form", o], ["header", o], ["hr", o], ["main", o], ["nav", o], ["ol", o], ["pre", o], ["section", o], ["table", o], ["ul", o], ["rt", B], ["rp", B], ["tbody", P], ["tfoot", P]]), rt = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), z = new Set(["math", "svg"]), F = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), at = /\s|\//, ot = function() {
    function e(t, i) {
      i === void 0 && (i = {});
      var s, n, a, h, l;
      this.options = i, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.cbs = t ?? {}, this.lowerCaseTagNames = (s = i.lowerCaseTags) !== null && s !== void 0 ? s : !i.xmlMode, this.lowerCaseAttributeNames = (n = i.lowerCaseAttributeNames) !== null && n !== void 0 ? n : !i.xmlMode, this.tokenizer = new ((a = i.Tokenizer) !== null && a !== void 0 ? a : st.default)(this.options, this), (l = (h = this.cbs).onparserinit) === null || l === void 0 || l.call(h, this);
    }
    return e.prototype.ontext = function(t) {
      var i, s, n = this.tokenizer.getAbsoluteIndex();
      this.endIndex = n - 1, (s = (i = this.cbs).ontext) === null || s === void 0 || s.call(i, t), this.startIndex = n;
    }, e.prototype.isVoidElement = function(t) {
      return !this.options.xmlMode && rt.has(t);
    }, e.prototype.onopentagname = function(t) {
      this.endIndex = this.tokenizer.getAbsoluteIndex(), this.lowerCaseTagNames && (t = t.toLowerCase()), this.emitOpenTag(t);
    }, e.prototype.emitOpenTag = function(t) {
      var i, s, n, a;
      this.openTagStart = this.startIndex, this.tagname = t;
      var h = !this.options.xmlMode && nt.get(t);
      if (h)
        for (; this.stack.length > 0 && h.has(this.stack[this.stack.length - 1]); ) {
          var l = this.stack.pop();
          (s = (i = this.cbs).onclosetag) === null || s === void 0 || s.call(i, l, true);
        }
      this.isVoidElement(t) || (this.stack.push(t), z.has(t) ? this.foreignContext.push(true) : F.has(t) && this.foreignContext.push(false)), (a = (n = this.cbs).onopentagname) === null || a === void 0 || a.call(n, t), this.cbs.onopentag && (this.attribs = {});
    }, e.prototype.endOpenTag = function(t) {
      var i, s;
      this.startIndex = this.openTagStart, this.endIndex = this.tokenizer.getAbsoluteIndex(), this.attribs && ((s = (i = this.cbs).onopentag) === null || s === void 0 || s.call(i, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, true), this.tagname = "";
    }, e.prototype.onopentagend = function() {
      this.endOpenTag(false), this.startIndex = this.endIndex + 1;
    }, e.prototype.onclosetag = function(t) {
      var i, s, n, a, h, l;
      if (this.endIndex = this.tokenizer.getAbsoluteIndex(), this.lowerCaseTagNames && (t = t.toLowerCase()), (z.has(t) || F.has(t)) && this.foreignContext.pop(), this.isVoidElement(t))
        !this.options.xmlMode && t === "br" && ((s = (i = this.cbs).onopentagname) === null || s === void 0 || s.call(i, t), (a = (n = this.cbs).onopentag) === null || a === void 0 || a.call(n, t, {}, true), (l = (h = this.cbs).onclosetag) === null || l === void 0 || l.call(h, t, false));
      else {
        var p = this.stack.lastIndexOf(t);
        if (p !== -1)
          if (this.cbs.onclosetag)
            for (var _ = this.stack.length - p; _--; )
              this.cbs.onclosetag(this.stack.pop(), _ !== 0);
          else
            this.stack.length = p;
        else
          !this.options.xmlMode && t === "p" && (this.emitOpenTag(t), this.closeCurrentTag(true));
      }
      this.startIndex = this.endIndex + 1;
    }, e.prototype.onselfclosingtag = function() {
      this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(false), this.startIndex = this.endIndex + 1) : this.onopentagend();
    }, e.prototype.closeCurrentTag = function(t) {
      var i, s, n = this.tagname;
      this.endOpenTag(t), this.stack[this.stack.length - 1] === n && ((s = (i = this.cbs).onclosetag) === null || s === void 0 || s.call(i, n, !t), this.stack.pop());
    }, e.prototype.onattribname = function(t) {
      this.startIndex = this.tokenizer.getAbsoluteSectionStart(), this.lowerCaseAttributeNames && (t = t.toLowerCase()), this.attribname = t;
    }, e.prototype.onattribdata = function(t) {
      this.attribvalue += t;
    }, e.prototype.onattribend = function(t) {
      var i, s;
      this.endIndex = this.tokenizer.getAbsoluteIndex(), (s = (i = this.cbs).onattribute) === null || s === void 0 || s.call(i, this.attribname, this.attribvalue, t), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribname = "", this.attribvalue = "";
    }, e.prototype.getInstructionName = function(t) {
      var i = t.search(at), s = i < 0 ? t : t.substr(0, i);
      return this.lowerCaseTagNames && (s = s.toLowerCase()), s;
    }, e.prototype.ondeclaration = function(t) {
      if (this.endIndex = this.tokenizer.getAbsoluteIndex(), this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(t);
        this.cbs.onprocessinginstruction("!" + i, "!" + t);
      }
      this.startIndex = this.endIndex + 1;
    }, e.prototype.onprocessinginstruction = function(t) {
      if (this.endIndex = this.tokenizer.getAbsoluteIndex(), this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(t);
        this.cbs.onprocessinginstruction("?" + i, "?" + t);
      }
      this.startIndex = this.endIndex + 1;
    }, e.prototype.oncomment = function(t) {
      var i, s, n, a;
      this.endIndex = this.tokenizer.getAbsoluteIndex(), (s = (i = this.cbs).oncomment) === null || s === void 0 || s.call(i, t), (a = (n = this.cbs).oncommentend) === null || a === void 0 || a.call(n), this.startIndex = this.endIndex + 1;
    }, e.prototype.oncdata = function(t) {
      var i, s, n, a, h, l, p, _, D, I;
      this.endIndex = this.tokenizer.getAbsoluteIndex(), this.options.xmlMode || this.options.recognizeCDATA ? ((s = (i = this.cbs).oncdatastart) === null || s === void 0 || s.call(i), (a = (n = this.cbs).ontext) === null || a === void 0 || a.call(n, t), (l = (h = this.cbs).oncdataend) === null || l === void 0 || l.call(h)) : ((_ = (p = this.cbs).oncomment) === null || _ === void 0 || _.call(p, "[CDATA[" + t + "]]"), (I = (D = this.cbs).oncommentend) === null || I === void 0 || I.call(D)), this.startIndex = this.endIndex + 1;
    }, e.prototype.onerror = function(t) {
      var i, s;
      (s = (i = this.cbs).onerror) === null || s === void 0 || s.call(i, t);
    }, e.prototype.onend = function() {
      var t, i;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var s = this.stack.length; s > 0; this.cbs.onclosetag(this.stack[--s], true))
          ;
      }
      (i = (t = this.cbs).onend) === null || i === void 0 || i.call(t);
    }, e.prototype.reset = function() {
      var t, i, s, n;
      (i = (t = this.cbs).onreset) === null || i === void 0 || i.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack = [], this.startIndex = 0, this.endIndex = 0, (n = (s = this.cbs).onparserinit) === null || n === void 0 || n.call(s, this);
    }, e.prototype.parseComplete = function(t) {
      this.reset(), this.end(t);
    }, e.prototype.write = function(t) {
      this.tokenizer.write(t);
    }, e.prototype.end = function(t) {
      this.tokenizer.end(t);
    }, e.prototype.pause = function() {
      this.tokenizer.pause();
    }, e.prototype.resume = function() {
      this.tokenizer.resume();
    }, e.prototype.parseChunk = function(t) {
      this.write(t);
    }, e.prototype.done = function(t) {
      this.end(t);
    }, e;
  }();
  x.Parser = ot;
});
var A = y((d) => {
  "use strict";
  var ht = d && d.__extends || function() {
    var e = function(t, i) {
      return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, n) {
        s.__proto__ = n;
      } || function(s, n) {
        for (var a in n)
          Object.prototype.hasOwnProperty.call(n, a) && (s[a] = n[a]);
      }, e(t, i);
    };
    return function(t, i) {
      if (typeof i != "function" && i !== null)
        throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      e(t, i);
      function s() {
        this.constructor = t;
      }
      t.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
    };
  }(), ut = d && d.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(d, "__esModule", { value: true });
  d.parseFeed = d.FeedHandler = d.getFeed = void 0;
  var j = ut(__domhandler$), w = __domutils$;
  Object.defineProperty(d, "getFeed", { enumerable: true, get: function() {
    return w.getFeed;
  } });
  var lt = C(), dt = function(e) {
    ht(t, e);
    function t(i, s) {
      var n = this;
      return typeof i == "object" && (i = void 0, s = i), n = e.call(this, i, s) || this, n;
    }
    return t.prototype.onend = function() {
      var i = (0, w.getFeed)(this.dom);
      i ? (this.feed = i, this.handleCallback(null)) : this.handleCallback(new Error("couldn't find root of feed"));
    }, t;
  }(j.default);
  d.FeedHandler = dt;
  function ft(e, t) {
    t === void 0 && (t = { xmlMode: true });
    var i = new j.default(null, t);
    return new lt.Parser(i, t).end(e), (0, w.getFeed)(i.dom);
  }
  d.parseFeed = ft;
});
var N = y((r) => {
  "use strict";
  var H = r && r.__createBinding || (Object.create ? function(e, t, i, s) {
    s === void 0 && (s = i), Object.defineProperty(e, s, { enumerable: true, get: function() {
      return t[i];
    } });
  } : function(e, t, i, s) {
    s === void 0 && (s = i), e[s] = t[i];
  }), ct = r && r.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  } : function(e, t) {
    e.default = t;
  }), V = r && r.__importStar || function(e) {
    if (e && e.__esModule)
      return e;
    var t = {};
    if (e != null)
      for (var i in e)
        i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && H(t, e, i);
    return ct(t, e), t;
  }, pt = r && r.__exportStar || function(e, t) {
    for (var i in e)
      i !== "default" && !Object.prototype.hasOwnProperty.call(t, i) && H(t, e, i);
  }, _t = r && r.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(r, "__esModule", { value: true });
  r.RssHandler = r.DefaultHandler = r.DomUtils = r.ElementType = r.Tokenizer = r.createDomStream = r.parseDOM = r.parseDocument = r.DomHandler = r.Parser = void 0;
  var q = C();
  Object.defineProperty(r, "Parser", { enumerable: true, get: function() {
    return q.Parser;
  } });
  var v = __domhandler$;
  Object.defineProperty(r, "DomHandler", { enumerable: true, get: function() {
    return v.DomHandler;
  } });
  Object.defineProperty(r, "DefaultHandler", { enumerable: true, get: function() {
    return v.DomHandler;
  } });
  function L(e, t) {
    var i = new v.DomHandler(void 0, t);
    return new q.Parser(i, t).end(e), i.root;
  }
  r.parseDocument = L;
  function bt(e, t) {
    return L(e, t).children;
  }
  r.parseDOM = bt;
  function xt(e, t, i) {
    var s = new v.DomHandler(e, t, i);
    return new q.Parser(s, t);
  }
  r.createDomStream = xt;
  var gt = E();
  Object.defineProperty(r, "Tokenizer", { enumerable: true, get: function() {
    return _t(gt).default;
  } });
  var mt = V(__domelementtype$);
  r.ElementType = mt;
  pt(A(), r);
  r.DomUtils = V(__domutils$);
  var yt = A();
  Object.defineProperty(r, "RssHandler", { enumerable: true, get: function() {
    return yt.FeedHandler;
  } });
});
var U = k(N());
var R = k(N());
var { RssHandler: Ct, Parser: wt, DomHandler: At, DefaultHandler: qt, parseDocument: Nt, parseDOM: Dt, createDomStream: kt, Tokenizer: Ot, ElementType: Pt, DomUtils: Mt } = R;
var Bt = U.default || R;
export {
  qt as DefaultHandler,
  At as DomHandler,
  Mt as DomUtils,
  Pt as ElementType,
  wt as Parser,
  Ct as RssHandler,
  Ot as Tokenizer,
  kt as createDomStream,
  Bt as default,
  Dt as parseDOM,
  Nt as parseDocument
};
