import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import AppError from "../error/AppError.js"; // Custom error class (if you are using this)

export const verifyOfficerToken = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Unauthorized access: No token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.officer = decoded; // Store officer's ID in request object
    next();
  } catch (error) {
    return res.status(StatusCodes.FORBIDDEN).json({
      message: "Forbidden: Invalid token",
    });
  }
};
