"use strict";
var student = {
    firstName: "Ali",
    lastName: "Hamza",
    age: 20,
    email: "abc@gmail.com"
};
// Add a method to the person object called getFullName that returns the full name of the person.
const getFullName = () => {
    var fullName = student.firstName + student.lastName;
    console.log(fullName);
};
getFullName();
// b. Add a method called increaseAge that takes a number as an argument and increases the person's age by that number.
const getNewAge = (num) => {
    let age = student.age + num;
    return age;
};
student.age = getNewAge(2);
console.log(student.age);
