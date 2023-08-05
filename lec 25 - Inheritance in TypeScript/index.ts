
class Person{
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    // method
    introduce():string{
        return `hii, i am ${this.name}, and i am ${this.age} years old, and my hobbies are ${this.hobbies.join(',')}.`;
    }
}

const person1:Person = new Person("Amit",20,["sleeping","coding","gameing"]);

console.log("person1 : ", person1);

console.log(person1.introduce());
console.log();

// Inheritance allows you to create a new class (subclass or derived class) that inherits properties and methods from an existing class (base class or superclass). This allows you to model relationships between classes and promote code reuse.

class Student extends Person{
    grade:number;

    constructor(name: string, age: number,hobbies:string[], grade:number){
        // super keyword
        // the super keyword is used to call functions and access properties of a parent or base class within a derived or child class. It is often used in the context of inheritance to invoke the constructor of the parent class, access properties and methods from the parent class, and override methods with customized behavior in the child class.

        super(name,age,hobbies);
        this.grade = grade;
    }

    introduce(): string {
        // you can override methods of the parent class in the derived class to provide specialized behavior. The super keyword can be used to call the overridden method in the parent class while adding additional behavior.

        return `${super.introduce()} .my grade is ${this.grade}`;
    }
}

const student1:Student = new Student("Amit",20,["coding"],9.2);

console.log("student 1 : ",student1);
console.log(student1.introduce());