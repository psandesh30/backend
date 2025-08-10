import nodemailer from "nodemailer";

let transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  
  auth: {
    // note: user and pass must be genuine
    user: "pakhrinsandesh121@gmail.com",
    pass: "tdth azgz rwyo jbzi",
    //  use 2 step verification and generate app password
  },
};
// the main thing in this file is transpoerterInfo and mailInfo
export const sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);

    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("mail error has occured", error.message);
  }
};
