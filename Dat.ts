
var myName:string='ill'
console.log(typeof(myName))

let Check:any[]=[1,2,3,5,6]
let sT:string[]=['k,','ll']
console.log(Check.concat(sT))
//tuple
let emPloy:[number,string,boolean][]=[[1,'ill',true],[2,'mean',false]]
console.log(emPloy[1])
emPloy.unshift([4,'kk',true])
console.log(emPloy)
//enum
enum WorkCheck {
    Task =2,
    Working,
    Done
}
console.log(WorkCheck.Task)