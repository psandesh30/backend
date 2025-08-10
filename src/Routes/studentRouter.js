import { Router } from "express";
import {
  createStudent,
  readallStudent,
  readStudent,
  updateStudent,
} from "../Controller/studentController.js";
import { deleteUser } from "../Controller/userController.js";

const studentRouter = Router();

studentRouter.route("/create").post(createStudent);

// studentRouter.route("/delete/:id").delete(deleteUser);

studentRouter.route("/readall/").get(readallStudent);

studentRouter.route("/read/:id").get(readStudent);
studentRouter.route("/update/:id").patch(updateStudent);

studentRouter.route("/delete/:id").delete(deleteUser);
export default studentRouter;
