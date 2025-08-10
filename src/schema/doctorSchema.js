import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
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

export const Doctor = mongoose.model("Doctor", doctorSchema);
