// Aceita uma função de callback. Chama a função uma por elemento do array

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// Usando anonymous function
numbers.forEach(function (num) {
  console.log(num * 2);
})

function printTriple(n) {
  console.log(n * 3);
}

// Usando uma função pre-definida
numbers.forEach(printTriple);

// Usando index
numbers.forEach(function (num, idx) {
  console.log(idx, num);
});


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

// printando todos os títulos do livro usando forEach
books.forEach(function (book) {
  console.log(book.title.toUpperCase())
})

// printando todos os títulos do livro usando for...of
for (let book of books) {
  console.log(book.title.toUpperCase())
}

// printando todos os títulos do livro usando for loop
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase())
}