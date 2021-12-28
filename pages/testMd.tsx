import { useDeno} from 'aleph/react'
import React,{useState} from 'react'
// import MdBox from '~/components/mdBox.tsx'
import MdLoad from '~/components/mdLoad.tsx'


export default function Home() {
  return (
    <div className="page">
      <MdLoad text="test"/>
    </div>
  )
}
