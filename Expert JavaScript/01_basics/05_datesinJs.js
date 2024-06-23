// Creating a new Date object representing the current date and time
let myDate = new Date();
console.log(myDate.toString()); // Outputs full date and time string
console.log(myDate.toDateString()); // Outputs date part only
console.log(myDate.toLocaleString()); // Outputs date and time in locale-sensitive format
console.log(typeof myDate); // Outputs 'object'

// Creating specific date objects
// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString()); // Outputs created date in a locale-sensitive format

// Getting the current timestamp
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Outputs the current timestamp in milliseconds
console.log(myCreatedDate.getTime()); // Outputs the timestamp for the created date
console.log(Math.floor(Date.now() / 1000)); // Outputs the current timestamp in seconds

// Getting current date details
let newDate = new Date();
console.log(newDate); // Outputs the current date and time
console.log(newDate.getMonth() + 1); // Outputs the current month (0-11, hence +1 to get 1-12)
console.log(newDate.getDay()); // Outputs the current day of the week (0-6)

// Formatting the current date to get the full weekday name
newDate.toLocaleString("default", {
  weekday: "long",
});
