// https://cdn.skypack.dev/-/micromark-util-chunked@v1.0.0-5rVltJlLBLqkevusKokO/dist=es2019,mode=imports/optimized/micromark-util-chunked.js
function splice(list, start, remove, items) {
  const end = list.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    [].splice.apply(list, parameters);
  } else {
    if (remove)
      [].splice.apply(list, [start, remove]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      [].splice.apply(list, parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list, items) {
  if (list.length > 0) {
    splice(list, list.length, 0, items);
    return list;
  }
  return items;
}
var micromark_util_chunked_default = null;
export {
  micromark_util_chunked_default as default,
  push,
  splice
};
