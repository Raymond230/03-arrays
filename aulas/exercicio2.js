const palavra = "banana"

let soma = 0

for(letra of palavra){

    if(letra === "a"){
        soma += 1
    }
}
if(soma === 0 ){
    console.log("Não á letras")
}else if(soma === 1){
    console.log("1 letra")
}else{
    console.log(soma)
}