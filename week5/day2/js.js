let name = "Sasha";
const name_2 = "Vasya";
list = [1, 2, 3];

function dun() {
  console.log("Hello");
}
dun();
let number = 12;
if (number > 5) {
  console.log("number > 5");
} else {
  console.log("number < 5");
}
console.log("to be or not to be".indexOf(" ")); //2 так как пробел стоит на втором месте
console.log("to be or not to be".indexOf("To")); //0 так как ту стоит на нулевом месте
console.log("to be or not to be".indexOf("be", 2)); //2
console.log("To be or not to be".indexOf("B")); // -1

string = "A-quick-brown-fox"; //string to be split
array_of_strings = string.split("-"); //The split() function

console.log(string); //note that the split function doesn't change the original string
console.log(array_of_strings);

var person = {
  name: "Jack",
  age: 34,
};
console.log(person.age > 18 && "Driving allowed");
// 'Driving allowed'

var person = {
  name: "Jack",
  age: 34,
};
console.log(person.job || "unemployed");
// 'unemployed'

/* for-loop syntax in JavaScript */
for (variable_initialize; condition; change_variable) {
  // code block to be executed
}
// variable_initialize(необязательно): Этот оператор выполняется один раз перед выполнением for-loopблока кода. Он используется для определения переменной счетчика и т. д., которую вы можете использовать для управления потоком.

// condition: Это утверждение определяет условие, от которого for-loopзависит поток управления (каждая итерация).

// change_variable: Этот оператор выполняется после каждой итерации цикла for. Это можно использовать для обновления инициализированной управляющей переменной.

// Примечание: variable_initializeнеобязательно, так как вместо этого можно использовать уже инициализированную переменную. Не забудьте ; после variable_initializeдаже если вы решили пропустить это!