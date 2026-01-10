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


function printDiamond(n) {
    // Upper part (1 to n)
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
    // Lower part (n-1 down to 1)
    for (let i = n - 1; i >= 1; i--) {
        let spaces = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

printDiamond(5);

/**


    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

function printNumberDiamond(n) {
    // Upper half (includes the middle row)
    for (let i = 1; i <= n; i++) {
        let row = " ".repeat(n - i); // Add leading spaces
        // Add increasing numbers followed by decreasing numbers
        for (let j = 1; j <= i; j++) row += j;
        for (let j = i - 1; j >= 1; j--) row += j;
        console.log(row);
    }
    // Lower half
    for (let i = n - 1; i >= 1; i--) {
        let row = " ".repeat(n - i);
        for (let j = 1; j <= i; j++) row += j;
        for (let j = i - 1; j >= 1; j--) row += j;
        console.log(row);
    }
}

printNumberDiamond(5);

/**
    1
   121
  12321
 1234321
123454321
 1234321
  12321
   121
    1

*/
