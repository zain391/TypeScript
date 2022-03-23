// now we will try do some hacker rank problem solving 
let arr=[5,2,3,6,6,5];
let num=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]<=arr[i+1]){
        console.log(arr[i+1]);
    }else{
        console.log(arr[i]);
    }
}
