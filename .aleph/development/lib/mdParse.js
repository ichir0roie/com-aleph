import { marked } from "../-/cdn.esm.sh/marked.js";
import htmlToReact from "../-/cdn.esm.sh/html-to-react.js";
const mdParser = new htmlToReact.Parser();
export default function parse(text) {
    const parsed = mdParser.parse(marked(text));
    return parsed;
};

//# sourceMappingURL=mdParse.js.map