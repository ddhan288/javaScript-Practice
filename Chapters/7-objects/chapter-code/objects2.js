let product = {
  company: "Mango",
  price: 861,
  "item-name": "t-shirt",
  displayPrice: function () {
    console.log(`Price of the product is ${this.price}`);
  }


};
product.displayPrice();


