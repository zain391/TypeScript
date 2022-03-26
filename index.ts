// const mes:string='Message';
// async function test(){
//     // the async function return a promise 
//     console.log(`${2} : ${mes}`);
//      await console.log(`${3} : ${mes}`);
//      console.log(`${4} : ${mes}`);
//     return "i am resolved "     
// }
// console.log(`${1} : ${mes}`);
// test();
// console.log(`${5} : ${mes}`);
// console.log(test());

async function test2(){
    // the async function return a promise 
    console.log(`${2} : ${mes}`);
    const response=fetch("std.record.JSON");
    const students=(await response).json();
     await console.log(`${3} : ${mes}`);
     console.log(`${4} : ${mes}`);
    return    students;  
}
console.log(`${1} : ${mes}`);
test().then(function (){
    console.log('i am resolved ');
    
}).catch(function (error){
    console.log(error);
})
console.log(`${5} : ${mes}`);
console.log(test2());
