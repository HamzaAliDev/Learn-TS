"use strict";
// promise practise
console.log("after asycn code");
const result = new Promise((resolve, reject) => {
    if (true) {
        resolve("successfully ascyn code execute");
    }
    else {
        reject("something error");
    }
});
result.then((success) => {
    console.log("success", success);
})
    .catch((error) => {
    console.log("erroe", error);
});
console.log("before ascyn code");
