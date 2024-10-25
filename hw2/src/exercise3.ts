class Animal {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public makeSound(): string {
      return "Some sound";
    }
  }
  
  class Dog extends Animal {
    public makeSound(): string {
      return "Bark";
    }
  }
  
  const dog = new Dog("Buddy");
  console.log(dog.makeSound());
  