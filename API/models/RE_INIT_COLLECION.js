import mongoose from "mongoose";

// Define the URI for the MongoDB connection
const uri = "mongodb+srv://admin2:admin123@cluster0.y0uqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Define the schema and model directly in this file
const userApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  parentPhone: { type: String, required: true },
  parentAddress: { type: String, required: true },
  status: { type: String, default: "not_sent_to_institute" },
  comments: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const UserApplication = mongoose.model("UserApplication", userApplicationSchema);

// Function to connect to MongoDB and update documents
const updateStatusForExistingDocs = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    // Update documents where `status` does not exist
    const result = await UserApplication.updateMany(
      { status: { $exists: false } }, // Find documents with no status field
      { $set: { status: "not_sent_to_institute" } } // Set the default status
    );

    console.log(`Migration complete! ${result.modifiedCount} document(s) updated.`);
  } catch (error) {
    console.error("Error during migration:", error);
  } finally {
    // Close the MongoDB connection after the update
    mongoose.connection.close();
  }
};

// Run the migration function
updateStatusForExistingDocs();
