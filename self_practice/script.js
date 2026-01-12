const myFirstDiv = document.querySelector("#myFirstDiv");
myFirstDiv.style.backgroundColor = "lightblue";
myFirstDiv.style.padding = "20px";
myFirstDiv.style.borderRadius = "5px";
myFirstDiv.innerText = "This is my first div with some styling!";

function setLiStyle(listItem) {
  listItem.style.color = "darkblue";
  listItem.style.fontSize = "18px";
  listItem.style.marginBottom = "10px";
  listItem.style.cursor = "pointer";
}

const uls = document.createElement("ul");
uls.style.listStyleType = "circle";
uls.style.paddingLeft = "20px";
const li1 = document.createElement("li");
li1.innerText = "First Item";
const li2 = document.createElement("li");
li2.innerText = "Second Item";
const li3 = document.createElement("li");
li3.innerText = "Third Item";
setLiStyle(li1);
setLiStyle(li2);
setLiStyle(li3);
uls.appendChild(li1);
uls.appendChild(li2);
uls.appendChild(li3);
myFirstDiv.appendChild(uls);

const modal = document.getElementById("itemModal");
// const openBtn = document.getElementById("openPopupBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const itemForm = document.getElementById("itemForm");

// Function to open the modal
// openBtn.onclick = function () {
//   modal.style.display = "block";
// };

// Function to close the modal using the (x) button
closeBtn.onclick = function () {
  modal.style.display = "none";
  itemForm.reset(); // Optional: Clear the form when closed
};

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    itemForm.reset(); // Optional: Clear the form when closed
  }
};

// Handle form submission
itemForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const itemName = document.getElementById("itemName").value;
  const itemQuantity = document.getElementById("itemQuantity").value;

  if (itemName && itemQuantity) {
    addItemToList(itemName, itemQuantity);
    modal.style.display = "none"; // Hide the modal
    itemForm.reset(); // Reset the form fields
  }
});

/*
Key Differences
Performance (Reflow):
innerText: It is layout-aware, meaning it takes CSS into account (e.g., it won't see text hidden by display: none). Because it needs to know the layout to determine what is visible, it triggers a "reflow," which is computationally expensive.

textContent: It is not layout-aware. It simply retrieves or sets the raw text content of the node and all its descendants without checking styles. Because it ignores CSS, it does not trigger a reflow and is significantly faster.

Visibility and Rendering:
innerText: Represents what is "human-readable" and visible on the screen. It will ignore text hidden by CSS.

textContent: Includes all text, even if it is hidden by CSS. It also includes content from <script> and <style> tags.

Formatting:
innerText: Attempts to mimic the appearance of text as it is rendered, including respecting line breaks from block elements.

textContent: Preserves the formatting found in the source markup, such as extra whitespace and line breaks.

Recommendation for 2026
For most use cases, especially when setting an item's name as in your example (newLi.textContent = itemName;), textContent is the preferred choice. It is more performant, standard across all browsers, and safer for simple text manipulation. Use innerText only if you specifically need to respect current CSS visibility or rendered text formatting
*/

function addItemToList(itemName, itemQuantity) {
  const newLi = document.createElement("li");
  newLi.innerText = itemName;
  // newLi.textContent = itemName;
  setLiStyle(newLi);
  uls.appendChild(newLi);
}

myFirstDiv.addEventListener("click", function (e) {
  console.log(e.target.tagName, e.target.innerText);
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
    modal.style.display = "block";
  } else {
    alert("Please click on a list item to mark it as completed.");
  }
});

let first = document.querySelector("li");
console.log(first.parentElement); // UL
console.log(first.nextElementSibling); // next LI
console.log(first.previousElementSibling); // previous
console.log(first.childNodes); // text node
console.log(first.children); // HTMLCollection (empty, no child elements)
console.log(first.firstElementChild); // null, no child elements
console.log(first.lastElementChild); // null, no child elements
console.log(first.parentElement.parentElement); // DIV
console.log(first.nextElementSibling.nextElementSibling); // third LI
console.log(first.nextElementSibling.parentElement); // UL
console.log(first.nextElementSibling.nextElementSibling.previousElementSibling); // second LI
console.log(first.parentElement.children); // HTMLCollection of all LI elements
console.log(first.parentElement.firstElementChild); // first LI
console.log(first.parentElement.lastElementChild); // third LI
console.log(first.parentElement.firstElementChild.nextElementSibling); // second LI
console.log(first.parentElement.lastElementChild.previousElementSibling); // second LI
console.log(first.parentElement.children.length); // 3
console.log(first.parentElement.childElementCount); // 3
console.log(first.parentElement.parentElement.childElementCount); // 1
console.log(first.parentElement.parentElement.parentElement.childElementCount); // 0
console.log(first.parentElement.parentElement.parentElement); // null
console.log(document.body.firstElementChild); // DIV

