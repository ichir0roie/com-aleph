import React, { useState } from "react";

import mdParse from "~/lib/mdParse.ts";

type AppProps = { text: string }; // interfaceでもよい
export default function MdLoad({ text }: AppProps) {
  fetch("/api/loadMd");
  return  (
    <div>
        "test"
    </div>
  );
}
