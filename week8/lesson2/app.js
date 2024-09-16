const express = "express";
const port = 3001;
const app = express();

app.use(express.json()); // add opportunity to work with data in format JSON

array = []; // in real project we use data base

app.get("/api/users", (req, res) => {
  res.json(array);
});

app.get("/api/users:id", (req, res) => {
  const user = array.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("Error");
  }
});

app.post("/api/users", (req, res) => {
  const newUser = {
    id: array.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  array.push(newUser);
  res.status(201).json(newUser);
});

app.put("/api/users", (req, res) => {
  const user = array.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
  } else {
    res.status(404).send("not found");
  }
});

app.delete("/api/users:id", (req, res) => {
  const index = array.findIndex((u) => u.id === parseInt(id));
  if (index !== -1) {
    const deleteUser = array.splice(index, 1);
    res.json(deleteUser[0]);
  } else {
    res.status(404).send("not found");
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
