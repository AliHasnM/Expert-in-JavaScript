// (1) Attaching events using addEventListener: HTML element par ik addEventListener ko add kia jb koi b specified event occurs hoga tu ye run hoga
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked");
});

// (2) Preventing default action and stopping event propagation:
// preventDefault() ye event k default action ko stop kr deta hai
// stopPropagation() ye event k behavior ko stop kr deta hai (bubbling up or capturing down the DOM tree)

// false show bubbling up the behavior of DOM tree
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
);
//   true show capturing down the behavior of DOM tree
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  true
);

document.getElementById("myLink").addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("Link clicked but default action prevented");
});

// (3) Removing HTML elements dynamically: remove HTML elements from DOM
document.getElementById("removeButton").addEventListener("click", function () {
  var element = document.getElementById("elementToRemove");
  element.parentNode.removeChild(element);
});

// (4) Using setTimeout to delay function execution
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);

// (5) Using clearTimeout to cancel delayed execution that set in setTimeout function
var timeoutId = setTimeout(function () {
  console.log("This will not run");
}, 2000);
clearTimeout(timeoutId);

// (6) Using setInterval to repeatedly execute a function with fixed time delay between each call
var intervalId = setInterval(function () {
  console.log("Executed every second");
}, 1000);

// (7) Using clearInterval to stop repeated execution that set in setInterval function
var intervalId = setInterval(function () {
  console.log("This will stop after 5 seconds");
}, 1000);
setTimeout(function () {
  clearInterval(intervalId);
}, 5000);
