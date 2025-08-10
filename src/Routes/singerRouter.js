import { Router } from "express";
import {
  createSinger,
  deleteSinger,
  readallSinger,
  readSinger,
  updateSinger,
} from "../Controller/singerController.js";

const singerRouter = Router();

singerRouter.route("/create").post(createSinger);

singerRouter.route("/read/:id").get(readSinger);

singerRouter.route("/readall").get(readallSinger);

singerRouter.route("/update/:id").patch(updateSinger);

singerRouter.route("/delete/:id").delete(deleteSinger);

export default singerRouter;
