import markdown from 'https://deno.land/x/aleph/plugins/markdown.ts'
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  plugins: [
    markdown()
  ]
}