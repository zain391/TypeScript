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
// now we only want those elements which are greater than 100

for(let i:number=0; i<arr1.length; i++){
        if(arr1[i]>100){
                console.log(arr1[i]);
                
        }        
}
// now we will do this by using the fillter 
const result=arr1.forEach(function (arrItem){
        if(arrItem>100){
                return arrItem;
        }
});

// now we are going to do the same by using the arroe function 
const result2=arr1.filter(item=>item>100);
console.log(result2);


