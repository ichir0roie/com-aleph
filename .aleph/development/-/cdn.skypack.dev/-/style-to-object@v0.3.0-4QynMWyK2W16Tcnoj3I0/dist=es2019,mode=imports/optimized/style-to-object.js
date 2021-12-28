// https://cdn.skypack.dev/-/style-to-object@v0.3.0-4QynMWyK2W16Tcnoj3I0/dist=es2019,mode=imports/optimized/style-to-object.js
import parse from "../../../inline-style-parser@v0.1.1-ebx1eprP1lejm73WrdOA/dist=es2019,mode=imports/optimized/inline-style-parser.js";
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== "string") {
    return output;
  }
  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === "function";
  var property;
  var value;
  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }
  return output;
}
var styleToObject = StyleToObject;
var style_to_object_default = styleToObject;
export {
  style_to_object_default as default
};
