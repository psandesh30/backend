import { Teacher } from "../schema/teacherSchema.js";

export const createTeacher = async (req, res, next) => {
  try {
    let result = await Teacher.create(req.body);
    res.status(200).json({
      success: true,
      messsage: "create teacher successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      messsage: error.messsage,
    });
  }
};

export const readTeaacher = async (req, res, next) => {
  try {
    let result = await Teacher.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "read teacher successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallTeacher = async (req, res, next) => {
  try {
    let result = await Teacher.find({});
    res.status(200).json({
      success: true,
      message: "read all user successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTeacher = async (req, res, next) => {
  try {
    let result = await Teacher.findByIdAndUpdate(req.params.id, res.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "User updated  successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
