import { Router } from "express";
import * as teacher from "../controllers/teacher.controller.js";
const router = Router();

router.get("/", teacher.getAll).post("/", teacher.addOne);
router
  .get("/:d", teacher.getByID)
  .delete("/:d", teacher.deleteOne)
  .put("/:d", teacher.updateOne);

export default router;
