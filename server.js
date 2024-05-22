import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";

const app = express();
configDotenv();
const PORT = process.env.PORT || 3000;
const DB = process.env.RIDDLES_DB;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.use((req, res, next) => {
  return res.status(404).json({
    message: "No such route exits",
    status: 404,
  });
});

app.use((error, req, res, next) => {
  const message = error.message;
  const status = error.status;
  return res.json({ message: message, status: status });
});

app.listen(PORT, () => {
  mongoose.connect(DB).then(() => console.log(`port running at ${PORT}`));
});
