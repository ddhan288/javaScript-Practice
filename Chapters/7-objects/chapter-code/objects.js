let product = {
  company: "Mango",
  price: 861,
  "item-name": "T-Shirt",
};
console.log(typeof product);
console.log(product);
console.log(product.company);
console.log(product.price);
console.log(product.item_name);

product.company = "Banana";

console.log(product);

//bracket notation.
console.log("bracket---------------");
console.log(product["company"]);
let propertyName = "item-name";
console.log(product[propertyName]);
console.log("delete company---------------");

delete product.company;
console.log(product);
delete product["item-name"];
console.log(product);
