import mongoose from "mongoose";

const singerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

export const Singer = mongoose.model("Singer", singerSchema);
