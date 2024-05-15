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

app.listen(PORT, () => {
  mongoose
    .connect(
      "mongodb+srv://thiru:jjhtrF0HFn55rhrI@firstproject.27hr6ge.mongodb.net/riddles"
    )
    .then(() => console.log(`port running at ${PORT}`));
});
