import { createCategory } from "../controllers/category.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", createCategory);

export default router;
