// now we are going to learn about the exceptaion handling 
// If you run the following code, nothing will happen
function greetFun(){
    const mesg="Hello wrold";
    alert(mesg);
}
function greetWord(){
    try{
        const mesg="Hello world";
        alert(mesg);
    }catch(err){
        alert(err)
    }
}