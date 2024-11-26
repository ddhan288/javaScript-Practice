// create a method to check if a number is odd or even;

function isOddEven(number) {
  if (number == 0) return "odd";
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(isOddEven(2));
console.log(isOddEven(0));
console.log(isOddEven(1));
console.log("------------");
function isOdd(number) {
  let rem = number % 2;
  let isOdd = rem == 1;
  return isOdd;
}
console.log(isOdd(4));
console.log(isOdd(41));

//create a method to return larger of the two numbers

function isGreater(a, b) {
  // if (a > b) {
  //   return `${a} is greater than $ {b}`  ;
  // } else {
  //   return `${b} is greater than ${a}`;
  // }
  return a > b ? a : b;
}

console.log("------------");
console.log(isGreater(10, 100));
console.log(isGreater(9, 10));
console.log(isGreater(10, 10));
console.log("------------");

//convert teperature from fahrenheit to degree celsius
function toCelsius(temp) {
  return (fahrenheit = (5 / 9) * (temp - 32));
}
console.log(toCelsius(100));
