// now we are going to learn about the dates in the typescript
var date1 = new Date();
console.log(date1);
console.log(date1.toString());
function display(d) {
    console.log("getFullYear", d.getFullYear());
    console.log("getTiem stamp", d.getTime());
    console.log("getDay", d.getDay());
    console.log("getHours", d.getHours());
    console.log("getMinutes", d.getMinutes());
    console.log("getSeconds", d.getSeconds());
    console.log("getMilliseconds", d.getMilliseconds());
}
display(new Date());
