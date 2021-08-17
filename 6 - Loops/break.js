const target = Math.floor(Math.random() * 10);
let guess;


while (true) {
	if (target === guess) break; //Break para o loop
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
