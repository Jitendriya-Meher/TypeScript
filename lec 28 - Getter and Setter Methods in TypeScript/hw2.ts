
class Temperature{
    constructor(
        private _celsius:number = 0,
    ){}

    public get celsius(){
        return this._celsius;
    }

    public set celsius(celsius){
        this._celsius=celsius;
    }

    public get fahrenheit(){
        const fahrenheit = (this._celsius * (9/5))+32;
        return fahrenheit;
    }

    public set fahrenheit(fahrenheit:number){
        this._celsius = ((fahrenheit-32)*5)/9;
    }
}

const temp = new Temperature();
temp.celsius = 36;
console.log("celsius: " , temp.celsius);
console.log("fehrenheit: " , temp.fahrenheit);
temp.celsius = 1;
console.log("celsius: " , temp.celsius);
console.log("fehrenheit: " , temp.fahrenheit);
temp.celsius = 111;
console.log("celsius: " , temp.celsius);
console.log("fehrenheit: " , temp.fahrenheit);
temp.celsius = 13;
console.log("celsius: " , temp.celsius);
console.log("fehrenheit: " , temp.fahrenheit);
temp.fahrenheit = 11;
console.log("celsius: " , temp.celsius);
console.log("fehrenheit: " , temp.fahrenheit);