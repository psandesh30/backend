import { Router } from "express";
import {
  createPlayer,
  deletePlayer,
  readallPlayer,
  readPlayer,
  updatePlayer,
} from "../Controller/playerController.js";

const playerRouter = Router();

playerRouter.route("/create").post(createPlayer);

playerRouter.route("/read/:id").get(readPlayer);

playerRouter.route("/readall").get(readallPlayer);

playerRouter.route("/update/:id").patch(updatePlayer);

playerRouter.route("/delete/:id").delete(deletePlayer);

export default playerRouter;
