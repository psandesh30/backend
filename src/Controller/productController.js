import { Product } from "../schema/productSchema.js";

export const createProduct = async (req, res) => {
  try {
    let result = await Product.create(req.body);

    res.status(200).json({
      success: true,
      message: "Prodect created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readProduct = async (req, res) => {
  try {
    let result = await Product.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Product read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      messsage: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    let result = await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Product upadated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deletProduct = async (req, res) => {
  try {
    let result = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
