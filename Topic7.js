// let firstPromise = new Promise((resolve,reject) => {
//   setTimeout(function sayHello() {
//     console.log("Hello");
//   }, 5000);
// });

// let promise1 = new Promise((resolve , reject) => {
//   sucess = false;
//   if(sucess){
//     resolve("Success");
//   }
//   else{
//     reject("Failed");
//   }
// });

// promise1.then((message) =>{
//   console.log("then ka message he ye : " ,message);
// }).catch((error) => {
//   console.log("catch ka message he ye : " ,error);
// })

// async function getData(){
//   setTimeout(function(){
//     console.log("I am inside timeout");
//   } ,3000);
// }
// getData();
const fetchuser = {
   id: 101,
   name: "Farhan"
}
// Simulated API functions (Do not change these)
const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 101, name: "Farhan" }), 200);
  });
};

const fetchPosts = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 300);
  });
};

// --- WRITE YOUR CODE BELOW THIS LINE ---

async function displayUserProfile() {
  // 1. Start a try/catch block
  // 2. Await the fetchUser() function and store it in a variable
  // 3. Await the fetchPosts() function, passing it the user's ID
  // 4. Console.log the user's name and their posts
  // 5. Catch any errors

    try{
      const user = await fetchUser();
      const posts = await fetchPosts(user.id);
      console.log(user.name);
      console.log(posts);
    }
    catch(error){
      console.log(error);
    }
}

// Execute the function
displayUserProfile();