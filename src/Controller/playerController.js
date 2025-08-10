import { pluralize } from "mongoose";
import { Player } from "../schema/playerSchema.js";

export const createPlayer = async (req, res, next) => {
  try {
    let result = await Player.create(req.body);
    res.status(200).json({
      success: true,
      message: "player created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readPlayer = async (req, res, next) => {
  try {
    let result = await Player.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "read player successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallPlayer = async (req, res, next) => {
  try {
    let result = await Player.find({});
    res.status(200).json({
      success: true,
      message: "read all player successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePlayer = async (req, res, next) => {
  try {
    let result = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "player updated successfullyl",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deletePlayer = async (req, res, next) => {
  try {
    let result = await Player.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "player deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
