// Objects work based on references, not actual data.
// Copying an object copies the reference, not the actual object.
// When comparing with ==, you're comparing references, not content.
// Chandes to one reference affects all copies.
let num1 = 5;
let num2 = num1;
console.log(`${num1}, ${num2}`);
num1 = 8;
console.log(`${num1}, ${num2}`);



/// object refrences
let x = {
  num: 5,
};
let y = x;
console.log(`x=${x.num} and y=${y.num}`);
x.num = 8;

console.log(`x=${x.num} and y=${y.num}`);

let p = { pop: "iujh" };
let q = { pop: "iujh" };
console.log(p == q); //false because it checks the addrss of refrences
console.log(p === q); //false .. despite .. because it checks only the refreces in case of object .
