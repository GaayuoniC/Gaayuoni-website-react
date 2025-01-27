function factors(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}

const result = factors(5);
console.log(result);
