const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  const data = fs.readFileSync("userAPI/userapi.json", "utf8");
  //to get only first name,we need to convert it into json object
  const objData = JSON.parse(data);
  //   console.log(request.url);
  if (request.url == "/") {
    response.end("hello from the other side,farhan here");
  } else if (request.url == "/contact") {
    response.end("hey, this is contacts page");
  } else if (request.url == "/userapi") {
    response.writeHead(200,{"content-type":"application/json"});
    response.end(objData[0].name+"-"+objData[0].title);
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>404 error page , go back</h1>");
  }
});
server.listen(5000, "127.0.0.1", () => {
  console.log("listening to port number 5000");
});
