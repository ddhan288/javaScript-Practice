// 1. Functions in JavaScript are first-class citizens; they can be assigned to variables.
// 2. Functions defined without a name, often assigned to a variat
// 3. Anonymous functions can be properties in objects.
// 4. Can be passed as arguments to other functions.
// 5. Invoked using () after the function name or variable.
// 6. console.log(myFunction); and typeof myFunction will both indicate it's a function.
let sum = function (num1, num2) {
  return num1 + num2;
};
let newSum = sum;

console.log(sum(4, 5));
console.log(newSum(5, 7));

// add three no

function sumThreeNumbers(num1, num2, num3, sumTwoNumbers) {
  let sum1 = sumTwoNumbers(num1, num2);
  return sumTwoNumbers(sum1, num3);
}

console.log(sumThreeNumbers(1, 2, 3, sum));

//arrow function
let sum1 = (num1, num2) => {
  return num1 + num2;
};
console.log(sum1(2, 3));

let square = (num) => {
  return num * num;
};
// or same can be written as
// let square = num => {
//   return num * num;
// };

// let square = num => return num * num;

console.log(square(5));
