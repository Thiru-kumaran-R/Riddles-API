import { Router } from "express";
import {
  //Get functions
  getFunnyRiddle,
  getLogicRiddle,
  getMathRiddle,
  getMysteryRiddles,
  getWhoAmI,
  getScience,
  numberOfFunnyRiddles,
  numberOfLogicRiddles,
  numberOfMathRiddles,
  //Post functions
  postFunnyRiddle,
  postMathRiddle,
  postLogicRiddle,
  postWhoAmIRiddle,
  postMysteryRiddle,
  postScienceRiddle,
} from "../controller/controller.js";
import { handleValidation, validateRiddle } from "../validation/validation.js";

const router = Router();

// /random


// /funny
router.get("/funny", getFunnyRiddle);
router.get("/funny/:number", numberOfFunnyRiddles)
router.post("/funny", validateRiddle, handleValidation, postFunnyRiddle);

// /math
router.get("/math", getMathRiddle);
router.get("/math/:number", numberOfMathRiddles)
router.post("/math", validateRiddle, handleValidation, postMathRiddle);

router.get("/logic", getLogicRiddle);
router.get("/logic/:number", numberOfLogicRiddles)
router.post("/logic", validateRiddle, handleValidation, postLogicRiddle);

router.get("/who-am-i", getWhoAmI);
router.post("/who-am-i", validateRiddle, handleValidation, postWhoAmIRiddle);

router.get("/mystery", getMysteryRiddles);
router.post("/mystery", validateRiddle, handleValidation, postMysteryRiddle);

router.get("/science", getScience);
router.post("/science", validateRiddle, handleValidation, postScienceRiddle);

export { router }
