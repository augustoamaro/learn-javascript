// retorna o valor do primeiro elemento no array

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

// Encontra o primeiro filme que inclui 'Mrs
const movie = movies.find(movie => {
  return movie.includes('Mrs');
})

// Encontra o primeiro filme que começa com 'Mrs'
const movie2 = movies.find(m => m.indexOf("Mrs") === 0);

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
// Encontra o primeiro livro com rating maior que 4.3
const goodBook = books.find(b => b.rating >= 4.3);

console.log(goodBook)

// Encontra o primeiro livro com Neil Gaiman como author
const neilBook = books.find(b => (
  b.authors.includes('Neil Gaiman')
))

console.log(neilBook)