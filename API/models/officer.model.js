import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const officerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    lowercase: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please provide a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

// Hash the officer's password before saving
officerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare entered password with stored hash
officerSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Officer = mongoose.model("Officer", officerSchema);

export default Officer;
