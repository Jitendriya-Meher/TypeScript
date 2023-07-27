"use strict";
// In TypeScript, the boolean type represents a value that can be either true or false. It is used to declare variables, function parameters, and function return types when you expect a value that can only be either true or false.
// It's important to note that TypeScript provides static type checking, which means it will enforce that the variable declared as a boolean type can only hold boolean values (i.e., true or false). If you try to assign a value of a different type, TypeScript will raise a type error during compilation. 
let isMe = true;
console.log(isMe);
// function to check odd or even numbers
function isEven(val) {
    return (val & 1) === 0;
}
console.log("15678 is even : ", isEven(5678));
console.log("2345 is even : ", isEven(2345));
// BIGINT
// In TypeScript, the bigint type is used to represent integers with arbitrary precision. It was introduced in ECMAScript 2020 and is supported by TypeScript starting from version 4.0. The bigint type allows you to work with integers that are too large to be represented using the regular number type, which is limited to 53 bits of precision.
// To create a bigint, you append the n suffix to an integer literal or use the BigInt() constructor function.
const bigNumLiteral = 1234567890123456789012345678901234567890n;
const bigNumConstructor = BigInt("1234567890123456789012345678901234567890");
console.log("Number 1 : " + bigNumLiteral);
console.log("Number 2 : " + bigNumConstructor);
// Performing arithmetic operations with bigint:
const add = bigNumLiteral + bigNumConstructor;
const subtract = bigNumLiteral -
    bigNumConstructor;
const multiply = bigNumLiteral * bigNumConstructor;
const divide = bigNumLiteral / bigNumConstructor;
console.log("add = ", add);
console.log("subtract = ", subtract);
console.log("Multiply = ", multiply);
console.log("Divide = ", divide);
console.log();
const add2 = bigNumLiteral + bigNumConstructor;
const subtract2 = bigNumLiteral -
    bigNumConstructor;
const multiply2 = bigNumLiteral * bigNumConstructor;
const divide2 = bigNumLiteral / bigNumConstructor;
console.log("add = ", add2);
console.log("subtract = ", subtract2);
console.log("Multiply = ", multiply2);
console.log("Divide = ", divide2);
