var arrOfStr = ['zain', 'usama', 'umer', 'Ali', 'Ahmed'];
arrOfStr.map(function (item) {
    return item;
});
var arrOfNum = [34, 5, 6, 7, 87, 87, 98, 89, 67, 83, 45, 54];
// now we are going to use the map loop on the num array 
var result2 = arrOfNum.map(function (item) { return console.log(item); });
var result3 = arrOfNum.map(function (item) { return Math.sqrt(item); }).map(function (item) { return item * 34; });
// so in this way we can use map multiple times so map is a powerfull tool 
