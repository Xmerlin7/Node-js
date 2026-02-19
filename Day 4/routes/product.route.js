import {
  createProduct,
  getProductByID,
  getProducts,
} from "../controllers/product.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductByID);
export default router;
