"use strict";
// Write a TypeScript function that validates the person object. The validation should check 
// if the firstName and lastName properties are not empty strings and if the age is a
// positive number. If any of these conditions are not met, the function should return
// an error message; otherwise, it should return "Valid person."
const validityCheck = (person) => {
    if (person.firstName.trim() === "" || person.lastName.trim() === "") {
        return "First name and last name must not be empty.";
    }
    if (person.age <= 0) {
        return "Age must be positive integer.";
    }
    else {
        return "valid person";
    }
};
var person1 = {
    firstName: "Mehar",
    lastName: "xyz",
    age: 22
};
console.log(validityCheck(person1));
