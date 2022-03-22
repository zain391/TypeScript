// we were working on the higher order arrays loops 
// now we are going to do the map 
type arr1=Array<string>;
type arr2=Array<number>;
let arrOfStr:arr1=['zain','usama','umer','Ali','Ahmed'];
arrOfStr.map(function (item){
    return item;
})
let arrOfNum:arr2=[34,5,6,7,87,87,98,89,67,83,45,54];
// now we are going to use the map loop on the num array 
const result2=arrOfNum.map(item=>console.log(item));
const result3=arrOfNum.map(item=>Math.sqrt(item)).map(item=>item*34);
// so in this way we can use map multiple times so map is a powerfull tool 


