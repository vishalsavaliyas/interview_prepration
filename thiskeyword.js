/***********************************************************************
 * JAVASCRIPT "this" KEYWORD - COMPLETE GUIDE
 * ---------------------------------------------------------------------
 * The value of "this" depends on HOW a function is called.
 * It does NOT depend on where the function is written.
 *
 * In simple words:
 *   this = the object that is calling the function
 *
 * There are 7 main cases:
 * 1. Global Space
 * 2. Inside Normal Function
 * 3. Inside Object Method
 * 4. call(), apply(), bind()
 * 5. Arrow Functions
 * 6. DOM Elements
 * 7. Classes & Constructors
 ***********************************************************************/


/***********************************************************************
 * 1️⃣ "this" IN GLOBAL SPACE
 ***********************************************************************/

// In browser -> global object = window
// In NodeJS -> global object = global

console.log(this);

/*
OUTPUT IN BROWSER:
Window {...}

OUTPUT IN NODE:
global {...}
*/



/***********************************************************************
 * 2️⃣ "this" INSIDE NORMAL FUNCTION
 ***********************************************************************/

function showThis() {
    console.log(this);
}

showThis();

/*
NON STRICT MODE:
this = window

STRICT MODE:
this = undefined
*/


// Enable strict mode
"use strict";

function strictExample(){
    console.log(this);
}

strictExample();

/*
OUTPUT:
undefined

Reason:
In strict mode JS does NOT substitute this with window.
*/



/***********************************************************************
 * 3️⃣ THIS SUBSTITUTION
 ***********************************************************************/

/*
If "this" becomes undefined or null,
JavaScript replaces it with global object
ONLY IN NON-STRICT MODE.
*/

function test(){
    console.log(this);
}

test(); 
/*
NON STRICT:
Window

STRICT:
undefined
*/



/***********************************************************************
 * 4️⃣ "this" INSIDE OBJECT METHOD
 ***********************************************************************/

const obj = {
    a: 10,
    x: function(){
        console.log(this);
    }
};

obj.x();

/*
OUTPUT:
{ a: 10, x: f }

Reason:
Function is called by obj.
So this = obj
*/



/***********************************************************************
 * 5️⃣ IMPORTANT RULE
 ***********************************************************************/

/*
The value of "this" depends on HOW a function is called
NOT where it is written.
*/



/***********************************************************************
 * 6️⃣ call(), apply(), bind()
 *
 * These methods allow us to control the value of "this".
 ***********************************************************************/

const student = {
    name: "Bhavesh",
    age: 22,
    print: function(){
        console.log(this.name);
    }
};

student.print();

/*
OUTPUT:
Bhavesh
*/


const student2 = {
    name: "Rajani"
};

student.print.call(student2);

/*
OUTPUT:
Rajani

call() allows us to borrow a method
and change the "this" value.
*/



/***********************************************************************
 * call()
 ***********************************************************************/

let names = {
    firstName: "Bhavesh",
    lastName: "Rajani"
};

let printFullName = function(hometown, state){
    console.log(
        this.firstName + " " + this.lastName +
        " from " + hometown + ", " + state
    );
};

printFullName.call(names, "Surat", "Gujarat");

/*
OUTPUT:
Bhavesh Rajani from Surat, Gujarat
*/



/***********************************************************************
 * apply()
 ***********************************************************************/

printFullName.apply(names, ["Surat", "Gujarat"]);

/*
Difference between call and apply:

call  -> arguments separated by comma
apply -> arguments inside array
*/



/***********************************************************************
 * bind()
 ***********************************************************************/

/*
bind() does NOT execute immediately.
It returns a new function.
*/

const nameBind = printFullName.bind(names, "Ontario");

nameBind("Canada");

/*
OUTPUT:
Bhavesh Rajani from Ontario, Canada
*/



/***********************************************************************
 * METHOD BORROWING EXAMPLE
 ***********************************************************************/

const obj1 = {
    name: "Bhavesh",
    print: function(){
        console.log(this.name);
    }
};

const obj2 = {
    name: "Rajani"
};

obj1.print.call(obj2);

/*
OUTPUT:
Rajani

obj2 borrowed obj1 method
*/



/***********************************************************************
 * 7️⃣ THIS INSIDE ARROW FUNCTION
 ***********************************************************************/

/*
Arrow functions DO NOT have their own this.

They inherit this from their lexical parent.
*/

const arrowObj = {
    name: "Bhavesh",

    normalFunction: function(){
        console.log("Normal:", this.name);
    },

    arrowFunction: () => {
        console.log("Arrow:", this.name);
    }
};

arrowObj.normalFunction();

/*
OUTPUT:
Normal: Bhavesh
*/

arrowObj.arrowFunction();

/*
OUTPUT:
Arrow: undefined

Reason:
Arrow functions take this from outer scope (window).
*/



/***********************************************************************
 * 8️⃣ ARROW FUNCTION INSIDE METHOD
 ***********************************************************************/

const person = {
    name: "Bhavesh",

    print: function(){
        const arrow = () => {
            console.log(this.name);
        };

        arrow();
    }
};

person.print();

/*
OUTPUT:
Bhavesh

Reason:
Arrow function inherits this from parent function.
*/



/***********************************************************************
 * 9️⃣ "this" INSIDE DOM ELEMENT
 ***********************************************************************/

/*
In DOM event handlers,
this refers to the HTML element.
*/

<button onclick="console.log(this)">
Click Me
</button>

/*
OUTPUT:
<button>Click Me</button>
*/

<button onclick="console.log(this.tagName)">
Click Me
</button>

/*
OUTPUT:
BUTTON
*/



/***********************************************************************
 * 🔟 "this" IN CLASS
 ***********************************************************************/

class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hello " + this.name);
    }
}

const p1 = new Person("Bhavesh", 22);

p1.greet();

/*
OUTPUT:
Hello Bhavesh

this = instance of the class
*/



/***********************************************************************
 * CLASS METHOD BORROWING
 ***********************************************************************/

class Student {

    constructor(name){
        this.name = name;
    }

    print(){
        console.log(this.name);
    }
}

const s1 = new Student("Bhavesh");
const s2 = { name: "Rajani" };

s1.print.call(s2);

/*
OUTPUT:
Rajani
*/



/***********************************************************************
 * 🚀 EASY INTERVIEW SUMMARY
 ***********************************************************************/

/*
1. Global Space
   this = window (browser)

2. Normal Function
   strict mode  -> undefined
   non strict   -> window

3. Object Method
   this = object calling the function

4. call()
   invokes function immediately
   arguments separated by comma

5. apply()
   invokes function immediately
   arguments passed as array

6. bind()
   returns new function
   does not execute immediately

7. Arrow Function
   does NOT have its own this
   inherits from parent scope

8. DOM Event
   this = HTML element

9. Class
   this = instance of class
*/
