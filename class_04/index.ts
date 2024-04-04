// Implement a TypeScript function that reverses the elements of an array.
var arr:number[] =[1,2,3,4,5,6,7,8,9,10];
var len:number =arr.length - 1;
var brr:number[] =[];

for (let i = len; i >= 0; i--) {
    brr.push(arr[i]);
    
}
console.log("array ",arr);

console.log("inverse of array",brr);
