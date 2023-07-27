
const sum = (x: number, y: number) : number => x + y;

console.log(sum(123,456));
// console.log(sum(123," amit"));


// In TypeScript, type annotations are used to specify the data types of variables, function parameters, function return values, and other entities. This allows TypeScript to perform static type checking and catch type-related errors during development, providing better tooling and code quality.

// Type annotations are declared using a colon (:) followed by the data type.

let num:number = 210;
let str:string = "hii jiten";

console.log(num,str);

console.log(num.toString());
console.log(num);

let s:string = "Jitendriya Meher";
console.log(s);

let us:string = s.toLocaleLowerCase();
console.log(us);

let ts:string = us.toUpperCase();
console.log(ts);

let len:number = s.length;
console.log(len);