var arr1 = [1, 2, 3, 43, , 6, 7, 7, 8, 8, 899, 0, 0];
// we want to log all the numberes
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
// above line will do the work but we will do this byusing the foreach method
arr1.forEach(function (arrItem) {
    console.log(arrItem);
});
// now we only want those elements which are greater than 100
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 100) {
        console.log(arr1[i]);
    }
}
// now we will do this by using the fillter 
var result = arr1.forEach(function (arrItem) {
    if (arrItem > 100) {
        return arrItem;
    }
});
// now we are going to do the same by using the arroe function 
var result2 = arr1.filter(function (item) { return item > 100; });
console.log(result2);
var x = prompt("Where does the Pope live?");
 if (x === "Vatican") {
 alert("Correct!");
 }
 if (x !== "Vatican") {
 alert("Wrong answer");
 }
