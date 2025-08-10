import { Router } from "express";
import {
  createUser,
  deleteUser,
  readAllUser,
  readUser,
  updateUser,
} from "../Controller/userController.js";

const userRouter = Router();

userRouter.route("/create").post(createUser);

userRouter.route("/readall").get(readAllUser);

// dynamic route:dynamic route always place at last.

userRouter.route("/read/:id").get(readUser);

userRouter.route("/update/:id").patch(updateUser);

userRouter.route("/delete/:id").delete(deleteUser);

export default userRouter;
