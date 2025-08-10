import { College } from "../schema/collegeSchema.js";

export const createCollege = async (req, res, next) => {
  try {
    let result = await College.create(req.body);
    res.status(200).json({
      success: true,
      message: "college created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readCollege = async (req, res, next) => {
  try {
    let result = await College.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "read college successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallCollege = async (req, res, next) => {
  try {
    let result = await College.find({});
    res.status(200).json({
      success: true,
      messaage: "read all college successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.messaage,
    });
  }
};

export const updateCollege = async (req, res, next) => {
  try {
    let result = await College.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "college updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.messaage,
    });
  }
};

export const deleteCollege = async (req, res, next) => {
  try {
    let result = await College.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "college deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.messaage,
    });
  }
};
