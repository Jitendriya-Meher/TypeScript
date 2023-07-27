"use strict";
// In TypeScript, an enum is a way to define a collection of named constants, making it easier to work with sets of related values. Enums provide a more expressive and readable way to represent fixed sets of values, such as days of the week, months, status codes, or any other set of related constants.
// To define an enum in TypeScript, you use the enum keyword followed by the enum name and a list of constant values within curly braces {}.
// By default, each constant in the enum is assigned numeric values starting from 0. You can also explicitly assign specific numeric or string values to the enum constants.
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
    Role["spam"] = "spam";
})(Role || (Role = {}));
const user1 = {
    email: "abc@gmail.com",
    password: "abc",
    role: Role.user
};
const user2 = {
    email: "xyz@gmail.com",
    password: "xyz",
    role: Role.admin
};
const user3 = {
    email: "mno@gmail.com",
    password: "mon",
    role: Role.spam
};
console.log(user1);
console.log(user2);
console.log(user3);
const isAdmin = (user) => {
    const { email, role } = user;
    if (role === Role.admin) {
        return `${email} is allowed to change your website`;
    }
    else {
        return `${email} is not allowed to change your website`;
    }
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
console.log(isAdmin(user3));
