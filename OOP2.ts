class Person{
    name:string=""
    constructor(name:string){
        this.name=name
    }
    sayHi(){
        console.log(`Hi ${this.name}`);
        
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

class Emply extends Person{
   
    salary:number=0
    constructor(name:string,salary:number){
        super(name)
        this.salary=salary
        
    }
    sayHi(){
        super.sayHi();
        console.log('salary ${this.salary}');
        

    }
}
const check = new Emply("ILL",12000)

console.log(check);
/////////////////////////////////////////////////////////////////////////////////////////////////

const myArr:string[] = new Array("ill","mean","kong","aek")
for(let i:number = 0;i<=myArr.length;i++)
console.log(myArr[i]);


const Calcdis:any=(price:number,persec:number=0.5)=>{
    let discount:number=price*persec
    console.log(`price anything that ${discount}`);
    
 
}
Calcdis(200)
////////////////////////////////////////////////////////////////////////////////////////////

class Kit{
    Gen:string="";
    Typecar:string="";
    isThatEreccar:boolean;
    constructor(Gen:string,Typecar:string,isThatEreccar:boolean)
    {
        this.Gen=Gen
        this.Typecar=Typecar
        this.isThatEreccar=isThatEreccar

    }
    CheckGencar():void{
        console.log(`This is ${this.Gen} and Type is ${this.Typecar} and this car is ${this.isThatEreccar} Erectic car`);
        
    }
}

let Mercides = new Kit("Benz SLC 900","Sport",true)
Mercides.CheckGencar()
console.log(Mercides);
