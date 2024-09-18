const express = require("express");
const app = express();
const port = 5001;

app.use(express.json());

const booksRoutes = require("./routes/booksRoutes");

app.use("/api/books", booksRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
