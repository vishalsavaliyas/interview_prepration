/**
 * A more robust counter module using closures.
 * It encapsulates the state and provides multiple methods to interact with it.
 */
function createCounter(initialValue = 0) {
  // Private variable - cannot be accessed directly from outside
  let count = initialValue;

  // Private helper functions (Internal logic)
  const logAction = (action) => console.log(`Action performed: ${action}`);

  //this is return object that is contain anonymous methods
  return {
    // 1. Increment method
    increment: function() {
      count += 1;
      logAction("Increment");
      return count;
    },

    // 2. Decrement method
    decrement: function() {
      count -= 1;
      logAction("Decrement");
      return count;
    },

    // 3. Reset method
    reset: function() {
      count = initialValue;
      logAction("Reset");
      return count;
    },

    // 4. Getter method to view the current value without changing it
    getValue: function() {
      return count;
    }
  };
}

// Usage:
const myCounter = createCounter(10);

console.log(`Initial Value: ${myCounter.getValue()}`); // 10
console.log(`After Increment: ${myCounter.increment()}`); // 11
console.log(`After Increment: ${myCounter.increment()}`); // 12
console.log(`After Decrement: ${myCounter.decrement()}`); // 11
console.log(`After Reset: ${myCounter.reset()}`); // 10
/*
Encapsulation (Privacy): The count variable is "private." You cannot do myCounter.count = 500. You can only change it through the methods provided.
State Management: By returning an object { increment, decrement, reset }, you follow the same pattern used by many modern libraries like Redux or React's useState.
Arguments: Added initialValue so you can start your counter at any number (e.g., createCounter(100)).
The "Why" behind count error: In your original code, console.log(count) failed because count is scoped inside the function. To learn more about this behavior, check out the documentation on MDN Closures.
Naming: Renamed counter to createCounter to follow the "Factory Function" naming convention, and used descriptive method names.
*/

/*
Feature 	          Benefit	                  Example Use Case
Data Privacy	      Encapsulation	            Private state in a counter or stack
Function Factories	Reusability	              Creating specific "adders" or "loggers"
Memoization	        Performance	              Caching expensive calculation results
Event Listeners	    Context	                  Keeping track of clicks or input values
Async Callbacks	    Continuity	              Remembering IDs during a database fetch

*/
