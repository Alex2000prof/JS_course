const express = require("express");
const app = express();
const books_rout = require("./routes/books");

app.use(express.json());
app.use("/", books_rout);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
