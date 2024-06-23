// Constructor Function to create a User object with email and password
function User(email, password) {
  this._email = email;
  this._password = password;

  // Define getter and setter for 'email' property
  Object.defineProperty(this, "email", {
    get: function () {
      // Getter returns the email in uppercase
      return this._email.toUpperCase();
    },
    set: function (value) {
      // Setter updates the email value
      this._email = value;
    },
  });

  // Define getter and setter for 'password' property
  Object.defineProperty(this, "password", {
    get: function () {
      // Getter returns the password in uppercase
      return this._password.toUpperCase();
    },
    set: function (value) {
      // Setter updates the password value
      this._password = value;
    },
  });
}

// Create a new User instance
const chai = new User("chai@chai.com", "chai");

// Accessing the 'email' property using the getter
console.log(chai.email); // Output: CHAI@CHAI.COM

// Setting a new value for the 'email' property using the setter
chai.email = "newemail@chai.com";

// Accessing the updated 'email' property
console.log(chai.email); // Output: NEWEMAIL@CHAI.COM
