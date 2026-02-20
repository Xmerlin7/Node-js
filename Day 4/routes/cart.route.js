import {
  addToCart,
  getUserCart,
  deleteFromCart,
} from "../controllers/cart.controller.js";
import { Router } from "express";
const router = new Router();
router
  .route("/user/:userId")
  .post(addToCart)
  .delete(deleteFromCart)
  .get(getUserCart);
export default router;
