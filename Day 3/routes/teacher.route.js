import { Router } from "express";
import * as teacher from "../controllers/teacher.controller.js";
const router = Router();

router.get("/teachers", teacher.getAll);
router.post("/teachers", teacher.addOne);
router.get("/teachers/:id", teacher.getByID);
router.delete("/teachers/:id", teacher.deleteOne);
router.put("/teachers/:id", teacher.updateOne);

export default router;
