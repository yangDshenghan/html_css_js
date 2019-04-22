function sum() {
  let sum = 0;
  function add(x) {
    sum += x;
    return sum;
  }
  return add;
}
let a = sum();

for (let i = 0;i<10;i++) {
  console.log(a(i));
}
/*累计求和函数，每次调用a（n)都会累加在函数里，结果是n+上次的累计和*/
