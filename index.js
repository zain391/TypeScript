// now we are going to learn about the promises in the js
const fun1=function (){
    return new Promise(function (resolve,reject){
        setTimeout(() => {
            const val=false;
            if(!val){
                console.log("you have come to meet me ");
                resolve();
            }else{
                console.log('you did not came to see me');
                reject();
            }
        }, 3000);
    });
}
fun1().then(
    function (){
        document.write("as you have resolved your promise now we will go out to have a drink")
    }
).catch(function (){
    document.write("you rejected your promise now i will no longer talk to you ")
});

// now we are going to learn about the async and await in the js
// async and await are for easyly understanding and writting promises sode in the js
// all you have to fo is to write async before a function and that particular function will become a promise (as we know that the promise accepts teo parameters functions (rject and resolve so in aysnc we also deal with reject and resolve)).
const fun2=function (){
    return 34;
}
console.log(fun2());
// the above function is a normal function 
const fun3=async function (){
    
}
console.log(fun3());
// if we do not handle the reject and resolve seperatelly as we are doing now then the function will always return resolve 
// now we are going to make this function more precises by using the js Arrow function
const fun4=async  ()=>{
    return 45;
}
console.log(fun4());
// as we know that if we want to return a single thing in js Arrow function then we can also make the code more shorter 
const fun5=async  ()=>60;
console.log(fun5());
// now we are going to add the .then for promise resolvation 
console.clear();
const fun6=async  ()=>60;
fun6().then(function (val){
    console.log('i am .then console');
    return val;
});
console.log(fun6());
// now we are going to use the arrow function 
const fun7=async  ()=>60;
fun6().then((val)=>{
    console.log('i am .then console');
    return val;
});
console.log(fun7());




























