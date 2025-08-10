import { Router } from "express";
import {
  deletReview,
  createdReview,
  readReview,
  updateReview,
  readAllReview,
} from "../Controller/reviewController.js";

const reviewRouter = Router();

reviewRouter.route("/create").post(createdReview);

reviewRouter.route("/read/:id").get(readReview);

reviewRouter.route("/readall").get(readAllReview);

reviewRouter.route("/update/:id").patch(updateReview);

reviewRouter.route("/delete/:id").delete(deletReview);

export default reviewRouter;
