const flattenArray = (arr) => arr.flat(Infinity);

function deepFlatten(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...deepFlatten(item));
    } 
    else if (item !== null && typeof item === "object") {
      result.push(...Object.values(item));
    } 
    else {
      result.push(item);
    }
  }

  return result;
}


function deepFlattenMap(arr, transform = x => x) {
  return arr.flatMap(item => {
    if (Array.isArray(item)) {
      return deepFlattenMap(item, transform);
    }
    if (item !== null && typeof item === "object") {
      return Object.values(item).map(transform);
    }
    return transform(item);
  });
}


const arr = [
  1, 2,
  [7, 8, 9, [10, 11, 12, [13, 14, 15], 16], 17],
  18, 19, 20,
  { a: 21, b: 22, c: 23 }
];

console.log(deepFlatten(arr));
// [1, 2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

console.log(deepFlattenMap(arr, x => x * 2));
// [2, 4, 14, 16, ... , 46]
