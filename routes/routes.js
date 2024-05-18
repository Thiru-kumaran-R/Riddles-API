import { Router } from "express";
import {
  getRiddle,
  getLogicRiddle,
  getMathRiddle,
  getMysteryRiddles,
  getWhoAmI,
  getScience,
} from "../controller/controller.js";

const router = Router();

router.get("/funny", getRiddle);

router.get("/math", getMathRiddle);

router.get("/logic", getLogicRiddle);

router.get("/who-am-i", getWhoAmI);

router.get("/mystery", getMysteryRiddles);

router.get("/science", getScience);

//Lateral Thinking Riddles

export default router;
