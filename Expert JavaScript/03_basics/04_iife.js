// Immediately Invoked Function Expressions (IIFE)

// Named IIFE
(function chai() {
  console.log(`DB CONNECTED`); // Output: DB CONNECTED
})();

// IIFE with arrow function
((name) => {
  console.log(`DB CONNECTED TWO ${name}`); // Output: DB CONNECTED TWO hitesh
})("hitesh");
