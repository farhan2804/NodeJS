const EventEmitter=require("events");
const event=new EventEmitter();
//
// event.on("sayMyName",()=>{
//     console.log('my name is farhan');
// })
// event.on("sayMyName",()=>{
//     console.log('my name is mahmood');
// })
// event.on("sayMyName",()=>{
//     console.log('my name is khan');
// })

event.on("checkPage",(statusCode,msg)=>{
console.log(`status code is ${statusCode} and the page is ${msg}`)
})
event.emit("checkPage",200,"ok");//event created