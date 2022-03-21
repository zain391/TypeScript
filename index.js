var arr1 = [1, 2, 3, 4, 5];
// foreach loop takes a callback function for eac element of the array
arr1.forEach(function (items, index, arrays) {
    console.log('items', items);
    console.log('index', index);
    console.log('arrays', arrays);
});
