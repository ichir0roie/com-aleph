// https://cdn.esm.sh/v58/comma-separated-tokens@2.0.2/deno/comma-separated-tokens.development.js
function parse(value) {
  var tokens = [];
  var input = String(value || "");
  var index = input.indexOf(",");
  var start = 0;
  var end;
  var token;
  while (!end) {
    if (index === -1) {
      index = input.length;
      end = true;
    }
    token = input.slice(start, index).trim();
    if (token || !end) {
      tokens.push(token);
    }
    start = index + 1;
    index = input.indexOf(",", start);
  }
  return tokens;
}
function stringify(values, options) {
  var settings = options || {};
  if (values[values.length - 1] === "") {
    values = values.concat("");
  }
  return values.join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
}
export {
  parse,
  stringify
};
