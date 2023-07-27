"use strict";
// In TypeScript (and JavaScript), you can define optional and default parameters in function declarations. These features allow you to create functions with flexible argument lists, where some parameters can be omitted or have default values when not provided.
// Optional Parameters:
// Optional parameters are parameters that may be omitted when calling a function. They are denoted by adding a question mark (?) after the parameter name in the function declaration. Optional parameters must come after the required parameters.
// function definitions
const greet = (name, id) => {
    if (id !== undefined) {
        return `Welcome ${name} and your id is ${id}`;
    }
    else {
        return `Welcome ${name}`;
    }
};
// function call
console.log(greet("Jitendriya Meher", 2001));
console.log(greet("Amit Meher"));
// Default Parameters:
// Default parameters are parameters that receive a default value if no argument is provided for them during function invocation. They are specified by assigning a default value to the parameter in the function declaration. Default parameters can also follow optional parameters in the parameter list.
console.log();
const greet2 = (name, id = 202123) => {
    return `Welcome ${name} and your id is ${id}`;
};
// function call
console.log(greet2("Jitendriya Meher", 2001));
console.log(greet2("Amit Meher"));
