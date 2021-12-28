import { marked } from "https://cdn.esm.sh/marked";
import htmlToReact from "https://cdn.esm.sh/html-to-react";

const mdParser = new htmlToReact.Parser();

export default function parse(text: string) {
  const parsed = mdParser.parse(
    marked(text),
  );

  return parsed;
}
