function factorialize(num) {
  var sum = 1;
  for(var i= 1; i<=num; i++) {
    sum *= i;
  }
  return sum;
}

console.log(factorialize(5));
