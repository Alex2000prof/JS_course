let books = [
  { id: 1, title: "game of thrones", author: "dont know", publishedYear: 2000 },
  { id: 2, title: "book", author: "booker", publishedYear: 1300 },
];

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const bookId = parseInt(req.params.bookId, 10);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

exports.createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const bookId = parseInt(req.params.bookId, 10);
  const { title, author, publishedYear } = req.body;
  const bookIndex = books.findIndex((b) => b.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = { id: bookId, title, author, publishedYear };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

exports.deleteBook = (req, res) => {
  const bookId = parseInt(req.params.bookId, 10);
  const bookIndex = books.findIndex((b) => b.id === bookId);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};
