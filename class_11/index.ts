// condition in setTimeout.

console.log("before the settimeout");

let setTimeOutId:number = 0;
setTimeOutId = setTimeout(() => {
    console.log("settimeout")
}, 5000);
if(true){
    clearTimeout(setTimeOutId)
}

console.log("after the settimeout");


// condition in setinterval.

console.log("before set interval");
let setIntervalId:number = 0;
setIntervalId = setInterval(() => {
    console.log("setInterval code");
    
},5000);
if(true){
    clearInterval(setIntervalId);
}
