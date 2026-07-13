// // how to declare an array
// const arr1 = [1, 2, 3];
// // const arr2 = new Array(1, 2, 3);
// // const arr3 = Array.of(5); // [5]
// // // const arr4 = Array.from({length: 5}, (_, i) => i * 2); // [0,2,4,6,8]

// // console.log(arr1);
// // console.log(arr2);
// // console.log(arr3);
// // // console.log(arr4);


// // array meathods
// // arr1.push(4); // add to end
// // arr1.pop(); // remove from end
// // arr1.unshift(0); // add to beginning
// // arr1.shift(); // remove from beginning
// // // arr1.sort((a,b) => a-b) // sort
// // arr1.reverse();
// arr1.fill(0,1,4);

// console.log(arr1);

// // let nums = [3, 1, 4, 1, 5];
// // nums.splice(1, 2, 'x', 'y'); // removes 2 items starting at index 1, inserts 'x','y'
// // console.log(nums); // [3, 'x', 'y', 1, 5]

// // Non mutating methods
// const pizza = ['slice1', 'slice2', 'slice3', 'slice4'];
// const myShare = pizza.slice(1, 3); 
// // Returns: ['slice2', 'slice3']

// const teamA = ['Alice', 'Bob'];
// const teamB = ['Charlie'];
// const fullTeam = teamA.concat(teamB); 
// // Returns: ['Alice', 'Bob', 'Charlie']

// const prices = [10, 20, 30];
// const doublePrices = prices.map(price => price * 2); 
// // Returns: [20, 40, 60]

// const scores =[10, 20, 30];
// const passing = scores.filter(score => score >= 20);
// // Returns: 60

// const words = ['Ready', 'Set', 'Go'];
// const countdown = words.join('-'); 
// // Returns: "Ready-Set-Go"

// const nested = [1, [2, 3], [4, 5]];
// const flatList = nested.flat(); 
// // Returns: [1, 2, 3, 4, 5]

// const tags = ['tech', 'coding'];
// const repeated = tags.flatMap(tag => [tag, `${tag}-2026`]);
// // Returns: ['tech', 'tech-2026', 'coding', 'coding-2026']

// const ages = [12, 17, 21, 15];
// const adult = ages.find(age => age >= 18); 
// // Returns: 21

// const fruits = ['apple', 'banana', 'orange'];
// const orangeIndex = fruits.findIndex(fruit => fruit === 'orange'); 
// // Returns: 2

// const line = ['kid', 'kid', 'adult', 'kid'];
// const hasAdult = line.some(person => person === 'adult'); 
// // Returns: true

// const kidsAges = [5, 8, 10];
// const allKids = kidsAges.every(age => age < 12); 
// // Returns: true

// const cart = ['laptop', 'mouse', 'keyboard'];
// const hasMouse = cart.includes('mouse'); 
// // Returns: true

// const colors = ['red', 'blue', 'green'];
// const bluePosition = colors.indexOf('blue'); 
// // Returns: 1

// // const cart = [{price: 10}, {price: 20}, {price: 5}];
// // const total = cart.reduce((sum, item) => sum + item.price, 0); // 35

const arr = [1,2,4];
for (let i=0; i<arr.length; i++){
  console.log(arr[i]);
}

for( const num of arr){
  console.log(num);
}

const user = {
  name: "Farhan",
  role: "Developer",
  language: "JavaScript"
};

for (const key in user) {
  console.log(key); // Prints the property name (the key)
  console.log(user[key]); // Prints the value inside that property
}

// Output:
// name
// Farhan
// role
// Developer
// language
// JavaScript

const ranking = ["Alice", "Bob", "Charlie"];

ranking.forEach((player, index) => {
  console.log(`Rank #${index + 1}: ${player}`);
});

// Output:
// Rank #${index + 1} translates to:
// Rank #1: Alice
// Rank #2: Bob
// Rank #3: Charlie

// const obj = { name: 'Ali', age: 25 };

// for (const key in obj) console.log(key, obj[key]);

// Object.keys(obj);    // ['name', 'age']
// Object.values(obj);  // ['Ali', 25]
// Object.entries(obj); // [['name','Ali'], ['age',25]]

// Object.entries(obj).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// const target = { a: 1 };
// const source = { b: 2, c: 3 };

// Object.assign(target, source); // { a:1, b:2, c:3 } — merges (mutates target)

// Object.freeze(obj);  // prevents any changes (shallow)
// Object.seal(obj);    // prevents add/remove keys, allows editing values
// Object.isFrozen(obj);

// Object.create(proto); // creates object with given prototype

// Object.fromEntries([['a', 1], ['b', 2]]); // { a: 1, b: 2 } — reverse of entries()

// destructure array

const users = [ "farhan" ,"ali" ,"ahmed"];
const [x1,x2] = users;
console.log(x1);

// destructure object
const person = {name: "farhan", age: 25 , city:"Lahore"};
const {name, ...other} = person;
console.log(other);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a:1, b:2, c:3 }

[...'hello']; // ['h','e','l','l','o']

// Function parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// Combined with regular params (rest must be last)
function introduce(first, second, ...others) {
  console.log(first, second, others);
}
introduce(1, 2, 3, 4, 5); // 1 2 [3,4,5]

// Array destructuring
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // 1 [2,3,4]

// Object destructuring
const { id, ...rest } = { id: 1, name: 'x', age: 20 };
console.log(rest); // { name: 'x', age: 20 }