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


learn and make this mannualy flatter for learning

function flatern(arr){
  return arr.flat(Infinity);
}

function flaaterMap(arr){
  // return arr.flatMap((item)=>item*2);// not working on nested
return arr.flatMap((item)=>{
  if(Array.isArray(item)){
   return flaaterMap(item);
  }else{
    if(typeof item==="object"&&!Array.isArray(item)){
      for (let key in item){
        return item[key]*2;
      }
    }else{
    return item*2;}
  }
});
  
}

function flatterArray(arr){
let result=[];

for(let item of arr)
{

  if(Array.isArray(item)){
    result.push(...flatterArray(item));
  }else{
    if(typeof item==="object"&&!Array.isArray(item)){

for (let key in item) {
  if (Object.hasOwn(item, key)) {
    result.push(item[key]);
  }
}

// Object.keys(item).forEach(key => console.log(key));

    //  Object.entries(item).forEach(([key, value]) => {
    //   console.log(`${key}: ${value}`);
    //   });

    }else{
    result.push(item);}
  }
}

  return result;
}

const arr=[1,2,[7,8,9,[10,11,12,[13,14,15],16],17],18,19,20,{a:21,b:22,c:23}];

console.log(`simple flat arrray is ${flatern(arr)}`);
console.log(flatern(arr));
console.log("heyyy");
// console.log(`flat arrray recursive ${flatterArray(arr)}`);
const ar1=flatterArray(arr);
console.log(ar1);

console.log("flattern map",flaaterMap(arr));
console.log(`simple flat map arrray is ${flaaterMap(arr)}`);


CHAT GPT GIVE OTHER WAY TO SOLVE THAT

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


Why this is better

One clear responsibility

Handles:

nested arrays

objects

primitive values

Easy to extend later


Deep flatten with transformation (your flatMap idea)

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


Usage

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
