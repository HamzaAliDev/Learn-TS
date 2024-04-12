"use strict";
var person1 = {
    firstName: "Ali",
    lastName: "Hamza",
    age: 26
};
var person2 = {
    firstName: "Ali",
    lastName: "Hamza",
    age: 26
};
const checker = () => {
    if (person1.firstName === person2.firstName && person1.lastName === person2.lastName) {
        console.log("these two persons are same");
    }
    else {
        console.log("these person are not same");
    }
};
checker();
