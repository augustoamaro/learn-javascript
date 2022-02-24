// variáveis declaradas com var são hoisted
console.log(animal);
var animal = 'Tapir';
console.log(animal);


// variáveis declaradas com let e const não são hoisted
const shrimp = 'Harlequin Shrimp';
console.log(shrimp);


// funções são hoisted
howl();

function howl() {
  console.log("AWOOOOOOO");
}

// function expressions são...meio hoisted.
// a variável é hoisted, mas o valor é undefined

// hoot()
// var hoot = function () {
//   console.log("HOOOO HOOOOO")
// }