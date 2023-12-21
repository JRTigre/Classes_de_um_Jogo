class hero{
    constructor(name, age, typeHero){
        this.name=name
        this.age=age
        this.typeHero=typeHero
    
    }

    Attack(){
        
        if (this.typeHero=="Mago"){
            console.log(`O ${this.typeHero} atacou usando Magia.`) 
        }else if (this.typeHero=="Guerreiro"){
            console.log(`O ${this.typeHero} atacou usando Espada. `)
        }else if (this.typeHero=="Monge"){
            console.log(`O ${this.typeHero} atacou usando Artes Maciais. `)
        }else if (this.typeHero=="Ninja"){
            console.log(`O ${this.typeHero} atacou usando Shuriken.`)
        }                       
    }   
}
let heroMago = new hero("Ardillita", 3000, "Mago");
let heroGuerreiro= new hero("Hipopotamo Pirata", 20,"Guerreiro" );
let heroMonge= new hero("Segundo", 30 , "Monge");
let heroNinja= new hero("Cuchi", 25, "Ninja");
heroMago.Attack()
heroGuerreiro.Attack()
heroMonge.Attack()
heroNinja.Attack()