//higher order functions
//a function that takes a function as an argument or returns a function

// function add(a, b ,cb) {
//   let result = a+b;
//   cb(result);
// }
// add (1 ,2 ,(val => console.log(val)));

function add(a, b ,cb) {
  let result = a+b;
  cb(result);
  return () => console.log(result);
}
let final =add (1 ,2 ,(() =>{} ));
final();

// Goal: Add all the numbers together
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(total); 
// Output: 15  (0 + 1 + 2 + 3 + 4 + 5)