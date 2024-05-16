import { Router } from "express";
import {
  getRiddle,
  getLogicRiddle,
  getMathRiddle,
} from "../controller/controller.js";

const router = Router();

router.get("/", getRiddle);

router.get("/math", getMathRiddle);

router.get("/logic", getLogicRiddle);

export default router;
