function greet(person) {
    console.log(`Oi, ${person} `);
}

greet('Lukão') // função mais o valor dentro do parametro
greet('Jurandir')


function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolss) {
    for (let i = 0; i < numRolss; i++) { // executa a função 5x
        rollDice()
    }
}

throwDice(10)