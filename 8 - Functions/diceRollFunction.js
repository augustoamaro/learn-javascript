function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice() {
    for (let i = 0; i < 5; i++) { // executa a função 5x
        rollDice()
    }
}

throwDice();


function multiply() {

    const a = 5
    const b = 5
    const result = a * b
    console.log(result)
}

multiply()
