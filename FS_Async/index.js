//1-create a folder named crud_Async
const fs = require("fs");
fs.mkdir("crud_Async", (error) => {
    console.log('folder created');
});
// 2-create a file that folder
 fs.writeFile("crud_Async/read.txt","welcome to async world", (error) =>{
    console.log("file created and data added");
 })
//3-read the data that is inside the folder
fs.readFile("crud_Async/read.txt","utf8",(err,data) =>{
    console.log(data);
})
//4-update the data by keeping the existing data

fs.appendFile("crud_Async/read.txt", "how are you", (err) => {
  console.log("data updated");
});
//5- delete the folder
fs.mkdir("crud_Async",(err)=>{
console.log("folder deleted")
});
//6- delete the file
fs.unlink("crud_Async/read.txt",(err)=>{
    console.log("file deleted");
})