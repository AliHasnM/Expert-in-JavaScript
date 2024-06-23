// Function to set username, simulating a complex DB call
function SetUsername(username) {
  this.username = username; // Set the username property on `this`
  console.log("called"); // Log to indicate the function was called
}

// Constructor function to create a new user
function createUser(username, email, password) {
  // Call SetUsername with `this` set to the new object being created
  SetUsername.call(this, username);

  this.email = email; // Set the email property on `this`
  this.password = password; // Set the password property on `this`
}

// Create a new instance of createUser
const chai = new createUser("chai", "chai@fb.com", "123");

// Log the newly created object
console.log(chai);

// (1) Function SetUsername: This function sets the username property on the object it is called with and logs "called".
// (2) Function createUser: This constructor function initializes a new user by first calling SetUsername with the new object (this), and then setting email and password properties.
// (3) Instance Creation: The new keyword creates a new object, and createUser initializes it with the provided values. The call method ensures that the SetUsername function operates in the context of the new object.
