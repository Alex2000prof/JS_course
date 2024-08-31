const todoList = [];

function addTask(e) {
  e.preventDefault();
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  const task = { text, done: false };
  todoList.push(task);
  renderTask(task);
  input.value = "";
}

function renderTask(task) {
  const taskBox = document.querySelector(".tasks");
  const item = document.createElement("div");
  item.className = "item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = () => toggleDone(task, item);

  const taskText = document.createElement("span");
  taskText.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "del";
  deleteBtn.innerHTML = "&times;";
  deleteBtn.onclick = () => removeTask(task, item);

  item.append(checkbox, taskText, deleteBtn);
  taskBox.appendChild(item);
}

function toggleDone(task, item) {
  task.done = !task.done;
  item.querySelector("span").classList.toggle("done");
}

function removeTask(task, item) {
  todoList.splice(todoList.indexOf(task), 1);
  item.remove();
}

document.getElementById("taskForm").onsubmit = addTask;
