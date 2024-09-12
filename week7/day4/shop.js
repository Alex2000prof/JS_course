const products = require("./products");

function search(pr_name) {
  return products.find((product) => product.name === pr_name);
}
const product = search("tea");
console.log(product);
