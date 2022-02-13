// Retorna o valor para que podemos captura-lo depois. Ex: armazenar em uma constante.
// Return finaliza a execução da função e especifica o valor para retornado pela função.

function add(x, y) {
  return x + y; // só é possível retornar uma coisa na função
}

const result = add(5, 4)
console.log(result);


function isPurple(color) {
  if (color === 'purple') {
    return true
  }
  return false
}

const color = isPurple('purple') // true
console.log(color);

// Boolean 
function isPurpleBoolean(color) {
  return color === 'purple';
}

const colorBoolean = isPurpleBoolean('purple') // true
console.log(colorBoolean);


function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true
    }
  }
  return false
}

const arrayColor = containsPurple(['magenta']) // true
console.log(arrayColor);