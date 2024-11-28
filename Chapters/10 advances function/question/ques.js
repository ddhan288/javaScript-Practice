let multiply = function multiplyTwoNumbers(num, num2) {
  return num * num2;
};
console.log(multiply(2, 3));
let printGreetings = () => console.log("hello");
let runTwice = (inputFunction) => {
  inputFunction();
  inputFunction();
};

let arr = [1, 2, 3, 4];
sum = 0;
arr.forEach((num) => (sum += num));

console.log(sum);

let squares = arr.map((num = num * num));
console.log(squares);
