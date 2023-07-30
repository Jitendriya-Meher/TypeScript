// In TypeScript, a tuple is a fixed-size array where each element may have a different data type. Tuples allow you to express an array with a specific number of elements, and the types of each element in the tuple are explicitly defined. Tuples are especially useful when you need to maintain a strict relationship between the types of elements at specific positions in an array.

// o define a tuple in TypeScript, you use square brackets [] and specify the types of the elements inside the brackets, separated by commas.

// TypeScript provides type checking for tuples, which means that the type of each element in the tuple is enforced. Trying to assign a value of a different type to a tuple element will result in a type error.

// defining a tuple
type PersonInfo = readonly [string, number, boolean];

// function
function display (person:PersonInfo) {
    console.log(`hii ${person[0]} , your id is ${person[1]}`);
}

const display2 : (person:PersonInfo) => void = (person:PersonInfo) => {
    console.log(`hii ${person[0]} , your id is ${person[1]} , in function 2`);
}

// 
const person1:PersonInfo = ["jiten",21,true];
const person2:PersonInfo = ["amit",35,true];

// person2.push("hii");

// function call
display(person1);
display(person2);

display2(person1);
display2(person2);