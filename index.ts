// now we are going to learn about the Generics in typescript
let fun=(arr:number[])=>{
    return arr[arr.length -1];
}
const fun1=fun([1,2,3,4]);
console.log(fun1);
// the above example was without using the generics
let funfun=<T>(arr:T[])=>{
    return arr[arr.length-1];
}
const funfun1=funfun([1,2,3,4,5,]);
const funfun2=funfun(['1','2','3','4','5']);
// so this is how we can use the generics

// now we are going to learn about the for in loops in js
// for in loop is used for the objects in the js
interface obj{
    name:string,
    age:number,
    isMale:boolean,
    birthMark:null,
}
let objOne:obj={
    name:"zain",
    age:20,
    isMale:true,
    birthMark:null,
}
// now we are going to use the for in loop to read the values in objects
for(let x in objOne){
    console.log(objOne[x]);
    
}

















