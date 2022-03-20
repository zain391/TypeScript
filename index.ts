// we are going to learn about the js as well as the ts
// firs twe will do the variables and data types
const num:number=45;
console.log(typeof(num));
const num1:number=45.56;
console.log(typeof(num));
console.log(num1);
const str1:string="i am a string and also have data type string";
console.log(str1);

// alert("i am an alert");
// let alert1:string=alert("i am an alert");
// let alert2:string=alert("i am an alert");

// now we will learn about the functions in the js 
function name1(name:number,age:string){
    console.log(`i am ${name} i am ${age} year old`);
    console.log(`i am`+name+age);
    
}
// name1(20,"20");
// now we will work on objects
// in typescript we create objects in three ways
interface Obj{
    name:string,
    age:number,
    height:number
}
let myObj:Obj={
    name:'zain',
    age:20,
    height:5.10
}

console.log("this is how we create an object in js",myObj);












