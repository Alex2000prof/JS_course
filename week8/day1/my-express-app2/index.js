const express = require("express");
const app = express();
const todosRouter = require("./routes/todos");

app.get("/", (req, res) => {
  res.send("privet !");
});

app.use(express.json());
app.use("/", todosRouter);

app.listen(3001, () => {
  console.log("'Server is running on http://localhost:3000'");
});
