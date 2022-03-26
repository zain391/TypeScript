// // again browser object model
// const ran=window.location;
// const firstp=ran.href;
// const secondp=ran.hash;
// const threep=ran.host;
// const fourp=ran.pathname;
// const fivep=ran.port;
// console.log('port ',fivep);
// console.log('firstp',firstp);
// console.log('secondp hash',secondp);
// console.log('three host',threep);
// console.log('fourp pathname',fourp);

// now we are going to learn about the exception handling
// console.log('it should be in the console 1');
// function playingWithTryCatch1(){
//     const playingWithTryCatch2='i am an alert with wrong speelings';
//     alet(playingWithTryCatch2)

// }
// playingWithTryCatch1();
// console.log('it should be in the console 2');












function playingWithTryCatch1(){
    try{
        const playingWithTryCatch2='i am an alert with wrong speelings';
    alet(playingWithTryCatch2)
    }catch(err){
       console.log(err);
    }

}
playingWithTryCatch1();
console.log('i am after try catch');
const val=prompt("enter a value between 5 to 10");
if(val<5 || val>10){
    throw('plz enter a valid value');
}








