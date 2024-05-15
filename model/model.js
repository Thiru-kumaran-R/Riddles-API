import mongoose from "mongoose";

const Schema = mongoose.Schema;

const riddlesSchema = new Schema({
  riddle: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const riddle = mongoose.model("riddle", riddlesSchema);

module.exports = { riddle };
