const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});
app.get("/about", (req, res) => {
  res.send("/...");
});
app.get("/contact", (req, res) => {
  res.send("...");
});

app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(port, () => {
  console.log("...");
});
