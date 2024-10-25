type Person1 = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person1 & Address;

const person: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "Main St",
  city: "Wonderland",
};

console.log(person);
