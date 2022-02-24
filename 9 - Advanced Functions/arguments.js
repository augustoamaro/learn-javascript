// Funções que operam com outras funções.
// Aceitam outras funções como argumentos.
// Retornam uma função.

// function callThreeTimes(f) {
//     f();
//     f();
//     f();
// }


function humor() {
    console.log('Im so happy');
}

humor();

function rage() {
    console.log('I Hate All');
}

rage()

function repeatNTimes(action, num) {
    for(let i = 0; i < num; i++) {
        action();
    }
}

repeatNTimes(rage, 13);

function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
}

pickOne(humor, rage) // função passada por parâmetro


function threeTimes(f) {
    f()
    f()
    f()
}

function cry() {
    console.log('BOOO')
}


function rage() {
    console.log('argh')
}

threeTimes(cry)