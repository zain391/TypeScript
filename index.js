var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [2,6, 7],
    // now we are going to create a method for the object an then we will emmbed it in the object for its use
    calAnnual:function (){
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
};
console.log(plan1);
plan1.calAnnual();
function ForPlans(name1,price,space,transfer,pages,discountMonths){
    // note that the first letter of the constructor is kept for Capital 
    // it is just for the sake of Understading and easily finnding the constructor seprately from the normal function you can also create a portotype by using the lower case first letter 
    this.name1=name1;
    this.price=price;
    this.space=space;
    this.transfer=transfer;
    this.pages=pages;
    this.discountMonths=discountMonths;
}
const plan01=new ForPlans('Basic01',001,00100,"10 GB",10,[2,6,7]);
const plan02=new ForPlans('pro',002,002,"20 GB",20,[2,6,7]);
console.log(plan01);
console.log(plan02);
// now we are going to learn about the browser model
const whereAt=window.location.href;
console.log(whereAt);
// now we are going to get the domain name of the website
const DomainName=window.location.hostname;
console.log(DomainName);
const path1=window.location.pathname;
console.log(path1);
const hashing=window.location.hash;
console.log(hashing);
// window.location.href='https://www.facebook.com/';
// now we are going to learn about the classes in the js 
class first {
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
}
// we can create the objects by using both classes and the constructor functions
const first1=new first('zain',20);
console.log(first);
console.log(first1);
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  console.log(`My car is " + myCar.age() + " years old.`);
//   addding the methods in the classes are same as of in object 
// you define a function inside a class ans it became the comethod of that class objects
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date2 = new Date();
  let year = date2.getFullYear();
  let minutes2 = date2.getMinutes();
  let sec = date2.getSeconds();
  
  let myCar2 = new Car("Ford", 2014);
  console.log(`My car is " + myCar.age(year) + " years old.`);