// imports
import express from "express";
import user from "./user.routes";
import complaints from './complaints.route'

// router
const router = express.Router();

// testing if it is working 
router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use(user);
router.use(complaints)

// exporting
export default router;
