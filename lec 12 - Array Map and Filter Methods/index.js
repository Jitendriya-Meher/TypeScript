"use strict";
// In TypeScript, just like in JavaScript, the map method is available on arrays. The map method is used to transform each element of an array into a new value, creating a new array with the transformed values. It does not modify the original array but returns a new array with the mapped values
// he map method takes a callback function as an argument. This callback function is executed for each element of the array, and it can accept three parameters:
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element in the array.
// array (optional): The array that map was called upon.
// The map method returns a new array containing the results of applying the callback function to each element of the original array.
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101, 105, 1015];
console.log(nums);
// doble the array
const doubleNums = nums.map((num) => (num * 2));
console.log("double : ", doubleNums);
// number to stings
const numToStr = nums.map((num) => {
    return num.toString();
});
console.log("number to string : ", numToStr);
// In TypeScript, just like in JavaScript, the filter method is available on arrays. The filter method is used to create a new array with all elements that pass the condition specified by a callback function. It does not modify the original array but returns a new array containing the filtered elements.
// The callback function should return a boolean value (true or false). If the return value is true, the current element is included in the new filtered array; if the return value is false, the current element is excluded from the new array.
// filter the array
const greater30 = nums.filter((num) => (num > 30));
console.log("greater 30 : ", greater30);
// even numbers in array
const evens = nums.filter((num) => {
    return (num & 1) == 0;
});
console.log("evens : ", evens);
