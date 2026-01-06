function flatten(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
}

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const br=flatten(nestedArray);
console.log(br);
output is [ 1, 2, 3, 4, 5, 6 ]
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It does not modify the original array.
