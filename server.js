import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./routes/routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB = process.env.MONGODB_URI;

const start = async () => {
  if (!DB) {
    throw new Error("auth DB_URI must be defined");
  }
  try {
    await mongoose.connect(DB);
    console.log("Server connected to MongoDb!");
  } catch (err) {
    console.error(err);
  }

  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}!!!!!!!!!`);
  });
};

start();

app.use(express.json());
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
});

app.use((error, req, res, next) => {
  const message = error.message || "An unknown error occurred";
  const status = error.status || 500;
  return res.json({ message: message, status: status });
});
