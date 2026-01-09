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


//2nd cluaser example
/**
 * Creates an async task handler using a closure.
 */
function createAsyncFetcher() {
  // Private variables remembered by the closure
  let isLoading = false;
  let lastData = null;

  // Returning an object with async methods
  return {
    fetchUserData: async function(userId) {
      if (isLoading) {
        console.log("Please wait, a request is already in progress...");
        return;
      }

      isLoading = true; // State persists across the await boundary
      console.log(`Fetching data for User: ${userId}...`);

      try {
        // The closure remembers 'userId' even after this function pauses here
        const response = await fetch(`jsonplaceholder.typicode.com{userId}`);
        lastData = await response.json();
        
        console.log("Success!", lastData.name);
        return lastData;
      } catch (error) {
        console.error("Fetch failed:", error);
      } finally {
        isLoading = false; // Resetting state so next call can proceed
      }
    },

    getStatus: () => ({ isLoading, lastData })
  };
}

// Usage
const userFetcher = createAsyncFetcher();

// Call 1: Starts the task
userFetcher.fetchUserData(1);

// Call 2: Immediately tries to start another (blocked by the closure state)
userFetcher.fetchUserData(2); 

// Check state after a delay
setTimeout(() => {
  console.log("Final State:", userFetcher.getStatus());
}, 2000);

/**
Why this is powerful:
Async State Persistence: The isLoading variable lives in the closure. Even though the fetchUserData function "pauses" at the await line, it still has access to that exact same variable when the network request returns.
Request Throttling: You can prevent duplicate API calls (or "race conditions") by checking the private isLoading flag before starting a new task.
Modular Cleanup: In 2026, you can use the await using syntax for automatic resource disposal within async closures, ensuring memory is cleared once the task finishes.
Encapsulation: External code cannot accidentally set isLoading = false because it is hidden inside the createAsyncFetcher scope. 
*/
