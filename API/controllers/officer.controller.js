import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import Officer from "../models/officer.model.js";
import Application from "../models/UserApplication.model.js"; // Assuming applications are stored in UserApplication

// Register officer
export const registerOfficer = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if officer already exists
  const existingOfficer = await Officer.findOne({ email });
  if (existingOfficer) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Officer with this email already exists",
    });
  }

  // Create new officer
  const officer = await Officer.create({ name, email, password });
  officer.password = undefined; // Don't send password back in response

  res.status(StatusCodes.CREATED).json({
    message: "Officer registered successfully",
    officer,
  });
};

// Login officer
export const loginOfficer = async (req, res) => {
  const { email, password } = req.body;

  // Find officer by email
  const officer = await Officer.findOne({ email });
  if (!officer) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: "Officer not found with this email",
    });
  }

  // Check if password matches
  const isPasswordValid = await officer.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Invalid credentials",
    });
  }

  // Generate JWT token
  const token = jwt.sign({ officerId: officer._id }, process.env.JWT_SECRET, { expiresIn: "30d" });

  res.status(StatusCodes.OK).json({
    message: "Login successful",
    token,
  });
};

// List all applications (Only for authenticated officers)
export const listApplications = async (req, res) => {
  try {
    // Fetch applications from the database
    const applications = await Application.find(); // Modify this as per your application schema

    res.status(StatusCodes.OK).json({
      applications,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error fetching applications",
    });
  }
};
