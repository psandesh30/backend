import { Actor } from "../schema/acorSchema.js";

export const createActor = async (req, res, next) => {
  try {
    let result = await Actor.create(req.body);
    res.status(200).json({
      success: true,
      message: "create actor successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readActor = async (req, res, next) => {
  try {
    let result = await Actor.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "read actor successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallActor = async (req, res, next) => {
  try {
    let result = await Actor.find({});
    res.status(200).json({
      success: true,
      messsage: "read all actor successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateActor = async (req, res, next) => {
  try {
    let result = await Actor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "update actor successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteActor = async (req, res, next) => {
  try {
    let result = await Actor.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "delete actor successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
