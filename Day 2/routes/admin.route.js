import { Router } from "express";
import * as admin from "../controllers/admin.controller.js";
const router = Router();

router.post("/", admin.getAdmin);

export default router;
