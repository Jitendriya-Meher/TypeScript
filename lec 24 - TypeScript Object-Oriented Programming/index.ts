
// class name should be in pascal case eg. ClassName
class Person{
    name: string = "jiksss...";
    age: number = 21;
    hobby: string[] = ["reading","games","sports"];

    constructor(name: string, age: number,hobby: string[] ){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

}

// const person1:Person = new Person();
// console.log("person1 : ",person1);
// console.log(person1.hobby);

const person2:Person = new Person("amit",20,["sleeping","eating"]);
console.log(person2);