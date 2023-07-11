import express from "express";
import axios from "axios";
import cors from "cors";

import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("event: ", event);

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message); // posts service
  });

  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message); // comments service
  });

  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message); //query service
  });

  axios.post("http://localhost:4004/events", event).catch((err) => {
    console.log(err.message); //query service
  });

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("listening on 4005!");
});
