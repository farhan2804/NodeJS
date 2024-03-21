const http = require("http");
const server = http.createServer((request, response) => {
  response.end("hello from the other side,farhan here");
});
server.listen(5000, "127.0.0.1", () => {
  console.log("listening to port number 5000");
});
