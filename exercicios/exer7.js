const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomeComA = []

for(let nome of nomes){
    let inicial = nome[0]

    if(inicial === "A" || inicial ==="a"){
        nomeComA.push(nome)
    }
}
console.log(nomeComA)