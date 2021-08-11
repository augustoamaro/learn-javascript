let rating = 5;

if (rating === 3) {
    console.log('You Are a SUPERSTAR!')
} 
else if (rating === 2) {
    console.log('Meets Expectations')
} 
else if (rating === 1) {
    console.log('Needs Improvment')
}
else {
    console.log('Invalid Rating')
}

let highScore = 1730;
let userScore = 1600;

if (userScore >= highScore) {
    console.log(`Parabéns, você tem um novo high score de ${highScore}`)
    highScore = userScore;
}
else {
    console.log(`Bom jogo. Seu score é de ${userScore}, não bateu o high score de ${highScore}`)
}