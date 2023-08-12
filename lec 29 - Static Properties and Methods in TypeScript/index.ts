
// In TypeScript, static properties and methods are features of classes that are associated with the class itself, rather than with instances of the class. They can be accessed directly on the class, without the need to create an instance of the class. Static properties and methods are often used for utility functions or for creating class-level variables.

// Static properties and methods are useful when you want to share data or functionality across all instances of a class, or when you want to provide utility functions that are related to the class itself rather than its instances.

class mathOperation{

    public static PI: number = Math.PI;

    public static add( x: number, y: number){
        return x+y;
    }

    public static diff( x: number, y: number){
        return Math.abs(x-y);
    }
}

console.log(mathOperation.PI);
console.log(mathOperation.add(10,25));
console.log(mathOperation.diff(10,25));