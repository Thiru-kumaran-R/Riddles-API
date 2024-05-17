import {
  funnyRiddles,
  logicRiddles,
  mathRiddles,
  mysteryRiddles,
  whoAmIRiddles,
} from "../model/model.js";

export async function getRiddle(req, res, next) {
  try {
    const riddleQuestion = await funnyRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(riddleQuestion);
  } catch (err) {
    next(err);
  }
}

export async function getLogicRiddle(req, res, next) {
  try {
    const riddleQuestion = await logicRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(riddleQuestion);
  } catch (err) {
    next(err);
  }
}

export async function getMathRiddle(req, res, next) {
  try {
    const riddleQuestion = await mathRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(riddleQuestion);
  } catch (err) {
    next(err);
  }
}

export async function getMysteryRiddles(req, res, next) {
  try {
    const riddleQuestion = await mysteryRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(riddleQuestion);
  } catch (err) {
    next(err);
  }
}

export async function getWhoAmI(req, res, next) {
  try {
    const riddleQuestion = await whoAmIRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(riddleQuestion);
  } catch (err) {
    next(err);
  }
}
