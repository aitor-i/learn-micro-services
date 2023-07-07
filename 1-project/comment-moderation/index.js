import express from "express";

import cors from "cors";

const app = express();

app.use(cors());

const commentsForModeration = {};

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") res.status(404);
});

app.listen(4004, () => {
  console.log("Listening on port 4004!");
});
