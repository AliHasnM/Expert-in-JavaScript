// Function to print characters of "Hitesh" when called
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// Function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

// Function to generate a message for user login
function loginUserMessage(username = "sam") {
  // Check if username is provided
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// Function to calculate cart price with variable number of arguments
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// Function to handle and log information about an object
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// Function to return the second value of an array
function returnSecondValue(getArray) {
  return getArray[1];
}

// Test calls for the functions
console.log("Test calls:");
sayMyName();
console.log(addTwoNumbers(3, 5));
console.log(loginUserMessage("hitesh"));
console.log(calculateCartPrice(200, 400, 500, 2000));
handleObject({
  username: "sam",
  price: 399,
});
console.log(returnSecondValue([200, 400, 500, 1000]));
