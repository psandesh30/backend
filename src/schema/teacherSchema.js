import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
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

export const Teacher = mongoose.model("Teacher", teacherSchema);
