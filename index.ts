// now we are going to learn about the dates in the typescript
let date1:Date=new Date();
console.log(date1);
console.log(date1.toString());
function display(d:Date){
    console.log("getFullYear",d.getFullYear());
    console.log("getTiem stamp",d.getTime());
    console.log("getDay",d.getDay());
    console.log("getHours",d.getHours());
    console.log("getMinutes",d.getMinutes());
    console.log("getSeconds",d.getSeconds());
    console.log("getMilliseconds",d.getMilliseconds());
    
}
display(new Date());
let dd:Date=new Date();
let required:Date=new Date("january 21, 2025");
console.log(dd);
console.log(required);
console.log(typeof(required));

// let milSec:Number=(required-dd);
