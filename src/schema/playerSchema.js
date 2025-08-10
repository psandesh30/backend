import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
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

export const Player = mongoose.model("Player", playerSchema);
