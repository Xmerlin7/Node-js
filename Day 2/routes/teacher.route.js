import { Router } from "express";
import * as teacher from "../controllers/teacher.controller.js";
const router = Router();

router.get("/", teacher.getAll).post("/", teacher.addOne);
router
  .get("/:id", teacher.getByID)
  .delete("/:id", teacher.deleteOne)
  .put("/:id", teacher.updateOne);

export default router;
