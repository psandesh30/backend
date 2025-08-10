import { User } from "../schema/userSchema.js";

export const createUser = async (req, res, next) => {
  try {
    let result = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "user created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readUser = async (req, res, next) => {
  try {
    let result = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "user read date successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllUser = async (req, res, next) => {
  try {
    let result = await User.find({});
    res.status(200).json({
      success: true,
      message: "all user read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res, next) => {
  try {
    let result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    let result = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
