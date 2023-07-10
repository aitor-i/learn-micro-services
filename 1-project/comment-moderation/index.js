import express from "express";

import axios from "axios";

import cors from "cors";

const app = express();

app.use(cors());

const commentsForModeration = {};

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    const newData = { ...data, status };
    await axios.post("http://localhost/4005/events", {
      type: "CommentModerated",
      data: newData,
    });
    console.log(data);
  }
  res.status(404);
});

app.listen(4004, () => {
  console.log("Listening on port 4004!");
});
