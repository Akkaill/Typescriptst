interface MyCar{
    model:string,
    gen:string,
    price:number
    Scream():void

}
const HerCar:MyCar=
{
    model:'BMW',
    gen:'I8',
    price:1000,
    Scream() {
        console.log(`This car is ${HerCar.model} Model ${HerCar.gen} and This price of BMW I8 is ${HerCar.price}`);
        
    }

}
console.log(HerCar.Scream());
