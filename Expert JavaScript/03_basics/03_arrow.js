// Object declaration with properties and a method
const user = {
  username: "hitesh",
  price: 999,

  // Method within the object to greet the user
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  },
};

// Call to the welcomeMessage method
// user.welcomeMessage();

// Modification of the username property
// user.username = "sam";

// Call to the welcomeMessage method after modifying the username
// user.welcomeMessage();

// Uncommenting the following lines will result in 'undefined' for 'this.username'
// console.log(this);

// Function declaration with 'let' keyword
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// Arrow function declaration
// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// Arrow function declaration
const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// Uncommenting the following line will result in 'undefined' for 'this.username'
// chai();

// Arrow function declaration with implicit return
// const addTwo = (num1, num2) => num1 + num2;

// Arrow function declaration with explicit return of an object
const addTwo = (num1, num2) => ({ username: "hitesh" });

// Call to the addTwo function
console.log(addTwo(3, 4));
