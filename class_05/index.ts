// topic include object
type studentType ={
    firstName:string,
    lastName:string,
    age:number,
    email:string
};
var student:studentType ={
    firstName: "Ali",
    lastName: "Hamza",
    age: 20,
    email: "abc@gmail.com"
};


// Add a method to the person object called getFullName that returns the full name of the person.

const getFullName =()=>{
    var fullName:string = student.firstName + student.lastName;
    console.log(fullName);
};

getFullName();


// b. Add a method called increaseAge that takes a number as an argument and increases the person's age by that number.
const getNewAge =(num:number) =>{
    let age = student.age + num;
    return age;
};

 student.age = getNewAge(2);
 console.log(student.age);
 

