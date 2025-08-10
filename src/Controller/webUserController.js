import { WebUser } from "../schema/webUserSchema.js";
import jwt from "jsonwebtoken";
import { secretkey } from "../Utils/constant.js";
import { sendEmail } from "../Utils/sendMail.js";
import bcrypt from "bcryptjs";

export const webUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let password = data.password;

    // hashed password
    let hashedPassword = await bcrypt.hash(password, 10);

    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashedPassword,
      role: "user",
    };
    // create user
    let result = await WebUser.create(data);
    // genrate token
    let infoObj = {
      _id: result._id,
    };

    let expiryInfo = {
      expiresIn: "1hr",
    };

    let token = await jwt.sign(infoObj, secretkey, expiryInfo);

    // send mail
    await sendEmail({
      to: data.email,
      subject: "Account Registration",
      html: `<h1> Your account has been reegistered successfully on our demo web app</h1>
      <br>
      <a href="http://localhost:5173/verify-email?token=${token}">http://localhost:5173/verify-email?token=${token}</a>

      `,
    });
    res.status(201).json({
      success: true,
      message: "webuser created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;

    let tokenArray = tokenString.split(" ");

    let token = tokenArray[1];

    let infoObj = await jwt.verify(token, secretkey);
    let userId = infoObj._id;
    let result = await WebUser.findByIdAndUpdate(
      userId,
      {
        isVerifiedEmail: true,
      },
      { new: true }
    );
    res.status(200).json({
      succcess: true,
      message: "email varified successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const Login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let user = await WebUser.findOne({ email: email });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    if (!user.isVerifiedEmail) {
      throw new Error("Email is not valid");
    }

    let isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid Credentials");
    }

    let infoObj = {
      _id: user._id,
    };

    let expiryInfo = {
      expiresIn: "30d",
    };
    let token = await jwt.sign(infoObj, secretkey, expiryInfo);

    res.status(200).json({
      success: true,
      message: "webuser login successfully",
      result: user,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res, next) => {
  try {
    let _id = req._id;
    let result = await WebUser.findById(_id);
    res.status(200).json({
      success: true,
      message: "Profile read successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    let _id = req._id;
    let data = req.body;
    delete data.email;
    delete data.password;
    let result = await WebUser.findByIdAndUpdate(_id, data, { new: true });
    res.status(200).json({
      success: true,
      message: "Profile updated successfully ",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    let _id = req._id;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    let data = await WebUser.findById(_id);

    let hashedPassword = data.password;

    let isValidPassword = await bcrypt.compare(oldPassword, hashedPassword);

    if (isValidPassword) {
      let newHashedPassword = await bcrypt.hash(newPassword, 10);
      let result = await WebUser.findByIdAndUpdate(
        _id,
        { password: newHashedPassword },
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "Password updated successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    let email = req.body.email;

    let user = await WebUser.findOne({ email: email });

    if (user) {
      let infoObj = {
        _id: user._id,
      };

      let expiryInfo = {
        expiresIn: "10m",
      };

      let token = await jwt.sign(infoObj, secretkey, expiryInfo);

      sendEmail({
        to: user.email,
        subject: "Reset Password",
        html: `<h1> Please click this link to reset your password.</h1>
        <a href="http://localhost:3000/webuser/reset-password?token=${token}">http://localhost:3000/webuser/reset-password?token=${token}</a>`,
        // query parameter to send the value
        //req.params is used to get route parameters
      });
      res.status(200).json({
        success: true,
        message: "Password reset link has been sent your email.",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let result = await WebUser.findByIdAndUpdate(
      req._id,
      { password: hashedPassword },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Password reset successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readallWebUser = async (req, res, next) => {
  try {
    let result = await WebUser.find({});
    res.status(200).json({
      success: true,
      message: "All webuser retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificWebUser = async (req, res, next) => {
  try {
    let result = await WebUser.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "single  web user retrieve successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteWebUser = async (req, res, next) => {
  try {
    let result = await WebUser.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Web user deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateWebUser = async (req, res, next) => {
  try {
    let result = await WebUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Web user updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
