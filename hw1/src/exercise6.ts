type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return {
    name: name,
    age: age,
  };
}

const person = createPerson("John", 30);
console.log(person);
