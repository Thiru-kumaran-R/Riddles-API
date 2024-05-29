import {
  funnyRiddles,
  logicRiddles,
  mathRiddles,
  mysteryRiddles,
  whoAmIRiddles,
  scienceRiddles,
} from "../model/model.js";

export async function getFunnyRiddle(req, res, next) {
  try {
    const riddleQuestion = await funnyRiddles.find();
    return res
      .status(200)
      .json({ ...riddleQuestion[0]._doc, category: "funny" });
  } catch (err) {
    next(err);
  }
}

export async function postFunnyRiddle(req, res, next) {
  try {
    const riddle = req.body.riddle;
    const answer = req.body.answer;

    const riddleQuestion = new funnyRiddles({
      riddle: riddle,
      answer: answer,
    });
    await riddleQuestion.save();
    return res.status(201).json({
      message: "Riddle posted successfully",
      riddleQuestion: riddleQuestion,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
}

export async function getLogicRiddle(req, res, next) {
  try {
    const riddleQuestion = await logicRiddles.find();
    return res
      .status(200)
      .json({ ...riddleQuestion[0]._doc, category: "logic" });
  } catch (err) {
    next(err);
  }
}

export async function postLogicRiddle(req, res, next) {
  try {
    const riddle = req.body.riddle;
    const answer = req.body.answer;

    const riddleQuestion = new logicRiddles({
      riddle: riddle,
      answer: answer,
    });
    await riddleQuestion.save();
    return res.status(201).json({
      message: "Riddle posted successfully",
      riddleQuestion: riddleQuestion,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
}

export async function getMathRiddle(req, res, next) {
  try {
    const riddleQuestion = await mathRiddles.find();
    return res
      .status(200)
      .json({ ...riddleQuestion[0]._doc, category: "math" });
  } catch (err) {
    next(err);
  }
}

export async function postMathRiddle(req, res, next) {
  try {
    const riddle = req.body.riddle;
    const answer = req.body.answer;

    const riddleQuestion = new mathRiddles({
      riddle: riddle,
      answer: answer,
    });
    await riddleQuestion.save();
    return res.status(201).json({
      message: "Riddle posted successfully",
      riddleQuestion: riddleQuestion,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
}

export async function getMysteryRiddles(req, res, next) {
  try {
    const riddleQuestion = await mysteryRiddles.find();
    return res
      .status(200)
      .json({ ...riddleQuestion[0]._doc, category: "mystery" });
  } catch (err) {
    next(err);
  }
}

export async function postMysteryRiddle(req, res, next) {
  try {
    const riddle = req.body.riddle;
    const answer = req.body.answer;

    const riddleQuestion = new mysteryRiddles({
      riddle: riddle,
      answer: answer,
    });
    await riddleQuestion.save();
    return res.status(201).json({
      message: "Riddle posted successfully",
      riddleQuestion: riddleQuestion,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
}

export async function getWhoAmI(req, res, next) {
  try {
    const riddleQuestion = await whoAmIRiddles.find();
    return res
      .status(200)
      .json({ ...riddleQuestion[0]._doc, category: "Who am I" });
  } catch (err) {
    next(err);
  }
}

export async function postWhoAmIRiddle(req, res, next) {
  try {
    const riddle = req.body.riddle;
    const answer = req.body.answer;

    const riddleQuestion = new whoAmIRiddles({
      riddle: riddle,
      answer: answer,
    });
    await riddleQuestion.save();
    return res.status(201).json({
      message: "Riddle posted successfully",
      riddleQuestion: riddleQuestion,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
}

export async function getScience(req, res, next) {
  try {
    const riddleQuestion = await scienceRiddles.find();
    return res
      .status(200)
      .json({ ...riddleQuestion[0]._doc, category: "science" });
  } catch (err) {
    next(err);
  }
}

export async function postScienceRiddle(req, res, next) {
  try {
    const riddle = req.body.riddle;
    const answer = req.body.answer;

    const riddleQuestion = new scienceRiddles({
      riddle: riddle,
      answer: answer,
    });
    await riddleQuestion.save();
    return res.status(201).json({
      message: "Riddle posted successfully",
      riddleQuestion: riddleQuestion,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
}
