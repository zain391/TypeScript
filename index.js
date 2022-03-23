// now we are going to learn about the exceptaion handling 
// If you run the following code, nothing will happen
function greetFun() {
    var mesg = "Hello wrold";
    alert(mesg);
}
function greetWord() {
    try {
        var mesg = "Hello world";
        alert(mesg);
    }
    finally {
    }
}
