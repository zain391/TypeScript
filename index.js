const province={
    howMany:4,
    first:'Punjab',
    second:'KPK',
    third:'Sindh',
    forth:"Blachistan",
    // now we are going to create a methof of the objec
    readFirstPro:function (){
        name1=this.first;
        console.log("i am name1=this.first; " ,name1);
    }
}
console.log('1',province);
// the line below will give us the function definition but not the result  
console.log('2',province.readFirstPro);
// now we want to only display  the readFirst value
console.log('3',province.readFirstPro());
