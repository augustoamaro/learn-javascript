const student = {
  firstName: 'David',
  lastName: 'Jones',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88
  }
};

const avg = (student.exams.midterm + student.exams.final) / 2
console.log(avg);


const shoppingCart = [
  {
    product: 'PS5',
    price: 499,
    qty: 1,
  },
  {
    product: 'Game Pass',
    price: 19,
    qty: 5,
  },
  {
    product: 'PS5 Controller',
    price: 199.90,
    qty: 1,
  }
]