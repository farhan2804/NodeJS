const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("input.txt","utf8", (err, data) => {
  //     console.log(data);
  //     res.end(data);
  //   });
  const rStream = fs.createReadStream("input.txt");
//   rStream.on("data", (chunkData) => {
//     res.write(chunkData);
//   });
//   rStream.on("end", () => {
//     res.end();
//   });
//   rStream.on("error", () => {
//     res.end("file not found");
//   });
//use of pipe method
rStream.pipe(res);

});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port number 8000");
});
