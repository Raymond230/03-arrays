const numeros = [3, 4, 1, 8, 11, 7, 5];

let maiorNumero = numeros[0]

for(i = 0; i < numeros.length; i++){
    if (numeros[i] > maiorNumero){
        maiorNumero = numeros[i]
    }
}

console.log(maiorNumero)