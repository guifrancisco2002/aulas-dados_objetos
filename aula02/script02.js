// TODO: CRIANDO OBJETOS

// class formaDeBolo{
//     constructor(saborDaMassa, saborRecheio){
//         this.saborDaMassa = saborDaMassa
//         this.saborRecheio = saborRecheio
//     }
// }

// let boloFesta = new formaDeBolo("Massa de Coco", "Recheio de Leite Condensado")

// console.log(boloFesta)

// TODO: METODOS E PROPRIEDADES

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`> Bolo de ${this.saborDaMassa} com Recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("Coco", "Leite Condensado")
let boloFimSemana = new formaDeBolo("Cenoura", "Chocolate")

boloFesta.escrever()
boloFimSemana.escrever()