function storaData(data) {
  localStorage.setItem("myData", JSON.stringify(data));
}

storaData({ name: "John", age: 30, city: "New York" });

function retrieveData() {
  const data = localStorage.getItem("myData");
  return data ? JSON.parse(data) : null;
}
const myData = retrieveData();
myData["country"] = "USA";

console.log(myData);

for (let key in myData) {
  console.log(`${key}: ${myData[key]}`);
  addItemToList(myData[key], myData[key]);
}

function removeData() {
  localStorage.removeItem("myData");
}

// removeData();

function clearData() {
  localStorage.clear();
}
// clearData();
/**
Storing Arrays & Objects
Convert to JSON string before storing
Parse back when retrieving
 */
let users = ["Amit", "Rahul"];
localStorage.setItem("users", JSON.stringify(users));

let storedUsers = JSON.parse(localStorage.getItem("users"));
console.log(storedUsers); // ["Amit","Rahul"]

storedUsers.push("John");
localStorage.setItem("users", JSON.stringify(storedUsers));

storedUsers = JSON.parse(localStorage.getItem("users"));
console.log(storedUsers); // ["Amit","Rahul","John"]

/**sessionStorage:
Stores data only for current session
Lost when tab/browser is closed
 */
sessionStorage.setItem("sessionData", "This is session storage data.");
const sessionData = sessionStorage.getItem("sessionData");
console.log(sessionData);
sessionStorage.removeItem("sessionData");
sessionStorage.clear();

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let tasks1 = JSON.parse(localStorage.getItem("tasks") || "[]");
tasks.push("New Task");
tasks1.push("bhavesh");

console.log(tasks);
console.log(tasks1);

//Template Literals (Backticks ``)
let name = "Nisha";
let age = 22;

// Old way
console.log("Hello " + name + ", age " + age);

// Modern way
console.log(`Hello ${name}, age ${age}`);
//upports multi-line strings easily
console.log(`Line1
Line2`);

//Destructuring
//Array Destructuring
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a, b, c); // 1 2 3

//Object Destructuring
let person1 = { name1: "Nisha", age1: 22 };
let { name1, age1 } = person1;
console.log(name1, age1);

const person = { name: "Amit", age: 25, city: "Delhi" };
const { name: personNames, age: personAge, city: personCity } = person;
console.log(personNames, personAge, personCity); // Amit 25 Delhi

/** REST AND SPREAD OPERATORS */
//Rest and Spread Operators
let numbers = [1, 2, 3, 4, 5];
let [firstNum, ...restNums] = numbers;
console.log(firstNum); // 1
console.log(restNums); // [2, 3, 4, 5]
let moreNumbers = [0, ...numbers, 6];
console.log(moreNumbers); // [0, 1, 2, 3, 4, 5, 6]

let colors = ["Red", "Green", "Blue"];
let newColors = [...colors, "Yellow", "Orange"];
console.log(newColors); // ["Red", "Green", "Blue", "Yellow", "Orange"]
console.log(colors); // ["Red", "Green", "Blue"]

let person2 = { name: "Amit", age: 25, city: "Delhi" };
let { name: personName, ...restPerson } = person2;
console.log(personName); // Amit
console.log(restPerson); // {age: 25, city: "Delhi"}

/*
Spread Operator (...)

Copy array/object

Merge arrays/objects

Pass multiple values
*/

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4]

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // {a:1, b:2}

let arr3 = [1, 2, 3];
let [first1, second, ...rest] = arr3;
console.log(first1); // 1
console.log(second); // 2
console.log(rest); // [3]

let obj3 = { a1: 1, b1: 2, c: 3 };
let { a1, b1, ...rest1 } = obj3;
console.log(a1); // 1
console.log(b1); // 2
console.log(rest1); // {c: 3}

/**
 * In JavaScript, the rest element (...) must always be the last element in a destructuring pattern.
 * You cannot have another variable (like last) following a rest parameter.
 */
// let arr4 = [1, 2, 3, 4, 5];
// let [first2, ...rests4, last] = arr4;
// console.log(first2); // 1
// console.log(rests4); // [2, 3, 4]
// console.log(last); // 5

