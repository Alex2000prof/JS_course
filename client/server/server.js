const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); // Для парсинга JSON тел запросов

// GET-запрос к /api/hello
app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

// POST-запрос к /api/world
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body.inputValue}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
