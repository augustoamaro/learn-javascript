function avg(arr) {
  let total = 0;

  for (let num of arr) {
    total += num;
  }

  let res = total / arr.length;
  return res;
}

const result = avg([1, 1, 2, 3, 5, 8, 13, 21]);
console.log(result);