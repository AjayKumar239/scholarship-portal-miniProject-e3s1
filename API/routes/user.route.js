// //user.route.js
// import express from "express";
// import { step1 } from "../controllers/user.controler.js";
// import { verifyUserToken } from "../utility/verifyUserToken.js";

// const router = express.Router();
// //define your controler in get(....)
// router.route("/step1").post(step1);

// // router.route("/step2").post(verifyUserToken, uploadFiles, step2);

// export default router;


// import express from "express";
// import { step1, step2 } from "../controllers/user.controler.js"; // Import both step1 and step2
// import { verifyUserToken } from "../utility/verifyUserToken.js"; // Import verifyUserToken middleware
// import { uploadFiles } from "../utility/uploadFiles.js"; // Import uploadFiles middleware

// const router = express.Router();

// // Define your routes
// router.route("/step1").post(step1); // Step 1 route for form submission
// router.route("/step2").post(verifyUserToken, uploadFiles, step2); // Step 2 route for file upload and submission

// export default router;


import express from "express";
import { step1, step2 } from "../controllers/user.controler.js"; // Corrected path and ensured consistency
import { verifyUserToken } from "../utility/verifyUserToken.js";
import { uploadFiles } from "../utility/uploadFiles.js";

const router = express.Router();

router.route("/step1").post(step1); // Route for Step 1

router.route("/step2").post(verifyUserToken, uploadFiles, step2); // Route for Step 2

export default router;
