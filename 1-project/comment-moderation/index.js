import express from "express";

import cors from "cors";

const app = express();

app.use(cors());

app.listen(4004, () => {
  console.log("Listening on port 4004!");
});
