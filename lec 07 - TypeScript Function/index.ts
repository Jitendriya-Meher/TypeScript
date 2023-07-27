
// greetings function

// function define/ declare
// parameters as name
function greet( name:string){
    console.log("Hiii " + name + " ! whats up");
}

// function call 
// argument as Jitendriya Meher
greet("Jitendriya Meher");
greet("Amit Meher");


// greet2 function 
const greet2 = (name:string, id:number) => {
    console.log(` hiii ${name} ! your id is ${id}`);
}

greet2("Jitendriya Meher",20);
greet2("Amit Meher",21);


// function return type
const greet3 = (name:string, id:number, code:string):string => (
     `hiii ${name} ! your id is ${id} and code is ${code}`
)

console.log(greet3("Jitendriya Meher",20,"20ab20c"));
console.log(greet3("Amit Meher",21,"20rgb21a"));


// palindrome check
const isPalindrome = (str:string):boolean => {
    let i:number = 0;
    let j:number = str.length -1;

    while( i<j){
        if( str[i] !== str[j] ){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(isPalindrome("ma123321am"));
console.log(isPalindrome("abcdea"));