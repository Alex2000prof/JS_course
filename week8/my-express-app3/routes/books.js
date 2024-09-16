const express = require('express');
const router = express.Router();

let books = [];

router.get('/books', (req, res) => {
  res.json(books);
});

router.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const updatedBook = req.body;
  books[id] = updatedBook;
  res.json(updatedBook);
});

router.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  books.splice(id, 1);
  res.status(204).send();
});

module.exports = router;
