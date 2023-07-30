"use strict";
// In TypeScript, a tuple is a fixed-size array where each element may have a different data type. Tuples allow you to express an array with a specific number of elements, and the types of each element in the tuple are explicitly defined. Tuples are especially useful when you need to maintain a strict relationship between the types of elements at specific positions in an array.
// function
function display(person) {
    console.log(`hii ${person[0]} , your id is ${person[1]}`);
}
const display2 = (person) => {
    console.log(`hii ${person[0]} , your id is ${person[1]} , in function 2`);
};
// 
const person1 = ["jiten", 21, true];
const person2 = ["amit", 35, true];
// person2.push("hii");
// function call
display(person1);
display(person2);
display2(person1);
display2(person2);
