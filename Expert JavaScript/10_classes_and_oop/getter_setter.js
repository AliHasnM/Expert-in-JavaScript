// Defining the User class
class User {
  // Constructor to initialize email and password
  constructor(email, password) {
    this.email = email; // Calls the setter for email
    this.password = password; // Calls the setter for password
  }

  // Getter for email
  get email() {
    return this._email.toUpperCase(); // Returns email in uppercase
  }

  // Setter for email
  set email(value) {
    this._email = value; // Sets the _email property
  }

  // Getter for password
  get password() {
    return `${this._password}hitesh`; // Appends "hitesh" to the password
  }

  // Setter for password
  set password(value) {
    this._password = value; // Sets the _password property
  }
}

// Creating an instance of User
const hitesh = new User("h@hitesh.ai", "abc");

// Accessing the email property using the getter
console.log(hitesh.email); // Output: H@HITESH.AI

// (1) Class Definition: The User class is defined with a constructor to initialize the email and password properties.
// (2) Constructor: The constructor sets up the initial state by calling the setters for email and password.
// (3) Getters and Setters: The getters and setters for email and password provide controlled access and modification, adding custom behavior (uppercase for email and appending "hitesh" for the password).
// (4) Instance Creation: An instance of the User class is created, and the getter method for email is demonstrated, showing how it transforms the stored value.
