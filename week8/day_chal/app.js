const express = require('express');
const app = express();
const quizRouter = require('./routes/quiz');

app.use(express.json());
app.use('/', quizRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
