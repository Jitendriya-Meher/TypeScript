
// generic function
function generic<T>(value: T) {
    if(typeof value === "number"){
        return value*3;
    }
    else if(typeof value === "string"){
        return value.toUpperCase();
    }
    else{
        return value;
    }
}

const g1 = generic<number>(234);
const g2 = generic<string>("Hello world!");
const g3 = generic<boolean>(true);

console.log(typeof(g1)," : ",g1);
console.log(typeof(g2)," : ",g2);
console.log(typeof(g3)," : ",g3);