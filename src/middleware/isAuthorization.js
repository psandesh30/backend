import { WebUser } from "../schema/webUserSchema.js";

const isAuthorization = (roles) => {
  return async (req, res, next) => {
    try {
      let _id = req._id;
      let result = await WebUser.findById(_id);
      let Role = result.role;
      if (roles.includes(Role)) {
        next();
      } else {
        res.status(403).json({
          success: false,
          message: "User authorization fail",
        });
      }
    } catch (error) {
      res.status(403).json({
        success: false,
        message: "User authorization fail",
      });
    }
  };
};

export default isAuthorization;
