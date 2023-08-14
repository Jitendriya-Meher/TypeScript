"use strict";
// Abstract classes in TypeScript are classes that cannot be instantiated directly and are meant to serve as base classes for other classes. An abstract class provides a blueprint for its subclasses by defining properties, methods, and behavior that the subclasses must implement.
// Key points about abstract classes in TypeScript:
// Abstract classes cannot be instantiated directly using the new keyword.
// Abstract methods declared in an abstract class must be implemented in its subclasses.
// Subclasses must call the super() constructor in their constructors when extending an abstract class.
// Abstract classes can also have concrete methods and properties, which are inherited by their subclasses.
// Subclasses can provide additional methods and properties beyond what's defined in the abstract class.
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea() {
        console.log(`This is a ${this.color} Circle with radius ${this.radius}, having area ${this.calculateArea()}.`);
    }
}
const circle = new Circle("GREEN", 5);
console.log("area of cicle", circle.calculateArea());
circle.displayArea();
