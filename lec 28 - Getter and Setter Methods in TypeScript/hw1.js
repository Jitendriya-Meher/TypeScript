"use strict";
class BankAccount {
    constructor(_balance = 0) {
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        if (balance < 0) {
            // throw new Error("balance must be a positive number");
            return;
        }
        this._balance += balance;
    }
}
const bank1 = new BankAccount();
bank1.balance = 1000;
console.log("balance: " + bank1.balance);
bank1.balance = 2500;
console.log("balance: " + bank1.balance);
bank1.balance = -100;
console.log("balance: " + bank1.balance);
