import { useDeno } from 'aleph/react'
import React from 'react'
import MdBox from '~/components/mdBox.tsx'
import {marked} from 'https://cdn.esm.sh/marked'
import htmlToReact from 'https://cdn.esm.sh/html-to-react';

export default function Home() {
  const mdParser=new htmlToReact.Parser();

  return (
    <div className="page">
      <MdBox></MdBox>
      <div id="markdownText">
        {
          mdParser.parse(
            marked("# this is test")
          )
        }
      </div>
    </div>
  )
}
