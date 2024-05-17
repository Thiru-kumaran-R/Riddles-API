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

const funnyRiddles = mongoose.model("funnyRiddle", riddlesSchema);
const logicRiddles = mongoose.model("logicRiddles", riddlesSchema);
const mathRiddles = mongoose.model("mathRiddles", riddlesSchema);
const mysteryRiddles = mongoose.model("mysteryRiddles", riddlesSchema);
const whoAmIRiddles = mongoose.model("whoAmIRiddles", riddlesSchema);

export {
  funnyRiddles,
  logicRiddles,
  mathRiddles,
  mysteryRiddles,
  whoAmIRiddles,
};
