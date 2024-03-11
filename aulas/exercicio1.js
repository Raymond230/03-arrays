const palavra = "Alemana"
let letraEncontrada = false

for(let letra of palavra){
    if(letra === "h"){
        console.log(`Tem letra ${letra}`)
        letraEncontrada = true
        console.log("Tem letra H")
        break
    }
}

if(!letraEncontrada){
    letraEncontrada = false
    console.log("Não encontrada")
}