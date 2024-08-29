const form = document.querySelector("form");
console.log(form);

const f_input = document.getElementById("fname");
const l_input = document.getElementById("lname");
console.log(f_input);
console.log(l_input);

const first = document.querySelector('input[name="firstname"]');
const last = document.querySelector('input[name="lastname"]');
console.log(first);
console.log(last);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (firstName && lastName) {
    const ul = document.querySelector(".usersAnswer");
    const liFirstName = document.createElement("li");
    liFirstName.textContent = firstName;

    const liLastName = document.createElement("li");
    liLastName.textContent = lastName;

    ul.appendChild(liFirstName);
    ul.appendChild(liLastName);
  } else {
    console.log("");
  }
});
