
function add<T>(a:T, b:T):T{
    // function overload
    // return a+b;
    return a;
}

const result1 = add<number>(5,15);
const result2 = add<string>("Hello ","world!");

console.log(result1);
console.log(result2);