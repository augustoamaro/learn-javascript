// Cria um novo array com todos os elementos 

const nums = [24, 34, 35, 45, 56, 59, 69, 75, 88, 92];
console.log(nums)

const odds = nums.filter(n => n % 2 === 1)
console.log(odds)

const smallNums = nums.filter(n => n < 50)
console.log(smallNums)