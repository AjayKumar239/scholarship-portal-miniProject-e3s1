import mongoose from "mongoose";

const Step2Schema = new mongoose.Schema({
  "10thMarksheets": { type: String, required: true },
  "12thMarksheets": { type: String, required: true },
  aadharCard: { type: String },
  incomeCertificate: { type: String },
  domicile: { type: String },
  handicapped: { type: Boolean },
  military: { type: Boolean },
  ncc: { type: Boolean },
  schoolName: { type: String, required: true },
  yearOfPassing: { type: Number, required: true },
  percentage: { type: Number, required: true },
});

const Step2 = mongoose.model("Step2", Step2Schema);

export default Step2;
