// (1) DOM Manipulation: Document Object Model (DOM) manipulation ka matlub hai k Javascript ko use krty hovy dynamically changes krna (web pages k content, structure and style wagara mein)

const parent = document.querySelector(".parent");
parent.children[1].style.color = "orange"; // Changes the text color of the second child element to orange

// (2) Element Selection: element ko target krna aur osey read and modify krna

const dayOne = document.querySelector(".day");
console.log(dayOne.nextElementSibling); // Logs the next sibling element of the first element with class "day"

// (3) Creating and Appending Elements:dynamically create new elements and adding in DOM (without refreshing the web page)

const div = document.createElement("div");
div.className = "main";
document.body.appendChild(div); // Adds the newly created div element to the body

// (4) Set Attributes: set and update attributes of DOM elements

div.setAttribute("title", "generated title"); // Sets the title attribute of the div element

// (5) Modifying Element Style: change CSS of elements

div.style.backgroundColor = "green"; // Changes the background color of the div element to green

// (6) Replacing Elements: existing element ko new element se replace krna

const secondLang = document.querySelector("li:nth-child(2)");
const newli = document.createElement("li");
newli.textContent = "Mojo";
secondLang.replaceWith(newli); // Replaces the second list item with a new one

// (7 )Removing Elements: remove elements from DOM

const lastLang = document.querySelector("li:last-child");
lastLang.remove(); // Removes the last list item

// (8) Creating Text Nodes: insert text into elements without using innerHTML

const addText = document.createTextNode("Chai aur code");
div.appendChild(addText); // Adds text to the newly created div element

// (9) Node Properties: Accessing various properties of Nodes (children, parent, siblings, etc) DOM structure ko navigate and modify krne k leye use krty hain

console.log("NODES: ", parent.childNodes); // Logs all child nodes of the parent element

// (10) Editing HTML Content: change innerHTML or outerHTML of elements

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>"; // Replaces the first list item with new HTML content

// ***** NOTES *****
// (1) innerHTML: Sets or gets the HTML content within an element
// (2) innerContent: There is no standard `innerContent` property in JavaScript
// (3) innerText: Sets or gets the text content within an element, excluding hidden elements
// (4) outerHTML: Sets or gets the HTML content of an element, including the element itself
// (5) querySelector: Selects the first element that matches a specified CSS selector
// (6) querySelectorAll: Selects all elements that match a specified CSS selector
// (7) parent: Refers to the parent node of the current element
// (8) children: Returns a live HTMLCollection of the child elements of a specified element
// (9) sibling: Refers to the next or previous sibling elements (using `nextElementSibling` or `previousElementSibling`)
// (10) createElement: Creates a new HTML element
// (11) appendChild: Adds a node as the last child of a specified parent node
// (12) setAttribute: Sets a new value to an attribute on an element
// (13) textContent: Sets or gets the text content of an element and its descendants
// (14) replaceWith: Replaces an element in the DOM with a new element
// (15) remove: Removes an element from the DOM
// (16) createTextNode: Creates a new text node
