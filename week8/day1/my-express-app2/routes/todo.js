const express = require("express");
const router = express.Router();

let todos = [];

router.get("/todos", (req, res) => {
  res.json(todos);
});

router.post("/todos", (req, res) => {
  const newTask = req.body;
  todos.push(todos);
  res.status(201).json(newTask);
});

router.put("/todos", (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  todos[id] = updatedTask;
  res.json(updatedTask);
});

router.delete("/todos", (req, res) => {
  const id = req.params.id;
  todos.splice(id, 1);
  res.status(201).send();
});

module.exports = router;
