// Create two different person objects with different data. Write a TypeScript function that
//  compares these two objects to check if they are the same person. Consider two persons to 
// be the same if their first names and last names match.
type personType ={
    firstName:string,
    lastName:string,
    age:number
};
var person1:personType = {
    firstName: "Ali",
    lastName: "Hamza",
    age: 26
};
var person2:personType = {
    firstName: "Ali",
    lastName: "Hamza",
    age: 26
};

const checker = () =>{
    if (person1.firstName === person2.firstName && person1.lastName === person2.lastName) {
        console.log("these two persons are same");
        
    } else {
        console.log("these person are not same");
        
    }
};

checker();