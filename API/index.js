  import express from "express";
  import dotenv from "dotenv";
  import cookieParser from "cookie-parser";

  // Database connection
  import createConnection from "./DB/connect.js";

  // Error handler middleware
  import { errorHandler } from "./middleware/errorHandeler.js";

  // Routes imports
  import authRouter from "./routes/auth.route.js";
  import userRouter from "./routes/user.route.js";
  import officerRoutes from "./routes/officerRoutes.js";
  import instituteRoutes from "./routes/instituteRoutes.js";
  import UserApplication from "./models/UserApplication.model.js";

  dotenv.config();

  const app = express();
  const port = process.env.PORT || 3000;

  // Middleware to parse JSON and cookies
  app.use(express.json());
  app.use(cookieParser());

  // Define API routes
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  // app.use("/api/officer", officerRoutes);
  app.use("/api/v1/officer", officerRoutes);
  // app.use("/api/institute", instituteRoutes);

  app.use("/api/v1/institute", instituteRoutes);




//for Officer

// app.get("/api/officer/applications", (req, res) => {
//   try {
//     const applications = [
//       { id: 1, studentName: "John Doe", status: "Pending" },
//       { id: 2, studentName: "Jane Smith", status: "Approved" },
//     ];
//     res.status(200).json(applications); // Send JSON response
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
  
  
  
  // Error handler (should be placed last)
  app.use(errorHandler);

  // Connect to MongoDB and start the server
  createConnection(process.env.MONGO_URI || "mongodb+srv://admin2:admin123@cluster0.y0uqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    })
    .catch((error) => {
      console.error(
        "Failed to start the server due to MongoDB connection error:",
        error
      );
      process.exit(1);
    });


    app.get("/api/officer/applications", async (req, res) => {
      try {
        const applications = await UserApplication.find({}); // Fetch all documents from UserApplication
        res.status(200).json(applications); // Send JSON response with data
      } catch (error) {
        console.error("Error fetching applications:", error);
        res.status(500).json({ message: "Internal server error" }); // Handle errors
      }
    });



    
    app.post("/api/addToInstitute", async (req, res) => {
      try {
        const { id } = req.body; // Extract the application ID from the request body
        console.log(id);
    
        if (!id) {
          return res.status(400).json({ message: "Application ID is required." });
        }
    
        console.log("Received ID from frontend:", id);
    
        // Optionally, find and update the application in the database
        const application = await UserApplication.findByIdAndUpdate(
          id,
          { setToInstitute: true }, // Update the field in the database
          { new: true } // Return the updated document
        );
    
        if (!application) {
          return res.status(404).json({ message: "Application not found." });
        }
    
        res.status(200).json({ message: "Application sent to institute successfully.", application });
      } catch (error) {
        console.error("Error in /api/addToInstitute:", error);
        res.status(500).json({ message: "Internal server error." });
      }
    });
    