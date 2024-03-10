const os=require("os");
// to check the architechture of windows whether it is 64 bit or 32 bit 
console.log(os.arch());

//to check the free memory of the system(laptop,pc,etc);
const freeMemory=os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);
// to check total memory 
const totalMemory=os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);

console.log(os.type());
