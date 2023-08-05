"use strict";
// class name should be in pascal case eg. ClassName
class Person {
    constructor(name, age, hobby) {
        this.name = "jiksss...";
        this.age = 21;
        this.hobby = ["reading", "games", "sports"];
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
}
// const person1:Person = new Person();
// console.log("person1 : ",person1);
// console.log(person1.hobby);
const person2 = new Person("amit", 20, ["sleeping", "eating"]);
console.log(person2);
