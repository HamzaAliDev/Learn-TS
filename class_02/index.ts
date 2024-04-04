// Create a TypeScript function that finds and returns the maximum value in an array of numbers.
var arr:number[] = [22,33,46,46,12,13,66,23,44];
var max:number = 0;
for(let i=0; i<arr.length; i++){
    if (arr[i] > max) {
        max = arr[i];
    }

}
console.log(arr);
console.log("maximum number = ",max);

