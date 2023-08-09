"use strict";
class Person {
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    // method
    introduce() {
        return `hii, i am ${this.name}, and i am ${this.age} years old, and my hobbies are ${this.hobbies.join(',')}.`;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not defined");
        }
        return this._age;
    }
}
class Student extends Person {
    constructor(name, age, hobbies, grade) {
        super(name, hobbies);
        this.grade = grade;
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} .my grade is ${this.grade}`;
    }
}
const person1 = new Person("jiten", ["reading", 'sports', 'athletes', 'sleeping']);
console.log(person1);
person1.age = 123;
console.log(person1);
console.log("age : ", person1.age);
