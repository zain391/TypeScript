let d:Date=new Date();
let mySecDate2=d.getSeconds();
let dd=new Date('january 20,2021');
let mySecDate1=dd.getSeconds();
console.log(mySecDate1-mySecDate1);
// now we are going to learn about the if else and switch
// if color is green and height greater than 5.10 and age is greater than 20 
// then show you are hulk else show you are not hulk 


// first we are going to do this by using the nested if 
const age=prompt("enter age ");
const color=prompt("enter  color");
const height=prompt("enter height");
let strAge=parseInt(age);
let strHei=parseInt(height);
if(strAge>=20){
    if(color=="green"){
        if(strHei>=5.10){
            console.log("you are hulk");
            
        }else{
            console.log("you are not hulk because you have short height");
            
        }
    }
    else{
        console.log("you are not hulk because you have other color");
            
    }
}else{
    console.log("you are not hulk because you are not a teen");
            
}

