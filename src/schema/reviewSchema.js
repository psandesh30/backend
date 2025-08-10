import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

export const Review = mongoose.model("Review", reviewSchema);
