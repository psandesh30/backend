import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
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

export const Actor = mongoose.model("Actor", actorSchema);
