// now we are going to learn about the promises in the js
const fun1=function (){
    return new Promise(function (resolve,reject){
        setTimeout(() => {
            const val=true;
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
})