let n = 5; 
for (let i = 1; i <= n; i++) {
    let str = " ".repeat(n - i); // Add leading spaces
    let stars = "*".repeat(2 * i - 1); // Add odd number of stars
    console.log(str + stars);
}

/**

    *
   ***
  *****
 *******
*********


*/

// let rows = 5;
for (let i = 1; i <= n; i++) {
    let line = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) {
        line += j + " "; // Add numbers with a space
    }
    console.log(line);
}

/**

    1 
   1 2 
  1 2 3 
 1 2 3 4 
1 2 3 4 5 

*/
