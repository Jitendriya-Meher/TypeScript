
class BankAccount{

    constructor(
        private _balance: number = 0
    ){}

    public get balance(){
        return this._balance;
    }

    public set balance(balance: number){
        if( balance < 0 ){
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