// now we are going to learn about the objects in the ts
// MERN MEAN MEVN 
interface obj{
    name:string,
    price:number,
    space:number,
    transfer:number,
    pages:number,
    discountMonths:string,
}
let objPlan:obj={
    name:'basic',
    price:10,
    space:10,
    transfer:200,
    pages:7,
    discountMonths:'Jul,Aug',
}
let objPlan2:obj={
    name:'proffesional',
    price:20,
    space:500,
    transfer:500,
    pages:10,
    discountMonths:'Jul,Aug,Dec',
}
// we can also add the new properties in the object 
objPlan2.random="random";