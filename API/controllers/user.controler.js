// // //user.controler.js
// // import "express-async-errors";
// // import { StatusCodes } from "http-status-codes";
// // import AppError from "../error/AppError.js";
// // import UserApplication from "../models/UserApplication.model.js";

// // export const step1 = async (req, res, next) => {
// //   const newUserApplication = await UserApplication.create(req.body);
// //   res
// //     .status(201)
// //     .json({
// //       message: "Form submitted successfully!",
// //       data: newUserApplication,
// //     });
// // };

// import "express-async-errors";
// import { StatusCodes } from "http-status-codes";
// import AppError from "../error/AppError.js";
// import UserApplication from "../models/UserApplication.model.js";
// import Step2 from "../models/Step2.model.js";

// // Step 1 - Handling user form submission for step 1
// export const step1 = async (req, res, next) => {
//   try {
//     const newUserApplication = await UserApplication.create(req.body);
//     res.status(StatusCodes.CREATED).json({
//       message: "Step 1 form submitted successfully!",
//       data: newUserApplication,
//     });
//   } catch (error) {
//     next(new AppError("Failed to submit Step 1 data", StatusCodes.BAD_REQUEST));
//   }
// };

// // Step 2 - Handling file uploads and data for step 2
// export const step2 = async (req, res, next) => {
//   try {
//     // Log incoming data for debugging
//     console.log("Body data:", req.body);
//     console.log("Uploaded files:", req.files);

//     // Access files and fields from request
//     const {
//       handicapped,
//       military,
//       ncc,
//       schoolName,
//       yearOfPassing,
//       percentage,
//     } = req.body;

//     const tenMarksheets = req.files["10thMarksheets"]?.[0]?.buffer.toString("base64");
//     const twelveMarksheets = req.files["12thMarksheets"]?.[0]?.buffer.toString("base64");
//     const aadharCard = req.files["aadharCard"]?.[0]?.buffer.toString("base64");
//     const incomeCertificate = req.files["incomeCertificate"]?.[0]?.buffer.toString("base64");
//     const domicile = req.files["domicile"]?.[0]?.buffer.toString("base64");

//     // Prepare data object for database
//     const newStep2Data = {
//       "10thMarksheets": tenMarksheets,
//       "12thMarksheets": twelveMarksheets,
//       aadharCard,
//       incomeCertificate,
//       domicile,
//       handicapped: handicapped === "true",
//       military: military === "true",
//       ncc: ncc === "true",
//       schoolName,
//       yearOfPassing: Number(yearOfPassing),
//       percentage: Number(percentage),
//     };

//     // Create and store the step2 data in the database
//     const step2Submission = await Step2.create(newStep2Data);

//     res.status(StatusCodes.CREATED).json({
//       message: "Step 2 form submitted successfully!",
//       data: step2Submission,
//     });
//   } catch (error) {
//     console.error("Error in step2:", error); // Log the error for debugging
//     next(new AppError("Failed to submit Step 2 data", StatusCodes.BAD_REQUEST));
//   }
// };






import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import AppError from "../error/AppError.js";
import UserApplication from "../models/UserApplication.model.js";
import Step2 from "../models/Step2.model.js"; // Ensure this path is correct

// Step 1 - Handling user form submission for step 1
export const step1 = async (req, res, next) => {
  try {
    const newUserApplication = await UserApplication.create(req.body);

    console.log(newUserApplication);
    res.status(StatusCodes.CREATED).json({
      message: "Step 1 form submitted successfully!",
      data: newUserApplication,
    });
  } catch (error) {
    next(new AppError("Failed to submit Step 1 data", StatusCodes.BAD_REQUEST));
  }
};

// Step 2 - Handling file uploads and data for step 2
export const step2 = async (req, res, next) => {
  try {
    const {
      handicapped,
      military,
      ncc,
      schoolName,
      yearOfPassing,
      percentage,
    } = req.body;

    const tenMarksheets = req.files["10thMarksheets"]?.[0]?.path || null;
    const twelveMarksheets = req.files["12thMarksheets"]?.[0]?.path || null;
    const aadharCard = req.files["aadharCard"]?.[0]?.path || null;
    const incomeCertificate = req.files["incomeCertificate"]?.[0]?.path || null;
    const domicile = req.files["domicile"]?.[0]?.path || null;

    const newStep2Data = {
      "10thMarksheets": tenMarksheets,
      "12thMarksheets": twelveMarksheets,
      aadharCard,
      incomeCertificate,
      domicile,
      handicapped,
      military,
      ncc,
      schoolName,
      yearOfPassing,
      percentage,
    };

    const step2Submission = await Step2.create(newStep2Data);

    res.status(StatusCodes.CREATED).json({
      message: "Step 2 form submitted successfully!",
      data: step2Submission,
    });
  } catch (error) {
    next(new AppError("Failed to submit Step 2 data", StatusCodes.BAD_REQUEST));
  }
};
