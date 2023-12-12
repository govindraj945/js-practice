//  Primitive
// in primitive data type get a copy of the variable and you can change but the original value not change

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n







// Reference (Non primitive)
// in  Reference (Non primitive) if we change any with diffrent variable it will change in original variable it will not copy  

// Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];

//Object
let myObj = {
    name: "hitesh",
    age: 22,
}

//Function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.37



//***********************************************************
// Memory
// Stack Memory (Primitive), Heap Memory (Non-primitive)

//Stack (Primitive)

let myName = "Govind";
let changeName = myName;
changeName = "Rajput";

console.log(changeName);
console.log(myName);

