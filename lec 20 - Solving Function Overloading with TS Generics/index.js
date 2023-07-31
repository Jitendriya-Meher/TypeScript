"use strict";
// multiple generic function
function add(a, b) {
    console.log("type of a = ", typeof (a), a);
    console.log("type of b = ", typeof (b), b);
}
const a = (add(10, 15));
const b = (add("hello", "world"));
const c = (add(10, "hello"));
const d = add("hello", 100);
