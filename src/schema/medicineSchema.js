import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
  },
  usage: {
    type: String,
    require: true,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
});

export const Medicine = mongoose.model("medinice", medicineSchema);
