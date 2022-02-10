function add(x, y) {
  return x + y; // só é possível retornar uma coisa na função
}

add(5, 4)


function isPurple(color) {
  if (color.toLocaleUpperCase() === 'purple') {
    return true
  }
  return false
}
isPurple('blue')


function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true
    }

  }
  return false
}