import { riddle } from "../model/model.js";

export const getRiddle = async (req, res, next) => {
  const riddle = await riddle.findOne();
  console.log(riddle);
};
