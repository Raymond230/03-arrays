const numeros = [54, 22, 14, 10, 284,];

let possui

let posicao = 0
for( i = 0 ; i < numeros.length; i++){
    if(numeros[i] === 10){
        console.log(i)
        possui = true
        break
    }
}

if(!possui){
    console.log("-1")
}
