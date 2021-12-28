import React from 'react'

export default function Logo({ size = 75 }: { size?: number }) {
  return (
    <div>
      <div id="editText">
        <textarea></textarea>
      </div>
      <div id="markdownView">
        <div id="md">a</div>
      </div>
    </div>
  )
}
