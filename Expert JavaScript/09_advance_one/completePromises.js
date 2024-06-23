// (1) Creating and consuming a Promise:
// Purpose: Handle async operations in javascript (network requests, file I/O, more manageable way)
// Why Use: promises hamy callbacks se zada cleaner aur more readable async code provide krta hai aur help in avoid to callbacks hell

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task complete");
  }, 1000);
});

promise.then((message) => {
  console.log(message);
});

// (2) Using resolve and reject in Promises:
// Purpose: "resolve" indicate async operation is successful and "reject" indicate async operation is failed
// Why Use: allow developer to handle success and failure async operation effectively

const promise2 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

promise2
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// (3) Chaining Promises with then:
// Purpose: async operations ko sequence me execute krta hai aur ik operation ka result next operation ko pass krta hai
// Why Use: provide a way to handle multiple async operations in sequence and making code more readable

const promise3 = new Promise((resolve, reject) => {
  resolve("Step 1");
});

promise3
  .then((message) => {
    console.log(message);
    return "Step 2";
  })
  .then((message) => {
    console.log(message);
  });

// (4) Handling errors with catch:
// Purpose: promise ki execuation me error ko handle krta hai
// Why Use: errors are caught and hanlde gracfully

const promise4 = new Promise((resolve, reject) => {
  reject("Error occurred");
});

promise4.catch((error) => {
  console.log(error);
});

// (5) Using finally to execute code after Promise settles:
// Purpose: finally block of code lazami execute hoga chahy promise resolve ho ya reject ho
// Why Use: async operation k performed hone k bd jo outcome hamy lazami chahiye osey hum finally block me write krty hain

const promise5 = new Promise((resolve, reject) => {
  resolve("Done");
});

promise5.finally(() => {
  console.log("This runs after resolve or reject");
});

// (6) Async/Await with Promises:
// Purpose: write async code that looks and behave like sync code
// Why Use: make code more readable and easier to understand, especially when dealing with multiple async operations

async function fetchData() {
  try {
    const data = await fetch("https://api.example.com/data");
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// (7) Fetching data from an API:
// Purpose: external web services using HTTP requests se data ko lena (API se data lena)
// Why Use: API se data ko fetch krna and allow application to interact with external system, retrieve data, provide dynamic and up-to-date content

fetch("https://api.github.com/users/example")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
