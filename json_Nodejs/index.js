const fs = require("fs");
const bioData = {
  name: "farhan",
  age: 25,
  profession: "student",
};
//challenge-
//1)convert it to json data
//2)add that to a separate file
//3)read that file
//4)again convert it back and print it
const jsonData = JSON.stringify(bioData);
// fs.writeFile("file.json", jsonData, (err) => {});

fs.readFile("file.json","utf8",(err,data)=>{
     const objData=JSON.parse(data);
     console.log(objData);
})


//we can assume the json file that we created as api, like netflix api containing 
//list of movies