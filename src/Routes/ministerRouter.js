import { Router } from "express";
import {
  createMinister,
  deleteMinister,
  readallMinister,
  readMinister,
  updateMinister,
} from "../Controller/ministerController.js";

const ministerRouter = Router();

ministerRouter.route("/create").post(createMinister);

ministerRouter.route("/read/:id").get(readMinister);

ministerRouter.route("/readall").get(readallMinister);

ministerRouter.route("/update/:id").patch(updateMinister);

ministerRouter.route("/delete/:id").delete(deleteMinister);
export default ministerRouter;
