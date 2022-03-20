// we are going to learn about the js as well as the ts
// firs twe will do the variables and data types
var num = 45;
console.log(typeof (num));
var num1 = 45.56;
console.log(typeof (num));
console.log(num1);
var str1 = "i am a string and also have data type string";
console.log(str1);
// alert("i am an alert");
// let alert1:string=alert("i am an alert");
// let alert2:string=alert("i am an alert");
// now we will learn about the functions in the js 
function name1(name, age) {
    console.log("i am ".concat(name, " i am ").concat(age, " year old"));
    console.log("i am" + name + age);
}
// name1(20,"20");
// working with unions
function cars(name, price, varified) {
}
cars('honda', 10000, true);
// the line below will give an error cuz of data type if we want a variable to have
// more than one data type then we use the union 
// cars('honda',"10000",true);
function cars2(name, price, varified) {
    console.log(typeof (price));
    console.log(name.toUpperCase());
    //  narrow the union with code
    if (typeof (price) == 'string') {
        console.log(price.toUpperCase());
    }
    else {
        console.log("i am not a string", price);
    }
}
cars2('honda', "10000", true);
cars2('honda', 10000, true);
console.log(typeof (cars2));
var myObj = {
    name: 'zain',
    age: 20,
    height: 5.10
};
console.log("this is how we create an object in js", myObj);
