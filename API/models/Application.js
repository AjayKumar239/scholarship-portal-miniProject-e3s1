import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  applicationId: { type: String, required: true },
  status: { type: String, default: "Pending" },
});

export default mongoose.model("Application", ApplicationSchema);
