import React, { useState } from "react";

import mdParse from "~/lib/mdParse.ts";

export default function Logo({ size = 75 }: { size?: number }) {
  const [mdText, setMT] = useState("# init value");

  return (
    <div>
      <div id="editText">
        <textarea value={mdText}
        onChange={e=>setMT(e.target.value)}></textarea>
      </div>
      <div id="markdownView">
        {mdParse(mdText)}
      </div>
    </div>
  );
}
