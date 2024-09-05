document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const userData = {
      firstName: firstName,
      lastName: lastName,
    };
    const jsonString = JSON.stringify(userData, null, 2);
    document.getElementById("result").textContent = jsonString;
  });
