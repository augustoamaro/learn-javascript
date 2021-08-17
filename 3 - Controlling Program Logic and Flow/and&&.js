// Representado pelo símbolo && 

let password = 'dragonball'

if (password.length >= 6 && password.indexOf(' ') === -1) { // Se o password maior ou igual a 6 e o password do elemento de pesquisa tiver espaço = a -1
    console.log('Valid Password!')

} else {
    console.log("Password must be at least 6 characters")
}