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
} from "../controller/controller.js";

const router = Router();
// /funny
router.get("/riddles/funny", getFunnyRiddle);
router.post("/riddles/funny", postFunnyRiddle);

// /math
router.get("/riddles/math", getMathRiddle);
router.post("/riddles/math", postMathRiddle);

router.get("/riddles/logic", getLogicRiddle);
router.post("/riddles/logic", postLogicRiddle);

router.get("/riddles/who-am-i", getWhoAmI);
router.post("/riddles/who-am-i", postWhoAmIRiddle);

router.get("/riddles/mystery", getMysteryRiddles);
router.post("/riddles/mystery", postMysteryRiddle);

router.get("/riddles/science", getScience);
router.post("/riddles/science", getScience);

export default router;
