import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.get(cors());
app.use(bodyParser.json());

const posts = {};
const comments = [];

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostType") {
    let { id, title } = data;
    posts[id] = { id, title, comments: [] };
    console.log(type, posts[id]);
  }

  if (type === "CommentCreated") {
    let { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, content });
    console.log(type, post);
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on port 4003");
});
