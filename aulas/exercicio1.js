const palavra = "Alemanha"
let letraEncontrada = false

for(letra of palavra){
    if(letra === "h"){
        letraEncontrada = true
        console.log("Tem letra H")
        break
    }
}

if(!letraEncontrada){
    console.log("Não tem letra H")
}