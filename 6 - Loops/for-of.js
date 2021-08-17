let fruits = ['watermelon', 'apple', 'orange', 'tangetina'];

for (fruit of fruits) { // 
    console.log(fruit);
}

//Objects
const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

// ISSO NAO FUNCIONA
// OBJECTS NÃO SAO ITERÁVEIS (não da de usar for ... of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// É possível iterar com um objeto com of
for (let movie of Object.keys(movieReviews)) {
	console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// É possível iterar sobre os valores

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
console.log('Average Rating: ', avg);
