import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
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

export const Driver = mongoose.model("Driver", driverSchema);
