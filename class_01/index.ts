// Write a TypeScript program that calculates the sum of all elements in an array
//  of numbers using a for loop.
var arr:number[] = [1,2,3,4,5,6,7,8,9,10];
var sum:number = 0;
for(let i=0; i< arr.length; i++){
    sum = sum + arr[i];
}
console.log(arr);

console.log("the array sum is = ",sum);


