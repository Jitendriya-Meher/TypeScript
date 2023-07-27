"use strict";
const student1 = {
    name: "jiten",
    age: 21,
    greet: ((school) => {
        return `hii i am ${student1.name} and i am ${student1.age} yrs old and i am from ${school} school`;
    })
};
console.log(student1);
console.log(student1.greet("KV khariar"));
const student2 = {
    name: "amit",
    age: 20,
    greet: ((school) => {
        return `hii i am ${student2.name} and i am ${student2.age} yrs old and i am from ${school} school`;
    })
};
console.log(student2);
console.log(student2.greet("KPS"));
