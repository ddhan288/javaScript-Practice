// 1. JavaScript Object Notation: Not the same as JS object, but similar.
// 2. Common in network calls and data storage.
// 3. JSON.stringify) and JSON.parse(
// 4. Strings are easy to transport over network.
// 5. JSON requires double quotes. Escaped as \"
// 6. JSON is data format, JS object is a data structure.

let product = {
  name: "T-shirt",
  price: 768,
  rating: {
    star: 4.5,
    noOfReviews: 453,
  },
};

console.log(typeof product);
console.log(product);
let str = JSON.stringify(product);
console.log(typeof str);
console.log(str);

let newProduct = JSON.parse(str);
console.log(typeof newProduct);
console.log(newProduct);
