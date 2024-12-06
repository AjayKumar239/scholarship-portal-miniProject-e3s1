import express from "express";
import { registerOfficer, loginOfficer } from "../controllers/officerController.js";

const router = express.Router();

router.post("/register", registerOfficer);

router.post("/login", loginOfficer);

export default router;
