"use strict";
// In object-oriented programming (OOP), access modifiers are keywords used to control the visibility and accessibility of class members (properties and methods) within a class hierarchy. TypeScript, being a superset of JavaScript, supports access modifiers similar to other OOP languages like Java or C#.
// public: Members declared as public are accessible from anywhere, both within the class and from external code.
// protected: Members declared as protected are accessible within the class where they are defined and within subclasses (derived classes) that extend the base class.
// private: Members declared as private are only accessible within the class where they are defined. They cannot be accessed from outside the class or even within derived classes.
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
class Student extends Person {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
        // protected
        this.age = 18;
        // this.grade = "A";
    }
    introduce() {
        return `${super.introduce()} .my grade is ${this.grade}`;
    }
}
let student1 = new Student("Amit", 20, ["coding"], 9.2);
console.log("student1 : ", student1);
student1.name = "Jitendriya";
// student1.age = 18;
// student1.grade="A";
console.log("student1 : ", student1);
