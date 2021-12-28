var _s = $RefreshSig$();
/*#__PURE__*/ import React, { useState } from "../-/esm.sh/react@17.0.2.js";
import mdParse from "../lib/mdParse.js#/lib/mdParse.ts@45787f";
export default function Logo({ size =75  }) {
    _s();
    const [mdText, setMT] = useState("# init value");
    return React.createElement("div", {
        __source: {
            fileName: "/components/mdBox.tsx",
            lineNumber: 9
        }
    }, React.createElement("div", {
        id: "editText",
        __source: {
            fileName: "/components/mdBox.tsx",
            lineNumber: 10
        }
    }, React.createElement("textarea", {
        value: mdText,
        onChange: (e)=>setMT(e.target.value)
        ,
        __source: {
            fileName: "/components/mdBox.tsx",
            lineNumber: 11
        }
    })), React.createElement("div", {
        id: "markdownView",
        __source: {
            fileName: "/components/mdBox.tsx",
            lineNumber: 14
        }
    }, mdParse(mdText)));
};
_s(Logo, "vO3sf1UZIlB5IwMnq9TU3uzBxB8=");
_c = Logo;
var _c;
$RefreshReg$(_c, "Logo");

//# sourceMappingURL=mdBox.js.map