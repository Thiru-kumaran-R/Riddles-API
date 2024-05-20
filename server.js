import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

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
  mongoose
    .connect(
      "mongodb+srv://thiru:jjhtrF0HFn55rhrI@firstproject.27hr6ge.mongodb.net/riddles"
    )
    .then(() => console.log(`port running at ${PORT}`));
});
