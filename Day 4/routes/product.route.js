import {
  createProduct,
  getProductByID,
  getProducts,
} from "../controllers/product.controller.js";
import { Router } from "express";
import authenticate from "../middlewares/auth/authenticate.middleware.js";
import authorize from "../middlewares/auth/authorize.middleware.js";

const router = Router();

router.post("/", authenticate, authorize("admin"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductByID);
export default router;
