import {
  createCategory,
  getProductsByCategory,
} from "../controllers/category.controller.js";
import { Router } from "express";
import authenticate from "../middlewares/auth/authenticate.middleware.js";
import authorize from "../middlewares/auth/authorize.middleware.js";

const router = Router();

router.post("/", authenticate, authorize("admin"), createCategory);
router.get("/:id/products", getProductsByCategory);
export default router;
