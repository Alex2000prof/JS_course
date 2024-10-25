type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id: number;
  price: number;
};

type Order = {
  type: "order";
  orderId: string;
  amount: number;
};

function handleData(data: (User | Product | Order)[]): void {
  data.forEach((item) => {
    if (isUser(item)) {
      console.log(`Hello, ${item.name}! You are ${item.age} years old.`);
    } else if (isProduct(item)) {
      console.log(`Product ID: ${item.id}, Price: $${item.price}`);
    } else if (isOrder(item)) {
      console.log(`Order ID: ${item.orderId}, Amount: $${item.amount}`);
    } else {
      console.log("Unknown item type.");
    }
  });
}

function isUser(item: any): item is User {
  return item.type === "user";
}

function isProduct(item: any): item is Product {
  return item.type === "product";
}

function isOrder(item: any): item is Order {
  return item.type === "order";
}

const mixedData: (User | Product | Order)[] = [
  { type: "user", name: "Alice", age: 28 },
  { type: "product", id: 101, price: 29.99 },
  { type: "order", orderId: "A123", amount: 100.5 },
  { type: "user", name: "Bob", age: 35 },
  { type: "product", id: 102, price: 19.99 },
];

handleData(mixedData);
