import { Doctor } from "../schema/doctorSchema.js";

export const createDoctor = async (req, res, next) => {
  try {
    let result = await Doctor.create(req.body);
    res.status(200).json({
      success: true,
      message: "Doctor created Successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readDoctor = async (req, res, next) => {
  try {
    let result = await Doctor.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Read doctor successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallDoctor = async (req, res, next) => {
  try {
    let result = await Doctor.find({});
    res.status(200).json({
      success: true,
      message: "read all doctor successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDoctor = async (req, res, next) => {
  try {
    let result = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDoctor = async (req, res, next) => {
  try {
    let result = await Doctor.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Delete doctor successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
