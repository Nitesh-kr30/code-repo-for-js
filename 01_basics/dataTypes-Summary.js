// Primitive Datatype
// 7 categories : string, Number, Boolean, null, undefined, Symbol(used to make values uniques), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name : "nitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myObj);
// console.log(typeof myFunction);
// console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++//


//stack (primitive), Heap (Non-primitive)
// stack holds primitive values but heap stores non-primitive values

let myYoutubename ="lehsun"
let anotherName = myYoutubename;
anotherName = "Chaiorcode";

console.log(myYoutubename);
console.log(anotherName);