var _s = $RefreshSig$();
/*#__PURE__*/ import { useDeno } from "../-/deno.land/x/aleph@v0.3.0-beta.19/framework/react/mod.js";
import React from "../-/esm.sh/react@17.0.2.js";
import MdBox from "../components/mdBox.js#/components/mdBox.tsx@c05d5a";
import useCounter from "../lib/useCounter.js#/lib/useCounter.ts@2e24d6";
import ReactMarkdown from "../-/esm.sh/react-markdown.js";
export default function Home() {
    _s();
    const [count, isSyncing, increase, decrease] = useCounter();
    const version = useDeno(()=>Deno.version.deno
    , null, "useDeno-6G3UgSqfHlVo85M60IRbxdFdQao");
    return React.createElement("div", {
        className: "page",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 14
        }
    }, React.createElement(MdBox, {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 15
        }
    }), React.createElement(ReactMarkdown, {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 16
        }
    }, "*React-Markdown* is **Awesome**"));
};
_s(Home, "V0mUAOVpPZ1GE5jYTt9OXbvElBA=", false, function() {
    return [
        useCounter,
        useDeno
    ];
});
_c = Home;
var _c;
$RefreshReg$(_c, "Home");

//# sourceMappingURL=index.js.map