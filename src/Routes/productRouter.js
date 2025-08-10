import { Router } from "express";
import {
  deletProduct,
  createProduct,
  readProduct,
  updateProduct,
} from "../Controller/productController.js";

const productRouter = Router();

productRouter.route("/create").post(createProduct);

productRouter.route("/read/:id").get(readProduct);

productRouter.route("/update/:id").patch(updateProduct);

productRouter.route("/delete/:id").delete(deletProduct);

export default productRouter;
