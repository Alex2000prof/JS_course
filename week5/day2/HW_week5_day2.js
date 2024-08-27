//ex 1
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Greg"), 1); // delete smth from str
console.log(people);

people.splice(people.indexOf("James"), 1, "Jason"); // change
console.log(people);

people.push("Aleks"); // add to end
console.log(people);

console.log(people.indexOf("Mary"));

const people_two = people.slice(1, people.length - 1); // return new array from index that we chose and in the end we use lenth - 1 to delete my name
console.log(people_two);

console.log(people.indexOf("Foo")); // -1 cause there is no Foo in array

const last_elem = people[people.length - 1];
console.log(last_elem);

//ex 1.2
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Devon") {
    break;
  }
}

//ex 2
const colors = ["blue", "yellow", "grey", "purple", "orange"];
for (let i = 0; i < colors.length; i++) {
  console.log("My choice, ${i + 1} - ${colors[i]}");
}
//ex3
let us_num = prompt("Enter number: ");
while (typeof us_num !== "number" || us_num < 10) {
  us_num = prompt("Enter again: ");
  us_num = Number(us_num);
}
//ex4
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
console.log(building.numberOfFloors); // 4

console.log(building.numberOfAptByFloor.firstFloor); // 3
console.log(building.numberOfAptByFloor.thirdFloor); // 9

const second_d = building.nameOfTenants[1];
const count_r = building.numberOfRoomsAndRent[second_d.toLowerCase()][0];
console.log(second_d); // "Dan"
console.log(count_r); // 4

const first = building.nameOfTenants[0]; // "Sarah"
const second = building.nameOfTenants[1]; // "Dan"
const third = building.nameOfTenants[2]; // "David"

const rentSarah = building.numberOfRoomsAndRent[first.toLowerCase()][1]; // 990
const rentDavid = building.numberOfRoomsAndRent[third.toLowerCase()][1]; // 500
const rentDan = building.numberOfRoomsAndRent[second.toLowerCase()][1]; // 1000

const sum_dav_sar = rentSarah + rentDavid;

if (sum_dav_sar > rentDan) {
  building.numberOfRoomsAndRent[second.toLowerCase()][1] = 1200;
}

console.log(building.numberOfRoomsAndRent[second.toLowerCase()][1]); // 1200 (если условие выполнено)

//ex 5

const family = {
  father: "sergey",
  mom: "julia",
  son: "sasha",
  sister: "anna",
};
for (let i in family) {
  console.log(i);
}
for (let i in family) {
  console.log(family[i]);
}

//ex 6

const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};
let sent = "";
for (let name in details) {
  sent += details[name] + " ";
}
console.log(sentence.trim()); // trim - delete space in the end

//ex 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const secret = names.map(name => name[0]).sort().join("");
// map() - take first letter from each name.
// sort() -  sort letters in alphabet.
// join("") -  makes string from array - "ABJKPS".