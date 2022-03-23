let objPlan2={
    name:'proffesional',
    price:20,
    space:500,
    transfer:500,
    pages:10,
    discountMonths:'Jul,Aug,Dec',
}
function calcAnnual() {
    var bestPrice = objPlan2.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < objPlan2.discountMonths.length; i++) {
    if (objPlan2.discountMonths[i] === thisMo) {
    bestPrice = objPlan2.price * .8;
    break;
    }
    }
    return bestPrice * 12;
    }