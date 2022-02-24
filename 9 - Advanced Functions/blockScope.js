// let e const são do BLOCK SCOPED
if (true) {
  const animal = 'eel';
  console.log(animal); // eel
}
console.log(animal); // not defined


// var não é do BLOCK SCOPED
if (true) {
  var animal = 'eel';
  console.log(animal); // eel
}
console.log(animal); // eel


let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
var i = 10;
for (var i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}
console.log(i)


let players = ['LeBron James', 'Kobe Bryant', 'MJ'];
let x = 10;
for (let x = 0; x < players.length; x++) {
  console.log(x, players[x])
}
console.log(x) 


function doubleArr(arr) {
  const result = []; // scopo da função doubleArr()
  for (let num of arr) {
    let double = num * 2; // scopo do loop
    result.push(double);
  }
  return result;
}