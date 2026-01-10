let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);

console.log(result);


//find()
let nums = [5, 8, 12, 20];
console.log(nums.find(n => n > 10));


//some()
console.log(nums.some(n => n > 15)); // true

//every()
console.log(nums.every(n => n > 0)); // true
