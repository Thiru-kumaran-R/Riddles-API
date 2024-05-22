import { body, check, validationResult } from "express-validator";

export const validateRiddle = [
  body("riddle").notEmpty().trim().withMessage("Riddle field cannot be empty"),
  body("answer").notEmpty("Answer field cannot be empty"),
];

export const handleValidation = () => {
  const errors = validationResult(req);
  let error;
  if (!errors.isEmpty()) {
    error = new Error(errors.array()[0].msg);
    error.status = 422;
    error.field = errors.array()[0].path;
    throw error;
  }
  next(error);
};
