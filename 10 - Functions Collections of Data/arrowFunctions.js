
const sum = function (x) {
    return x + x;
}

console.log(sum(4))

const square = x => x * x; // com um parametro pode retirar paranteses, chaves e return
console.log(square(3))

const isEven = (num) => {
    return num % 2 === 0;
}

console.log(isEven(4))

const multiply = (x, y) => {
    return x * y;
}

console.log(multiply(2, 2))


const nums = [1, 2, 3, 4, 5, 6, 7, 8,];
const double = nums.map(n => {
    return n * 2;
})

console.log(double)

const double2 = nums.map(n => n * 2) // versão curta

console.log(double2)
