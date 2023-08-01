"use strict";
const person1 = {
    name: 'John',
    age: 40
};
const person2 = {
    name: 'amit',
    age: 20
};
console.log(person1);
console.log(person2);
;
const product1 = {
    name: "jiten",
    price: 1234,
    quantity: 7
};
// functution total price
const calcTotalPrice = (product) => {
    return (product.price * product.quantity);
};
console.log("price of product1 : ", calcTotalPrice(product1));
