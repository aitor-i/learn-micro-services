import express from "express";

import bodyParser from "body-parser";
import { randomBytes } from "crypto";

import cors from "cors";
import axios from "axios";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  console.log("getting comments");

  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content: content,
      postId: req.params.id,
      status: "pending",
    },
  });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  const event = req.body;
  console.log(event);
});

app.listen(4001, () => {
  console.log("Listening on port 4001!");
});
