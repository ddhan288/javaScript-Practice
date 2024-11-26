// De-structuring: Extract properties from objects easily.
// We can extract more than one property at once.
// Shorthand Property: {message: message} simplifies to just message.
// Shorthand Method: Define methods directly inside the object without the function keyword.

let product = {
  company: "Mango",
  price: 861,
  "item-name": "T-Shirt",
};

let { company, price } = product;
console.log(company);
console.log(price);

