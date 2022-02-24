// 3 - supestar
// 2 - needs expectations
// 1 - needs improvement
// outra coisa - invalid rating

let rating = 3;

if (rating === 3) {
    console.log('You Are a SUPERSTAR!')
} 
else if (rating === 2) {
    console.log('Neets Expectations')
} 
else if (rating === 1) {
    console.log('Needs Improvement')
}
else {
    console.log('Invalid Rating')
}


let highScore = 1400;
let userScore = 1600;

if (userScore >= highScore) {
    console.log(`Parabéns, você tem um novo high score de ${highScore}`)
    highScore = userScore;
}
else {
    console.log(`Bom jogo. Seu score é de ${userScore}, não bateu o high score de ${highScore}`)
}