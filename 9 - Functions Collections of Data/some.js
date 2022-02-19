// Similar ao every, mas retorna true se algum dos elementos do array.

const threeWord = ['dog', 'cat', 'man', 'map', 'react']

const moreThanThree = threeWord.some(word => {
    return word.length > 7; // false
})

console.log(moreThanThree)