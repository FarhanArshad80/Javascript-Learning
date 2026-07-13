//function ways
function greet(name){
  return `Hello, ${name}`;
}

sayHi(); // Works perfectly!

function sayHi() {
  console.log("Hi!");
}
const calcSquare = function(number) {
  return number * number;
};

// // 1. Call the function with the number 5 and store the result
// const result = calcSquare(5);

// // 2. Print the result to the console
// console.log(result); // Outputs: 25

// Style 1: Function Declaration (The classic way)
// function square(x) {
//   return x * x;
// }

// // Style 2: Function Expression (Saving a function inside a variable)
// const square = function(x) {
//   return x * x;
// };

// // Style 3: Arrow Function (The modern, short way)
// const square = (x) => x * x;

//Arrow functions
const add = (a,b) => {
  return a+b;
}
const add1 =(c,d) => c+d;

let a = add(1,2);
let b= add1(3,4);
console.log(a);
console.log(b);

const globalVar = "I am everywhere";

function standardFunc() {
  const secret = "hidden";
}
// console.log(secret); // ReferenceError: secret is not defined

if (true) {
  var oldWay = "accessible outside"; // var ignores block scope!
  let modernWay = "trapped in block";
}
console.log(oldWay);    // "accessible outside"
// console.log(modernWay); // ReferenceError

// global scope can be acessed everywhere
// Funcion local scope can be acessed only inside the function
// block scope can be acessed only inside the block

function createCounter() {
  let count = 0; // Private variable trapped in the closure

  return function() {
    count++; // Accesses the outer scope variable
    return count;
  };
}

const counter1 = createCounter(); 

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3


function parent() {
  let secretToy = "PlayStation 5";

  function child() {
    // The child can still reach inside the parent's room and play with the toy
    console.log(`I am playing with the ${secretToy}`);
  }

  return child; // We send the child out into the world
}

const playTime = parent(); 
playTime(); // Output: "I am playing with the PlayStation 5"

// closure is the combination of fucntion and lexcical scope or require data
function outer(){
  let name = "ali";
  function inner(){
    console.log(name);
  }
  return inner;
}
let a1 = outer();
a1();