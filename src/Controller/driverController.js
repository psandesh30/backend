import { Driver } from "../schema/driverSchema.js";

export const createDriver = async (req, res, next) => {
  try {
    let result = await Driver.create(req.body);
    res.status(200).json({
      success: true,
      message: "driver created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readDriver = async (req, res, next) => {
  try {
    let result = await Driver.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "read driver successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallDriver = async (req, res, next) => {
  try {
    let result = await Driver.find({});
    res.status(200).json({
      success: true,
      message: "read all driver successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDriver = async (req, res, next) => {
  try {
    let result = await Driver.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Driver updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDriver = async (req, res, next) => {
  try {
    let result = await Driver.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "driver deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
