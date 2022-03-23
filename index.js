var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [2,6, 7]
};
// now we are going to create a method for the object an then we will emmbed it in the object for its use
function calAnnual(){
    let bestPrice=plan1.price;
    const currentDate=new Date();
    const month=currentDate.getMonth();
    for(let i=0; i<2; i++){
        if(plan1.discountMonths[i]==month){
            bestPrice= plan1.price * .8;
            console.log(bestPrice);
        }
        else{
            console.log("no the current month is not in the plan so u wont get a discount");
        }
    }
}
// this is still a function not a method of the object 
calAnnual();