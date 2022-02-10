// Array dentro de array

const drinks = [
    ['suco', 'laranja'],
    ['refrigerante', 'guarana'],
    ['cerveja', 'brahma'],
];

console.log(drinks[2][1]);
drinks[2][1] = 'corona' // mudar o valor do indice do array
console.log(drinks[2][1]);

// Jogo da Velha Examplo

const board = [
    ['0', null, 'X'],
    [null, 'X', '0'],
    [null, 'X', '0']
]

console.log(board);