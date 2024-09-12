import _ from "lodash";
import { add, multiply } from "./math.js";

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log(`Sum of array: ${sum}`);

console.log(`Add: ${add(2, 3)}`);
console.log(`Multiply: ${multiply(2, 3)}`);
