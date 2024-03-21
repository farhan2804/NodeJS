const http = require("http");
const server = http.createServer((request, response) => {
  //   console.log(request.url);
  if (request.url == "/") {
    response.end("hello from the other side,farhan here");
  } else if (request.url == "/contact") {
    response.end("hey, this is contacts page");
  } else {
    response.writeHead(404,{"content-type":"text/html"});
    response.end("<h1>404 error page , go back</h1>");
  }
});
server.listen(5000, "127.0.0.1", () => {
  console.log("listening to port number 5000");
});