/**REST OPERATOR Rest Operator (...) */
//Collect remaining arguments as an array
function sum(...nums) {
  // return nums.reduce((acc, curr) => acc + curr, 0);
  return nums.reduce(function (acc, curr) {
    console.log(acc, curr);
    return acc + curr;
  }, 0);
}
//BE CAREFULE DURING READ HERE ...NUMS is not Array not Object but it is REST OPERATOR
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum()); // 0

/*
Modules (Import/Export)

Helps split code into files
*/
//Export
/*
// math.js
export function add(a,b){ return a+b; }
export const PI = 3.14;

*/
//Import
/*
// main.js
import { add, PI } from './math.js';
console.log(add(2,3)); // 5
console.log(PI); // 3.14
*/

/*Optional Chaining (?.)
Safely access nested properties
*/
let user = {
  name: "Amit",
  address: {
    city: "Delhi",
    state: "Delhi",
  },
};
console.log(user?.address?.city); // Delhi  // Optional Chaining
console.log(user.address?.city); // Delhi  // Optional Chaining
console.log(user.contact?.phone); // undefined (no error)
//Without Optional Chaining
// console.log(user.contact.phone); // Error: Cannot read property 'phone' of undefined
// console.log(user.address.city); // Error if address is undefined

/*Nullish Coalescing Operator (??)
Use default only if null or undefined
*/
let name3 = null; // null
let name2 = "Amit"; // string
console.log(name3 ?? "Guest"); // Guest
console.log(name2 ?? "Guest"); // Amit
/**
Summary of Benefits to used isValid method:
Prevents Crashes: Methods like localeCompare will throw an error if name is undefined. isValid prevents this.
Data Integrity: It ensures your "People" array only contains actual Person instances, not random objects.
Centralized Logic: If the rules for a "valid person" change (e.g., name must be at least 3 characters), you only have to update the logic in one place
 * 
 */
class Person {
  constructor(name, age) {
    this.name = name || "Unknown";
    this.age = age || 0;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  static create(name, age) {
    return new Person(name, age);
  }

  static createWithValidation(name, age) {
    const temp = new Person(name, age);
    if (!Person.isValid(temp)) {
      console.error("Invalid person data provided");
      return null; // Or throw an error
    }
    return temp;
  }

  // Helper to ensure we are comparing Person instances
  static isValid(p) {
    return p && typeof p.age === "number" && typeof p.name === "string";
  }

  // ASCENDING: Age
  /**
   * Static Methods
   * Call without creating object
   */
  static compareAge(p1, p2) {
    // If one isn't a valid Person, handle it (e.g., push invalid ones to the end)
    if (!Person.isValid(p1)) return 1;
    if (!Person.isValid(p2)) return -1;
    return p1.age - p2.age;
  }

  // DESCENDING: Age
  static compareAgeDesc(p1, p2) {
    return p2.age - p1.age;
  }

  // ASCENDING: Name
  static compareName(p1, p2) {
    return p1.name.localeCompare(p2.name);
  }

  // Multi-level: Age first, then Name
  static compareAgeName(p1, p2) {
    return p1.age - p2.age || p1.name.localeCompare(p2.name);
  }

  // DESCENDING: Name
  static compareNameDesc(p1, p2) {
    return p2.name.localeCompare(p1.name);
  }

  // Multi-level: Name first, then Age
  static compareNameAge(p1, p2) {
    return p1.name.localeCompare(p2.name) || p1.age - p2.age;
  }

  //Methods are inside class, no function keyword
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
  /**Static Methods
   * Call without creating object
   */
  static square(x) {
    return x * x;
  }
}

// Usage
const people = [
  Person.create("Rahul", 30),
  Person.create("Amit", 25),
  Person.create("Arjun", "25"),
];
people.forEach((p) => p.greet());

/**
 * Immutability: Using [...people].sort() creates a shallow copy before sorting. 
 * This prevents the original people array from being shuffled every time you call a new sort method, 
 * which is why your original console logs might have looked confusing.
 
In compareAgeName, I used (p1.age - p2.age) || p1.name.localeCompare(p2.name). 
If the ages are different, the subtraction returns a non-zero number (true) and uses it. 
If ages are equal, it returns 0 (false) and moves to the name comparison.

 Changed compare to compareAge to make the code more readable and explicit.
*/

// Use the spread operator [...array] to avoid mutating the original 'people' list
console.log("Sort by Age:", [...people].sort(Person.compareAge));
console.log("Sort by Age Desc:", [...people].sort(Person.compareAgeDesc));
console.log("Sort by Name:", [...people].sort(Person.compareName));
console.log("Sort Age then Name:", [...people].sort(Person.compareAgeName));

const personA = Person.create("Zara", 28);
//Methods are inside class, no function keyword
console.log("add:", personA.add(5, 10));
console.log("multiply:", personA.multiply(5, 10));
console.log("square:", Person.square(6));

const personB = Person.create("Liam", 32);
const rawData = [
  personA,
  personB,
  null,
  { name: "Fake", age: "25" },
  undefined,
  Person.create("Mia", 22),
];

// Use isValid to filter only high-quality data
const cleanPeople = rawData.filter(Person.isValid); //[...people]; //[...rawData];
console.log("Clean & Sorted by Age:", cleanPeople.sort(Person.compareAge));
console.log("Clean & Sorted by Age:", cleanPeople);

/**Inheritance (Extend a Class)
  extends = inheritance
  Overriding methods possible
 */
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
const dog = new Dog();
dog.speak();

/**Getters & Setters 
 * 
  _width , __height  = convention for private-like variable
  get / set control access
*/
class Rectangle {
  //difference between _ and __ is only naming convention
  constructor(width, height) {
    this._width = width; //Private Variable
    this.__height = height; //Private Variable
  }
  get area() {
    return this._width * this.__height;
  }
  set area(value) {
    this._width = this.__height = value;
  }

