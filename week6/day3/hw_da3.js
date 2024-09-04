//ex 1

//1
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//2
function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
  //destructuring
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });

//3

const users = { user1: 18273, user2: 92833, user3: 90315 };
const array = Object.entries(users);
const new_array = array.map(([key, value]) => [key, value * 2]);
console.log(new_array);

//4
// object

//5
// ans: 2

//6
//6.1

// [2] === [2] // False
// {} === {} // False

//6.2

object1.number = 4;
console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

//6.3
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
class Mammal extends Animal {
  sound(sound) {
    return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. It says ${sound}`;
  }
}
const farmerCow = new Mammal("Sasha", "dog", "black");
console.log(farmerCow.sound("gav"));
