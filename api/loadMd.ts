import type { APIHandler } from 'aleph/types.d.ts'

export const handler: APIHandler = async ({ response }) => {
  
  // for await (const fileOrFolder of Deno.readDir(Deno.cwd())) {
  //   console.log(fileOrFolder);
  // }
  // this is worked. root was mazide root.

  // todo response to fileName
  const text = await Deno.readTextFile("pages/md/test.md");
  console.log(text)
  response.json({text});
}
