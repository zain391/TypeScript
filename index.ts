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


