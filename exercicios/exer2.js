const letras = ["A", "a", "B", "C", "L", "z"];

let soma = 0
let encontrada = false

for(let letra of letras){
    if(letra === "E" || letra === "e"){
        encontrada = true
        soma++
    }
}

if(soma > 0 ){
    console.log(`Foram Encontradas ${soma} letras E ou e`)
}else{
    console.log("Nenhuma letra E ou e foi encontrada")
}
