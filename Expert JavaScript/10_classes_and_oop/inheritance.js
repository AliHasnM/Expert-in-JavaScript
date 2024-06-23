// Defining a User class
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// Defining a Teacher class that extends User
class Teacher extends User {
  constructor(username, email, password) {
    super(username); // Calling the constructor of the parent class (User)
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

// Creating an instance of Teacher
const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe(); // Output: USERNAME is chai
chai.addCourse(); // Output: A new course was added by chai

// Creating an instance of User
const masalaChai = new User("masalaChai");

masalaChai.logMe(); // Output: USERNAME is masalaChai

// Checking if chai is an instance of User
console.log(chai instanceof User); // Output: true

// (1) Class Inheritance: The Teacher class inherits from the User class using the extends keyword. This allows Teacher to reuse the logMe method from User.
// (2) Superclass (super): The super(username) call in the Teacher constructor ensures that the username property is initialized using the User class constructor.
// (3) Instance Checking: The instanceof operator confirms that chai is indeed an instance of User, demonstrating the relationship between Teacher and User.
