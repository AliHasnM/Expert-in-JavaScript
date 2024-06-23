function multipleBy5(num) {
  return num * 5;
}

// Function that multiplies a number by 5
function multipleBy5(num) {
  return num * 5;
}

// Adding a property to the function
multipleBy5.power = 2;

console.log(multipleBy5(5)); // Output: 25
console.log(multipleBy5.power); // Output: 2
console.log(multipleBy5.prototype); // Output: {}

// Constructor function to create a user
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// Adding methods to the prototype
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

// Creating new instances using the constructor function
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

// Using the methods defined on the prototype
chai.printMe(); // Output: Score is 25
chai.increment();
chai.printMe(); // Output: Score is 26

tea.printMe(); // Output: Score is 250

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/

// ***** Summary of Topics with Definitions and Examples *****

// (1) Function Properties: Properties assigned to a function object

function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 2;
console.log(multipleBy5.power); // Output: 2

// (2) Function Prototypes: The prototype property of a function object, used for inheritance

console.log(multipleBy5.prototype); // Output: {}

// (3) Constructor Functions: Functions used to create and initialize new objects

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// (4) Prototypal Inheritance: Objects inheriting properties and methods from other objects

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

// (5) new Keyword: Used to create an instance of a constructor function

const chai2 = new createUser("chai", 25);
const tea2 = new createUser("tea", 250);
