const greet = require("./greeting");
const showColorfulMessage = require("./colorful-message");
const readFile = require("./read-file");

const name = "Alice";
console.log(greet(name));

showColorfulMessage();

readFile();
