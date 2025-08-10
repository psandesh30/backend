import mongoose from "mongoose";

const webUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  isMarried: {
    type: Boolean,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  isVerifiedEmail: {
    type: Boolean,
    required: true,
  },
});

export const WebUser = mongoose.model("webUser", webUserSchema);
