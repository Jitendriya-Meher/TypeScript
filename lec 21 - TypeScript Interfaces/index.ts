// type alias
type GreetType = {
    name: string;
    age: number;
};

const person1:GreetType = {
    name: 'John',
    age:40
};

// interface


// In TypeScript, interfaces are a powerful feature used to define the structure of objects, ensuring that certain properties and methods exist in the objects that implement them. They serve as a contract or blueprint that objects must adhere to, making it easier to work with complex data structures and provide better type checking and IntelliSense support during development.

type GreetInterface = {
    name: string;
    age: number;
};

const person2:GreetInterface = {
    name: 'amit',
    age:20
};

console.log(person1);
console.log(person2);

// create a produnct interface

interface Product{
    name:string;
    price:number;
    quantity:number;
};

const product1:Product = {
    name:"jiten",
    price:1234,
    quantity: 7
};

// functution total price
const calcTotalPrice = (product:Product) => {
    return (product.price*product.quantity);
};

console.log("price of product1 : ",calcTotalPrice(product1));