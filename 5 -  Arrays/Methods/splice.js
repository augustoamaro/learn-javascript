// O método splice() altera o conteúdo de uma lista, adicionando novos elemtnos enquanto remove elementos antigos

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
console.log(animals.splice(1, 0, 'octopus'));
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
console.log(animals.splice(5, 2));
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
console.log(animals.splice(3, 2, 'orca', 'grizzly'));
// ["shark", "octopus", "salmon", "orca", "grizzly"]