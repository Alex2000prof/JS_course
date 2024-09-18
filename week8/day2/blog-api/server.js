const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/posts", (req, res) => {
  res.json({ message: "Posts route is working!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
