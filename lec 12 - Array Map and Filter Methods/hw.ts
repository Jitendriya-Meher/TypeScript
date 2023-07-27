
const values:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
console.log("numbers : ",values);

// square of values
const squareValues = values.map( (value) => {
    return value*value;
});
console.log("Squares : ",squareValues);



const strs = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stk"];

// uppercase string
const uppercaseStr = strs.map( (str) =>{
    return str.toUpperCase();
});

console.log("uppercase string : ",uppercaseStr);
