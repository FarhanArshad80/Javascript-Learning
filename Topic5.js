import { add as sum } from './modules.js';
import { multiply } from './modules.js';
import createUser from './modules.js';

const user = createUser("Farhan");
console.log(user);


console.log(multiply(1,2));
console.log(sum(1,2));
// let const
var a = 10;
var a = 20;
let b = 30;
// let b = 40;

const z = 50; //not change
//Template literal
{
const name ="Farhan";
const age =20;
console.log("My name is "+ name + " and age is " + age); //old way
console.log(`My name is ${name} and age is ${age}`);//ES6 new way
}

// Optional chaining

const option ={
  name : "Farhan",
  age : 20,
  gmail:"ali@test.com"
};

console.log(option?.addres?.city);

// nullish coalescing
let data = 0;
console.log(data ?? "not found");