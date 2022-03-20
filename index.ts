let dd:Date=new Date();
let required:Date=new Date("january 21, 2025");
let dd2=dd.getTime();
let dd3=required.getTime();
let milSec:any=dd3-dd2;
let diff:number=milSec/(1000*60);
diff=Math.ceil(diff);
console.log(diff);

// let milSec:Number=(required-dd);
