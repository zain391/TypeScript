// import { passByValue,passByReference } from "./module1";
// passByValue();
// passByReference();
const passByValue=()=>{
    let a=5;
let b=a;
console.log(a);
console.log(b);
b=23;
console.log('a',a);
console.log('b',b);
}
const passByReference=()=>{
    let arr1=[1,2,3];
    let arr2=arr1;
    console.log(arr1);
    console.log(arr2);
    arr2.push(4);
    console.log('arr1',arr1);
    console.log('arr2',arr2);
}
passByValue();
passByReference();
const Umer='umer';
// export default Umer;