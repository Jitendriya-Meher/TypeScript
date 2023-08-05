"use strict";
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // method
    introduce() {
        return `hii, i am ${this.name}, and i am ${this.age} years old, and my hobbies are ${this.hobbies.join(',')}.`;
    }
}
const person1 = new Person("Amit", 20, ["sleeping", "coding", "gameing"]);
console.log("person1 : ", person1);
console.log(person1.introduce());
console.log();
// Inheritance allows you to create a new class (subclass or derived class) that inherits properties and methods from an existing class (base class or superclass). This allows you to model relationships between classes and promote code reuse.
class Student extends Person {
    constructor(name, age, hobbies, grade) {
        // super keyword
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} .my grade is ${this.grade}`;
    }
}
const student1 = new Student("Amit", 20, ["coding"], 9.2);
console.log("student 1 : ", student1);
console.log(student1.introduce());
