import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect("mongodb://0.0.0.0:27017/n9S");
  console.log("connected to  Database Successfully");
};

export default connectDB;
