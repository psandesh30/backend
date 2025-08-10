import { Router } from "express";
import {
  createActor,
  deleteActor,
  readActor,
  readallActor,
  updateActor,
} from "../Controller/actorController.js";

const actorRouter = Router();

actorRouter.route("/create").post(createActor);

actorRouter.route("/read/:id").get(readActor);

actorRouter.route("/readall").get(readallActor);

actorRouter.route("/update/:id").patch(updateActor);

actorRouter.route("/delete/:id").delete(deleteActor);

export default actorRouter;
