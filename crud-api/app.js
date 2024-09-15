const express = require("express");
const app = express();
const port = 3002;

const { fetchPosts } = require("./data/dataService");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the CRUD API!");
});
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts(); 
    res.json(posts);
    console.log("success");
  } catch (error) {
    res.status(500).send("error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
