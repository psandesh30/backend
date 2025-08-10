import express, { json } from "express";
import studentRouter from "./src/Routes/studentRouter.js";
import connectDB from "./src/ConnectDB/connectDB.js";
import userRouter from "./src/Routes/userRouter.js";
import teacherRouter from "./src/Routes/teacherRouter.js";
import webUserRouter from "./src/Routes/webUserRouter.js";
import doctorRouter from "./src/Routes/doctorRouter.js";
import singerRouter from "./src/Routes/singerRouter.js";
import actorRouter from "./src/Routes/actorRouter.js";
import ministerRouter from "./src/Routes/ministerRouter.js";
import driverRouter from "./src/Routes/driverRouter.js";
import playerRouter from "./src/Routes/playerRouter.js";
import collegeRouter from "./src/Routes/collegeRouter.js";
import fileRouter from "./src/Routes/fileRouter.js";
import bodyParser from "body-parser";
import medicineRouter from "./src/Routes/medicineRouter.js";
import productRouter from "./src/Routes/productRouter.js";
import reviewRouter from "./src/Routes/reviewRouter.js";
import cors from "cors";

const app = express();
const port = 3000;

connectDB();

app.use(json());
app.use(cors());

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});

app.use("/student", studentRouter);
app.use("/user", userRouter);
app.use("/teacher", teacherRouter);
app.use("/webuser", webUserRouter);
app.use("/doctor", doctorRouter);
app.use("/singer", singerRouter);
app.use("/actor", actorRouter);
app.use("/minister", ministerRouter);
app.use("/driver", driverRouter);
app.use("/player", playerRouter);
app.use("/college", collegeRouter);

app.use("/medicine", medicineRouter);

app.use("/product", productRouter);

app.use("/review", reviewRouter);

app.use("/file", fileRouter);

//app.use("/medicine", medicineRouter);
