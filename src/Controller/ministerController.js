import { Minister } from "../schema/ministerSchema.js";

export const createMinister = async (req, res, next) => {
  try {
    let result = await Minister.create(req.body);
    res.status(200).json({
      success: true,
      message: "create minister successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readMinister = async (req, res, next) => {
  try {
    let result = await Minister.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "read minister successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallMinister = async (req, res, next) => {
  try {
    let result = await Minister.find({});
    res.status(200).json({
      success: true,
      message: "read all minister successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateMinister = async (req, res, next) => {
  try {
    let result = await Minister.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      messsage: "minister upudated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteMinister = async (req, res, next) => {
  try {
    let result = await Minister.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "minister deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
