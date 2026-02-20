import { body, param } from "express-validator";

export const registerValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is requires")
    .isLength({ min: 3 })
    .withMessage("name at least 3 chars ")
    .escape(),
  body("email")
    .isEmail()
    .withMessage("Valid email required")
    .trim()
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 chars"),
];

export const loginValidator = [
  body("email")
    .isEmail()
    .withMessage("Valid email required")
    .trim()
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 chars"),
];
