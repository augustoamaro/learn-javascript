// Executa uma função reducer em cada elemento do array, resultando em um valor único

const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21]

const sum = fibonacci.reduce((total, currentValue) => {
    return total + currentValue
})

console.log(sum); //54


const grades = [8.5, 4.5, 6.4, 9, 9.7, 2.4, 8.7, 8, 9.5]
const maxGrade = grades.reduce((max, current) => {
    if (current > max) return current;
    return max;
})

console.log(maxGrade);

// Passando um argumento
const num = [10, 20, 30, 40, 50];
const sumArray = num.reduce((sum, current) => {
    return sum + current;
}, 100) // inicia em 100

console.log(sumArray)


const votes = ['y', 'y', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'n', 'y', 'y', 'abstent']
const results = votes.reduce((contagem, val) => {
    if (contagem[val]) {
        contagem[val] ++
    } else {
        contagem[val] = 1;
    }
    return contagem
}, {})

console.log(results)