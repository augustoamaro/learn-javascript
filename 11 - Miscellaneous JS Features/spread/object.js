// Copia as propriedades de um objeto para outro objeto literal

const feline = {
    legs: 4,
    family: 'Felidae'
}

const canine = {
    family: 'Caninae',
    furry: true
}

const dog = {
    ...canine,
    adorable: true
}

console.log(dog)