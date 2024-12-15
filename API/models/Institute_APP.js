// import mongoose from "mongoose";

// const instituteSchema = new mongoose.Schema({
//   application_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//   },
//   sid: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   fatherName: {
//     type: String,
//     required: true,
//   },
//   motherName: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Institute = mongoose.model("Institute", instituteSchema);

// export default Institute;













import mongoose from "mongoose";

const instituteSchema = new mongoose.Schema({
  AppID:{
    type:String,
    required:true,
  },
  sid: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  insId: {
    type: String,
    required:true,
  },
  status: {
    type: String,
    default: "waiting_for_institute_reply",
  },
});

const Institute_APP = mongoose.model("Institute_APP", instituteSchema);

export default Institute_APP;