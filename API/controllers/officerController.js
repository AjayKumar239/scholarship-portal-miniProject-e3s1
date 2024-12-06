  // import bcryptjs from "bcryptjs";
  // import jwt from "jsonwebtoken";
  // import dotenv from "dotenv";
  // import { StatusCodes } from "http-status-codes";
  // dotenv.config();

  // import Officer from "../models/Officer.js"; // Import Officer model
  // import NotFoundError from "../error/NotFoundError.js";
  // import UnauthError from "../error/UnauthError.js";

  // export const registerOfficer = async (req, res, next) => {
  //   const { email, name, password, phone } = req.body;

  //   try {
  //     // Check for existing officer
  //     const existingOfficer = await Officer.findOne({ email });
  //     if (existingOfficer) {
  //       return res.status(StatusCodes.BAD_REQUEST).json({
  //         status: "error",
  //         message: "Email ID already in use. Try logging in.",
  //       });
  //     }

  //     // Generate unique username
  //     const processedName = name.toLowerCase().replace(/\s+/g, "");
  //     const uniqueSuffix = Math.floor(100 + Math.random() * 900);
  //     const formattedName = `${processedName}${uniqueSuffix}`;

  //     // Hash the password
  //     const hashedPassword = await bcryptjs.hash(password, 10);

  //     // Create a new officer
  //     const officer = await Officer.create({
  //       name,
  //       userName: formattedName,
  //       email,
  //       phone,
  //       password: hashedPassword,
  //     });

  //     officer.password = undefined; // Hide password in response
  //     res.status(StatusCodes.CREATED).json({
  //       message: "User created successfully",
  //       officer,
  //     });
  //   } catch (error) {
  //     next(error); // Pass error to the error handler
  //   }
  // };

  // export const loginOfficer = async (req, res, next) => {
  //   const { email, password } = req.body;

  //   try {
  //     const validUser = await Officer.findOne({ email });
  //     console.log(validUser);
  //     if (!validUser) {
  //       throw new NotFoundError("User not found with this email ID");
  //     }

  //     const validPassword = await bcryptjs.compare( validUser.password,password );
  //     // const validPassword = await bcryptjs.compare(password, validUser.password);
  //     console.log("password: ", validUser.password);
  //     if (!validPassword) {
  //       throw new UnauthError("Invalid credentials", StatusCodes.UNAUTHORIZED);
  //     }

  //     validUser.password = undefined; // Hide password in response

  //     // Generate JWT
  //     const token = jwt.sign({ id: validUser._id }, "secret", {
  //       expiresIn: "30d",
  //     });

  //     res
  //       .cookie("access_token", token, {
  //         httpOnly: true,
  //         expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
  //       })
  //       .status(StatusCodes.ACCEPTED)
  //       .json({
  //         message: "User logged in successfully",
  //         validUser,
  //       });
  //   } catch (error) {
  //     next(error); // Pass error to the error handler
  //   }
  // };




  import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
dotenv.config();

import Officer from "../models/Officer.js"; // Import Officer model
import NotFoundError from "../error/NotFoundError.js";
import UnauthError from "../error/UnauthError.js";

export const registerOfficer = async (req, res, next) => {
  const { email, name, password, phone } = req.body;

  try {
    // Check for existing officer
    const existingOfficer = await Officer.findOne({ email });
    if (existingOfficer) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: "error",
        message: "Email ID already in use. Try logging in.",
      });
    }

    // Generate unique username
    const processedName = name.toLowerCase().replace(/\s+/g, "");
    const uniqueSuffix = Math.floor(100 + Math.random() * 900);
    const formattedName = `${processedName}${uniqueSuffix}`;

    // Create a new officer (no password hashing)
    const officer = await Officer.create({
      name,
      userName: formattedName,
      email,
      phone,
      password, // Storing password as plain text
    });

    officer.password = undefined; // Hide password in response
    res.status(StatusCodes.CREATED).json({
      message: "User created successfully",
      officer,
    });
  } catch (error) {
    next(error); // Pass error to the error handler
  }
};

export const loginOfficer = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const validUser = await Officer.findOne({ email });
    console.log(validUser);

    // If user is not found
    if (!validUser) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "User not found with this email ID",
        status: false,
      });
    }

    // Compare plaintext passwords
    if (validUser.password !== password) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Invalid credentials",
        status: false,
      });
    }

    // Hide password from the response
    validUser.password = undefined;

    // Generate JWT token
    const token = jwt.sign({ id: validUser._id }, "secret", {
      expiresIn: "30d",
    });

    // Return successful login response
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      })
      .status(StatusCodes.OK)
      .json({
        message: "User logged in successfully",
        validUser,
        status: true,
      });
  } catch (error) {
    next(error); // Pass error to the error handler
  }
};


