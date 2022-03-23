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
var pak1 = {
    east: 'India'
};
// as we can see know the typescript is not giving us error and still we are not using all the properties of the object 
var pak2 = {
    nortwest: 'Afghanistan'
};
// now we can see that we did not add the ? with tht east so the typescript is gu=iving us the error that we have to use it 
var pak3 = {
    east: 'India',
    nortwest: "Afghanistan",
    west: 'Iran',
    northEast: 'northEast'
};
console.log(pak1);
console.log(pak2);
console.log(pak3);
