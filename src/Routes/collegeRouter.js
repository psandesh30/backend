import { Router } from "express";
import {
  createCollege,
  deleteCollege,
  readallCollege,
  readCollege,
  updateCollege,
} from "../Controller/collegeController.js";

const collegeRouter = Router();

collegeRouter.route("/create").post(createCollege);

collegeRouter.route("/read/:id").get(readCollege);

collegeRouter.route("/readall").get(readallCollege);

collegeRouter.route("/update/:id").patch(updateCollege);

collegeRouter.route("/delete/:id").delete(deleteCollege);

export default collegeRouter;
