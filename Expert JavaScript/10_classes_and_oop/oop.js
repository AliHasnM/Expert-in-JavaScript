// (1) ----- Object literal ----- (simple object hai key-value pair wala)
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // Refers to the current object
    console.log(this);
  },
};

// Object literal example
console.log(user.username); // Output: hitesh
user.getUserDetails(); // Output: { username: 'hitesh', loginCount: 8, signedIn: true, getUserDetails: [Function: getUserDetails] }

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    // Uses the 'this' keyword to refer to the current instance
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

// (2) ----- Constructor function ----- (new keyword is a constructor function ye hamy her bar new instance dy ga)
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// Creating instances with constructor function
console.log(userOne.username); // Output: hitesh
userTwo.greeting(); // Output: Welcome ChaiAurCode

// Logging constructor function
console.log(userOne.constructor); // Output: [Function: User]
