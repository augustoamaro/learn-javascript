// Verifica todos os elementos no array, e retorna um valor booleano

const words = ['js', 'react', 'vue', 'csharp']
const threeWord = ['dog', 'cat', 'man', 'map']

const hasThreeWords = words.every(word => {
    return word.length === 3;
})

console.log(hasThreeWords) // false

const hasThreeWords2 = threeWord.every(word => {
    return word.length === 3;
})

console.log(hasThreeWords2)

