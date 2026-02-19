import { Router } from "express";
import { getAllUsers, createOne } from "../controllers/user.controller.js";
const router = Router();

router.route("/").get(getAllUsers).post(createOne);

export default router;
