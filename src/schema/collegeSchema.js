import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Date: {
    type: Number,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
});

export const College = mongoose.model("College", collegeSchema);
