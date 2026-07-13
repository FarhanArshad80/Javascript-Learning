export function add(a, b) { return a + b; }

const multiply = (a,b) => {
  return a*b;
}

export {multiply};

// user.js
export default function createUser(name) {
  return { name };
}