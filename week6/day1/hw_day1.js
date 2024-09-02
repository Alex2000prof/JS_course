// ex1

//1
// because function works and last definition 'a' = 3
// answer: 3

//1.1
// a = CONST
// answer: Error

//2
// answer: 0
//

//2.1
// answer: 5
//

//2.2
// answer: error
//

//3 3.1
// answer: "hello", inside the funcFive function hello
//

//4 4.1 4.2
// answer: "test"
//

//5 5.1 5.2
// answer: 5, 2

//ex 2
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;
Console.log(experiencePoints);

//ex3

const check_str = (value) => typeof value === "string";
console.log(check_str("hello")); // true
console.log(check_str([1, 2, 4, 0])); // false

//ex4
const sum = (a, b) => a + b;
console.log(sum(5, 7));

//ex5
function get(weight) {
  return weight * 1000;
}
const kg = function (weight_2) {
  return weight_2 * 1000;
};

const get_weight = (value) => value * 1000;
console.log(get_weight(20));

//ex6

(function (children, name, location, job) {
  console.log(
    `You will be a ${job} in ${location}, and married to ${name} with ${children} kids.`
  );
})(5, "Sasha", "moscow", "fsd");

//ex 7

(function (name) {
  const navbar = document.getElementById("navbar");
  const div = document.createElement("div");
  div.innerHTML = `You r welcome, ${name}`;
  navbar.appendChild(div);
})("Sasha");

//ex8

function makeJuice(size) {
    function addIngredients(
        size_drink,
        first_ingriedient,
        second_ingriedient,
        third_ingridient
      ) {
        const mes = `The client wants a ${size_drink} juice, containing ${first_ingriedient} , ${second_ingriedient}, {
          ${third_ingridient}`;
      }
};

