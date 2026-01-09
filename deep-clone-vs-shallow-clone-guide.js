/*******************************************************
 * CLONING IN JAVASCRIPT - COMPLETE GUIDE
 * 
 * 1. Primitive Copy
 * 2. Shallow Copy (Multiple Ways)
 * 3. Deep Copy (Multiple Ways)
 * 4. Comparison & Notes
 *******************************************************/


/*******************************************************
 * 1. PRIMITIVE VALUES
 * Primitive values are copied by VALUE automatically
 * Shallow vs Deep has NOTHING to do with primitives
 *******************************************************/
let x = 10;
let y = x;
y = 20;

console.log("Primitive Copy:", x, y); // 10, 20



/*******************************************************
 * SAMPLE DATA
 *******************************************************/
const obj = {
  a: "11",
  b: {
    inner: "22"
  },
  c: ["x", "y"]
};

const arr = ["aa", "bb", "cc"];



/*******************************************************
 * 2. SHALLOW COPY METHODS
 * Shallow copy copies only the FIRST LEVEL.
 * Nested objects/arrays still share references.
 *******************************************************/


/* 2.1 Shallow Copy using Object.assign */
const shallowAssign = Object.assign({}, obj);

/* 2.2 Shallow Copy using Spread Operator */
const shallowSpread = { ...obj };

/* 2.3 Shallow Copy Array using Spread */
const shallowArray = [...arr];

/* 2.4 Generic Shallow Copy Function */
function shallowClone(value) {
  if (value === null || typeof value !== "object") return value;
  return Array.isArray(value) ? [...value] : { ...value };
}

const shallowGeneric = shallowClone(obj);

/* Demonstrating shallow copy problem */
shallowSpread.b.inner = "99";

console.log("Shallow Copy Effect:");
console.log(obj.b.inner); // 99 (affected ❌)
console.log(shallowSpread.b.inner); // 99



/*******************************************************
 * 3. DEEP COPY METHODS
 * Deep copy creates a completely independent clone
 *******************************************************/


/* 3.1 Deep Copy using Recursion (Custom Implementation)
 * - Handles Objects & Arrays
 * - Does NOT handle:
 *   Date, Map, Set, Function, Circular reference
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // primitive value
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]); // recursive call
    }
  }

  return clone;
}

const deepRecursive = deepClone(obj);
deepRecursive.b.inner = "55";

console.log("Deep Recursive:");
console.log(obj.b.inner); // 99 (unchanged ✅)
console.log(deepRecursive.b.inner); // 55



/* 3.2 Deep Copy using structuredClone (BEST MODERN WAY)
 * - Supports:
 *   Object, Array, Date, Map, Set
 *   Circular references
 * - Not supported for Functions & DOM nodes
 * - Available in modern browsers & Node.js 17+
 */
const deepStructured = structuredClone(obj);
deepStructured.c[0] = "changed";

console.log("structuredClone:");
console.log(obj.c[0]); // x (unchanged ✅)
console.log(deepStructured.c[0]); // changed



/* 3.3 Deep Copy using JSON (OLD METHOD)
 * - Loses:
 *   undefined, function, symbol
 *   Date becomes string
 * - Cannot handle circular references
 * ❌ Not recommended for real applications
 */
const deepJSON = JSON.parse(JSON.stringify(obj));



/* 3.4 Deep Copy using Library (Production Ready)
 * Lodash cloneDeep
 * 
 * import cloneDeep from "lodash/cloneDeep";
 * const deepLodash = cloneDeep(obj);
 */



/*******************************************************
 * 4. ARRAY DEEP COPY
 *******************************************************/
const deepArray = deepClone(arr);
deepArray[0] = "pp";

console.log("Array Deep Copy:");
console.log(arr[0]); // aa
console.log(deepArray[0]); // pp



/*******************************************************
 * 5. SUMMARY
 *******************************************************/
/*
SHALLOW COPY:
- Object.assign()
- Spread operator {...obj}, [...arr]
- Copies only top-level
- Nested references shared ❌

DEEP COPY:
- Recursive function (limited)
- structuredClone() ✅ BEST
- JSON.parse/stringify ❌
- Lodash cloneDeep ✅ PRODUCTION

INTERVIEW TIP:
"Shallow copy copies references, deep copy copies values."
*/

console.log("✔ Cloning guide loaded successfully");
