let dd:Date=new Date();
let required:Date=new Date("january 21, 2025");
let dd2=dd.getTime();
let dd3=required.getTime();
let milSec:any=dd2-dd3;
const diff:number=milSec/(1000*60*60*24)
console.log(diff);

// let milSec:Number=(required-dd);
