import { Review } from "../schema/reviewSchema.js";

export const createdReview = async (req, res) => {
  try {
    let result = await Review.create(req.body);

    res.status(200).json({
      success: true,
      message: "Review created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readReview = async (req, res) => {
  try {
    let result = await Review.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Read review successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllReview = async (req, res) => {
  try {
    let result = await Review.find({})
      .populate("userId", "email password")
      .populate("productId", "name");
    //.populate("productId", "name");
    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateReview = async (req, res) => {
  try {
    let result = await Review.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deletReview = async (req, res) => {
  try {
    let result = await Review.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted review successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
