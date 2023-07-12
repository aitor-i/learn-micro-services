import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const posts = {};

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostType") {
    let { id, title } = data;
    posts[id] = { id, title, comments: [] };
    console.log(type, posts[id]);
  }

  if (type === "CommentCreated") {
    let { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
    console.log(type, JSON.stringify(post));
  }

  res.send({});
});

app.get("/posts", (req, res) => {
  res.status(201).send(posts);
});

app.listen(4003, () => {
  console.log("Listening on port 4003");
});
