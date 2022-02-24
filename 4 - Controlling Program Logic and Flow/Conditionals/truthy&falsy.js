// Todos os valores podem ser verdadeiro ou falso
// falso: false, 0 "", null, undefined, NaN
// verdadeiro: todo o resto

let mistery = 0 / 0;

if (mistery) {
    console.log('Truthy')
}
else {
    console.log('Falsy')
}

let loggedInUser = null

if (loggedInUser) {
    console.log('You Are Logged In')
}
else {
    console.log('You Are Not Logged In')
}