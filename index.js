console.log("My name is Tracy");
        
 // variables
//  declaring variales use the var, let, or const keywords

// var is funcation-spaced and can be redeclared and updated

var name = "Tracy";
console.log(name);
name = "Namuwoolya Tracy"
console.log(name)

// let is block-scopped and can be updated but not redeclared

let age = 23
console.log(age);
age = 24;
console.log("My age changed because Iam just a girl", age);

// cost variables can not be updated
const country = "Uganada";
console.log(country);


// Data types
// Javascript  has several data types including
// 1. string
let greeting = "Hello World, How are you?";
console.log(typeof greeting);

// 2. number

let x = 20;
let y = 11;
console.log(x)
console.log(y)
console.log(typeof x)
console.log(typeof y)

// Boolean
// Undefined
// Null
// Symbol
// Explation of symbol data type

// Mathematical operators
let a = 5;
let b = 3;
console.log(a  +b );
console.log(a - b );
console.log(a = b );
console.log(a / b );
console.log(a % b );
console.log(a ** b);

// Conditionals in Javascript
// if statement
// definition of if statement
let condition = true;
if (condition) {
    // code to be executed if condition is true
}

// if-else statement
// definition of if-else statement
if (condition) {
    // code to be executed if codition is true
}else{
    // code to be executed if condition is false
}

// else-if statement
// definition of else if statement
let condition1 = true;
if (condition1) {
    // code to be executed if condition1is true
} else if (condition2) {
    // code to be  excuted if condition2 is true
} else if(condition3) {
    // code to be executed if both conditon3 is true
} 

// Practice examples
let score = 85;

if (score > 69) {
    console.log("Very good, you have passed the exam")
}
if (score >= 70 ) {
    console.log("You have passed the exam")
} else{
    console.log(" You have failed the exam")
}

 
//  Comparison Operators
// 1. Equal to (==);
// 2. Not equal to (!=)
// 3. Strict Equal to (==)
// 4. Strict not equal to (!==)
// 5. Greater than (>)
// 6. Less than (<)
// 7. Greater than  or equal to (>=)
// 8. Less than or equal to (<=)

// Arrays
// is a data structure that can hold multiple values
["Apples","Banana","Water melons","Oranges","Grapes"]
[1,2,3,4,4]
// ["Nana", 24, "Ugandan"{name: Nana}]

let fruits =["Apples","Banana","Water melons","Oranges","Grapes"];
console.log(fruits);
console.log(fruits[3]); 

// objects
// {} am empty object
{
    name: "Tracy";
    age: 24;
    country: "Ug";
}
let person = {
    name: 'Tracy',
    age: 24,
    district: 'Kampala',
    country: 'Uganda',
    student: true,
    hobbies: ["walking","cooking"],
    address:{
        street: 'UN RISE kisugu market',
        city: 'Kampala',
    }
}
console.log( person);
console.log(person["name"]);
console.log(person.hobbies);
console.log(person.hobbies[1]);