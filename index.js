// now we are going to learn about the Generics in typescript
var fun = function (arr) {
    return arr[arr.length - 1];
};
var fun1 = fun([1, 2, 3, 4]);
console.log(fun1);
// the above example was without using the generics
var funfun = function (arr) {
    return arr[arr.length - 1];
};
var funfun1 = funfun([1, 2, 3, 4, 5,]);
var funfun2 = funfun(['1', '2', '3', '4', '5']);
var objOne = {
    name: "zain",
    age: 20,
    isMale: true,
    birthMark: null
};
// now we are going to use the for in loop to read the values in objects
for (var x in objOne) {
    console.log(objOne[x]);
}
