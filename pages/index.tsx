import { useDeno } from 'aleph/react'
import React from 'react'
import Logo from '~/components/logo.tsx'
import MdBox from '~/components/mdBox.tsx'
import useCounter from '~/lib/useCounter.ts'
import ReactMarkdown from 'https://esm.sh/react-markdown'


export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter()
  const version = useDeno(() => Deno.version.deno)

  return (
    <div className="page">
      <MdBox></MdBox>
      <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
    </div>
  )
}
