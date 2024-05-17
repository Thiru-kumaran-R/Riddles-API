import { Router } from "express";
import {
  getRiddle,
  getLogicRiddle,
  getMathRiddle,
  getMysteryRiddles,
  getWhoAmI,
} from "../controller/controller.js";

const router = Router();

router.get("/", getRiddle);

router.get("/math", getMathRiddle);

router.get("/logic", getLogicRiddle);

router.get("/who-am-i", getWhoAmI);

router.get("/mystery", getMysteryRiddles);

export default router;
