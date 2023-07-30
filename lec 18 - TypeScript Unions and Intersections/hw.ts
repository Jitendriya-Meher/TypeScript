
// Q.1
const hw1 = (value: number | boolean | string) =>{
    if( typeof(value) === "number" ){
        return `$ ${value}`;
    }
    else if( typeof(value) === "string" ){
        let ch = value.charAt(0).toUpperCase();
        return ch+value.substring(1);
    }
    else if( typeof(value) === "boolean" ){
        if( value){
            return "Yes";
        }else{
            return "No";
        }
    }
};

console.log(hw1('amit'));
console.log(hw1(21));
console.log(hw1(true));

// Q.2

type User = {
    id:number;
    name:string;
    email:string;
};

type Account = {
    accountId:number;
    accountType:string;
    balance:number;
}

const combineUserAndAccount = (user:User, account:Account) => {
    return {...user, ...account};
};

const u1:User = {
    id:123,
    name: "John",
    email: "john@example.com"
};
const a1:Account = {
    accountId:12,
    accountType: "Saving Account",
    balance: 100987
}
const data1:User&Account = combineUserAndAccount(u1,a1);

console.log("user : ",data1);
