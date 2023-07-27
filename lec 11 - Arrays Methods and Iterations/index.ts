
const names:string[] = ["abc", "def", "ghi", "jkl", "mno", "pl", "xyz"];
console.log(names);
console.log("length : " + names.length);

// adding elements to an array using push

const newNames = names.push("amit");
console.log("this will give you the length : "+newNames);

console.log(names);
console.log("length : " + names.length);

// removing elements from an array using pop
const popData = names.pop();
console.log("pop element : "+popData);

names.pop();
names.pop();
console.log(names);
console.log("length : " + names.length);


// iterate through array

// for loop
for( let i = 0; i < names.length; i++){
    console.log("for loop : "+i+" "+names[i]);
}

// for each loop
names.forEach((name, i) =>{
    console.log("forEach loop : "+i+" "+name);
});

// for of loop
for( const name of names ){
    console.log("for of loop : "+name);
}

// for in loop
for( const i in names ){
    console.log("for in loop : "+i+" "+names[i]);
}