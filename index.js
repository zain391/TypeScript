// // slice method for string 
// // you want to take name of city from the user and you want to convert the 
// //first letter into capital  you this by using the slice method on string
// let cityName=prompt("Enter the name of ciyt Starting with Letter D");
// console.log(cityName);
// console.log(cityName.slice(1,1));
// console.log(cityName.slice(1));
// // finding string segments by using the slicing 
// let text:string=`It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.
// `;
// console.log(text.indexOf("World"));
// console.log(text);
// for(let i:number=0; i<text.length; i++){
//     if(text.slice(i,i+12)=='World War II'){
//         text=text.slice(0,i)+"The second world War"+text.slice(i+12);
//     }
// }
// console.log(text);
// console.log(text.indexOf("World"));
// console.log(text.charAt(9));
// // the js provides more efficient way to find an d replace the string segment 
// // by using the replace function and also by using the regular expressions
// let text2:string=`It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the trilogy, which contains, with the weird applicability available only to poetry and
// myth, the essential notion that the good gray wizard can understand the evil magi precisely
// because he is just enough like them to grasp their minds and motives in ways that they cannot
// grasp his.
// `;
// text2=text2.replace('World War II','the second world war');
// console.log(text2);
// text2=text2.replace(/'World War II'/g,'the second world war');
// console.log(`i am here cuz of regular expressions `,text2);
// console.log(Math.random());
// let num=Math.random()*6;
// console.log(Math.ceil(num));
// now we are going to play with arrays in typescript
var arr = ['zain', 'usama', 'omer', 'Ali', 'Hassan'];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'usama') {
        console.log("i am here", i);
        arr.splice(i, i);
    }
}
console.log(arr);
// converting array to string
var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr2.toString());
