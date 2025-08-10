import { Router } from "express";

import {
  createTeacher,
  readallTeacher,
  readTeaacher,
  updateTeacher,
} from "../Controller/teacherController.js";

const teacherRouter = Router();

teacherRouter.route("/create").post(createTeacher);

teacherRouter.route("/readall").get(readallTeacher);

teacherRouter.route("/read/:id").get(readTeaacher);

teacherRouter.route("/update").patch(updateTeacher);

export default teacherRouter;
