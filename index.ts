// now we are going to study objects in details
const myself={
    name:'zain',
    age:30,
}
function greet(person:{name:string, age:number}){
    console.log(typeof person);
    
}
greet(myself);
// the methode above is not efficent as it make the code more complex as is if we want to add more properties in the object  the code in the one line we will be increasing gradually 
// so we  made interfaces for the objects in the typescript 
interface objects{
    name :string,
    age:number,
}
// now as we have created the interface for the object we can use it 
function greet2(person1:objects){
    return person1.name;
}
let myself2:objects={
    name:'zain2',
    age:20,
}
greet2(myself2);