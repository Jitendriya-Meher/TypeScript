"use strict";
// Question 1:
const product1 = ["Laptop", 50000, 78];
const product2 = ["Computer", 30000, 25];
// function
const function1 = (product) => {
    console.log(`Your order is \n product: ${product[0]} \n price: ${product[1]} \n quantity: ${product[2]}`);
    console.log(` total cost = ${product[1] * product[2]}`);
};
// function call
function1(product1);
function1(product2);
const s1 = ["jiten", "A", [91, 97, 97]];
const s2 = ["adiya", "B", [95, 71, 95]];
// function1
console.log();
const function2 = (s) => {
    console.log(`name : ${s[0]}`);
    console.log(`grade : ${s[1]}`);
    console.log(`average : ${(s[2][0] + s[2][1] + s[2][2]) / 3}`);
};
// function call
function2(s1);
function2(s2);
// Question 3:
console.log();
const weather1 = ["Khariar", 27, "rainy"];
const weather2 = ["Nuapada", 32, "Sunny"];
// function 
function weather(info) {
    console.log(`city : ${info[0]}`);
    console.log(`Temperature in Celsius : ${info[1]}`);
    console.log(`Weather condition : ${info[2]}`);
}
weather(weather1);
weather(weather2);
