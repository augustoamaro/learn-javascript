// Uma forma limpa de 'unpack' valores de array, propriedades de objetos em variáveis distintas

const results = [
    {
        first: 'Lewis Hamilton',
        country: 'GRA',
    },
    {
        second: 'Max Verstappen',
        country: 'HOL',
    },
    {
        third: 'Valteri Bottas',
        country: 'FIN',
    }
]

const [
    {
        first: gold
    },
    {
        second: silver
    }
] = results;
console.log(gold)