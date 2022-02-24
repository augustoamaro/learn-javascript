const pilots = {
    first: 'Lewis Hamilton',
    second: 'Max Verstappen',
    third: 'Valtteri Bottas',
    fourth: 'Sergio Perez',
}

const {first, second, third} = pilots
const {...others} = pilots

console.log(first, second)
console.log(others)
