"use strict";
// we willl descuss the setTimeout and setInterval.
console.log("before asynchronous code");
function print() {
    console.log("asynchronous code");
}
setTimeout(print, 10000);
console.log("after asynchronous code");
// other method of setTimeout;
setTimeout(() => {
    console.log("other method setTimeout");
}, 10000);
// setInterval
setInterval(print, 2000);
