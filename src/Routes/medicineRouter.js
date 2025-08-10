import { Router } from "express";
import { createMedicine, readMedicine } from "../Controller/medicine.js";

const medicineRouter = Router();

medicineRouter.route("/create").post(createMedicine);

medicineRouter.route("/read/:id").get(readMedicine);

export default medicineRouter;
