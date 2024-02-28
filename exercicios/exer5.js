const original = [1, 4, 12, 21, 53, 88, 112];

let pares = []

for(let numb of original){
    if (numb % 2 === 0){
        pares.push(numb)
    }
}
console.log(pares)