

// In TypeScript, objects are used to represent structured data with properties and values. Objects can hold various types of data, including primitive types (such as numbers and strings) and complex types (such as arrays and other objects). TypeScript allows you to define the shape and types of objects using interfaces or type aliases to provide better type safety and code clarity.

// creating an object
const person:{
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        dist : string;
        country: string;
    }
} = {
    name : "Jitendriya Meher",
    age: 21,
    isStudent : true,
    address : {
        city : "Khariar",
        dist : "Nuapada",
        country : "India"
    }
}

// access the object data
console.log(person.name);
console.log(person.age);
console.log(person.address.city);
console.log(person.address.country);

// update data
person.address.city = "KHARIAR";
// error
// person.address.country = 123;
console.log(person.address.city);

  