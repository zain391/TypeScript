var dd = new Date();
var required = new Date("january 21, 2025");
var dd2 = dd.getTime();
var dd3 = required.getTime();
var milSec = dd2 - dd3;
console.log(milSec);
console.log(typeof (dd2));
console.log(typeof (dd3));
// let milSec:Number=(required-dd);
