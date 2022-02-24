function Ispangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (lowerCased.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

const result = Ispangram('The five boxing wizards jump quickly'); // true
console.log(result)