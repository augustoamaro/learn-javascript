// 
// Não funciona em arrow functions
function sum() {
    const argsArrr = [...arguments]
    return argsArrr.reduce((total, currVal) => {
        return total + currVal
    })
}

console.log(sum(2, 2, 5, 6))