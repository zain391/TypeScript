// now we are going to learn about the foreach loop used for array 
type arr=Array<number>;
let arr1:arr=[1,2,3,4,5];
// foreach loop takes a callback function for eac element of the array
arr1.forEach((items,index,arrays)=>{
    console.log('items',items);
    console.log('index',index);
    console.log('arrays',arrays);
    
})