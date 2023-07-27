
// In TypeScript, a function call signature is a part of an interface or a type alias that defines the shape of a function type. It specifies the parameters that a function should accept and the return type that it should produce. Function call signatures allow you to describe the types of functions that conform to a specific signature, providing a contract for function shapes within the type system

type Student = {
    name: string;
    age: number;
    greet : (school:string) => string;
}

const student1:Student = {
    name:"jiten",
    age: 21,
    greet :( (school:string) => {
        return `hii i am ${student1.name} and i am ${student1.age} yrs old and i am from ${school} school`;
    })
}

console.log(student1);
console.log(student1.greet("KV khariar"));

const student2:Student = {
    name:"amit",
    age: 20,
    greet :( (school:string) => {
        return `hii i am ${student2.name} and i am ${student2.age} yrs old and i am from ${school} school`;
    })
}

console.log(student2);
console.log(student2.greet("KPS"));