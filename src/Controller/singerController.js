import { Singer } from "../schema/singerSchema.js";

export const createSinger = async (req, res, next) => {
  try {
    let result = await Singer.create(req.body);
    res.status(200).json({
      success: true,
      message: "Singer created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSinger = async (req, res, next) => {
  try {
    let result = await Singer.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Read singer successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallSinger = async (req, res, next) => {
  try {
    let result = await Singer.find({});
    res.status(200).json({
      success: true,
      message: "read all singer successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateSinger = async (req, res, next) => {
  try {
    let result = await Singer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "update singer successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteSinger = async (req, res, next) => {
  try {
    let result = await Singer.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "delete singer successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
