// slice method for string 
// you want to take name of city from the user and you want to convert the 
//first letter into capital  you this by using the slice method on string
let cityName=prompt("Enter the name of ciyt Starting with Letter D");
console.log(cityName);
console.log(cityName.slice(1,1));
console.log(cityName.slice(1));
// finding string segments by using the slicing 
let text:string=`It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
writing the trilogy, which contains, with the weird applicability available only to poetry and
myth, the essential notion that the good gray wizard can understand the evil magi precisely
because he is just enough like them to grasp their minds and motives in ways that they cannot
grasp his.
`;
console.log(text);
for(let i:number=0; i<text.length; i++){
    if(text.slice(i,i+12)=='World War II'){
        text=text.slice(0,i)+"The second world War"+text.slice(i+12);
    }
}
console.log(text);
