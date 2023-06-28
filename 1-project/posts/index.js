import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import { randomBytes } from "crypto";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  console.log("Get-post called");
  res.send(posts);
});

app.post("/posts", (req, res) => {
  console.log("Post a post");

  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
