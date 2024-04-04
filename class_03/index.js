"use strict";
// Write a TypeScript function that takes an array of numbers and returns a new array
//  containing only the even numbers.
var arr = [13, 12, 44, 55, 76, 89, 33, 45, 24, 56, 88, 96, 19];
var brr = [];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 == 0) {
        brr.push(arr[index]);
    }
}
console.log("array that contain all elements:");
console.log(arr);
console.log("array that contain only even elements:");
console.log(brr);
