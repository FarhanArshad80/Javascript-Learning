// variables 
//let can be change 
let marks = 20;
marks =50;
console.log(marks);

//const can be permant
// const age =18;
// age =18; error because const can be change or redeclared
// console.log(age);

// var can be change or redeclared
if (true) {
  var leak = "I can escape!";
  let trap = "I am stuck in here.";
  console.log(trap);
}
//  var is funtion scope can be acess everywhere
console.log(leak); // Outputs: "I can escape!" (It leaked out!)
// console.log(trap); // ReferenceError: trap is not defined (Correct behavior)


// Primitive Examples
const age = 28;                   // Number
const name = "Alex";              // String
const isCodingRightNow = true;    // Boolean
let nextProject;                  // Undefined (no value assigned yet)
let userIcon = null;              // Null (explicitly empty)

// Complex Examples
const userProfile = {             // Object
  username: "coder123",
  level: 5
};
console.log(userProfile.username); // Outputs: "coder123"
const highScores = [95, 88, 70];  // Array

// Math & Assignment
let wallet = 20;
wallet += 10; // wallet is now 30

// Comparison
const legalAge = 18;
const userAge = 20;
const canVote = userAge >= legalAge; // true

// Logical
const hasTicket = true;
const isSober = false;
const canEnterClub = hasTicket && isSober; // false (both must be true)

//comparison
let a=10;
let b="10";
console.log(a==b);
console.log(a===b);

// Expression
let isVoted = true;
let hasVoted = isVoted || false;
console.log(hasVoted);
