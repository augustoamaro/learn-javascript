// Funções são objetos

function add(x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operations = [add, subtract, multiply, divide];

for (let func of operations) {
    let result = func(30, 5);
    console.log(result);
}

const thing = {
    doShomething: multiply
}