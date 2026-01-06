console.log("Hello, World!");
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
}

let ht=[{
  name:'bhavesh',
age:3
 
},{
  name:'sagar',
age:4
 
}]
let abc={
  name:'bhavesh',
age:3
 
}
const cda=deepClone(abc);
console.log(cda);
abc.age=4;
abc.name='sagar';
console.log("cda",cda);
console.log("abc",abc);
console.log("ht",ht);
const tt=deepClone(ht);
console.log("tt",tt);

tt.forEach((tv)=>{
   tv.age=5;
})
console.log("tt",tt);
console.log("ht",ht);
