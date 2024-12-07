// import mongoose from "mongoose";

// // Define the UserApplication schema
// const userApplicationSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Name is required."],
//     trim: true,
//   },
//   phone: {
//     type: String,
//     required: [true, "Phone number is required."],
//   },
//   fatherName: {
//     type: String,
//     required: [true, "Father's name is required."],
//     trim: true,
//   },
//   motherName: {
//     type: String,
//     required: [true, "Mother's name is required."],
//     trim: true,
//   },
//   parentPhone: {
//     type: String,
//     required: [true, "Parent's phone number is required."],
//   },
//   parentAddress: {
//     type: String,
//     required: [true, "Parent's address is required."],
//     trim: true,
//   },
// //   profilePhoto: {
// //     type: String,
// //     required: [true, "Profile photo upload is required."],
// //   },
//   comments: {
//     type: String,
//     trim: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Create the model
// const UserApplication = mongoose.model("UserApplication", userApplicationSchema);

// export default UserApplication;




import mongoose from "mongoose";

// Define the UserApplication schema
const userApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required."],
  },
  fatherName: {
    type: String,
    required: [true, "Father's name is required."],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required."],
    trim: true,
  },
  parentPhone: {
    type: String,
    required: [true, "Parent's phone number is required."],
  },
  parentAddress: {
    type: String,
    required: [true, "Parent's address is required."],
    trim: true,
  },
  // profilePhoto: {
  //   type: String,
  //   required: [true, "Profile photo upload is required."],
  // },
  comments: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["not_sent_to_institute", "waiting_for_institute_reply", "accepted_from_institute","rejecred_from_institute"],
    default: "not_sent_to_institute", // Default value if not provided
    required: [true, "Application status is required."],
  },
  sid: {
    type: String,
    required:true,
  },
  insId: {
    type: String,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const UserApplication = mongoose.model("UserApplication", userApplicationSchema);

export default UserApplication;

