
class Person{

    private _age :number|undefined;

    constructor(public name: string, public hobbies:string[]){}

    // method
    introduce():string{
        return `hii, i am ${this.name}, and i am ${this.age} years old, and my hobbies are ${this.hobbies.join(',')}.`;
    }

    public set age(age: number) {
        if( age >150 || age <0){
            throw new Error("age is not valid");
        }
        this._age = age;
    }

    public get age() {
        if( this._age === undefined){
            throw new Error("age is not defined");
        }
        return this._age;
    }
}

class Student extends Person{

    constructor(name: string, age: number,hobbies:string[],public grade:number){

        super(name,hobbies);
        this.grade = grade;
    }

    introduce(): string {

        return `${super.introduce()} .my grade is ${this.grade}`;
    }
}


const person1 = new Person("jiten",["reading",'sports','athletes','sleeping']);
console.log(person1);

person1.age=123;

console.log(person1);
console.log("age : ",person1.age);