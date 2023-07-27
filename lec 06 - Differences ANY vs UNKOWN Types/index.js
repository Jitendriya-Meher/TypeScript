"use strict";
// In TypeScript, the any type is a special type that represents a value of any type. It is used to indicate that a variable can hold values of any data type, and TypeScript's type checker will essentially ignore any type checks for variables of type any. When you use the any type, you are telling TypeScript to allow dynamic typing for that specific variable, and it essentially turns off static type checking for that variable.
let myVar = 17;
console.log(typeof (myVar));
console.log(myVar);
myVar = "Jitendriya Meher";
console.log(typeof (myVar));
console.log(myVar);
myVar = true;
console.log(typeof (myVar));
console.log(myVar);
if (typeof (myVar) === "boolean") {
    console.log("myVar is a boolean");
}
else {
    console.log("myVar is not a boolean");
}
// While using any can be convenient in some situations, it is generally recommended to avoid it as much as possible. The power of TypeScript lies in its static type checking, which helps catch type-related errors during development and provides better code intelligence and tooling support. When you use any, you lose many of the benefits TypeScript offers in terms of safety and maintainability.
// Instead of relying on any, try to specify explicit types wherever possible or use TypeScript's union types and intersection types to describe more precise data structures. If you need to work with values of unknown types, you can use TypeScript's built-in utility types like unknown and then perform appropriate type checks or assertions when necessary. Using these approaches will lead to more reliable and maintainable code in the long run.
// In TypeScript, the unknown type was introduced in version 3.0. It represents a value that could be of any type, similar to the any type. However, unlike any, the unknown type provides a safer alternative when dealing with values of unknown types. With unknown, you must perform a type check or a type assertion before you can use the value with confidence.
console.log();
let myunknown;
myunknown = 20;
myunknown = true;
if (typeof (myunknown) === "boolean") {
    console.log("myunknown is a boolean");
}
else {
    console.log("myunknown is not a boolean");
}
