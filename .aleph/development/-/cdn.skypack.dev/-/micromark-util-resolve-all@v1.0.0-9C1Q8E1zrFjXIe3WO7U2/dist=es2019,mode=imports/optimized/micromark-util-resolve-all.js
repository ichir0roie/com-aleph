// https://cdn.skypack.dev/-/micromark-util-resolve-all@v1.0.0-9C1Q8E1zrFjXIe3WO7U2/dist=es2019,mode=imports/optimized/micromark-util-resolve-all.js
function resolveAll(constructs, events, context) {
  const called = [];
  let index = -1;
  while (++index < constructs.length) {
    const resolve = constructs[index].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
var micromark_util_resolve_all_default = null;
export {
  micromark_util_resolve_all_default as default,
  resolveAll
};
