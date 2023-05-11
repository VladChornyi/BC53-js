const testFunc = (a, b) => {
  const c = 4;
  return a + b;
};
const sum = () => {
  let result = 0;
  return function (num) {
    return (result += num);
  };
};

const sum1 = sum(2);
console.log(sum1(2)); //2
console.log(sum1(4)); //4
console.log(sum1(10)); //10
console.log(sum1(5)); //15

function func(number) {
  let res = number;
  return function sum(num) {
    if (!num) {
      return res;
    }
    res += num;
    return sum;
  };
}
console.log(func(5)(5)(2)(1)(5)());

const test = a => {
  return b => {
    return a + b;
  };
};

console.log(test(5)(10));
