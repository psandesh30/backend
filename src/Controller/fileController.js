export const handleSingleFile = async (req, res) => {
  try {
    let link = `http://localhost:3000${req.file.filename}`;

    res.status(200).json({
      success: true,
      message: "Single file uploated successfully",
      result: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const handleMultipleFile = async (req, res) => {
  try {
    let link = req.files.map((value, index) => {
      return `http://localhost:3000/${value.filename}`;
    });

    res.status(200).json({
      success: true,
      message: "Multiple files uploaded successfully",
      result: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
