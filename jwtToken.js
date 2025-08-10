import jwt from "jsonwebtoken";
import { secretkey } from "./src/Utils/constant.js";

let infoObj = {
  id: "1234",
};

let expiryInfo = {
  expiresIn: "1h",

  //   exxpiry info must be in same format
};

// generate token
let token = await jwt.sign(infoObj, secretkey, expiryInfo);

console.log(token);

// let token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE3NDQ3MjQ1OTEsImV4cCI6MTc0NDcyODE5MX0.PULMjMCchtEZr0KWY9ShTmITwDJBvCEF37r6z7gI3w8";

// let verifyToken = jwt.verify(token, secretkey);

// to be verify token , a token must be generated from given secret key and it should nnot be exceed expiry info.

// console.log(verifyToken);
