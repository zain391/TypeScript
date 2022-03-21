// now we are going to learn about the if else and switch
// if color is green and height greater than 5.10 and age is greater than 20 
// then show you are hulk else show you are not hulk 


// first we are going to do this by using the nested if 
const age=prompt("enter age ");
const color=prompt("enter  color");
const height=prompt("enter height");
let strAge=parseInt(age);
let strHei=parseInt(height);

// now we are going to do this by using the logical operators
if(strAge>20 && color=='green' && strHei>5.10){
    console.log("you are hulk ");
    
}else{
    console.log("you are not hulk ");
    
}
