const express = require("express");
const usersRouter = require("./routes/users"); // Подключаем файл с маршрутами

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter); // Все маршруты для пользователей будут начинаться с /users

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
