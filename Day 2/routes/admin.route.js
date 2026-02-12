import { Router } from "express";

const router = Router();

router.post("/", authAdmin);

export  default router;