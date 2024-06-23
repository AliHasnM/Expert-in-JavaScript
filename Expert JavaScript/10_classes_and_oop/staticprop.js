// Class Definition for User
class User {
  // Constructor Method to initialize username
  constructor(username) {
    this.username = username;
  }

  // Instance Method to log username
  logMe() {
    console.log(`Username: ${this.username}`);
  }

  // Static Method to create an ID
  static createId() {
    return `123`;
  }
}

// Creating an instance of User
const hitesh = new User("hitesh");

// Calling instance method
hitesh.logMe(); // Output: Username: hitesh

// Calling static method
console.log(User.createId()); // Output: 123

// Class Definition for Teacher that inherits from User
class Teacher extends User {
  // Constructor Method to initialize username and email
  constructor(username, email) {
    // Call to superclass constructor
    super(username);
    this.email = email;
  }
}

// Creating an instance of Teacher
const iphone = new Teacher("iphone", "i@phone.com");

// Calling static method from the instance (although it's better practice to call it on the class)
console.log(Teacher.createId()); // Output: 123

// ***** Summary of Topics with Definitions and Examples *****

// Class Definition
// Definition: A blueprint for creating objects.
// Example: class User { ... }
class User {
  constructor(username) {
    this.username = username;
  }
}

// Constructor Method
// Definition: Initializes objects of a class.
// Example: constructor(username) { ... }
class User {
  constructor(username) {
    this.username = username;
  }
}

// Instance Methods
// Definition: Operate on instances of the class.
// Example: logMe() { ... }
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
}

const hitesh2 = new User("hitesh2");
hitesh.logMe(); // Output: Username: hitesh

// Static Methods
// Definition: Belong to the class itself.
// Example: static createId() { ... }
class User {
  static createId() {
    return `123`;
  }
}

console.log(User.createId()); // Output: 123

// Inheritance
// Definition: One class inherits from another.
// Example: class Teacher extends User { ... }
class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone2 = new Teacher("iphone2", "i@phone.com");
// Super Keyword
// Definition: Calls the constructor or methods of a superclass.
// Example: super(username);
class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
