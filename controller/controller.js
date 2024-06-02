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
    const riddleQuestion = await funnyRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ ...riddleQuestion[0], category: "funny" });
  } catch (err) {
    next(err);
  }
}

export async function numberOfFunnyRiddles(req, res, next) {
  try {
    const number = req.params.number;
    const riddlesArray = await funnyRiddles.aggregate([
      { $sample: { size: +number } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ riddlesArray, category: "funny" });
  } catch (error) {
    if (!error.status) {
      error.status = 500;
    }
    next(error);
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
      riddleQuestion: riddleQuestion._id,
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
    const riddleQuestion = await logicRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ ...riddleQuestion[0], category: "logic" });
  } catch (err) {
    next(err);
  }
}

export async function numberOfLogicRiddles(req, res, next) {
  try {
    const number = req.params.number;
    const riddlesArray = await logicRiddles.aggregate([
      { $sample: { size: +number } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ riddlesArray, category: "logic" });
  } catch (error) {
    if (!error.status) {
      error.status = 500;
    }
    next(error);
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
      riddleQuestion: riddleQuestion._id,
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
    const riddleQuestion = await mathRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ ...riddleQuestion[0], category: "math" });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
}

export async function numberOfMathRiddles(req, res, next) {
  try {
    const number = req.params.number;
    const riddlesArray = await mathRiddles.aggregate([
      { $sample: { size: +number } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ riddlesArray, category: "math" });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
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
      riddleQuestion: riddleQuestion._id,
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
    const riddleQuestion = await mysteryRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ ...riddleQuestion[0], category: "mystery" });
  } catch (err) {
    if(!err.status){
      err.status = 500;
    }
    next(err)
  }
}

export async function numberOfMysteryRiddles(req, res, next){
  try {
    const number = req.params.number;
    const riddlesArray = await mysteryRiddles.aggregate([
      { $sample: { size: +number } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ riddlesArray, category: "mystery" });
  } catch (err) {
    if(!err.status){
      err.status = 500;
    }
    next(err)
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
      riddleQuestion: riddleQuestion._id,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    if(!err.status){
      err.status = 500;
    }
    next(err)
  }
}

export async function getWhoAmI(req, res, next) {
  try {
    const riddleQuestion = await whoAmIRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ ...riddleQuestion[0], category: "Who am I" });
  } catch (err) {
    if(!err.status){
      err.status = 500;
    }
    next(err)
  }
}

export async function numberOfWhoAmIRiddles(req, res, next){
  try {
    const number = req.params.number;
    const riddlesArray = await whoAmIRiddles.aggregate([
      { $sample: { size: +number } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ riddlesArray , category: "Who am I" });
  } catch (err) {
    if(!err.status){
      err.status = 500;
    }
    next(err)
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
      riddleQuestion: riddleQuestion._id,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    if(!err.status){
      err.status = 500;
    }
    next(err)
  }
}

export async function getScience(req, res, next) {
  try {
    const riddleQuestion = await scienceRiddles.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ ...riddleQuestion[0], category: "science" });
  } catch (err) {
    if(!err.status){
      err.status = 500;
    }
    next(err)
  }
}

export async function numberOfScienceRiddles(req, res, next) {
  try {
    const number = req.params.number;
    const riddlesArray = await scienceRiddles.aggregate([
      { $sample: { size: +number } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json({ riddlesArray, category: "science" });
    
  } catch (err) {
    if(!err.status){
      err.status = 500;
    }
    next(err)
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
      riddleQuestion: riddleQuestion._id,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
}
