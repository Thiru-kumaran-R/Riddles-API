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
// /funny
router.get("/riddles/funny", getFunnyRiddle);
router.post(
  "/riddles/funny",
  validateRiddle,
  handleValidation,
  postFunnyRiddle
);

// /math
router.get("/riddles/math", getMathRiddle);
router.post("/riddles/math", validateRiddle, handleValidation, postMathRiddle);

router.get("/riddles/logic", getLogicRiddle);
router.post(
  "/riddles/logic",
  validateRiddle,
  handleValidation,
  postLogicRiddle
);

router.get("/riddles/who-am-i", getWhoAmI);
router.post(
  "/riddles/who-am-i",
  validateRiddle,
  handleValidation,
  postWhoAmIRiddle
);

router.get("/riddles/mystery", getMysteryRiddles);
router.post(
  "/riddles/mystery",
  validateRiddle,
  handleValidation,
  postMysteryRiddle
);

router.get("/riddles/science", getScience);
router.post(
  "/riddles/science",
  validateRiddle,
  handleValidation,
  postScienceRiddle
);

export default router;
