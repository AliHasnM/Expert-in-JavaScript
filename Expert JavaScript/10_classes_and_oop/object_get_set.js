// Define an object with private properties and getter/setter methods
const User = {
  _email: "h@hc.com",
  _password: "abc",

  // Getter for the email property
  get email() {
    return this._email.toUpperCase();
  },

  // Setter for the email property
  set email(value) {
    this._email = value;
  },
};

// Create a new object that inherits from User
const tea = Object.create(User);

// Access the email property using the getter method
console.log(tea.email); // Output: H@HC.COM

// ***** Summary of Topics with Definitions and Examples *****

// (1) Getters and Setters: Methods to get and set the values of an object's properties

const User2 = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

// Using the getter
console.log(User2.email); // Output: H@HC.COM

// (2) Object.create(): Creates a new object with the specified prototype object and properties

const tea2 = Object.create(User);
console.log(tea2.email); // Output: H@HC.COM