  /** 
   * A 'set' accessor must have exactly one parameter.ts(1049)
  set areas(w,h){
    this._width = w;
    this.__height = h;
  }
    */
  get width() {
    return this._width;
  }
  get height() {
    return this.__height;
  }
  set width(value) {
    this._width = value;
  }
  set height(value) {
    this.__height = value;
  }
}
const rect = new Rectangle(10, 20);
console.log("area:", rect.area);
rect.area = 50;
console.log("area:", rect.area); // 2500 (50*50)
console.log("width:", rect.width); // 50
console.log("height:", rect.height); // 50
rect.width = 15;
rect.height = 25;
console.log("area:", rect.area); // 375 (15*25)

/**Error Handling & Try-Catch

Why Error Handling?
Prevent your app from crashing
Show friendly messages to users
Debug code efficiently
 */

//Try-Catch Syntax
try {
  // Code that might throw error
  let result = 10 / 0; // not an error in JS
  console.log("result", result); //result Infinity
} catch (error) {
  console.log("An error occurred:", error);
} finally {
  console.log("This runs always");
}

//Example: Accessing Undefined Property
try {
  let user;
  console.log(user.name); // error
} catch (err) {
  console.log("Caught an error:", err.message);
}

//Throw Custom Errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log(err.message);
}
/**
 * Error Types in JS
 * SyntaxError → invalid code (detected before runtime)
 * ReferenceError → variable not defined
 * TypeError → wrong type
 * RangeError → number out of range
 * EvalError → invalid eval() call
 * URIError → invalid URI function call
 * InternalError (non-standard)
 *
 */

//Example: ReferenceError
try {
  console.log(nonExistentVar);
} catch (err) {
  console.log("ReferenceError caught:", err.message);
}

console.log(typeof undefinedVar); // ReferenceError

//Real-World Example
function validateAge(age) {
  if (age < 0 || age > 150) {
    throw new Error("Invalid age");
  }
  return age;
}

try {
  let age = validateAge(200);
  console.log("Valid age:", age);
} catch (err) {
  console.log("Error:", err.message);
}

console.log(11 / 0);

/**
 * Asynchronous JavaScript (Callbacks, Promises, Async/Await)
Why Asynchronous?
Handle long tasks without blocking UI
Perform tasks in parallel

Event Loop Deep Dive:

JavaScript runs on a single thread, but it can handle async work using the Event Loop, which coordinates the Call Stack, Web APIs, Microtask Queue, and Task (Macrotask) Queue.

JS is single-threaded
Call Stack executes synchronous code
Task Queue holds async tasks
Microtask Queue handles promises
Promises (microtasks) run before setTimeout (macrotasks)

Memory Management & Best Practices:

Use weak references for large objects
Use GC for memory management
JS has automatic garbage collection

Avoid memory leaks:
Remove DOM references no longer used
Clear intervals and timeouts
Use closures wisely
Avoid global variables

Dynamic API Fetch with Error Handling and Async/Await:

*/
/**
 * How the Event Loop works (step-by-step)

JS runs synchronous code on the Call Stack
Async tasks go to Web APIs

When ready:
Promise callbacks → Microtask Queue
Timers/events → Task Queue

Event Loop rule:
If Call Stack is empty:
Run all microtasks
Then run one macrotask

Repeat forever
 */
async function fetchUser(id) {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("User not found");
    let data = await res.json();
    console.log(data.name);
  } catch (err) {
    console.log(err.message);
  }
}

fetchUser(1);
fetchUser(100); // error handled
