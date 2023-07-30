
// union 

// In TypeScript, the "union" type allows you to define a type that can hold values of different types. It's denoted using the vertical bar (|) between the types that you want to include in the union. This enables you to create variables, parameters, or return types that can accept different data types.
// Unions are useful when you have a variable or function parameter that could accept different types of data. It allows you to make your code more flexible and reusable.
// You can use unions in combination with conditional statements like if and switch to perform different actions based on the type of the value, making your code more versatile and adaptable to different scenarios.


// function
const input = (value : string | number) => {
    if( typeof(value) === 'number' ){
        console.log(value*2);
    }
    else if (typeof(value) === 'string'){
        console.log(value.toUpperCase());
    }else{
        throw new Error("invalid type");
    }
}

// function call
input(10);
input("jitendriya");
input(190);
input("amit");

// variables
type Person = {
    name: string;
    age: number;
}

type Employee = {
    emp_id: number;
    department: string;
}

// atleast one of them
type PersonoOrEmployee = Person | Employee;

const p1:PersonoOrEmployee = {
    name: 'John',
    age: 36,
}
const p2:PersonoOrEmployee = {
    emp_id: 1,
    department:"CSE"
}
const p3:PersonoOrEmployee = {
    name: 'John',
    emp_id: 1,
    department:"CSE"
}

console.log("Union");
console.log(p1);
console.log(p2);
console.log(p3);



// In TypeScript, the "intersection" type allows you to create a new type that combines multiple types. It's denoted using the ampersand (&) between the types you want to intersect. The resulting type will have all the properties and methods that exist in all the individual types being intersected.
// Intersections are useful when you want to combine existing types to create a new type that includes the features of multiple types. It's particularly handy when working with complex objects that share common properties or methods.

// variables
// all of them
type PersonoAndEmployee = Person & Employee;

console.log("\nInersection")
const p4:PersonoAndEmployee = {
    name: 'biswa',
    age: 22,
    emp_id:100,
    department:"ME"
}

console.log(p4);

type user = {
    name: string;
    age: number;
}

type myLocation = {
    city: string;
    country: string;
}

const user1 = {
    name:"jiten",
    age:21
}

const loc1 ={
    city:"khariar",
    country:"India"
}

// function definition
const details = (user:user,myLocation:myLocation) => {
    return {...user,...myLocation}
}

// function call
const userInfo: user & myLocation = details(user1,loc1);

console.log(userInfo);