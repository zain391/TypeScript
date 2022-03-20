var dd = new Date();
var required = new Date("january 21, 2025");
var dd2 = dd.getTime();
var dd3 = required.getTime();
var milSec = dd2 - dd3;
var diff = milSec / (1000 * 60 * 60 * 24);
console.log(diff);
// let milSec:Number=(required-dd);
