import { Router } from "express";
import upload from "../Utils/sendFile.js";
import {
  handleMultipleFile,
  handleSingleFile,
} from "../Controller/fileController.js";

const fileRouter = Router();

fileRouter.route("/single").post(upload.single("document"), handleSingleFile);

fileRouter
  .route("/multiple")
  .post(upload.array("document"), handleMultipleFile);

export default fileRouter;
