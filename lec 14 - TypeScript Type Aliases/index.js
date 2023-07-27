"use strict";
// In TypeScript, a type alias is a feature that allows you to create a new name for an existing type. Type aliases are helpful for creating custom types that can be reused throughout your codebase, making it more concise and easier to understand.
// o create a type alias, you use the type keyword followed by the new name you want to define and the existing type that it represents.
const person1 = {
    name: "Jitendriya Meher",
    age: 21,
    isStudent: true,
    address: {
        city: "khariar",
        country: "India"
    },
    class: "BTech"
};
const person2 = {
    name: "Aditya Singh Thakur",
    age: 22,
    isStudent: false,
    address: {
        city: "Nuapada",
        country: "India"
    }
};
console.log(person1);
console.log(person2);
let product = {
    name: "laptop",
    price: 42050,
    quantity: 5
};
const calcTotalPrice = (product) => {
    return product.price * product.quantity;
};
console.log("total Price = ", calcTotalPrice(product));
