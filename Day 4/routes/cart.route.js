import { Router } from "express";
import authenticate from "../middlewares/auth/authenticate.middleware.js";
import {
  addToCart,
  getUserCart,
  deleteFromCart,
} from "../controllers/cart.controller.js";
const router = new Router();
router
  .route("/user/:userId")
  .all(authenticate)
  .post(addToCart)
  .delete(deleteFromCart)
  .get(getUserCart);
export default router;
