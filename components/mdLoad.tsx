import React, { useState } from "react";

import mdParse from "~/lib/mdParse.ts";

type AppProps = { text: string }; // interfaceでもよい
export default function MdLoad({ text }: AppProps) {
  // console.log(text);
  fetch("/api/mdLoad").then(res=>console);
  //todo ここで同期的処理でreturnする必要がある。
  return mdParse("**yet get markdown text**");
}
