
// multiple generic function
function add<T,U>(a: T, b: U){
    console.log("type of a = ",typeof(a),a);
    console.log("type of b = ",typeof(b),b);
}

const a = (add<number,number>(10,15));
const b = (add<string,string>("hello","world"));
const c = (add<number,string>(10,"hello"));
const d = add("hello",100);
