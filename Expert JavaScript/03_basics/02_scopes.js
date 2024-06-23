// Variable declaration with let
let a = 300;

// If block with block-scoped variables
if (true) {
  // Local variable shadowing outer 'a'
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// Variable 'a' retains its value outside the block
// console.log(a);
// Variable 'b' is not accessible outside the block due to block scope
// console.log(b);

// Function declaration 'one'
function one() {
  // Constant declaration
  const username = "hitesh";

  // Nested function 'two' inside function 'one'
  function two() {
    const website = "youtube";
    // 'username' accessible in nested function
    console.log(username);
  }
  // 'website' not accessible outside 'two' due to function scope
  // console.log(website);

  // Call to nested function 'two'
  two();
}

// Call to function 'one'
// one();

// If block with nested 'if' block
if (true) {
  // Constant declaration
  const username = "hitesh";
  // Nested 'if' block
  if (username === "hitesh") {
    const website = " youtube";
    // Access to 'username' and 'website'
    // console.log(username + website);
  }
  // 'website' not accessible outside nested 'if' block
  // console.log(website);
}

// 'username' not accessible outside its block due to block scope
// console.log(username);

// Function declaration 'addone'
console.log(addone(5)); // Output: 6
function addone(num) {
  return num + 1;
}

// Attempted function call before function declaration
addTwo(5); // Error: Cannot access 'addTwo' before initialization

// Function expression assigned to constant 'addTwo'
const addTwo = function (num) {
  return num + 2;
};
