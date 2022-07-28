class Total {
    x: number ;
    y: number ;
    readonly pc:any="Hi"

    constructor(x:number=0,y:number=0){
        this.x=1000
        this.y=7542

    }

}
const Point = new Total()

Point.pc
console.log(`${Point.x} Camme${Point.y}`);
//////////////////////////////////////////////////////////////////////////////////////////////
class Ppoint{
    _a:number=0
    get a():number{
        this._a=this._a+1
        return this._a
    }
    set a(val:number){
        this._a=val
    }

}
const P = new Ppoint()
console.log(P._a);
console.log(P.a);
/////////////////////////////////////////////////////////////////////////////////////////////////////
