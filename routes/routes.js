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
} from "../controller/controller.js";

const router = Router();
// /funny
router.get("/riddles/funny", getFunnyRiddle);
router.post("/riddles/funny", postFunnyRiddle);

// /math
router.get("/riddles/math", getMathRiddle);

router.get("/riddles/logic", getLogicRiddle);

router.get("/riddles/who-am-i", getWhoAmI);

router.get("/riddles/mystery", getMysteryRiddles);

router.get("/riddles/science", getScience);

export default router;
