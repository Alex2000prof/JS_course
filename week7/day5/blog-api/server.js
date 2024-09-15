const express = require("express"); // connect module express
const app = express(); // create instance
const port = 3000; // create port

const data_base = [
  { id: 1, title: "title1", content: "content1" },
  { id: 1, title: "title2", content: "content2" },
  { id: 1, title: "title3", content: "content3" },
];
app.get("/post", (req, res) => {
  res.json(data_base);
});
app.get("/post", (req, res) => {
  const p_id = parseInt(req.params.id);
  const post = data_base.find((p) => p.id === p_id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("not found");
  }
});

app.use(express.json());
app.post("/post", (req, res) => {
  const new_post = {
    id: data_base.length + 1,
    title: req.body.title, //
    content: req.body.content,
  };
  data_base.push(new_post);
  res.status(201).json(new_post);
});

app.put("/posts/:id", (req, res) => {
  const p_id = parseInt(req.params.id);
  const post = data_base.find((p) => p.id === p_id);
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
  } else {
    res.status(404).send("Not found");
  }
});

app.delete("/posts/:id", (req, res) => {
  const p_id = parseInt(req.params.id);
  const post_index = data_base.findIndex((p) => p.id === p_id);
  if (post_index !== -1) {
    data_base.splice(post_index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send("not found");
  }
});

app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/post`);
});
