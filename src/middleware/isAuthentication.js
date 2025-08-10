import jwt from "jsonwebtoken";
import { secretkey } from "../Utils/constant.js";

let isAuthentication = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    // token varify
    let user = await jwt.verify(token, secretkey);
    console.log(user);
    req._id = user._id;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Token not valid",
    });
  }
};

export default isAuthentication;
