// now we are going to learn about the call back functions
let studentsFirstArr=[
    {name1:'zain',stdId:123},
    {name1:'umer',stdId:456},
    {name1:'Ali',stdId:789}
];

const enrollStudents=function (stdPara){
    console.log('std at first enroll ',studentsFirstArr);
    setTimeout(function () {
        // stdPara.push(studentsFirstArr);
        studentsFirstArr.push(stdPara);
        console.log('std after at first enroll ',studentsFirstArr);
    }, 5000);
}
const getStudents=function (stdPara2){
    setTimeout(function () {
        studentsFirstArr.forEach(function (items){
            console.log(items.name1);
        })
            console.log("these are the std whoare enrolled before and after both",stdPara2);
    }, 3000);
}
const newStd={name1:"Qamer",stdId:000};
// console.log(enrollStudents);
enrollStudents(newStd);
getStudents(studentsFirstArr);