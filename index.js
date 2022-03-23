const pakistan={
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
console.log('1',pakistan);
// the line below will give us the function definition but not the result  
console.log('2',pakistan.readFirstPro);
// now we want to only display  the readFirst value
console.log('3',pakistan.readFirstPro());
// and we can also add the property in the object 
//firs we all add the property in the object 
pakistan.Pm='Imran Khan';
console.log("i was not in the object ",pakistan.Pm);
// we can also check if a property in the object exit or not
const checkPoint='Pm' in pakistan;
console.log("it should either be true or false ",checkPoint);
// we can also delete the propety of the object 

delete pakistan.Pm;
console.log("i was deleted from the object ",pakistan.Pm);





