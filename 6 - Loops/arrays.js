const animals = ['lions', 'cats', 'dogs'];

for (var i = 0; i < animals.length; i++) {
    console.log(animals);
}



const examScores = [98, 97, 89, 90, 99, 98];

for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
}


const myStudents = [
    {
        name: 'Thor',
        grade: 100
    },
    {
        name: 'Odin',
        grade: 95
    },
    {
        name: 'Loki',
        grade: 90
    },
    {
        name: 'Artemis',
        grade: 90
    },
];

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(`${student.name} scored ${student.grade}`);
    console.log('');
}


const fruit = 'tangerina'
let reverseFruit = ''

for (let i = fruit.length - 1; i >= 0; i--) {
    reverseFruit += fruit[i];
}
console.log(reverseFruit);
