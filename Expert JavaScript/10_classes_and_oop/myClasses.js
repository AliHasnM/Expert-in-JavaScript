// ES6 Class Syntax
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Method to encrypt password
  encryptPassword() {
    return `${this.password}abc`;
  }

  // Method to change username to uppercase
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword()); // Output: 123abc
console.log(chai.changeUsername()); // Output: CHAI

// Behind the scenes: Using Constructor Functions and Prototypes
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// Adding methods to the prototype
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword()); // Output: 123abc
console.log(tea.changeUsername()); // Output: TEA

// ***** Summary of Topics with Definitions and Examples *****

// (1) ES6 Classes: A syntax for creating objects and inheritance in JavaScript, introduced in ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai2 = new User("chai", "chai@gmail.com", "123");

console.log(chai2.encryptPassword()); // Output: 123abc
console.log(chai2.changeUsername()); // Output: CHAI

// (2) Constructor Functions: Functions used to create and initialize new objects

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// (3) Prototypes: Objects inherit properties and methods from their prototype

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea3 = new User("tea", "tea@gmail.com", "123");

console.log(tea3.encryptPassword()); // Output: 123abc
console.log(tea3.changeUsername()); // Output: TEA
