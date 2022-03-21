// now we are going to learn about the higher order arrays functions
// like the fillter and foreach loop and maps also redce and sort
// first we are going to do the foreach 
type arr=Array<number>;
let arr1:arr=[1,2,3,43,,6,7,7,8,8,899,0,0];
// we want to log all the numberes
for(let i:number=0; i<arr1.length; i++){
        console.log(arr1[i]);
}
// above line will do the work but we will do this byusing the foreach method
arr1.forEach(function(arrItem){
        console.log(arrItem);
        
})