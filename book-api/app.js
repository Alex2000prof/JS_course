const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Book API!");
});

const books = [
  { id: 1, title: "title1", author: "Alex", publishedYear: 2004 },
  { id: 2, title: "title2", author: "Vanya", publishedYear: 2005 },
  { id: 3, title: "title3", author: "Petya", publishedYear: 2006 },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookID", (req, res) => {
  const bookID = parseInt(req.params.bookID);
  const book = books.find((b) => b.id === bookID);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("not found");
  }
});

app.post("/api/books", (req, res) => {
  const newbook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books.push(newbook);
  res.status(201).json(newbook); // 201 - created
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

fetch("http://localhost:3001/api/books")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
