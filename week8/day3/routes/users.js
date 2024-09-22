const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const path = require("path");

const router = express.Router();

let users = [];
const usersFilePath = path.join(__dirname, "../users.json");

// Если файл с пользователями уже существует, загружаем его содержимое
if (fs.existsSync(usersFilePath)) {
  users = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
}

// Регистрация пользователя
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  if (!firstName || !lastName || !email || !username || !password) {
    return res.status(400).send("Все поля должны быть заполнены");
  }

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).send("Пользователь с таким именем уже существует");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);

  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  res.status(201).send("Пользователь успешно зарегистрирован");
});

module.exports = router;
