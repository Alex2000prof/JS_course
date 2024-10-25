function logLength<T extends { length: number }>(item: T): void {
  console.log("Length:", item.length);
}

logLength("Hello, world!");
logLength([1, 2, 3, 4, 5]);
