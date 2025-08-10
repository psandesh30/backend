import { Router } from "express";
import {
  createDoctor,
  deleteDoctor,
  readallDoctor,
  readDoctor,
  updateDoctor,
} from "../Controller/doctorController.js";

const doctorRouter = Router();

doctorRouter.route("/create").post(createDoctor);

doctorRouter.route("/read/:id").get(readDoctor);

doctorRouter.route("/readall/").get(readallDoctor);

doctorRouter.route("/update/:id").patch(updateDoctor);

doctorRouter.route("/delete/:id").delete(deleteDoctor);

export default doctorRouter;
