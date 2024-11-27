let arr = [5, 6];
arr.unshift(4);
arr.push(7);
console.log(arr);

function elementAt(element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      console.log(`element found at index ${i}`);
      break;
    } else {
      console.log("element not found");
    }
    console.log("still locking for the element");
  }
}
elementAt(4);
console.log("____________-");
function getElement(arr, position) {
  return arr[position - 1];
}
console.log(getElement(arr, 2));

console.log("-----------------");
function arrCopy(arr) {
  return arr.slice(0, arr.length);
}
let copyArr = arrCopy(arr);
console.log(copyArr);
console.log("----------------------");
copyArr[0] = null;
console.log(`copy array ${copyArr}`);
console.log(`original arr ${arr}`);

console.log("----------------------");
arr2 = arr.slice(0, 4);
console.log(arr2);
arr3 = arr2.slice(0, arr.length);
console.log(arr3);

console.log("-------------");
let i = 0;

for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("__________");
let arr4 = [1, -6, 5, 7, -98];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > 0) {
    console.log(arr4[i]);
  }
}
console.log("-------------");

console.log("-------------");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("__________");
let num = 2;
let ii = 0;
// while (ii < 5) {
//   if (isPrime(num)) {
//     console.log(num);
//     ii++;
//     if ()
//   }
//   num++;
// }

while (true) {
  if (isPrime(num)) {
    console.log(num);
    ii++;
    if (ii >= 5) break;
  }
  num++;
}

let str = ["kG", "coding", "javascript", "course", "is", "best"];
let strConcat = " ";
for (let i = 0; i < str.length; i++) {
  strConcat += str[i] + " ";
}
console.log(strConcat);
