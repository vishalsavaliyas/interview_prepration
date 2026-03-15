/***********************************************************************
 * JAVASCRIPT ASYNC / AWAIT & PROMISES - COMPLETE LEARNING EXAMPLE
 Basics of Javascript
*Variables
 var, let, const
* Hoisting of variables

Functions:
-Arrow Functions
-Higher order Functions


Array & Object
-Array Destructuring
-Object Destructuring
-rest operator
-spread operator

COnditions in Javascript
-if else
-ternary operator
-using && and ||
-optional chaning

Array Methods
-map()
-filter()
-reduce()
-sort()

Event Listner
-onClick
-onBlur
-onChange
-onFocue

setTimeout() & setInterval()

Event Bubbling & Capturing & Event Delegation


Asynchronous Events
-Callbacks
-Callback Hell
-Promises
-Promises APIs
-async/await

-this keyword, call,apply & bind

  
 **********************************************************************/



/***********************************************************************
 * 1️⃣ ASYNC FUNCTION BASICS
 * ---------------------------------------------------------------------
 * - An async function ALWAYS returns a Promise.
 * - Even if you return a normal value, JavaScript automatically wraps it
 *   into Promise.resolve(value).
 ***********************************************************************/

async function getData() {
    return "bhavesh"; // internally becomes Promise.resolve("bhavesh")
}

// calling async function
const dataPromise = getData();

// async function returns a Promise object
console.log("Returned value from async function:", dataPromise);

/*
Expected Output

Promise {<fulfilled>: 'bhavesh'}
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "bhavesh"
*/



/***********************************************************************
 * 2️⃣ HANDLING PROMISE RESULT USING .then()
 * ---------------------------------------------------------------------
 * - .then() is used to get the resolved value from a Promise.
 * - This was the common way BEFORE async/await existed.
 ***********************************************************************/

dataPromise.then((result) => {
    console.log("Resolved value from getData():", result);
});



/***********************************************************************
 * 3️⃣ CREATING PROMISES
 * ---------------------------------------------------------------------
 * A Promise represents a value that will be available in the future.
 *
 * Promise states:
 * 1. Pending   -> initial state
 * 2. Fulfilled -> resolve() called
 * 3. Rejected  -> reject() called
 *
 * IMPORTANT:
 * The executor function inside new Promise() runs IMMEDIATELY.
 ***********************************************************************/

const promiseExample = new Promise((resolve, reject) => {

    console.log("Promise1 executor runs immediately");

    setTimeout(() => {
        resolve("Promise1 resolved after 10 seconds");
    }, 10000);

});


const promiseExample2 = new Promise((resolve, reject) => {

    console.log("Promise2 executor runs immediately");

    setTimeout(() => {
        resolve("Promise2 resolved after 5 seconds");
    }, 5000);

});


const promiseExample3 = new Promise((resolve, reject) => {

    console.log("Promise3 executor runs immediately");

    setTimeout(() => {
        resolve("Promise3 resolved after 15 seconds");
    }, 15000);    

});

/***********************************************************************
 * 4️⃣ HANDLING PROMISE USING .then()
 * ---------------------------------------------------------------------
 * Traditional method before async/await
 ***********************************************************************/

function handlePromiseWithThen() {

    promiseExample.then((result) => {
        console.log("Result using .then():", result);
    });

}

handlePromiseWithThen();



/***********************************************************************
 * 5️⃣ USING ASYNC / AWAIT
 * ---------------------------------------------------------------------
 * - async/await makes Promise code look synchronous.
 * - await pauses execution of the async function until the Promise
 *   resolves.
 * - await can ONLY be used inside an async function.
 ***********************************************************************/

async function handlePromiseWithAsyncAwait() {

    console.log("Step 1: Async function started");

    /*
     * await pauses the execution until promiseExample resolves.
     */
    const result = await promiseExample; //suspend execution and remove from call stack until promiseExample resolves   after complete promise its come back in call stack for execution

    console.log("Step 2: Promise resolved ->", result);

    console.log("Step 3: Continue execution after await");


    /*
     * If we await the SAME resolved promise again,
     * it returns immediately because the promise is already resolved.
     */

    const result2 = await promiseExample;

    console.log("Step 4: Second await result ->", result2);

    console.log("Step 5: Continuing execution");


    /*
     * Waiting for another Promise
     * (this will wait until promiseExample2 resolves)
     */

    const result3 = await promiseExample2;

    console.log("Step 6: Promise2 result ->", result3);

    const result4 = await promiseExample3;
    console.log("Step 7: Promise3 result ->", result4);

}


// calling async function
handlePromiseWithAsyncAwait();



/***********************************************************************
 * ⭐ VERY IMPORTANT CONCEPT
 * ---------------------------------------------------------------------
 * Promise execution vs await behavior
 *
 * ❗ Promise starts executing immediately when created
 * ❗ await DOES NOT start the promise
 * ❗ await only waits for the result
 *
 * In this example:
 * promiseExample and promiseExample2 started running when defined.
 * await simply waits for them.
 ***********************************************************************/



/***********************************************************************
 * 6️⃣ EVENT LOOP + MICROTASK QUEUE EXAMPLE
 * ---------------------------------------------------------------------
 * This example demonstrates how async/await works internally with the
 * JavaScript event loop.
 ***********************************************************************/

async function test() {

    console.log("1");

    /*
     * Promise.resolve() resolves immediately,
     * but await pushes the continuation into the Microtask Queue.
     */

    const data = await Promise.resolve("2");

    console.log(data);

    console.log("3");

}

console.log("start");

test();

console.log("end");


/*
Final Output

start
1
end
2
3

Explanation:

1️⃣ start → synchronous
2️⃣ test() starts
3️⃣ console.log("1")
4️⃣ await pauses function
5️⃣ main thread continues → end
6️⃣ microtask queue runs → 2
7️⃣ then → 3
*/

/*
MAIN IMPORTANT POINT IS

await does NOT start promise

Bad assumption many developers make:

❌ await starts promise

Correct:

✅ promise starts when created
✅ await only waits

*/


//actual async wait
async function getServiceData(){
    try{
    const data=await fetch('https://jsonplaceholder.typicode.com/posts/1');//here suspend function and fetch return promise
    const jsonValue=await data.json();//data.json return promise
    console.log(jsonValue);//execute again and come back into call stacke when promise resolve
    }catch(err){
        console.log(err);
    }   
}

getServiceData();
//other way handle error if not write try catch there getServiceData().catch((err)=>console.log(err));
//async keyword used with function to make it async function, its return promise and await keyword used only inside async function to wait promise  execution    


/*
Async await vs Promise 


While Async/Await is built on top of Promises, they differ in how they look and handle the flow of your code. Think of async/await as "syntactic sugar" that makes asynchronous code look and behave like synchronous code.

Feature	Promises (.then)	Async/Await
Readability	Can lead to "Promise Hell" with deep nesting.  **	Very clean; reads like standard synchronous code.
Error Handling	Uses .catch() at the end of the chain.	** Uses standard try/catch blocks.
Debugging	Harder to set breakpoints inside arrow functions.	** Easy to debug; you can step through lines one by one.
Conditionals	Messy; often requires nesting or repeating code.	** Simple; use standard if/else around await.


 When to use which?
Use Async/Await for 90% of your daily work. It is easier to read, write, and maintain, especially when one request depends on the result of a previous one.
Use Promises when you need to run tasks in parallel. For example, Promise.all([request1, request2]) starts both at the same time, whereas await would run them one after the other.


*/
