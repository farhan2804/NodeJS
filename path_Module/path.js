const path=require("path");
console.log(path.dirname("D:/Node_JS_Tutorial/Challenge_1_CRUD/path_Module/path.js"))
console.log(path.extname("D:/Node_JS_Tutorial/Challenge_1_CRUD/path_Module/path.js"))
 console.log(path.basename("D:/Node_JS_Tutorial/Challenge_1_CRUD/path_Module/path.js"))
 console.log(path.parse("D:/Node_JS_Tutorial/Challenge_1_CRUD/path_Module/path.js"))
const my_path=path.parse("D:/Node_JS_Tutorial/Challenge_1_CRUD/path_Module/path.js");
console.log(my_path.name);