class Body {
    name:string=""
    lastnime:string=""
    age:Number=0

    Mett(){
        return "Hi bro Mf"+this.name+"Im"+this.age+"years old"
    }

  

   }
   const user:any = new Body()
   user.name = 'akkaaaa'
   user.age = 22
   console.log(user.Mett())
   
