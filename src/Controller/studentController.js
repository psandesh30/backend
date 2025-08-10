import { Student } from "../schema/studentSchema.js";

export const createStudent = async (req, res, next) => {
  try {
    let result = await Student.create(req.body);
    res.status(200).json({
      success: true,
      message: "students  created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readStudent = async (req, res, next) => {
  try {
    let result = await Student.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "read user successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallStudent = async (req, res, next) => {
  try {
    let result = await Student.find({});
    res.status(200).json({
      success: true,
      message: "User read all successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStudent = async (req, res, next) => {
  try {
    let result = await Student.findByIdAndUpdate(req.params.id, res.body, {
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

export const deleteStudent = async (req, res, next) => {
  try {
    let result = await Student.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
