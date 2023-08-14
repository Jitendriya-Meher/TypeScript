"use strict";
// TypeScript provides a feature called "type guards" that helps you narrow down the type of a value within a conditional block. This is especially useful when you have a union type and you want to perform different operations based on the specific type of the value. Typeof guards are a specific type of type guard that checks the type of a value using the typeof operator.
const Hobbies = (hobby) => {
    if (typeof hobby === "object") {
        return hobby.map((hob) => { return hob + " hobby"; });
    }
    else {
        return hobby;
    }
};
console.log(Hobbies("coding"));
console.log(Hobbies(["coding", "gameing", "sleeping"]));
