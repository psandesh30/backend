import mongoose from "mongoose";

const webUserSchema = new mongoose.Schema({
  Fullname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  IsMarried: {
    type: Boolean,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  IsVerifiedEmail: {
    type: Boolean,
    required: true,
  },
});

export const WebUser = mongoose.model("webUser", webUserSchema);
