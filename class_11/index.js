"use strict";
// condition in setTimeout.
console.log("before the settimeout");
let setTimeOutId = 0;
setTimeOutId = setTimeout(() => {
    console.log("settimeout");
}, 5000);
if (true) {
    clearTimeout(setTimeOutId);
}
console.log("after the settimeout");
// condition in setinterval.
console.log("before set interval");
let setIntervalId = 0;
setIntervalId = setInterval(() => {
    console.log("setInterval code");
}, 5000);
if (false) {
    clearInterval(setIntervalId);
}
