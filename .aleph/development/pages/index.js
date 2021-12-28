import React from "../-/esm.sh/react@17.0.2.js";
import MdBox from "../components/mdBox.js#/components/mdBox.tsx@c05d5a";
import { marked } from "../-/cdn.esm.sh/marked.js";
import htmlToReact from "../-/cdn.esm.sh/html-to-react.js";
export default function Home() {
    const mdParser = new htmlToReact.Parser();
    return React.createElement("div", {
        className: "page",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 11
        }
    }, React.createElement(MdBox, {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 12
        }
    }), React.createElement("div", {
        id: "markdownText",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 13
        }
    }, mdParser.parse(marked("# this is test"))));
};
_c = Home;
var _c;
$RefreshReg$(_c, "Home");

//# sourceMappingURL=index.js.map