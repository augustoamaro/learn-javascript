// Coleta todos os argumentos que sobram no array atual

function sum(...nums) {
    console.log(nums)
}

console.log(sum(2, 3, 4,)) // Criar um array com os valores passados

function sumAll(...nums) {
    let total = 0
    for (let n of nums) total += n;
    return total
}

console.log(sumAll(1, 2)) // 3
console.log(sumAll(1, 2, 3, 4, 5)) // 15

const multiply = (...nums) => nums.reduce((total, current) => total * current)
    
console.log(multiply(4, 5))