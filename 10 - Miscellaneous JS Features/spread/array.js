const nums = [1, 2, 3, 4, 5]
const num = Math.max(nums)
console.log(num)

const result = Math.max(...nums)
console.log(result)

function giveMeFour(a, b, c, d) {
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green']
console.log(giveMeFour(...colors))

const fruits = ['apple', 'grape', 'lemon']
const vegetables = ['broccoli', 'carot', 'beans']
const total = [...fruits, ...vegetables]
console.log(total)