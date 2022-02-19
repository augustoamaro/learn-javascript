const price = [400.30, 3000, 99.99, 12.00, 1.30, 9000];

const sorted = price.sort()
console.log(sorted)

const ascSort = price.sort((a, b) => a - b)
console.log(ascSort)

const descSort = price.sort((x, y) => y - x)
console.log(descSort)

