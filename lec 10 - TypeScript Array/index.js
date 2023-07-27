"use strict";
// a. using square brackets
const numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers);
console.log("length of numbers: " + numbers.length);
// b. using constructor
const numbers2 = new Array(10, 20, 30);
console.log(numbers2);
console.log("length of numbers2: " + numbers2.length);
// c. using array of method
const names = Array.of("abc", "def", "ghi", "jkl", "moe");
console.log(names);
console.log("length of names: " + names.length);
console.log(numbers[3]);
console.log(names[3]);
