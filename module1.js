// export const myself='zain';
// export const mtself1='qamer';
import Umer from "./module2";
console.log(Umer);
const message=()=>{
    const name1='Ahmed';
    const age=23;
    return name1 + 'is ' +age + 'year old';
}
export default message;
// now we are going to learn about the JSON 
export const JSONTry={
    'employees':[
        {'firstName':'jhon','lastName':'Doe'},
        {'firstName':'Anna','lastName':'Smith'},
        {'firstName':'Peter','lastName':'Jones'},
        
    ]
}
// now we are going to know about one of the most inportant concept of the programming language whihc is 
// Pass by value , and pass by reference

// first thing to know is that the pass by value works with primitive data type 
// and pass by refernce works with non primitive data types (objects arrays etc)
const passByValue=()=>{
    let a=5;
let b=a;
console.log(a);
console.log(b);
}
const passByReference=()=>{
    let arr1=[1,2,3];
    let arr2=arr1;
    console.log(arr1);
    console.log(arr2);
    arr2.push(4);
}

























