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
// in some of our cases we do not want to use all the properties of the objects so in that particular case we add the Question mark at the end of the property 
interface Qusetionmark{
    east:string,
    nortwest?:string,
    west?:string,
    northEast?:string,
}
const pak1:Qusetionmark={
    east:'India'
}
// as we can see know the typescript is not giving us error and still we are not using all the properties of the object 

// const pak2:Qusetionmark={
//         nortwest:'Afghanistan'
// }

// now we can see that we did not add the ? with tht east so the typescript is gu=iving us the error that we have to use it 
const pak3:Qusetionmark={
    east:'India',
    nortwest:"Afghanistan",
    west:'Iran',
    northEast:'northEast',
}
console.log(pak1);
// console.log(pak2);
console.log(pak3);
