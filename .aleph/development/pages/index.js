import __ALEPH__Head from "../-/deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/Head.js";
import __ALEPH__StyleLink from "../-/deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/StyleLink.js";
import "../style/index.css.js#/style/index.css@f5007e";
var _s = $RefreshSig$();
/*#__PURE__*/ import { useDeno } from "../-/deno.land/x/aleph@v0.3.0-beta.19/framework/react/mod.js";
import React from "../-/esm.sh/react@17.0.2.js";
import Logo from "../components/logo.js#/components/logo.tsx@8c5088";
import useCounter from "../lib/useCounter.js#/lib/useCounter.ts@b7990f";
export default function Home() {
    _s();
    const [count, isSyncing, increase, decrease] = useCounter();
    const version = useDeno(()=>Deno.version.deno
    , null, "useDeno-6G3UgSqfHlVo85M60IRbxdFdQao");
    return React.createElement("div", {
        className: "page",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 11
        }
    }, React.createElement(__ALEPH__Head, {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 12
        }
    }, React.createElement("title", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 13
        }
    }, "Hello World - Aleph.js"), React.createElement(__ALEPH__StyleLink, {
        rel: "stylesheet",
        href: "/style/index.css",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 14
        }
    })), React.createElement("p", {
        className: "logo",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 16
        }
    }, React.createElement(Logo, {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 16
        }
    })), React.createElement("h1", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 17
        }
    }, "Welcome to use ", React.createElement("strong", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 17
        }
    }, "Aleph.js"), "!"), React.createElement("p", {
        className: "links",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 18
        }
    }, React.createElement("a", {
        href: "https://alephjs.org",
        target: "_blank",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 19
        }
    }, "Website"), React.createElement("span", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 20
        }
    }), React.createElement("a", {
        href: "https://alephjs.org/docs/get-started",
        target: "_blank",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 21
        }
    }, "Get Started"), React.createElement("span", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 22
        }
    }), React.createElement("a", {
        href: "https://alephjs.org/docs",
        target: "_blank",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 23
        }
    }, "Docs"), React.createElement("span", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 24
        }
    }), React.createElement("a", {
        href: "https://github.com/alephjs/aleph.js",
        target: "_blank",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 25
        }
    }, "Github")), React.createElement("div", {
        className: "counter",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 27
        }
    }, React.createElement("span", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 28
        }
    }, "Counter:"), isSyncing && React.createElement("em", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 30
        }
    }, "..."), !isSyncing && React.createElement("strong", {
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 33
        }
    }, count), React.createElement("button", {
        onClick: decrease,
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 35
        }
    }, "-"), React.createElement("button", {
        onClick: increase,
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 36
        }
    }, "+")), React.createElement("p", {
        className: "copyinfo",
        __source: {
            fileName: "/pages/index.tsx",
            lineNumber: 38
        }
    }, "Built by Aleph.js in Deno ", version));
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