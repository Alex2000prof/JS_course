const element = document.getElementById("username");

if (element) {
  const inputElement = element as HTMLInputElement;
  inputElement.value = "Hello, TypeScript!";
  console.log(`Input value set to: ${inputElement.value}`);
}
