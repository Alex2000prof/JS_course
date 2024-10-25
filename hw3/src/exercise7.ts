function formatInput<T extends { toString(): string }>(input: T): string {
  return `Formatted input: ${(input as unknown as string).toString()}`;
}

console.log(formatInput(123));
console.log(formatInput("Hello!"));
