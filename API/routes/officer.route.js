import express from "express";
import { registerOfficer, loginOfficer, listApplications } from "../controllers/officer.controller.js";
import { verifyOfficerToken } from "../middleware/verifyOfficerToken.js";

const router = express.Router();

// Register officer
router.post("/register", registerOfficer);

// Login officer
router.post("/login", loginOfficer);

// List all applications - only accessible by authenticated officers
router.get("/applications", verifyOfficerToken, listApplications);

export default router;
