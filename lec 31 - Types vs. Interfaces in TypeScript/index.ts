// Use interfaces when:

// Defining the shape of objects and their properties.
// Creating contracts for classes to implement.
// Extending or merging existing interfaces.
// Use types when:

// Defining complex types like union, intersection, or mapped types.
// Creating aliases for primitive types, making code more readable.


type Stud = {
    name: string;
    age: number;
};

type StudAddr = {
    city: string;
    state:string;
};


const stud1:Stud & StudAddr = {
    name: "jiten",
    age:21,
    state:"Odisha",
    city : "Khariar"
};

console.log("student 1 = " ,stud1);

type Data = Stud | StudAddr;
const stud2:Data = {
    name: "amit",
    age:20,
    city : "Khariar"
};

console.log("student 2 = " ,stud2);



interface IStud {
    name: string;
    age: number;
};

interface IStudAddr {
    city: string;
    state:string;
};

interface IData extends IStud,IStudAddr{
 
}

const stud3:IData = {
    name: "jitendriya",
    age:21,
    state:"Odisha",
    city : "Khariar"
}

console.log("student 3 = " ,stud3);



interface same {
    name: string;
    age: number;
};

interface same {
    city: string;
    state:string;
};

interface Same extends same {}

const same1:Same = {
    name: "John",
    age:40,
    city:"Queens",
    state: "NY city"
}

console.log("same1",same1);

class Same2 implements Same {
    constructor(
        public name:string,
        public age:number,
        public city:string,
        public state:string){}
}

const same2 = new Same2("jitendriya meher",21,"Khariar","Odisha");

console.log("same class = ",same2)