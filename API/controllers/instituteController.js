import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Institute from "../models/Institute.js";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "secret";

// Register Institute
export const registerInstitute = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    // Check if institute exists
    const existingInstitute = await Institute.findOne({ email });
    if (existingInstitute) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Save new institute
    const institute = new Institute({ name, email, password, phone });
    await institute.save();

    res.status(201).json({ message: "Institute registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering institute", error });
  }
};

// Login Institute
export const loginInstitute = async (req, res) => {
    console.log(req.body);
  const { email, password } = req.body;

  try {
    const institute = await Institute.findOne({ email });

    if (!institute || institute.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: institute._id }, SECRET_KEY, { expiresIn: "1h" });

    res
      .cookie("auth_token", token, { httpOnly: true })
      .status(200)
      .json({ message: "Login successful", token,status :true });
  } catch (error) {
    res.status(500).json({ message: "Error during login", error });
  }
};

// Dashboard           
export const getDashboard = async (req, res) => {
  const token = req.cookies.auth_token;

  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, SECRET_KEY);

    const institute = await Institute.findById(decoded.id);

    if (!institute) {

      return res.status(404).json({ message: "Institute not found" });

    }

    res.status(200).json({ message: "Dashboard data", institute });

    
  } catch (error) {


    res.status(500).json({ message: "Error fetching dashboard data", error });


  }
};





