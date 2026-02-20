import { Router } from "express";
import { login, register, getUser } from "../controllers/account.controller.js";
import authenticate from "../middlewares/auth/authenticate.middleware.js";
const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.get("/me", authenticate, getUser);
export default router;
