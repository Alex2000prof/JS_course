import human from "./data.js";

function average(human) {
  if (human.length === 0) return 0;

  const totalAge = human.reduce((sum, hu) => sum + hu.age, 0);
  return totalAge / human.length;
}

console.log(`average: ${average(human).toFixed(2)} years
`);
