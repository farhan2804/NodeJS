const fs=require("fs");
//to create folder
fs.mkdirSync("crud_operation");
//to create a file inside that folder

fs.writeFileSync("crud_operation/crud.txt","hello world of node js");

//adding more data to the existing data

fs.appendFileSync("crud_operation/crud.txt","  how are you !!")
//reading the data without getting the bufffer data at first


const data=fs.readFileSync("crud_operation/crud.txt","utf8");
console.log(data);
//renaming the file to mycrud.txt from crud.txt

fs.renameSync("crud_operation/crud.txt","crud_operation/mycrud.txt")
// to delete folder
fs.unlinkSync("crud_operation/mycrud.txt");
//to delete the folder itself

 fs.rmdir("crud_operation");