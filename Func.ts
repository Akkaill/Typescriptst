function say(nname:string,age:number=9999):any
{
  return nname+"krab"+age
}
console.log(say("ill"));

function Rest(a:number,b:number,...spread:any[]):any
{
    return a+b+spread.reduce((a,b)=>a+b,0)
}
console.log(Rest(1,2,4,5,6,67,7,7));
function Plus({x,y}:{x:number,y:any}):any
{
    return x+y
}
console.log(Plus({x:2,y:10}));

