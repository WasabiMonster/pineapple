module.exports.format = 'text/html';
module.exports.call   = function formatHtml(req, res, body) {
  if (body instanceof Error) {
    return body.stack;
  }

  return body.toString();
}