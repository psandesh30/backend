import { Router } from "express";
import {
  deleteWebUser,
  forgotPassword,
  Login,
  myProfile,
  readallWebUser,
  readSpecificWebUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateWebUser,
  verifyEmail,
  webUserController,
} from "../Controller/webUserController.js";
import isAuthentication from "../middleware/isAuthentication.js";
import isAuthorization from "../middleware/isAuthorization.js";

const webUserRouter = Router();

webUserRouter.route("/register").post(webUserController);
webUserRouter.route("/verify-email").post(verifyEmail);

webUserRouter.route("/login").post(Login);

webUserRouter.route("/my-profile").get(isAuthentication, myProfile);

webUserRouter.route("/update-profile").patch(isAuthentication, updateProfile);

webUserRouter.route("/update-password").patch(isAuthentication, updatePassword);

webUserRouter.route("/forgot-password").post(forgotPassword);

webUserRouter.route("/reset-password").patch(isAuthentication, resetPassword);

webUserRouter
  .route("/get-all")
  .get(isAuthentication, isAuthorization(["Admin"]), readallWebUser);

webUserRouter
  .route("/get-single/:id")
  .get(isAuthentication, isAuthorization(["Admin"]), readSpecificWebUser);

webUserRouter
  .route("/delete/:id")
  .delete(isAuthentication, isAuthorization(["Admin"]), deleteWebUser);

webUserRouter
  .route("/update/:id")
  .patch(isAuthentication, isAuthorization(["Admin"]), updateWebUser);

export default webUserRouter;
