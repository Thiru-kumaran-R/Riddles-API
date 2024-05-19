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
router.get("/funny", getFunnyRiddle);
router.post("/funny", postFunnyRiddle);

// /math
router.get("/math", getMathRiddle);

router.get("/logic", getLogicRiddle);

router.get("/who-am-i", getWhoAmI);

router.get("/mystery", getMysteryRiddles);

router.get("/science", getScience);

export default router;
