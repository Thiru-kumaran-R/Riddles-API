import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const DB =
  "mongodb+srv://thiru:jjhtrF0HFn55rhrI@firstproject.27hr6ge.mongodb.net/riddles";

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", router);

app.use((req, res, next) => {
  return res.status(404).json({
    message: "No such route exits",
    status: 404,
  });
  next();
});

app.use((error, req, res, next) => {
  const message = error.message;
  const status = error.status;
  return res.json({ message: message, status: status });
});

app.listen(PORT, () => {
  mongoose.connect(DB).then(() => console.log(`port running at ${PORT}`));
});
