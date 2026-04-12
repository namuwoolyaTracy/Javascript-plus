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
//Very often, in programming, you will need a data type that can represent one of two values, like: 
// yes or no
// on or off
//true or false
let hour = new Date().getHours();
if (hour < 18) {
    greeting = "Good day";
}else {
    greeting = "Good evening";
}
console.log(greeting);

// Undefined
// The undefined property indicates that a variable has not been assignd a value

if (x === undefined) {
    text = "x is undefined";
}else{
    text = "x is defined";
}

// Null
// Symbol
// Explation of symbol data type

// Mathematical operators
let a = 5;
let b = 3;
console.log(a + b );
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
 
//Function
//Are reusable blocks of code that prefers a specific task. they can take premeters and return values
//Function declaration // we use the function keyword to declare a funication
function funcationame() {
    //code to be excuted
}
function funcationame(paremeter) {
    //code to be excuted
    return paremeter; // returning paremeter
}
function funcwithParemeter(paremeter1, paremeter2, paremeter3) {
    // code to be excuted
    return paremeter1, paremeter2, paremeter3; //returning the sum of paremeters
}

//working example of a function
function returnsamvalue() {
    let value = "This is my first working function in javascript"
    console.log(value);
}
returnsamvalue(); // calling the function to get the returned value
 
function returnParemeter(paremeter) {
    return paremeter;
}
console.log(returnParemeter("Hello, this is my second function in javascript"));

function addNumbers(x, y) {
    return x + y;
}
const sum = addNumbers(4, 5);
console.log(sum);

// loops
// 1 for loop
for (let i = 0; i <7; i++) {
    console.log(i);
}

// 2 Incrementing for loop
for (let i = 0; i < 7; i++) {
    console.log(i)
}

// Decrementing for loop
for (let i =7; i>0; i--) {
    console.log(i)
}
const myCars = ["Volvo","Benz","Kia","Toyota"];
console.log(myCars);
const numberOfCars = myCars.length; // This gives you the number of items
console.log(numberOfCars);
const KiaPosition = myCars.indexOf("Kia");
console.log("\The position of Kia in the array is",KiaPosition);

for (let i=0; i< myCars.length; i++) {
    console.log(myCars[i])
}

for (let car of myCars) {
    function printCarPosition(car) {
        const index = myCars.indexOf(car)
        console.log("The position of " + car + " in the array is " + index);
        console.log(car);
    }
    printCarPosition(car);
    console.log(car); 
}

// 2 while loop
// Incrementing while loop
let i = 0;
while (i < 7) {
     console.log("From the while loop", i);
    i++;
}
//Decrementing while loop
let num = 10;
while (num >= 0) {
    console.log(num);
    num--;
}
let tim = 15;
while (tim >= 1) {
    console.log(tim);
    tim--;
}

//password creation
let password = "";
while (password !== "1234") {
    password = prompt("please enter the password:");
}