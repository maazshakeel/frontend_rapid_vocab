import express from "express";
import { checkhealth, words } from "../controllers/rapid.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

// healthcheck
router.get("/api/words/healthcheck", checkhealth);

router.get("/api/words/:number", words);

export default router;
