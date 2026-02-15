import { Router } from "express";
import * as teacher from "../controllers/teacher.controller.js";
import adminAuth from "../middleware/adminauth.middleware.js";
const router = Router();

router.get("/", adminAuth, teacher.getAll).post("/", adminAuth, teacher.addOne);
router
  .get("/:id", adminAuth, teacher.getByID)
  .delete("/:id", adminAuth, teacher.deleteOne)
  .put("/:id", adminAuth, teacher.updateOne);

export default router;
