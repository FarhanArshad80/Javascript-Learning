//if else statement can be used to make decisions

let marks =75;
if(marks>80){
  console.log("A");
}
else if(marks>60){
  console.log("B");
}
else{
  console.log("C");
}

//switch statement can be used to make decisions and it is more efficient than if else statement and using strict equality (===)
let day = "Monday";
switch(day){
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is not Monday or Tuesday");
}

// Structure: for (initialization; condition; increment/decrement)
for (let i = 0; i < 5; i++) {
  console.log(`Iteration number: ${i}`);
}

let battery = 100;

while (battery > 20) {
  console.log(`Battery at ${battery}%. Keep running tasks.`);
  battery -= 15; // Modifying the condition variable to avoid an infinite loop
}

let passwordCorrect = false;

do {
  // This runs at least once even if the password is initially wrong
  console.log("Prompting user for password..."); 
} while (passwordCorrect);

// for off loop can be used to run a block of code multiple times
const fruits = ["apple", "banana", "orange"];
for(const fruit of fruits){
  console.log(fruit);
}

//for in loop can be used to iterate over the properties of an object

const person={
  name:"John",
  age:30,
  city:"New York"

};
console.log( `name : ${person.name}`);

// for(const key in person){
//   console.log( `name : ${person.name}`);
// }
// continue can skip the iteration and go to the next iteration
// break can stop the loop and run the rest of the code
for (let i = 1; i <= 5; i++) {
  if (i === 2) {
    continue; // Skips printing 2, goes straight to i = 3
  }
  if (i === 4) {
    break; // Stops the loop completely when i reaches 4
  }
  console.log(i); 
}
// Output will be: 1, 3
