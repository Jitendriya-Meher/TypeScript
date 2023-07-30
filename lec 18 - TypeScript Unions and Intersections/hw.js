"use strict";
const hw1 = (value) => {
    if (typeof (value) === "number") {
        return `$ ${value}`;
    }
    else if (typeof (value) === "string") {
        let ch = value.charAt(0).toUpperCase();
        return ch + value.substring(1);
    }
    else if (typeof (value) === "boolean") {
        if (value) {
            return "Yes";
        }
        else {
            return "No";
        }
    }
};
console.log(hw1('amit'));
console.log(hw1(21));
console.log(hw1(true));
const combineUserAndAccount = (user, account) => {
    return Object.assign(Object.assign({}, user), account);
};
const u1 = {
    id: 123,
    name: "John",
    email: "john@example.com"
};
const a1 = {
    accountId: 12,
    accountType: "Saving Account",
    balance: 100987
};
const data1 = combineUserAndAccount(u1, a1);
console.log("user : ", data1);
