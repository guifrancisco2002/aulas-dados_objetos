// TODO: CRIAR UMA CLASSE QUE REPRESENTA UM PERSONAGEM DE RPG

class statsCharacter{
	constructor(race, type, life, defense, attack){
    	this.race = race
    	this.type = type
        this.life = life
        this.defense = defense
        this.attack = attack
    }
    
    mainCharacter(){
    	console.log(`O personagem é da raça ${this.race} de tipo ${this.type}`)
        console.log(`Pontos de vida: ${this.life}`)
        console.log(`Pontos de defesa: ${this.defense}`)
        console.log(`Pontos de ataque: ${this.attack}`)
    }
}

let character = new statsCharacter("Human", "Rogue", 100, 80, 100)

character.mainCharacter()