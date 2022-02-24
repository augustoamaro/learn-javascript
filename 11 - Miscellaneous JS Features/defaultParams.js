function sum(x, y = 1) {
    return x * y
}

console.log(sum(5)) // se passar somente um parâmetro o resultado sera oque foi passado

const welcome = (person, greeting = 'Hi') => {
    console.log(`${greeting}, ${person}`)
}

welcome('Jack') // Hi, Jack