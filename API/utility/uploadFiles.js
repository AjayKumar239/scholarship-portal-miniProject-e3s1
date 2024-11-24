// import multer from "multer";
// import path from "path";

// // Set up storage configuration
// const storage = multer.memoryStorage(); // Store files in memory as buffers

// // File filter to restrict file types
// const fileFilter = (req, file, cb) => {
//   const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png"];
//   const ext = path.extname(file.originalname).toLowerCase();

//   if (allowedExtensions.includes(ext)) {
//     cb(null, true); // Accept file
//   } else {
//     cb(new Error("Unsupported file type"), false); // Reject file
//   }
// };


import multer from "multer";
import path from "path";

// Set up storage configuration to store files in memory as buffers
const storage = multer.memoryStorage();

// File filter to restrict file types (only PDF, JPG, JPEG, PNG allowed)
const fileFilter = (req, file, cb) => {
  const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(ext)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error("Unsupported file type"), false); // Reject file
  }
};

// Configure multer with limits and file filter
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
  fileFilter: fileFilter,
});

// Middleware to handle file uploads
export const uploadFiles = upload.fields([
  { name: "10thMarksheets", maxCount: 1 },
  { name: "12thMarksheets", maxCount: 1 },
  { name: "aadharCard", maxCount: 1 },
  { name: "incomeCertificate", maxCount: 1 },
  { name: "domicile", maxCount: 1 },
]);

// Custom middleware to validate the uploaded files
export const validateFiles = (req, res, next) => {
  try {
    // Log uploaded files for debugging
    console.log("Files received in uploadFiles middleware:", req.files);

    // Check if all required files are uploaded
    const requiredFiles = [
      "10thMarksheets",
      "12thMarksheets",
      "aadharCard",
      "incomeCertificate",
      "domicile",
    ];

    requiredFiles.forEach((field) => {
      if (!req.files || !req.files[field]) {
        console.error(`Missing file for field: ${field}`);
        return res.status(400).json({ message: `Missing file for ${field}` });
      }
    });

    next();
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};
