import { createElement } from "../../-/esm.sh/react@17.0.2.js";
import HTMLPage from "../../-/deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/HTMLPage.js";
export default function MarkdownPage(props) {
    return createElement(HTMLPage, {
        ...{
        },
        ...props,
        html: "<h1 id=\"this-is-test-page\">this is test page</h1>\n<p>this page format is markdown,written by markdown.</p>\n"
    });
};
_c = MarkdownPage;
MarkdownPage.meta = {
};
var _c;
$RefreshReg$(_c, "MarkdownPage");

//# sourceMappingURL=test.md.js.map