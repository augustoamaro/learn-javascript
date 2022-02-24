const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

console.log(palette['red']);

let mysteryColor = 'yellow';
console.log(palette.mysteryColor) // undefined
console.log(palette[mysteryColor]); // yellow