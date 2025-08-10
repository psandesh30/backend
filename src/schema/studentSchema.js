import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Age: {
    type: Number,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
});
export const Student = mongoose.model("Student", studentSchema);
