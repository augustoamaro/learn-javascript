// function callThreeTimes(f) {
//     f();
//     f();
//     f();
// }

// function humor() {
//     console.log('Im so happy');
// }

function rage() {
    console.log('I Hate All');
}

function repeatNTimes(action, num) {
    for(let i = 0; i < num; i++) {
        action();
    }
}

// repeatNTimes(rage, 13);

function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
}