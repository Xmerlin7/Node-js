import {
  createCategory,
  getProductsByCategory,
} from "../controllers/category.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", createCategory);
router.get("/:id/products", getProductsByCategory);
export default router;
