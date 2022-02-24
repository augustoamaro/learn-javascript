// O método includes() determina se um array contem um determinado elemento, retornando true e false

let ingredients = [
    'water',
    'sugar',
    'butter',
    'cheese',
    'flour'
]

console.log(ingredients.includes('fish')); // procura por um valor no array

if (ingredients.includes('flour')) {
    console.log('Não posso comer');
}