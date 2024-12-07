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
  // import Institute_APP from "./models/Institute_APP.js";
  import Institute_APP from "./models/Institute_APP.js";

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


    //show appplicaions for the officer
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
    
        if (!id) {
          return res.status(400).json({ message: "Application ID is required." });
        }
    
        console.log("Received ID from frontend:", id);
    
        // Find and update the application in the database
        const application = await UserApplication.findByIdAndUpdate(
          id,
          { status: "waiting_for_institute_reply" }, // Update the status field
          { new: true } // Return the updated document
        );
    
        if (!application) {
          return res.status(404).json({ message: "Application not found." });
        }
    
        // Log the updated application object
        console.log("Updated Application:", application);
    
        // Extract required fields for Institute collection
        const { phone, fatherName, motherName } = application;
        let sid = application.sid;
        let AppID = (application._id).toString();
        let insId = application.insId;
        // console.log(sid);


        console.log("siddddddddddddddddddd: ",insId);
        console.log("siddddddddddddddddddd: ",AppID);
        console.log("siddddddddddddddddddd: ",sid);
        console.log("siddddddddddddddddddd: ",phone);
        console.log("siddddddddddddddddddd: ",fatherName);
        console.log("siddddddddddddddddddd: ",motherName);
    
        if (!insId|| !AppID || !sid || !phone || !fatherName || !motherName) {
          return res.status(400).json({
            message: "Missing required fields in application for Institute record.",
          });
        }
    
        // Insert into Institute collection
        const instituteRecord = new Institute_APP({
          insId,
          AppID,
          sid,
          phone,
          fatherName,
          motherName,
        });
    
        await instituteRecord.save();
    
        console.log("Inserted into Institute collection:", instituteRecord);
    
        res.status(200).json({ 
          message: "Application sent to institute successfully and recorded.", 
          application,
          instituteRecord,
        });
      } catch (error) {
        console.error("Error in /api/addToInstitute:", error);
        res.status(500).json({ message: "Internal server error." });
      }
    });


// app.get('/api/institute/applications', async (req,res)=>{
//   try {
//     const applications = await Institute_APP.find({}); // Fetch all documents from UserApplication
//     res.status(200).json(applications); // Send JSON response with data
//   } catch (error) {
//     console.error("Error fetching applications:", error);
//     res.status(500).json({ message: "Internal server error" }); // Handle errors
//   }
// });

app.get('/api/institute/applications', async (req, res) => {
  try {
    const status = req.query.status; // Optional filter for status
    const filter = status ? { status } : {}; // Build filter condition

    const applications = await Institute_APP.find(filter); // Fetch filtered applications
    if (!applications.length) {
      return res.status(404).json({ message: "No applications found." });
    }

    res.status(200).json(applications); // Send applications data
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: "Internal server error" }); // Error response
  }
});

    