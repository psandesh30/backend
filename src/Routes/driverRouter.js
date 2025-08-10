import { Router } from "express";
import {
  createDriver,
  deleteDriver,
  readallDriver,
  readDriver,
  updateDriver,
} from "../Controller/driverController.js";

const driverRouter = Router();

driverRouter.route("/create").post(createDriver);

driverRouter.route("/read/:id").get(readDriver);

driverRouter.route("/readall").get(readallDriver);

driverRouter.route("/update/:id").patch(updateDriver);

driverRouter.route("/delete/:id").delete(deleteDriver);

export default driverRouter;
