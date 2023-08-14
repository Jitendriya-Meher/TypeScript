"use strict";
// Use interfaces when:
const stud1 = {
    name: "jiten",
    age: 21,
    state: "Odisha",
    city: "Khariar"
};
console.log("student 1 = ", stud1);
const stud2 = {
    name: "amit",
    age: 20,
    city: "Khariar"
};
console.log("student 2 = ", stud2);
;
;
const stud3 = {
    name: "jitendriya",
    age: 21,
    state: "Odisha",
    city: "Khariar"
};
console.log("student 3 = ", stud3);
;
;
const same1 = {
    name: "John",
    age: 40,
    city: "Queens",
    state: "NY city"
};
console.log("same1", same1);
class Same2 {
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const same2 = new Same2("jitendriya meher", 21, "Khariar", "Odisha");
console.log("same class = ", same2);
