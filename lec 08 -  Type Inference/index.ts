// Type Annotation

// Type annotation is the act of explicitly specifying the data type of a variable, function parameter, or return value. Type annotations are denoted using a colon (:) followed by the desired data type.
// With type annotations, you explicitly tell TypeScript what type a particular entity should have. Type annotations are helpful for providing clear documentation, ensuring type safety, and avoiding type-related errors.



// Type Inference

// Type inference is a feature in TypeScript that automatically deduces the data types of variables, function parameters, and return values based on their usage and context. TypeScript's type inference mechanism analyzes the value assignments and expressions in your code to figure out the types without you explicitly specifying them. 
// ype inference helps reduce the need for explicit type annotations and makes your code more concise and readable. TypeScript's type inference system is powerful but might not always work in complex situations, or when there's ambiguity in the types. In such cases, you can use type annotations to provide explicit type information.

// In summary, type annotations are about explicitly specifying types, while type inference is about TypeScript automatically deducing types based on context. Both are essential for writing safe and maintainable code with TypeScript, and the choice of using type annotations or relying on type inference depends on the specific needs and readability preferences in your codebase.

const myNum = 10;
console.log(myNum);

// error 
// myNum = "amit";

function randomNumber(min:number,max:number){
    return Math.floor(Math.random()*(max-min)) + min;
}

console.log(randomNumber(10,20));



