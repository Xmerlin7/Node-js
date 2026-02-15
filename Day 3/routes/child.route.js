import { Router } from "express";
import * as child from "../controllers/child.controller.js";

const router = Router();

router.get("/child", child.getAll);
router.get("/child/:id", child.getByID);
router.post("/child", child.addOne);
router.put("/child/:id", child.updateOne);
router.delete("/child/:id", child.deleteOne);

export default router;
