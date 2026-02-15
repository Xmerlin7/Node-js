import { Router } from "express";
import * as classController from "../controllers/class.controller.js";

const router = Router();

router.get("/class", classController.getAll);
router.get("/class/:id", classController.getByID);
router.post("/class", classController.addOne);
router.put("/class/:id", classController.updateOne);
router.delete("/class/:id", classController.deleteOne);

router.get("/classchildern/:id", classController.getClassChildren);
router.get("/classTeacher/:id", classController.getClassTeacher);

export default router;
