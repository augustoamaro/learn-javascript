// Utiliza apenas para objeto

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

for (let prop in jeopardyWinnings) {
    console.log(prop);
}

let total = 0;
for (let prop in jeopardyWinnings) {
    total += jeopardyWinnings[prop];
}

console.log(`Ken Jennings Total Earnings: ${total}`);


const alunos = {
    nome: 'Jurandir',
    sobreNome: 'Silva',
    nota: 9.5
}

for (let aluno in alunos) {
    console.log(alunos[aluno])
}