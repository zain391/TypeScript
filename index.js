// now we are going to study objects in details
var myself = {
    name: 'zain',
    age: 30
};
function greet(person) {
    console.log(typeof person);
}
greet(myself);
// now as we have created the interface for the object we can use it 
function greet2(person1) {
    return person1.name;
}
var myself2 = {
    name: 'zain2',
    age: 20
};
greet2(myself2);
