import { Medicine } from "../schema/medicineSchema.js";

export const createMedicine = async (req, res) => {
  try {
    let result = await Medicine.find(req.body);

    res.status(200).json({
      success: true,
      message: "medicine createdd successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readMedicine = async (req, res) => {
  try {
    let result = await Medicine.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "read medicine successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
