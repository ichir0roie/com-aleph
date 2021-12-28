// https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/HTMLPage.ts
import React, { useEffect, useRef } from "../../../../../../esm.sh/react@17.0.2.js";
import { redirect } from "../../core/redirect.js";
var HTMLPage = React.forwardRef((props, pRef) => {
  const {
    html,
    children,
    dangerouslySetInnerHTML,
    ...rest
  } = props;
  const ref = useRef(null);
  useEffect(() => {
    const REF = pRef || ref;
    const anchors = [];
    const onClick = (e) => {
      e.preventDefault();
      if (e.currentTarget) {
        redirect(e.currentTarget.getAttribute("href"));
      }
    };
    if (REF.current) {
      REF.current.querySelectorAll("a").forEach((a) => {
        const href = a.getAttribute("href");
        if (href && !/^[a-z0-9]+:/i.test(href)) {
          a.addEventListener("click", onClick, false);
          anchors.push(a);
        }
      });
    }
    return () => anchors.forEach((a) => a.removeEventListener("click", onClick));
  }, []);
  return React.createElement("div", {
    ...rest,
    ref: pRef || ref,
    dangerouslySetInnerHTML: { __html: html }
  });
});
var HTMLPage_default = HTMLPage;
export {
  HTMLPage_default as default
};
