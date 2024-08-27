const take_div = document.getElementById("container");
console.log(take_div);

const list = document.querySelectorAll(".list li");
list[1].textContent = "Richard";

const second = document.querySelectorAll(".list")[1];
second.removeChild(secondList.children[1]);

second.children[0].textContent = "aleks";

const all = document.querySelectorAll(".list");
all.forEach((list) => list.classList.add("student_list"));

const first = document.querySelector(".list");
first.classList.add("university", "attendance");

take_div.style.backgroundColor = "lightblue";
take_div.style.padding = "10px";

second.children[2].style.display = "none";
list[1].style.border = "1px solid black";

document.body.style.fontSize = "18px";

if (take_div.style.backgroundColor === "lightblue") {
  const userNames = Array.from(document.querySelectorAll(".list li")).map(
    (li) => li.textContent
  );
  alert(`hi, ${userNames.join(" и ")}`);
}

