let dd:Date=new Date();
let required:Date=new Date("january 21, 2025");
let dd2=dd.getTime();
let dd3=required.getTime();
let milSec:any=dd2-dd3;
console.log(milSec);
console.log(typeof(dd2));
console.log(typeof(dd3));

// let milSec:Number=(required-dd);
