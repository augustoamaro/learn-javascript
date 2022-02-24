// Strings vem com um conjunto de métodos que são ações
// Substituir partes de uma string, mudar para maiúsculo, etc...

let msg = 'they dont know me son'
console.log(msg.toLocaleUpperCase()) // Maiusculo

let motivation = 'CANT HURT ME'
console.log(motivation.toLowerCase()); // Minusculo

let color = '  green  '
console.log(color.trim()) // Remove espaços no começo e no fim da string

let tvShow = 'Seal Team'
console.log(tvShow.indexOf('Seal'))
console.log(tvShow.indexOf('Team'))
console.log(tvShow.indexOf('w'))

let basketPlayer = 'Lebron James'
console.log(basketPlayer.slice(0,5)); // Corta/Remove o caracter (inicio/fim)

let halls = 'halls preto'
console.log(halls.replace('preto', 'uva verde')); // Substitui a palavra por outra 