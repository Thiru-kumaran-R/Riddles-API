import { Router } from "express";
import {
  //Get functions
  getFunnyRiddle,
  getLogicRiddle,
  getMathRiddle,
  getMysteryRiddles,
  getWhoAmI,
  getScience,
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

//random
router.get("/", getFunnyRiddle);

// /funny
router.get("/funny", getFunnyRiddle);
router.post("/funny", validateRiddle, handleValidation, postFunnyRiddle);

// /math
router.get("/math", getMathRiddle);
router.post("/math", validateRiddle, handleValidation, postMathRiddle);

router.get("/logic", getLogicRiddle);
router.post("/logic", validateRiddle, handleValidation, postLogicRiddle);

router.get("/who-am-i", getWhoAmI);
router.post("/who-am-i", validateRiddle, handleValidation, postWhoAmIRiddle);

router.get("/mystery", getMysteryRiddles);
router.post("/mystery", validateRiddle, handleValidation, postMysteryRiddle);

router.get("/science", getScience);
router.post("/science", validateRiddle, handleValidation, postScienceRiddle);

export default router;
