// https://cdn.esm.sh/v58/marked@4.0.8/deno/marked.js
function Q() {
  return { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
}
var I = Q();
function H(l) {
  I = l;
}
var J = /[&<>"']/;
var K = /[&<>"']/g;
var Y = /[<>"']|&(?!#?\w+;)/;
var ee = /[<>"']|&(?!#?\w+;)/g;
var te = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var P = (l) => te[l];
function x(l, t) {
  if (t) {
    if (J.test(l))
      return l.replace(K, P);
  } else if (Y.test(l))
    return l.replace(ee, P);
  return l;
}
var ne = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function M(l) {
  return l.replace(ne, (t, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
var ie = /(^|[^\[])\^/g;
function d(l, t) {
  l = l.source || l, t = t || "";
  let n = { replace: (e, i) => (i = i.source || i, i = i.replace(ie, "$1"), l = l.replace(e, i), n), getRegex: () => new RegExp(l, t) };
  return n;
}
var se = /[^\w:]/g;
var re = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function N(l, t, n) {
  if (l) {
    let e;
    try {
      e = decodeURIComponent(M(n)).replace(se, "").toLowerCase();
    } catch {
      return null;
    }
    if (e.indexOf("javascript:") === 0 || e.indexOf("vbscript:") === 0 || e.indexOf("data:") === 0)
      return null;
  }
  t && !re.test(n) && (n = he(t, n));
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
var E = {};
var le = /^[^:]+:\/*[^/]*$/;
var ae = /^([^:]+:)[\s\S]*$/;
var oe = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function he(l, t) {
  E[" " + l] || (le.test(l) ? E[" " + l] = l + "/" : E[" " + l] = Z(l, "/", true)), l = E[" " + l];
  let n = l.indexOf(":") === -1;
  return t.substring(0, 2) === "//" ? n ? t : l.replace(ae, "$1") + t : t.charAt(0) === "/" ? n ? t : l.replace(oe, "$1") + t : l + t;
}
var L = { exec: function() {
} };
function _(l) {
  let t = 1, n, e;
  for (; t < arguments.length; t++) {
    n = arguments[t];
    for (e in n)
      Object.prototype.hasOwnProperty.call(n, e) && (l[e] = n[e]);
  }
  return l;
}
function F(l, t) {
  let n = l.replace(/\|/g, (s, r, a) => {
    let h = false, f = r;
    for (; --f >= 0 && a[f] === "\\"; )
      h = !h;
    return h ? "|" : " |";
  }), e = n.split(/ \|/), i = 0;
  if (e[0].trim() || e.shift(), e[e.length - 1].trim() || e.pop(), e.length > t)
    e.splice(t);
  else
    for (; e.length < t; )
      e.push("");
  for (; i < e.length; i++)
    e[i] = e[i].trim().replace(/\\\|/g, "|");
  return e;
}
function Z(l, t, n) {
  let e = l.length;
  if (e === 0)
    return "";
  let i = 0;
  for (; i < e; ) {
    let s = l.charAt(e - i - 1);
    if (s === t && !n)
      i++;
    else if (s !== t && n)
      i++;
    else
      break;
  }
  return l.substr(0, e - i);
}
function ce(l, t) {
  if (l.indexOf(t[1]) === -1)
    return -1;
  let n = l.length, e = 0, i = 0;
  for (; i < n; i++)
    if (l[i] === "\\")
      i++;
    else if (l[i] === t[0])
      e++;
    else if (l[i] === t[1] && (e--, e < 0))
      return i;
  return -1;
}
function W(l) {
  l && l.sanitize && !l.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function X(l, t) {
  if (t < 1)
    return "";
  let n = "";
  for (; t > 1; )
    t & 1 && (n += l), t >>= 1, l += l;
  return n + l;
}
function G(l, t, n, e) {
  let i = t.href, s = t.title ? x(t.title) : null, r = l[1].replace(/\\([\[\]])/g, "$1");
  if (l[0].charAt(0) !== "!") {
    e.state.inLink = true;
    let a = { type: "link", raw: n, href: i, title: s, text: r, tokens: e.inlineTokens(r, []) };
    return e.state.inLink = false, a;
  } else
    return { type: "image", raw: n, href: i, title: s, text: x(r) };
}
function pe(l, t) {
  let n = l.match(/^(\s+)(?:```)/);
  if (n === null)
    return t;
  let e = n[1];
  return t.split(`
`).map((i) => {
    let s = i.match(/^\s+/);
    if (s === null)
      return i;
    let [r] = s;
    return r.length >= e.length ? i.slice(e.length) : i;
  }).join(`
`);
}
var q = class {
  constructor(t) {
    this.options = t || I;
  }
  space(t) {
    let n = this.rules.block.newline.exec(t);
    if (n)
      return n[0].length > 1 ? { type: "space", raw: n[0] } : { raw: `
` };
  }
  code(t) {
    let n = this.rules.block.code.exec(t);
    if (n) {
      let e = n[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: n[0], codeBlockStyle: "indented", text: this.options.pedantic ? e : Z(e, `
`) };
    }
  }
  fences(t) {
    let n = this.rules.block.fences.exec(t);
    if (n) {
      let e = n[0], i = pe(e, n[3] || "");
      return { type: "code", raw: e, lang: n[2] ? n[2].trim() : n[2], text: i };
    }
  }
  heading(t) {
    let n = this.rules.block.heading.exec(t);
    if (n) {
      let e = n[2].trim();
      if (/#$/.test(e)) {
        let s = Z(e, "#");
        (this.options.pedantic || !s || / $/.test(s)) && (e = s.trim());
      }
      let i = { type: "heading", raw: n[0], depth: n[1].length, text: e, tokens: [] };
      return this.lexer.inline(i.text, i.tokens), i;
    }
  }
  hr(t) {
    let n = this.rules.block.hr.exec(t);
    if (n)
      return { type: "hr", raw: n[0] };
  }
  blockquote(t) {
    let n = this.rules.block.blockquote.exec(t);
    if (n) {
      let e = n[0].replace(/^ *> ?/gm, "");
      return { type: "blockquote", raw: n[0], tokens: this.lexer.blockTokens(e, []), text: e };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let e, i, s, r, a, h, f, g, b, k, p, T, y = n[1].trim(), S = y.length > 1, m = { type: "list", raw: "", ordered: S, start: S ? +y.slice(0, -1) : "", loose: false, items: [] };
      y = S ? `\\d{1,9}\\${y.slice(-1)}` : `\\${y}`, this.options.pedantic && (y = S ? y : "[*+-]");
      let w = new RegExp(`^( {0,3}${y})((?: [^\\n]*)?(?:\\n|$))`);
      for (; t && (T = false, !(!(n = w.exec(t)) || this.rules.block.hr.test(t))); ) {
        if (e = n[0], t = t.substring(e.length), g = n[2].split(`
`, 1)[0], b = t.split(`
`, 1)[0], this.options.pedantic ? (r = 2, p = g.trimLeft()) : (r = n[2].search(/[^ ]/), r = r > 4 ? 1 : r, p = g.slice(r), r += n[1].length), h = false, !g && /^ *$/.test(b) && (e += b + `
`, t = t.substring(b.length + 1), T = true), !T) {
          let R = new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
          for (; t && (k = t.split(`
`, 1)[0], g = k, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !R.test(g)); ) {
            if (g.search(/[^ ]/) >= r || !g.trim())
              p += `
` + g.slice(r);
            else if (!h)
              p += `
` + g;
            else
              break;
            !h && !g.trim() && (h = true), e += k + `
`, t = t.substring(k.length + 1);
          }
        }
        m.loose || (f ? m.loose = true : /\n *\n *$/.test(e) && (f = true)), this.options.gfm && (i = /^\[[ xX]\] /.exec(p), i && (s = i[0] !== "[ ] ", p = p.replace(/^\[[ xX]\] +/, ""))), m.items.push({ type: "list_item", raw: e, task: !!i, checked: s, loose: false, text: p }), m.raw += e;
      }
      m.items[m.items.length - 1].raw = e.trimRight(), m.items[m.items.length - 1].text = p.trimRight(), m.raw = m.raw.trimRight();
      let A = m.items.length;
      for (a = 0; a < A; a++)
        this.lexer.state.top = false, m.items[a].tokens = this.lexer.blockTokens(m.items[a].text, []), !m.loose && m.items[a].tokens.some((R) => R.type === "space") && (m.loose = true, m.items[a].loose = true);
      return m;
    }
  }
  html(t) {
    let n = this.rules.block.html.exec(t);
    if (n) {
      let e = { type: "html", raw: n[0], pre: !this.options.sanitizer && (n[1] === "pre" || n[1] === "script" || n[1] === "style"), text: n[0] };
      return this.options.sanitize && (e.type = "paragraph", e.text = this.options.sanitizer ? this.options.sanitizer(n[0]) : x(n[0]), e.tokens = [], this.lexer.inline(e.text, e.tokens)), e;
    }
  }
  def(t) {
    let n = this.rules.block.def.exec(t);
    if (n) {
      n[3] && (n[3] = n[3].substring(1, n[3].length - 1));
      let e = n[1].toLowerCase().replace(/\s+/g, " ");
      return { type: "def", tag: e, raw: n[0], href: n[2], title: n[3] };
    }
  }
  table(t) {
    let n = this.rules.block.table.exec(t);
    if (n) {
      let e = { type: "table", header: F(n[1]).map((i) => ({ text: i })), align: n[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: n[3] ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : [] };
      if (e.header.length === e.align.length) {
        e.raw = n[0];
        let i = e.align.length, s, r, a, h;
        for (s = 0; s < i; s++)
          /^ *-+: *$/.test(e.align[s]) ? e.align[s] = "right" : /^ *:-+: *$/.test(e.align[s]) ? e.align[s] = "center" : /^ *:-+ *$/.test(e.align[s]) ? e.align[s] = "left" : e.align[s] = null;
        for (i = e.rows.length, s = 0; s < i; s++)
          e.rows[s] = F(e.rows[s], e.header.length).map((f) => ({ text: f }));
        for (i = e.header.length, r = 0; r < i; r++)
          e.header[r].tokens = [], this.lexer.inlineTokens(e.header[r].text, e.header[r].tokens);
        for (i = e.rows.length, r = 0; r < i; r++)
          for (h = e.rows[r], a = 0; a < h.length; a++)
            h[a].tokens = [], this.lexer.inlineTokens(h[a].text, h[a].tokens);
        return e;
      }
    }
  }
  lheading(t) {
    let n = this.rules.block.lheading.exec(t);
    if (n) {
      let e = { type: "heading", raw: n[0], depth: n[2].charAt(0) === "=" ? 1 : 2, text: n[1], tokens: [] };
      return this.lexer.inline(e.text, e.tokens), e;
    }
  }
  paragraph(t) {
    let n = this.rules.block.paragraph.exec(t);
    if (n) {
      let e = { type: "paragraph", raw: n[0], text: n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1], tokens: [] };
      return this.lexer.inline(e.text, e.tokens), e;
    }
  }
  text(t) {
    let n = this.rules.block.text.exec(t);
    if (n) {
      let e = { type: "text", raw: n[0], text: n[0], tokens: [] };
      return this.lexer.inline(e.text, e.tokens), e;
    }
  }
  escape(t) {
    let n = this.rules.inline.escape.exec(t);
    if (n)
      return { type: "escape", raw: n[0], text: x(n[1]) };
  }
  tag(t) {
    let n = this.rules.inline.tag.exec(t);
    if (n)
      return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: n[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : x(n[0]) : n[0] };
  }
  link(t) {
    let n = this.rules.inline.link.exec(t);
    if (n) {
      let e = n[2].trim();
      if (!this.options.pedantic && /^</.test(e)) {
        if (!/>$/.test(e))
          return;
        let r = Z(e.slice(0, -1), "\\");
        if ((e.length - r.length) % 2 == 0)
          return;
      } else {
        let r = ce(n[2], "()");
        if (r > -1) {
          let h = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + r;
          n[2] = n[2].substring(0, r), n[0] = n[0].substring(0, h).trim(), n[3] = "";
        }
      }
      let i = n[2], s = "";
      if (this.options.pedantic) {
        let r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        r && (i = r[1], s = r[3]);
      } else
        s = n[3] ? n[3].slice(1, -1) : "";
      return i = i.trim(), /^</.test(i) && (this.options.pedantic && !/>$/.test(e) ? i = i.slice(1) : i = i.slice(1, -1)), G(n, { href: i && i.replace(this.rules.inline._escapes, "$1"), title: s && s.replace(this.rules.inline._escapes, "$1") }, n[0], this.lexer);
    }
  }
  reflink(t, n) {
    let e;
    if ((e = this.rules.inline.reflink.exec(t)) || (e = this.rules.inline.nolink.exec(t))) {
      let i = (e[2] || e[1]).replace(/\s+/g, " ");
      if (i = n[i.toLowerCase()], !i || !i.href) {
        let s = e[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return G(e, i, e[0], this.lexer);
    }
  }
  emStrong(t, n, e = "") {
    let i = this.rules.inline.emStrong.lDelim.exec(t);
    if (!i || i[3] && e.match(/[\p{L}\p{N}]/u))
      return;
    let s = i[1] || i[2] || "";
    if (!s || s && (e === "" || this.rules.inline.punctuation.exec(e))) {
      let r = i[0].length - 1, a, h, f = r, g = 0, b = i[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (b.lastIndex = 0, n = n.slice(-1 * t.length + r); (i = b.exec(n)) != null; ) {
        if (a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !a)
          continue;
        if (h = a.length, i[3] || i[4]) {
          f += h;
          continue;
        } else if ((i[5] || i[6]) && r % 3 && !((r + h) % 3)) {
          g += h;
          continue;
        }
        if (f -= h, f > 0)
          continue;
        if (h = Math.min(h, h + f + g), Math.min(r, h) % 2) {
          let p = t.slice(1, r + i.index + h);
          return { type: "em", raw: t.slice(0, r + i.index + h + 1), text: p, tokens: this.lexer.inlineTokens(p, []) };
        }
        let k = t.slice(2, r + i.index + h - 1);
        return { type: "strong", raw: t.slice(0, r + i.index + h + 1), text: k, tokens: this.lexer.inlineTokens(k, []) };
      }
    }
  }
  codespan(t) {
    let n = this.rules.inline.code.exec(t);
    if (n) {
      let e = n[2].replace(/\n/g, " "), i = /[^ ]/.test(e), s = /^ /.test(e) && / $/.test(e);
      return i && s && (e = e.substring(1, e.length - 1)), e = x(e, true), { type: "codespan", raw: n[0], text: e };
    }
  }
  br(t) {
    let n = this.rules.inline.br.exec(t);
    if (n)
      return { type: "br", raw: n[0] };
  }
  del(t) {
    let n = this.rules.inline.del.exec(t);
    if (n)
      return { type: "del", raw: n[0], text: n[2], tokens: this.lexer.inlineTokens(n[2], []) };
  }
  autolink(t, n) {
    let e = this.rules.inline.autolink.exec(t);
    if (e) {
      let i, s;
      return e[2] === "@" ? (i = x(this.options.mangle ? n(e[1]) : e[1]), s = "mailto:" + i) : (i = x(e[1]), s = i), { type: "link", raw: e[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t, n) {
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let i, s;
      if (e[2] === "@")
        i = x(this.options.mangle ? n(e[0]) : e[0]), s = "mailto:" + i;
      else {
        let r;
        do
          r = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])[0];
        while (r !== e[0]);
        i = x(e[0]), e[1] === "www." ? s = "http://" + i : s = i;
      }
      return { type: "link", raw: e[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t, n) {
    let e = this.rules.inline.text.exec(t);
    if (e) {
      let i;
      return this.lexer.state.inRawBlock ? i = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : x(e[0]) : e[0] : i = x(this.options.smartypants ? n(e[0]) : e[0]), { type: "text", raw: e[0], text: i };
    }
  }
};
var c = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/, table: L, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/ };
c._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
c._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
c.def = d(c.def).replace("label", c._label).replace("title", c._title).getRegex();
c.bullet = /(?:[*+-]|\d{1,9}[.)])/;
c.listItemStart = d(/^( *)(bull) */).replace("bull", c.bullet).getRegex();
c.list = d(c.list).replace(/bull/g, c.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + c.def.source + ")").getRegex();
c._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
c._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
c.html = d(c.html, "i").replace("comment", c._comment).replace("tag", c._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
c.paragraph = d(c._paragraph).replace("hr", c.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", c._tag).getRegex();
c.blockquote = d(c.blockquote).replace("paragraph", c.paragraph).getRegex();
c.normal = _({}, c);
c.gfm = _({}, c.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" });
c.gfm.table = d(c.gfm.table).replace("hr", c.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", c._tag).getRegex();
c.gfm.paragraph = d(c._paragraph).replace("hr", c.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", c.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", c._tag).getRegex();
c.pedantic = _({}, c.normal, { html: d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", c._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: L, paragraph: d(c.normal._paragraph).replace("hr", c.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", c.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
var o = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: L, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/, nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: L, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
o._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
o.punctuation = d(o.punctuation).replace(/punctuation/g, o._punctuation).getRegex();
o.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
o.escapedEmSt = /\\\*|\\_/g;
o._comment = d(c._comment).replace("(?:-->|$)", "-->").getRegex();
o.emStrong.lDelim = d(o.emStrong.lDelim).replace(/punct/g, o._punctuation).getRegex();
o.emStrong.rDelimAst = d(o.emStrong.rDelimAst, "g").replace(/punct/g, o._punctuation).getRegex();
o.emStrong.rDelimUnd = d(o.emStrong.rDelimUnd, "g").replace(/punct/g, o._punctuation).getRegex();
o._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
o._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
o.autolink = d(o.autolink).replace("scheme", o._scheme).replace("email", o._email).getRegex();
o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
o.tag = d(o.tag).replace("comment", o._comment).replace("attribute", o._attribute).getRegex();
o._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
o._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
o.link = d(o.link).replace("label", o._label).replace("href", o._href).replace("title", o._title).getRegex();
o.reflink = d(o.reflink).replace("label", o._label).getRegex();
o.reflinkSearch = d(o.reflinkSearch, "g").replace("reflink", o.reflink).replace("nolink", o.nolink).getRegex();
o.normal = _({}, o);
o.pedantic = _({}, o.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", o._label).getRegex(), reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", o._label).getRegex() });
o.gfm = _({}, o.normal, { escape: d(o.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ });
o.gfm.url = d(o.gfm.url, "i").replace("email", o.gfm._extended_email).getRegex();
o.breaks = _({}, o.gfm, { br: d(o.br).replace("{2,}", "*").getRegex(), text: d(o.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
function ue(l) {
  return l.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function V(l) {
  let t = "", n, e, i = l.length;
  for (n = 0; n < i; n++)
    e = l.charCodeAt(n), Math.random() > 0.5 && (e = "x" + e.toString(16)), t += "&#" + e + ";";
  return t;
}
var z = class {
  constructor(t) {
    this.tokens = [], this.tokens.links = Object.create(null), this.options = t || I, this.options.tokenizer = this.options.tokenizer || new q(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let n = { block: c.normal, inline: o.normal };
    this.options.pedantic ? (n.block = c.pedantic, n.inline = o.pedantic) : this.options.gfm && (n.block = c.gfm, this.options.breaks ? n.inline = o.breaks : n.inline = o.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: c, inline: o };
  }
  static lex(t, n) {
    return new z(n).lex(t);
  }
  static lexInline(t, n) {
    return new z(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`).replace(/\t/g, "    "), this.blockTokens(t, this.tokens);
    let n;
    for (; n = this.inlineQueue.shift(); )
      this.inlineTokens(n.src, n.tokens);
    return this.tokens;
  }
  blockTokens(t, n = []) {
    this.options.pedantic && (t = t.replace(/^ +$/gm, ""));
    let e, i, s, r;
    for (; t; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => (e = a.call({ lexer: this }, t, n)) ? (t = t.substring(e.raw.length), n.push(e), true) : false))) {
        if (e = this.tokenizer.space(t)) {
          t = t.substring(e.raw.length), e.type && n.push(e);
          continue;
        }
        if (e = this.tokenizer.code(t)) {
          t = t.substring(e.raw.length), i = n[n.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + e.raw, i.text += `
` + e.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(e);
          continue;
        }
        if (e = this.tokenizer.fences(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.heading(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.hr(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.blockquote(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.list(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.html(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.def(t)) {
          t = t.substring(e.raw.length), i = n[n.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + e.raw, i.text += `
` + e.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[e.tag] || (this.tokens.links[e.tag] = { href: e.href, title: e.title });
          continue;
        }
        if (e = this.tokenizer.table(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.lheading(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (s = t, this.options.extensions && this.options.extensions.startBlock) {
          let a = 1 / 0, h = t.slice(1), f;
          this.options.extensions.startBlock.forEach(function(g) {
            f = g.call({ lexer: this }, h), typeof f == "number" && f >= 0 && (a = Math.min(a, f));
          }), a < 1 / 0 && a >= 0 && (s = t.substring(0, a + 1));
        }
        if (this.state.top && (e = this.tokenizer.paragraph(s))) {
          i = n[n.length - 1], r && i.type === "paragraph" ? (i.raw += `
` + e.raw, i.text += `
` + e.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(e), r = s.length !== t.length, t = t.substring(e.raw.length);
          continue;
        }
        if (e = this.tokenizer.text(t)) {
          t = t.substring(e.raw.length), i = n[n.length - 1], i && i.type === "text" ? (i.raw += `
` + e.raw, i.text += `
` + e.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : n.push(e);
          continue;
        }
        if (t) {
          let a = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else
            throw new Error(a);
        }
      }
    return this.state.top = true, n;
  }
  inline(t, n) {
    this.inlineQueue.push({ src: t, tokens: n });
  }
  inlineTokens(t, n = []) {
    let e, i, s, r = t, a, h, f;
    if (this.tokens.links) {
      let g = Object.keys(this.tokens.links);
      if (g.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          g.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, a.index) + "[" + X("a", a[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, a.index) + "[" + X("a", a[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.escapedEmSt.exec(r)) != null; )
      r = r.slice(0, a.index) + "++" + r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    for (; t; )
      if (h || (f = ""), h = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((g) => (e = g.call({ lexer: this }, t, n)) ? (t = t.substring(e.raw.length), n.push(e), true) : false))) {
        if (e = this.tokenizer.escape(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.tag(t)) {
          t = t.substring(e.raw.length), i = n[n.length - 1], i && e.type === "text" && i.type === "text" ? (i.raw += e.raw, i.text += e.text) : n.push(e);
          continue;
        }
        if (e = this.tokenizer.link(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.reflink(t, this.tokens.links)) {
          t = t.substring(e.raw.length), i = n[n.length - 1], i && e.type === "text" && i.type === "text" ? (i.raw += e.raw, i.text += e.text) : n.push(e);
          continue;
        }
        if (e = this.tokenizer.emStrong(t, r, f)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.codespan(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.br(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.del(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.autolink(t, V)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (!this.state.inLink && (e = this.tokenizer.url(t, V))) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (s = t, this.options.extensions && this.options.extensions.startInline) {
          let g = 1 / 0, b = t.slice(1), k;
          this.options.extensions.startInline.forEach(function(p) {
            k = p.call({ lexer: this }, b), typeof k == "number" && k >= 0 && (g = Math.min(g, k));
          }), g < 1 / 0 && g >= 0 && (s = t.substring(0, g + 1));
        }
        if (e = this.tokenizer.inlineText(s, ue)) {
          t = t.substring(e.raw.length), e.raw.slice(-1) !== "_" && (f = e.raw.slice(-1)), h = true, i = n[n.length - 1], i && i.type === "text" ? (i.raw += e.raw, i.text += e.text) : n.push(e);
          continue;
        }
        if (t) {
          let g = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(g);
            break;
          } else
            throw new Error(g);
        }
      }
    return n;
  }
};
var D = class {
  constructor(t) {
    this.options = t || I;
  }
  code(t, n, e) {
    let i = (n || "").match(/\S*/)[0];
    if (this.options.highlight) {
      let s = this.options.highlight(t, i);
      s != null && s !== t && (e = true, t = s);
    }
    return t = t.replace(/\n$/, "") + `
`, i ? '<pre><code class="' + this.options.langPrefix + x(i, true) + '">' + (e ? t : x(t, true)) + `</code></pre>
` : "<pre><code>" + (e ? t : x(t, true)) + `</code></pre>
`;
  }
  blockquote(t) {
    return `<blockquote>
` + t + `</blockquote>
`;
  }
  html(t) {
    return t;
  }
  heading(t, n, e, i) {
    return this.options.headerIds ? "<h" + n + ' id="' + this.options.headerPrefix + i.slug(e) + '">' + t + "</h" + n + `>
` : "<h" + n + ">" + t + "</h" + n + `>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(t, n, e) {
    let i = n ? "ol" : "ul", s = n && e !== 1 ? ' start="' + e + '"' : "";
    return "<" + i + s + `>
` + t + "</" + i + `>
`;
  }
  listitem(t) {
    return "<li>" + t + `</li>
`;
  }
  checkbox(t) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(t) {
    return "<p>" + t + `</p>
`;
  }
  table(t, n) {
    return n && (n = "<tbody>" + n + "</tbody>"), `<table>
<thead>
` + t + `</thead>
` + n + `</table>
`;
  }
  tablerow(t) {
    return `<tr>
` + t + `</tr>
`;
  }
  tablecell(t, n) {
    let e = n.header ? "th" : "td";
    return (n.align ? "<" + e + ' align="' + n.align + '">' : "<" + e + ">") + t + "</" + e + `>
`;
  }
  strong(t) {
    return "<strong>" + t + "</strong>";
  }
  em(t) {
    return "<em>" + t + "</em>";
  }
  codespan(t) {
    return "<code>" + t + "</code>";
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(t) {
    return "<del>" + t + "</del>";
  }
  link(t, n, e) {
    if (t = N(this.options.sanitize, this.options.baseUrl, t), t === null)
      return e;
    let i = '<a href="' + x(t) + '"';
    return n && (i += ' title="' + n + '"'), i += ">" + e + "</a>", i;
  }
  image(t, n, e) {
    if (t = N(this.options.sanitize, this.options.baseUrl, t), t === null)
      return e;
    let i = '<img src="' + t + '" alt="' + e + '"';
    return n && (i += ' title="' + n + '"'), i += this.options.xhtml ? "/>" : ">", i;
  }
  text(t) {
    return t;
  }
};
var O = class {
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, n, e) {
    return "" + e;
  }
  image(t, n, e) {
    return "" + e;
  }
  br() {
    return "";
  }
};
var U = class {
  constructor() {
    this.seen = {};
  }
  serialize(t) {
    return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(t, n) {
    let e = t, i = 0;
    if (this.seen.hasOwnProperty(e)) {
      i = this.seen[t];
      do
        i++, e = t + "-" + i;
      while (this.seen.hasOwnProperty(e));
    }
    return n || (this.seen[t] = i, this.seen[e] = 0), e;
  }
  slug(t, n = {}) {
    let e = this.serialize(t);
    return this.getNextSafeSlug(e, n.dryrun);
  }
};
var $ = class {
  constructor(t) {
    this.options = t || I, this.options.renderer = this.options.renderer || new D(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new O(), this.slugger = new U();
  }
  static parse(t, n) {
    return new $(n).parse(t);
  }
  static parseInline(t, n) {
    return new $(n).parseInline(t);
  }
  parse(t, n = true) {
    let e = "", i, s, r, a, h, f, g, b, k, p, T, y, S, m, w, A, R, C, B, v = t.length;
    for (i = 0; i < v; i++) {
      if (p = t[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p.type] && (B = this.options.extensions.renderers[p.type].call({ parser: this }, p), B !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(p.type))) {
        e += B || "";
        continue;
      }
      switch (p.type) {
        case "space":
          continue;
        case "hr": {
          e += this.renderer.hr();
          continue;
        }
        case "heading": {
          e += this.renderer.heading(this.parseInline(p.tokens), p.depth, M(this.parseInline(p.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          e += this.renderer.code(p.text, p.lang, p.escaped);
          continue;
        }
        case "table": {
          for (b = "", g = "", a = p.header.length, s = 0; s < a; s++)
            g += this.renderer.tablecell(this.parseInline(p.header[s].tokens), { header: true, align: p.align[s] });
          for (b += this.renderer.tablerow(g), k = "", a = p.rows.length, s = 0; s < a; s++) {
            for (f = p.rows[s], g = "", h = f.length, r = 0; r < h; r++)
              g += this.renderer.tablecell(this.parseInline(f[r].tokens), { header: false, align: p.align[r] });
            k += this.renderer.tablerow(g);
          }
          e += this.renderer.table(b, k);
          continue;
        }
        case "blockquote": {
          k = this.parse(p.tokens), e += this.renderer.blockquote(k);
          continue;
        }
        case "list": {
          for (T = p.ordered, y = p.start, S = p.loose, a = p.items.length, k = "", s = 0; s < a; s++)
            w = p.items[s], A = w.checked, R = w.task, m = "", w.task && (C = this.renderer.checkbox(A), S ? w.tokens.length > 0 && w.tokens[0].type === "paragraph" ? (w.tokens[0].text = C + " " + w.tokens[0].text, w.tokens[0].tokens && w.tokens[0].tokens.length > 0 && w.tokens[0].tokens[0].type === "text" && (w.tokens[0].tokens[0].text = C + " " + w.tokens[0].tokens[0].text)) : w.tokens.unshift({ type: "text", text: C }) : m += C), m += this.parse(w.tokens, S), k += this.renderer.listitem(m, R, A);
          e += this.renderer.list(k, T, y);
          continue;
        }
        case "html": {
          e += this.renderer.html(p.text);
          continue;
        }
        case "paragraph": {
          e += this.renderer.paragraph(this.parseInline(p.tokens));
          continue;
        }
        case "text": {
          for (k = p.tokens ? this.parseInline(p.tokens) : p.text; i + 1 < v && t[i + 1].type === "text"; )
            p = t[++i], k += `
` + (p.tokens ? this.parseInline(p.tokens) : p.text);
          e += n ? this.renderer.paragraph(k) : k;
          continue;
        }
        default: {
          let j = 'Token with "' + p.type + '" type was not found.';
          if (this.options.silent) {
            console.error(j);
            return;
          } else
            throw new Error(j);
        }
      }
    }
    return e;
  }
  parseInline(t, n) {
    n = n || this.renderer;
    let e = "", i, s, r, a = t.length;
    for (i = 0; i < a; i++) {
      if (s = t[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type] && (r = this.options.extensions.renderers[s.type].call({ parser: this }, s), r !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type))) {
        e += r || "";
        continue;
      }
      switch (s.type) {
        case "escape": {
          e += n.text(s.text);
          break;
        }
        case "html": {
          e += n.html(s.text);
          break;
        }
        case "link": {
          e += n.link(s.href, s.title, this.parseInline(s.tokens, n));
          break;
        }
        case "image": {
          e += n.image(s.href, s.title, s.text);
          break;
        }
        case "strong": {
          e += n.strong(this.parseInline(s.tokens, n));
          break;
        }
        case "em": {
          e += n.em(this.parseInline(s.tokens, n));
          break;
        }
        case "codespan": {
          e += n.codespan(s.text);
          break;
        }
        case "br": {
          e += n.br();
          break;
        }
        case "del": {
          e += n.del(this.parseInline(s.tokens, n));
          break;
        }
        case "text": {
          e += n.text(s.text);
          break;
        }
        default: {
          let h = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) {
            console.error(h);
            return;
          } else
            throw new Error(h);
        }
      }
    }
    return e;
  }
};
function u(l, t, n) {
  if (typeof l == "undefined" || l === null)
    throw new Error("marked(): input parameter is undefined or null");
  if (typeof l != "string")
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(l) + ", string expected");
  if (typeof t == "function" && (n = t, t = null), t = _({}, u.defaults, t || {}), W(t), n) {
    let e = t.highlight, i;
    try {
      i = z.lex(l, t);
    } catch (a) {
      return n(a);
    }
    let s = function(a) {
      let h;
      if (!a)
        try {
          t.walkTokens && u.walkTokens(i, t.walkTokens), h = $.parse(i, t);
        } catch (f) {
          a = f;
        }
      return t.highlight = e, a ? n(a) : n(null, h);
    };
    if (!e || e.length < 3 || (delete t.highlight, !i.length))
      return s();
    let r = 0;
    u.walkTokens(i, function(a) {
      a.type === "code" && (r++, setTimeout(() => {
        e(a.text, a.lang, function(h, f) {
          if (h)
            return s(h);
          f != null && f !== a.text && (a.text = f, a.escaped = true), r--, r === 0 && s();
        });
      }, 0));
    }), r === 0 && s();
    return;
  }
  try {
    let e = z.lex(l, t);
    return t.walkTokens && u.walkTokens(e, t.walkTokens), $.parse(e, t);
  } catch (e) {
    if (e.message += `
Please report this to https://github.com/markedjs/marked.`, t.silent)
      return "<p>An error occurred:</p><pre>" + x(e.message + "", true) + "</pre>";
    throw e;
  }
}
u.options = u.setOptions = function(l) {
  return _(u.defaults, l), H(u.defaults), u;
};
u.getDefaults = Q;
u.defaults = I;
u.use = function(...l) {
  let t = _({}, ...l), n = u.defaults.extensions || { renderers: {}, childTokens: {} }, e;
  l.forEach((i) => {
    if (i.extensions && (e = true, i.extensions.forEach((s) => {
      if (!s.name)
        throw new Error("extension name required");
      if (s.renderer) {
        let r = n.renderers ? n.renderers[s.name] : null;
        r ? n.renderers[s.name] = function(...a) {
          let h = s.renderer.apply(this, a);
          return h === false && (h = r.apply(this, a)), h;
        } : n.renderers[s.name] = s.renderer;
      }
      if (s.tokenizer) {
        if (!s.level || s.level !== "block" && s.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        n[s.level] ? n[s.level].unshift(s.tokenizer) : n[s.level] = [s.tokenizer], s.start && (s.level === "block" ? n.startBlock ? n.startBlock.push(s.start) : n.startBlock = [s.start] : s.level === "inline" && (n.startInline ? n.startInline.push(s.start) : n.startInline = [s.start]));
      }
      s.childTokens && (n.childTokens[s.name] = s.childTokens);
    })), i.renderer) {
      let s = u.defaults.renderer || new D();
      for (let r in i.renderer) {
        let a = s[r];
        s[r] = (...h) => {
          let f = i.renderer[r].apply(s, h);
          return f === false && (f = a.apply(s, h)), f;
        };
      }
      t.renderer = s;
    }
    if (i.tokenizer) {
      let s = u.defaults.tokenizer || new q();
      for (let r in i.tokenizer) {
        let a = s[r];
        s[r] = (...h) => {
          let f = i.tokenizer[r].apply(s, h);
          return f === false && (f = a.apply(s, h)), f;
        };
      }
      t.tokenizer = s;
    }
    if (i.walkTokens) {
      let s = u.defaults.walkTokens;
      t.walkTokens = function(r) {
        i.walkTokens.call(this, r), s && s.call(this, r);
      };
    }
    e && (t.extensions = n), u.setOptions(t);
  });
};
u.walkTokens = function(l, t) {
  for (let n of l)
    switch (t.call(u, n), n.type) {
      case "table": {
        for (let e of n.header)
          u.walkTokens(e.tokens, t);
        for (let e of n.rows)
          for (let i of e)
            u.walkTokens(i.tokens, t);
        break;
      }
      case "list": {
        u.walkTokens(n.items, t);
        break;
      }
      default:
        u.defaults.extensions && u.defaults.extensions.childTokens && u.defaults.extensions.childTokens[n.type] ? u.defaults.extensions.childTokens[n.type].forEach(function(e) {
          u.walkTokens(n[e], t);
        }) : n.tokens && u.walkTokens(n.tokens, t);
    }
};
u.parseInline = function(l, t) {
  if (typeof l == "undefined" || l === null)
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  if (typeof l != "string")
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(l) + ", string expected");
  t = _({}, u.defaults, t || {}), W(t);
  try {
    let n = z.lexInline(l, t);
    return t.walkTokens && u.walkTokens(n, t.walkTokens), $.parseInline(n, t);
  } catch (n) {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t.silent)
      return "<p>An error occurred:</p><pre>" + x(n.message + "", true) + "</pre>";
    throw n;
  }
};
u.Parser = $;
u.parser = $.parse;
u.Renderer = D;
u.TextRenderer = O;
u.Lexer = z;
u.lexer = z.lex;
u.Tokenizer = q;
u.Slugger = U;
u.parse = u;
var fe = u.options;
var ge = u.setOptions;
var de = u.use;
var ke = u.walkTokens;
var me = u.parseInline;
var xe = u;
var we = $.parse;
var be = z.lex;
export {
  z as Lexer,
  $ as Parser,
  D as Renderer,
  U as Slugger,
  O as TextRenderer,
  q as Tokenizer,
  I as defaults,
  Q as getDefaults,
  be as lexer,
  u as marked,
  fe as options,
  xe as parse,
  me as parseInline,
  we as parser,
  ge as setOptions,
  de as use,
  ke as walkTokens
};
