//create object to represent  a product from myntra.

let product = {
  brand: "adidas",
  Size: "S",
  name: "tshirt",
  fit: "slim fit",
  price: 1000,
  "deliver-time": "same day delivery",
  isIdenticalProduct: function () {},
};

// 2 create an objecct with two references and log changes to one object by changing the other one

let copyProduct = product;
console.log(product);
copyProduct.Size = "M";
console.log(product);
copyProduct.brand = "Nike";
console.log(product);

// 3 bracket notation to display delivery-time.
let estimatedDeliveryTime = product["deliver-time"];
console.log(estimatedDeliveryTime);

let currentStatus = {
  message: "good job",
  statuss: "complete",
};
let { message, statuss } = currentStatus;
console.log(message);
console.log(statuss);

//function to compare two functions are identical .
function isIdenticalProduct(product, product2) {
  if (typeof product != "object" || product2 != "object") {
    console.warn(`parameter passed was not an object`);
  }
  if (product == product2) {
    return true;
  }
  if (
    product.name === product2.name &&
    product.size === product2 &&
    product.fit === product2.fit
  ) {
    return true;
  } else {
    return false;
  }
}
let product2 = {
  brand: "adidas",
  Size: "S",
  name: "tshirt",
  fit: "slim fit",
  price: 1000,
  "deliver-time": "same day delivery",
  isIdenticalProduct: function () {},
};

let product3 = {
  brand: "adidas",
  Size: "M",
  name: "tshirt",
  fit: "slim fit",
  price: 1000,
  "deliver-time": "same day delivery",
  isIdenticalProduct: function () {},
};

console.log(isIdenticalProduct(product, ""));
console.log(isIdenticalProduct(product, product));
console.log(isIdenticalProduct(product3, product2));
console.log(isIdenticalProduct(product3, product3));
console.log(isIdenticalProduct(product2, product2));
console.log(isIdenticalProduct(product2, product));
